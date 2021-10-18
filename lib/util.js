"use strict";

const util = require("util");
const url = require("@apidevtools/json-schema-ref-parser/lib/util/url");
const { assign, merge, keys, isFunction, isString, isArray, isDate, isNumber, isBoolean, set } = require("lodash")
const ast = require("./ast")

exports.format = util.format;
exports.inherits = util.inherits;

/**
 * Regular Expression that matches Swagger path params.
 */
exports.swaggerParamRegExp = /\{([^/}]+)}/g;

/**
 * List of HTTP verbs used for OperationItem as per the Swagger specification
 */
const operationsList = ["get", "post", "put", "delete", "patch", "options", "head", "trace"];

/**
 * This function takes in a Server object, checks if it has relative path
 * and then fixes it as per the path url
 *
 * @param {object} server - The server object to be fixed
 * @param {string} path - The path (an http/https url) from where the file was downloaded
 * @returns {object} - The fixed server object
 */
function fixServers (server, path) {
  // Server url starting with "/" tells that it is not an http(s) url
  if (server.url && server.url.startsWith("/")) {
    const inUrl = url.parse(path);
    const finalUrl = inUrl.protocol + "//" + inUrl.hostname + server.url;
    server.url = finalUrl;
    return server;
  }
}

/**
 * This function helps fix the relative servers in the API definition file
 * be at root, path or operation's level
 */
function fixOasRelativeServers (schema, filePath) {
  if (schema.openapi && (filePath && (filePath.startsWith("http:") || filePath.startsWith("https:")))) {
    /**
     * From OpenAPI v3 spec for Server object's url property: "REQUIRED. A URL to the target host.
     * This URL supports Server Variables and MAY be relative, to indicate that the host location is relative to the location where
     * the OpenAPI document is being served."
     * Further, the spec says that "servers" property can show up at root level, in 'Path Item' object or in 'Operation' object.
     * However, interpretation of the spec says that relative paths for servers should take into account the hostname that
     * serves the OpenAPI file.
     */
    if (schema.servers) {
      schema.servers.map(server => fixServers(server, filePath)); // Root level servers array's fixup
    }

    // Path or Operation level servers array's fixup
    Object.keys(schema.paths).forEach(path => {
      const pathItem = schema.paths[path];
      Object.keys(pathItem).forEach(opItem => {
        if (opItem === "servers") {
          // servers at pathitem level
          pathItem[opItem].map(server => fixServers(server, filePath));
        }
        else if (operationsList.includes(opItem)) {
          // servers at operation level
          if (pathItem[opItem].servers) {
            pathItem[opItem].servers.map(server => fixServers(server, filePath));
          }
        }
      });
    });
  }
  else {
    // Do nothing and return
  }
}

exports.fixOasRelativeServers = fixOasRelativeServers;


const deepExtend = (target, source) => {
  if (!(source instanceof Object)) {
    return source;
  }

  switch (source.constructor) {
    case Date:
      // Treat Dates like scalars; if the target date object had any child
      // properties - they will be lost!
      // let dateValue = (source as any) as Date;
      return new Date(source.getTime());

    case Object:
      if (target === undefined) {
        target = {};
      }
      break;

    case Array:
      // Always copy the array source and overwrite the target.
      target = [];
      break;

    default:
      // Not a plain Object - treat it as a scalar.
      return source;
  }

  for (let prop in source) {
    if (!Object.prototype.hasOwnProperty.call(source, prop)) continue;
    target[prop] = deepExtend(target[prop], source[prop]);
  }

  return target;
};


const deepFilter = ( object, predicate, path) => {
  let result =  []

  path = path || []

  if ( predicate(object) ) result.push({
    path: path.map( d => d),
    instance: object
  })

  if( isString(object) || isBoolean(object) || isNumber(object) || isDate(object)) return result  

  if( isArray(object) ) {
    object.forEach( (f, index) => {
      path.push(index)
      if(!isFunction(f))  result = result.concat(deepFilter(f, predicate, path))
      path.pop()  
    })
  } else {

    keys(object).forEach( k => {
    path.push(k)
    if(!isFunction(object[k]))  result = result.concat(deepFilter(object[k], predicate, path))
    path.pop()  
  
  })
} 
  
  
  return result 
} 

exports.deepFilter = deepFilter
exports.deepExtend = deepExtend
exports.getLineNumberForPath = ast.getLineNumberForPath

