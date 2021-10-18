/* eslint-disable no-unused-vars */
"use strict";



const validateSchema = require("./validators/schema");
const validateSpec = require("./validators/spec");
const normalizeArgs = require("@apidevtools/json-schema-ref-parser/lib/normalize-args");
const util = require("./util");
const Options = require("./options");
const maybe = require("call-me-maybe");
const { ono } = require("@jsdevtools/ono");
const $RefParser = require("@apidevtools/json-schema-ref-parser");
const dereference = require("@apidevtools/json-schema-ref-parser/lib/dereference");
const { isArray} = require("lodash")


module.exports = MsapiParser;

/**
 * This class parses a Swagger 2.0 or 3.0 API, resolves its JSON references and their resolved values,
 * and provides methods for traversing, dereferencing, and validating the API.
 *
 * @class
 * @augments $RefParser
 */
function MsapiParser () {
  $RefParser.apply(this, arguments);
}


const build = async (api, options) => {
  options = normalizeOptions(options)
  let result = await MsapiParser.bundle("./MSAPI_example/ms_example_workflow.yaml")
  for(let i=0; i<options.afterBundle.length; i++){
    result = await options.afterBundle[i](result)
  }
  result = await MsapiParser.dereference(result)
  for(let i=0; i<options.afterResolve.length; i++){
    result = await options.afterResolve[i](result)
  }
  return result
}


util.inherits(MsapiParser, $RefParser);
MsapiParser.parse = $RefParser.parse;
MsapiParser.resolve = $RefParser.resolve;
MsapiParser.bundle = $RefParser.bundle;
MsapiParser.dereference = $RefParser.dereference;
MsapiParser.util = util;
MsapiParser.build = build;


/**
 * Alias {@link $RefParser#schema} as {@link MsapiParser#api}
 */
Object.defineProperty(MsapiParser.prototype, "api", {
  configurable: true,
  enumerable: true,
  get () {
    return this.schema;
  }
});

/**
 * Parses the given Swagger API.
 * This method does not resolve any JSON references.
 * It just reads a single file in JSON or YAML format, and parse it as a JavaScript object.
 *
 * @param {string} [path] - The file path or URL of the JSON schema
 * @param {object} [api] - The Swagger API object. This object will be used instead of reading from `path`.
 * @param {ParserOptions} [options] - Options that determine how the API is parsed
 * @param {Function} [callback] - An error-first callback. The second parameter is the parsed API object.
 * @returns {Promise} - The returned promise resolves with the parsed API object.
 */
MsapiParser.prototype.parse = async function (path, api, options, callback) {
  let args = normalizeArgs(arguments);
  args.options = new Options(args.options);
  // console.log("args", args)
  try {
    let schema = await $RefParser.prototype.parse.call(this, args.path, args.schema, args.options);
    // console.log("schema", JSON.stringify(schema, null," "))
    if (schema.swagger) {
      // Verify that the parsed object is a Swagger API
      if (schema.swagger === undefined || schema.info === undefined || schema.paths === undefined) {
        throw ono.syntax(`${args.path || args.schema} is not a valid Swagger API definition`);
      }
      else if (typeof schema.swagger === "number") {
        // This is a very common mistake, so give a helpful error message
        throw ono.syntax('Swagger version number must be a string (e.g. "2.0") not a number.');
      }
      else if (typeof schema.info.version === "number") {
        // This is a very common mistake, so give a helpful error message
        throw ono.syntax('API version number must be a string (e.g. "1.0.0") not a number.');
      }
      else if (schema.swagger !== "2.0") {
        throw ono.syntax(`Unrecognized Swagger version: ${schema.swagger}. Expected 2.0`);
      }
    }
    else {
      let supportedVersions = ["1.0.0", "1.0.1"];

      // Verify that the parsed object is a Openapi API
      if (schema.msapi === undefined || schema.metadata === undefined) {
        throw ono.syntax(`${args.path || args.schema} is not a valid MSAPI definition`);
      }
      else if (typeof schema.msapi === "number") {
        // This is a very common mistake, so give a helpful error message
        throw ono.syntax('API version number must be a string (e.g. "1.0.0") not a number.');
      }
      // else if (typeof schema.info.version === "number") {
      //   // This is a very common mistake, so give a helpful error message
      //   throw ono.syntax('API version number must be a string (e.g. "1.0.0") not a number.');
      // }
      else if (supportedVersions.indexOf(schema.msapi) === -1) {
        throw ono.syntax(
          `Unsupported MSAPI version: ${schema.msapi}. ` +
          `MSAOI Parser only supports versions ${supportedVersions.join(", ")}`
        );
      }

      // This is an OpenAPI v3 schema, check if the "servers" have any relative paths and
      // fix them if the content was pulled from a web resource
      util.fixOasRelativeServers(schema, args.path);
    }

    // Looks good!
    return maybe(args.callback, Promise.resolve(schema));
  }
  catch (err) {
    return maybe(args.callback, Promise.reject(err));
  }
};

