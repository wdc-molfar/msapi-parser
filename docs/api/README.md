# MOLFAR msapi-parser API specification

## Classes

<dl>
<dt><a href="#MsapiParser">MsapiParser</a> ⇐ <code>$RefParser</code></dt>
<dd></dd>
<dt><a href="#ParserOptions">ParserOptions</a> ⇐ <code>$RefParserOptions</code></dt>
<dd></dd>
</dl>

## Members

<dl>
<dt><a href="#openapiV1">openapiV1</a></dt>
<dd><p>JSON Schema for OpenAPI Specification v1.2</p>
</dd>
<dt><a href="#openapiV2">openapiV2</a></dt>
<dd><p>JSON Schema for OpenAPI Specification v2.0</p>
</dd>
<dt><a href="#openapiV3">openapiV3</a></dt>
<dd><p>JSON Schema for OpenAPI Specification v3.0</p>
</dd>
<dt><a href="#openapi">openapi</a></dt>
<dd><p>JSON Schemas for every version of the OpenAPI Specification</p>
</dd>
<dt><a href="#swaggerParamRegExp">swaggerParamRegExp</a></dt>
<dd><p>Regular Expression that matches Swagger path params.</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#operationsList">operationsList</a></dt>
<dd><p>List of HTTP verbs used for OperationItem as per the Swagger specification</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#positionRangeForPath">positionRangeForPath(yaml, path)</a></dt>
<dd><p>Get a position object with given</p>
</dd>
<dt><a href="#pathForPosition">pathForPosition(yaml, position)</a></dt>
<dd><p>Get a JSON Path for position object in the spec</p>
</dd>
<dt><a href="#fixServers">fixServers(server, path)</a> ⇒ <code>object</code></dt>
<dd><p>This function takes in a Server object, checks if it has relative path
and then fixes it as per the path url</p>
</dd>
<dt><a href="#fixOasRelativeServers">fixOasRelativeServers()</a></dt>
<dd><p>This function helps fix the relative servers in the API definition file
be at root, path or operation&#39;s level</p>
</dd>
<dt><a href="#validateSchema">validateSchema(api)</a></dt>
<dd><p>Validates the given Swagger API against the Swagger 2.0 or 3.0 schema.</p>
</dd>
<dt><a href="#initializeZSchema">initializeZSchema()</a></dt>
<dd><p>Performs one-time initialization logic to prepare for Swagger Schema validation.</p>
</dd>
<dt><a href="#formatZSchemaError">formatZSchemaError(errors, [indent])</a> ⇒ <code>string</code></dt>
<dd><p>Z-Schema validation errors are a nested tree structure.
This function crawls that tree and builds an error message string.</p>
</dd>
<dt><a href="#validateSpec">validateSpec(api)</a></dt>
<dd><p>Validates parts of the Swagger 2.0 spec that aren&#39;t covered by the Swagger 2.0 JSON Schema.</p>
</dd>
<dt><a href="#validatePath">validatePath(api, path, pathId, operationIds)</a></dt>
<dd><p>Validates the given path.</p>
</dd>
<dt><a href="#validateParameters">validateParameters(api, path, pathId, operation, operationId)</a></dt>
<dd><p>Validates the parameters for the given operation.</p>
</dd>
<dt><a href="#validateBodyParameters">validateBodyParameters(params, operationId)</a></dt>
<dd><p>Validates body and formData parameters for the given operation.</p>
</dd>
<dt><a href="#validatePathParameters">validatePathParameters(params, pathId, operationId)</a></dt>
<dd><p>Validates path parameters for the given path.</p>
</dd>
<dt><a href="#validateParameterTypes">validateParameterTypes(params, api, operation, operationId)</a></dt>
<dd><p>Validates data types of parameters for the given operation.</p>
</dd>
<dt><a href="#checkForDuplicates">checkForDuplicates(params)</a></dt>
<dd><p>Checks the given parameter list for duplicates, and throws an error if found.</p>
</dd>
<dt><a href="#validateResponse">validateResponse(code, response, responseId)</a></dt>
<dd><p>Validates the given response object.</p>
</dd>
<dt><a href="#validateSchema">validateSchema(schema, schemaId, validTypes)</a></dt>
<dd><p>Validates the given Swagger schema object.</p>
</dd>
<dt><a href="#validateRequiredPropertiesExist">validateRequiredPropertiesExist(schema, schemaId)</a></dt>
<dd><p>Validates that the declared properties of the given Swagger schema object actually exist.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#SwaggerObject">SwaggerObject</a> : <code>Object</code></dt>
<dd><p>The Swagger object
<a href="https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#swagger-object">https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#swagger-object</a></p>
</dd>
</dl>

