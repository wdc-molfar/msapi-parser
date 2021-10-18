"use strict";
const Yaml = require("js-yaml")
const OAS30 = require("fs").readFileSync(require.resolve("./schemas/v3.0/schema.yaml"))
const MSAPI10 = require("fs").readFileSync(require.resolve("./schemas/msapi.v.1.0/schema.yaml"))

Object.defineProperty(exports, "__esModule", { value: true });

exports.openapi = exports.openapiV3 = exports.openapiV2 = exports.openapiV1 = void 0;
/**
 * JSON Schema for OpenAPI Specification v1.2
 */
exports.openapiV1 = require("./schemas/v1.2/apiDeclaration.json");
/**
 * JSON Schema for OpenAPI Specification v2.0
 */
exports.openapiV2 = require("./schemas/v2.0/schema.json");
/**
 * JSON Schema for OpenAPI Specification v3.0
 */
exports.openapiV3 = Yaml.load(OAS30);
exports.msapiV1 = Yaml.load(MSAPI10);

/**
 * JSON Schemas for every version of the OpenAPI Specification
 */
exports.openapi = {
    v1: exports.openapiV1,
    v2: exports.openapiV2,
    v3: exports.openapiV3,
    m1: exports.msapiV1
};

exports.msapi = {
    v1: exports.msapiV1
};

// Export `openapi` as the default export
exports.default = exports.msapi;
// CommonJS default export hack
/* eslint-env commonjs */
if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = Object.assign(module.exports.default, module.exports);
}