/**
 * Parses, dereferences, and validates the given Swagger API.
 * Depending on the options, validation can include JSON Schema validation and/or Swagger Spec validation.
 *
 * @param {string} [path] - The file path or URL of the JSON schema
 * @param {object} [api] - The Swagger API object. This object will be used instead of reading from `path`.
 * @param {ParserOptions} [options] - Options that determine how the API is parsed, dereferenced, and validated
 * @param {Function} [callback] - An error-first callback. The second parameter is the parsed API object.
 * @returns {Promise} - The returned promise resolves with the parsed API object.
 */
MsapiParser.validate = function (path, api, options, callback) {
  let Class = this; // eslint-disable-line consistent-this
  let instance = new Class();
  return instance.validate.apply(instance, arguments);
};

/**
 * Parses, dereferences, and validates the given Swagger API.
 * Depending on the options, validation can include JSON Schema validation and/or Swagger Spec validation.
 *
 * @param {string} [path] - The file path or URL of the JSON schema
 * @param {object} [api] - The Swagger API object. This object will be used instead of reading from `path`.
 * @param {ParserOptions} [options] - Options that determine how the API is parsed, dereferenced, and validated
 * @param {Function} [callback] - An error-first callback. The second parameter is the parsed API object.
 * @returns {Promise} - The returned promise resolves with the parsed API object.
 */
MsapiParser.prototype.validate = async function (path, api, options, callback) {
  let me = this;
  let args = normalizeArgs(arguments);
  args.options = new Options(args.options);

  // ZSchema doesn't support circular objects, so don't dereference circular $refs yet
  // (see https://github.com/zaggino/z-schema/issues/137)
  let circular$RefOption = args.options.dereference.circular;
  args.options.validate.schema && (args.options.dereference.circular = "ignore");

  try {
    await this.dereference(args.path, args.schema, args.options);

    // Restore the original options, now that we're done dereferencing
    args.options.dereference.circular = circular$RefOption;

    // console.log("args.options.validate.schema",args.options.validate.schema)
    if (args.options.validate.schema) {
      // Validate the API against the Swagger schema
      // NOTE: This is safe to do, because we haven't dereferenced circular $refs yet
      // console.log("me.api", JSON.stringify(me.api, null, " "))
      validateSchema(me.api);

      if (me.$refs.circular) {
        if (circular$RefOption === true) {
          // The API has circular references,
          // so we need to do a second-pass to fully-dereference it
          dereference(me, args.options);
        }
        else if (circular$RefOption === false) {
          // The API has circular references, and they're not allowed, so throw an error
          throw ono.reference("The API contains circular references");
        }
      }
    }

    if (args.options.validate.spec) {
      // Validate the API against the Swagger spec
      validateSpec(me.api);
    }

    return maybe(args.callback, Promise.resolve(me.schema));
  }
  catch (err) {
    return maybe(args.callback, Promise.reject(err));
  }
};

const normalizeOptions = options => {
  options.afterBundle = options.afterBundle || []
  options.afterBundle = (isArray(options.afterBundle)) ? options.afterBundle : [options.afterBundle]
  options.afterResolve = options.afterResolve || []
  options.afterResolve = (isArray(options.afterResolve)) ? options.afterResolve : [options.afterResolve]
  return options
}

MsapiParser.prototype.build = build 



/**
 * The Swagger object
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#swagger-object
 *
 * @typedef {{swagger: string, info: {}, paths: {}}} SwaggerObject
 */
