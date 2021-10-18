(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{577:function(t,s,a){"use strict";a.r(s);var e=a(52),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"refs-class"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#refs-class"}},[t._v("#")]),t._v(" "),a("code",[t._v("$Refs")]),t._v(" class")]),t._v(" "),a("p",[t._v("When you call the "),a("RouterLink",{attrs:{to:"/sw/swagger-parser.html#resolveschema-options-callback"}},[a("code",[t._v("resolve")])]),t._v(" method, the value that gets passed to the callback function (or Promise) is a "),a("code",[t._v("$Refs")]),t._v(" object.  This same object is accessible via the "),a("RouterLink",{attrs:{to:"/sw/swagger-parser.html#refs"}},[a("code",[t._v("parser.$refs")])]),t._v(" property of "),a("code",[t._v("SwaggerParser")]),t._v(" objects.")],1),t._v(" "),a("p",[t._v("This object is a map of JSON References and their resolved values.  It also has several convenient helper methods that make it easy for you to navigate and manipulate the JSON References.")]),t._v(" "),a("h5",{attrs:{id:"properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#circular"}},[a("code",[t._v("circular")])])])]),t._v(" "),a("h5",{attrs:{id:"methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#pathstypes"}},[a("code",[t._v("paths()")])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#valuestypes"}},[a("code",[t._v("values()")])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#existsref"}},[a("code",[t._v("exists()")])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#getref-options"}},[a("code",[t._v("get()")])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#setref-value-options"}},[a("code",[t._v("set()")])])])]),t._v(" "),a("h3",{attrs:{id:"circular"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#circular"}},[t._v("#")]),t._v(" "),a("code",[t._v("circular")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("code",[t._v("boolean")])])]),t._v(" "),a("p",[t._v("This property is "),a("code",[t._v("true")]),t._v(" if the API contains any "),a("RouterLink",{attrs:{to:"/sw/#circular-refs"}},[t._v("circular references")]),t._v(".  You may want to check this property before serializing the dereferenced schema as JSON, since "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("JSON.stringify()")]),a("OutboundLink")],1),t._v(" does not support circular references by default.")],1),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" parser "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SwaggerParser")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" parser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dereference")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my-api.yaml"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("parser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$refs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("circular"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'The API contains circular references'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"paths-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#paths-types"}},[t._v("#")]),t._v(" "),a("code",[t._v("paths([types])")])]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("types")]),t._v(" ("),a("em",[t._v("optional")]),t._v(") - "),a("code",[t._v("string")]),t._v(" (one or more)"),a("br"),t._v('\nOptionally only return certain types of paths ("file", "http", etc.)')])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Return Value:")]),t._v(" "),a("code",[t._v("array")]),t._v(" of "),a("code",[t._v("string")]),a("br"),t._v("\nReturns the paths/URLs of all the files in your API (including the main api file).")])])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" $refs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" SwaggerParser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my-api.yaml"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Get the paths of ALL files in the API")]),t._v("\n$refs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("paths")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Get the paths of local files only")]),t._v("\n$refs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("paths")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Get all URLs")]),t._v("\n$refs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("paths")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"values-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#values-types"}},[t._v("#")]),t._v(" "),a("code",[t._v("values([types])")])]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("types")]),t._v(" ("),a("em",[t._v("optional")]),t._v(") - "),a("code",[t._v("string")]),t._v(" (one or more)"),a("br"),t._v('\nOptionally only return values from certain locations ("file", "http", etc.)')])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Return Value:")]),t._v(" "),a("code",[t._v("object")]),a("br"),t._v("\nReturns a map of paths/URLs and their correspond values.")])])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" $refs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" SwaggerParser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my-api.yaml"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Get ALL paths & values in the API")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// (this is the same as $refs.toJSON())")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" values "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" $refs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("values")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nvalues"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"schemas/person.yaml"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nvalues"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://company.com/my-api.yaml"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"exists-ref"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exists-ref"}},[t._v("#")]),t._v(" "),a("code",[t._v("exists($ref)")])]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("$ref")]),t._v(" ("),a("em",[t._v("required")]),t._v(") - "),a("code",[t._v("string")]),a("br"),t._v("\nThe JSON Reference path, optionally with a JSON Pointer in the hash")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Return Value:")]),t._v(" "),a("code",[t._v("boolean")]),a("br"),t._v("\nReturns "),a("code",[t._v("true")]),t._v(" if the given path exists in the API; otherwise, returns "),a("code",[t._v("false")])])])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" $refs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" SwaggerParser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my-api.yaml"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n$refs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exists")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"schemas/person.yaml#/properties/firstName"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => true")]),t._v("\n$refs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exists")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"schemas/person.yaml#/properties/foobar"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => false")]),t._v("\n")])])]),a("h3",{attrs:{id:"get-ref-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-ref-options"}},[t._v("#")]),t._v(" "),a("code",[t._v("get($ref, [options])")])]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("$ref")]),t._v(" ("),a("em",[t._v("required")]),t._v(") - "),a("code",[t._v("string")]),a("br"),t._v("\nThe JSON Reference path, optionally with a JSON Pointer in the hash")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("options")]),t._v(" ("),a("em",[t._v("optional")]),t._v(") - "),a("code",[t._v("object")]),a("br"),t._v("\nSee "),a("RouterLink",{attrs:{to:"/sw/options.html"}},[t._v("options")]),t._v(" for the full list of options")],1)]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Return Value:")]),t._v(" "),a("code",[t._v("boolean")]),a("br"),t._v("\nGets the value at the given path in the API. Throws an error if the path does not exist.")])])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" $refs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" SwaggerParser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my-api.yaml"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" $refs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"schemas/person.yaml#/properties/firstName"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"set-ref-value-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-ref-value-options"}},[t._v("#")]),t._v(" "),a("code",[t._v("set($ref, value, [options])")])]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("$ref")]),t._v(" ("),a("em",[t._v("required")]),t._v(") - "),a("code",[t._v("string")]),a("br"),t._v("\nThe JSON Reference path, optionally with a JSON Pointer in the hash")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("value")]),t._v(" ("),a("em",[t._v("required")]),t._v(")"),a("br"),t._v("\nThe value to assign. Can be anything (object, string, number, etc.)")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("options")]),t._v(" ("),a("em",[t._v("optional")]),t._v(") - "),a("code",[t._v("object")]),a("br"),t._v("\nSee "),a("RouterLink",{attrs:{to:"/sw/options.html"}},[t._v("options")]),t._v(" for the full list of options")],1)])]),t._v(" "),a("p",[t._v("Sets the value at the given path in the API. If the property, or any of its parents, don't exist, they will be created.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" $refs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" SwaggerParser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my-api.yaml"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n$refs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"schemas/person.yaml#/properties/favoriteColor/default"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"blue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);