<a name="MsapiParser"></a>

## MsapiParser ⇐ <code>$RefParser</code>
**Kind**: global class  
**Extends**: <code>$RefParser</code>  

* [MsapiParser](#MsapiParser) ⇐ <code>$RefParser</code>
    * [new MsapiParser()](#new_MsapiParser_new)
    * _instance_
        * [.parse([path], [api], [options], [callback])](#MsapiParser+parse) ⇒ <code>Promise</code>
        * [.validate([path], [api], [options], [callback])](#MsapiParser+validate) ⇒ <code>Promise</code>
    * _static_
        * [.validate([path], [api], [options], [callback])](#MsapiParser.validate) ⇒ <code>Promise</code>

<a name="new_MsapiParser_new"></a>

### new MsapiParser()
This class parses a Swagger 2.0 or 3.0 API, resolves its JSON references and their resolved values,
and provides methods for traversing, dereferencing, and validating the API.

<a name="MsapiParser+parse"></a>

### msapiParser.parse([path], [api], [options], [callback]) ⇒ <code>Promise</code>
Parses the given Swagger API.
This method does not resolve any JSON references.
It just reads a single file in JSON or YAML format, and parse it as a JavaScript object.

**Kind**: instance method of [<code>MsapiParser</code>](#MsapiParser)  
**Returns**: <code>Promise</code> - - The returned promise resolves with the parsed API object.  

| Param | Type | Description |
| --- | --- | --- |
| [path] | <code>string</code> | The file path or URL of the JSON schema |
| [api] | <code>object</code> | The Swagger API object. This object will be used instead of reading from `path`. |
| [options] | [<code>ParserOptions</code>](#ParserOptions) | Options that determine how the API is parsed |
| [callback] | <code>function</code> | An error-first callback. The second parameter is the parsed API object. |

<a name="MsapiParser+validate"></a>

### msapiParser.validate([path], [api], [options], [callback]) ⇒ <code>Promise</code>
Parses, dereferences, and validates the given Swagger API.
Depending on the options, validation can include JSON Schema validation and/or Swagger Spec validation.

**Kind**: instance method of [<code>MsapiParser</code>](#MsapiParser)  
**Returns**: <code>Promise</code> - - The returned promise resolves with the parsed API object.  

| Param | Type | Description |
| --- | --- | --- |
| [path] | <code>string</code> | The file path or URL of the JSON schema |
| [api] | <code>object</code> | The Swagger API object. This object will be used instead of reading from `path`. |
| [options] | [<code>ParserOptions</code>](#ParserOptions) | Options that determine how the API is parsed, dereferenced, and validated |
| [callback] | <code>function</code> | An error-first callback. The second parameter is the parsed API object. |

<a name="MsapiParser.validate"></a>

### MsapiParser.validate([path], [api], [options], [callback]) ⇒ <code>Promise</code>
Parses, dereferences, and validates the given Swagger API.
Depending on the options, validation can include JSON Schema validation and/or Swagger Spec validation.

**Kind**: static method of [<code>MsapiParser</code>](#MsapiParser)  
**Returns**: <code>Promise</code> - - The returned promise resolves with the parsed API object.  

| Param | Type | Description |
| --- | --- | --- |
| [path] | <code>string</code> | The file path or URL of the JSON schema |
| [api] | <code>object</code> | The Swagger API object. This object will be used instead of reading from `path`. |
| [options] | [<code>ParserOptions</code>](#ParserOptions) | Options that determine how the API is parsed, dereferenced, and validated |
| [callback] | <code>function</code> | An error-first callback. The second parameter is the parsed API object. |

<a name="ParserOptions"></a>

## ParserOptions ⇐ <code>$RefParserOptions</code>
**Kind**: global class  
**Extends**: <code>$RefParserOptions</code>  
<a name="new_ParserOptions_new"></a>

### new ParserOptions([_options])
Options that determine how Swagger APIs are parsed, resolved, dereferenced, and validated.


| Param | Type | Description |
| --- | --- | --- |
| [_options] | <code>object</code> \| [<code>ParserOptions</code>](#ParserOptions) | Overridden options |

<a name="openapiV1"></a>

## openapiV1
JSON Schema for OpenAPI Specification v1.2

**Kind**: global variable  
<a name="openapiV2"></a>

## openapiV2
JSON Schema for OpenAPI Specification v2.0

**Kind**: global variable  
<a name="openapiV3"></a>

## openapiV3
JSON Schema for OpenAPI Specification v3.0

**Kind**: global variable  
<a name="openapi"></a>

## openapi
JSON Schemas for every version of the OpenAPI Specification

**Kind**: global variable  
<a name="swaggerParamRegExp"></a>

## swaggerParamRegExp
Regular Expression that matches Swagger path params.

**Kind**: global variable  
<a name="operationsList"></a>

## operationsList
List of HTTP verbs used for OperationItem as per the Swagger specification

**Kind**: global constant  
<a name="positionRangeForPath"></a>

## positionRangeForPath(yaml, path)
Get a position object with given

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| yaml | <code>string</code> | YAML or JSON string |
| path | <code>array</code> | an array of stings that constructs a JSON Path similar to JSON Pointers(RFC 6901). The difference is, each component of path is an item of the array instead of being separated with slash(/) in a string |

<a name="pathForPosition"></a>

## pathForPosition(yaml, position)
Get a JSON Path for position object in the spec

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| yaml | <code>string</code> | YAML or JSON string |
| position | <code>object</code> | position in the YAML or JSON string with `line` and `column` properties. `line` and `column` number are zero indexed |


* [pathForPosition(yaml, position)](#pathForPosition)
    * [~find(current)](#pathForPosition..find)
        * [~isInRange(node)](#pathForPosition..find..isInRange) ⇒ <code>Boolean</code>

<a name="pathForPosition..find"></a>

### pathForPosition~find(current)
recursive find function that finds the node matching the position

**Kind**: inner method of [<code>pathForPosition</code>](#pathForPosition)  

| Param | Type | Description |
| --- | --- | --- |
| current | <code>object</code> | AST object to serach into |

<a name="pathForPosition..find..isInRange"></a>

#### find~isInRange(node) ⇒ <code>Boolean</code>
Determines if position is in node"s range

**Kind**: inner method of [<code>find</code>](#pathForPosition..find)  
**Returns**: <code>Boolean</code> - true if position is in node"s range  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>object</code> | AST node |

<a name="fixServers"></a>

## fixServers(server, path) ⇒ <code>object</code>
This function takes in a Server object, checks if it has relative path
and then fixes it as per the path url

**Kind**: global function  
**Returns**: <code>object</code> - - The fixed server object  

| Param | Type | Description |
| --- | --- | --- |
| server | <code>object</code> | The server object to be fixed |
| path | <code>string</code> | The path (an http/https url) from where the file was downloaded |

<a name="fixOasRelativeServers"></a>

## fixOasRelativeServers()
This function helps fix the relative servers in the API definition file
be at root, path or operation's level

**Kind**: global function  
<a name="validateSchema"></a>

## validateSchema(api)
Validates the given Swagger API against the Swagger 2.0 or 3.0 schema.

**Kind**: global function  

| Param | Type |
| --- | --- |
| api | [<code>SwaggerObject</code>](#SwaggerObject) | 

<a name="initializeZSchema"></a>

## initializeZSchema()
Performs one-time initialization logic to prepare for Swagger Schema validation.

**Kind**: global function  
<a name="formatZSchemaError"></a>

## formatZSchemaError(errors, [indent]) ⇒ <code>string</code>
Z-Schema validation errors are a nested tree structure.
This function crawls that tree and builds an error message string.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| errors | <code>Array.&lt;object&gt;</code> | The Z-Schema error details |
| [indent] | <code>string</code> | The whitespace used to indent the error message |

<a name="validateSpec"></a>

## validateSpec(api)
Validates parts of the Swagger 2.0 spec that aren't covered by the Swagger 2.0 JSON Schema.

**Kind**: global function  

| Param | Type |
| --- | --- |
| api | [<code>SwaggerObject</code>](#SwaggerObject) | 

<a name="validatePath"></a>

## validatePath(api, path, pathId, operationIds)
Validates the given path.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| api | [<code>SwaggerObject</code>](#SwaggerObject) | The entire Swagger API object |
| path | <code>object</code> | A Path object, from the Swagger API |
| pathId | <code>string</code> | A value that uniquely identifies the path |
| operationIds | <code>string</code> | An array of collected operationIds found in other paths |

<a name="validateParameters"></a>

## validateParameters(api, path, pathId, operation, operationId)
Validates the parameters for the given operation.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| api | [<code>SwaggerObject</code>](#SwaggerObject) | The entire Swagger API object |
| path | <code>object</code> | A Path object, from the Swagger API |
| pathId | <code>string</code> | A value that uniquely identifies the path |
| operation | <code>object</code> | An Operation object, from the Swagger API |
| operationId | <code>string</code> | A value that uniquely identifies the operation |

<a name="validateBodyParameters"></a>

## validateBodyParameters(params, operationId)
Validates body and formData parameters for the given operation.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Array.&lt;object&gt;</code> | An array of Parameter objects |
| operationId | <code>string</code> | A value that uniquely identifies the operation |

<a name="validatePathParameters"></a>

## validatePathParameters(params, pathId, operationId)
Validates path parameters for the given path.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Array.&lt;object&gt;</code> | An array of Parameter objects |
| pathId | <code>string</code> | A value that uniquely identifies the path |
| operationId | <code>string</code> | A value that uniquely identifies the operation |

<a name="validateParameterTypes"></a>

## validateParameterTypes(params, api, operation, operationId)
Validates data types of parameters for the given operation.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Array.&lt;object&gt;</code> | An array of Parameter objects |
| api | <code>object</code> | The entire Swagger API object |
| operation | <code>object</code> | An Operation object, from the Swagger API |
| operationId | <code>string</code> | A value that uniquely identifies the operation |

<a name="checkForDuplicates"></a>

## checkForDuplicates(params)
Checks the given parameter list for duplicates, and throws an error if found.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Array.&lt;object&gt;</code> | An array of Parameter objects |

<a name="validateResponse"></a>

## validateResponse(code, response, responseId)
Validates the given response object.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| code | <code>string</code> | The HTTP response code (or "default") |
| response | <code>object</code> | A Response object, from the Swagger API |
| responseId | <code>string</code> | A value that uniquely identifies the response |

<a name="validateSchema"></a>

## validateSchema(schema, schemaId, validTypes)
Validates the given Swagger schema object.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| schema | <code>object</code> | A Schema object, from the Swagger API |
| schemaId | <code>string</code> | A value that uniquely identifies the schema object |
| validTypes | <code>Array.&lt;string&gt;</code> | An array of the allowed schema types |

<a name="validateRequiredPropertiesExist"></a>

## validateRequiredPropertiesExist(schema, schemaId)
Validates that the declared properties of the given Swagger schema object actually exist.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| schema | <code>object</code> | A Schema object, from the Swagger API |
| schemaId | <code>string</code> | A value that uniquely identifies the schema object |

<a name="validateRequiredPropertiesExist..collectProperties"></a>

### validateRequiredPropertiesExist~collectProperties()
Recursively collects all properties of the schema and its ancestors. They are added to the props object.

**Kind**: inner method of [<code>validateRequiredPropertiesExist</code>](#validateRequiredPropertiesExist)  
<a name="SwaggerObject"></a>

## SwaggerObject : <code>Object</code>
The Swagger object
https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#swagger-object

**Kind**: global typedef  
