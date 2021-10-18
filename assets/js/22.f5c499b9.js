(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{575:function(t,s,e){"use strict";e.r(s);var a=e(52),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"swagger-parser-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#swagger-parser-api"}},[t._v("#")]),t._v(" Swagger Parser API")]),t._v(" "),e("h2",{attrs:{id:"things-to-know"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#things-to-know"}},[t._v("#")]),t._v(" Things to Know")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#class-methods-vs-instance-methods"}},[t._v("Class methods vs. Instance methods")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#callbacks-vs-promises"}},[t._v("Callbacks vs. Promises")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#circular-refs"}},[t._v("Circular references")])])]),t._v(" "),e("h2",{attrs:{id:"classes-methods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#classes-methods"}},[t._v("#")]),t._v(" Classes & Methods")]),t._v(" "),e("h4",{attrs:{id:"the-swaggerparser-class"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-swaggerparser-class"}},[t._v("#")]),t._v(" "),e("RouterLink",{attrs:{to:"/sw/swagger-parser.html"}},[t._v("The "),e("code",[t._v("SwaggerParser")]),t._v(" class")])],1),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/sw/swagger-parser.html#api"}},[e("code",[t._v("api")]),t._v(" property")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/sw/swagger-parser.html#refs"}},[e("code",[t._v("$refs")]),t._v(" property")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/sw/swagger-parser.html#validateapi-options-callback"}},[e("code",[t._v("validate()")]),t._v(" method")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/sw/swagger-parser.html#dereferenceapi-options-callback"}},[e("code",[t._v("dereference()")]),t._v(" method")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/sw/swagger-parser.html#bundleapi-options-callback"}},[e("code",[t._v("bundle()")]),t._v(" method")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/sw/swagger-parser.html#parseapi-options-callback"}},[e("code",[t._v("parse()")]),t._v(" method")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/sw/swagger-parser.html#resolveapi-options-callback"}},[e("code",[t._v("resolve()")]),t._v(" method")])],1)]),t._v(" "),e("h4",{attrs:{id:"the-refs-class"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-refs-class"}},[t._v("#")]),t._v(" "),e("RouterLink",{attrs:{to:"/sw/refs.html"}},[t._v("The "),e("code",[t._v("$Refs")]),t._v(" class")])],1),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/sw/refs.html#circular"}},[e("code",[t._v("circular")]),t._v(" property")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/sw/refs.html#pathstypes"}},[e("code",[t._v("paths()")]),t._v(" method")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/sw/refs.html#valuestypes"}},[e("code",[t._v("values()")]),t._v(" method")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/sw/refs.html#existsref"}},[e("code",[t._v("exists()")]),t._v(" method")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/sw/refs.html#getref-options"}},[e("code",[t._v("get()")]),t._v(" method")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/sw/refs.html#setref-value-options"}},[e("code",[t._v("set()")]),t._v(" method")])],1)]),t._v(" "),e("h4",{attrs:{id:"the-options-object"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-options-object"}},[t._v("#")]),t._v(" "),e("RouterLink",{attrs:{to:"/sw/options.html"}},[t._v("The "),e("code",[t._v("Options")]),t._v(" object")])],1),t._v(" "),e("h3",{attrs:{id:"class-methods-vs-instance-methods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#class-methods-vs-instance-methods"}},[t._v("#")]),t._v(" Class methods vs. Instance methods")]),t._v(" "),e("p",[t._v("All of Swagger Parser's methods are available as static (class) methods, and as instance methods.  The static methods simply create a new "),e("RouterLink",{attrs:{to:"/sw/swagger-parser.html"}},[e("code",[t._v("SwaggerParser")])]),t._v(" instance and then call the corresponding instance method.  Thus, the following line...")],1),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("SwaggerParser"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("validate")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my-api.yaml"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("... is the same as this:")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" parser "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SwaggerParser")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nparser"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("validate")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my-api.yaml"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("The difference is that in the second example you now have a reference to "),e("code",[t._v("parser")]),t._v(", which means you can access the results ("),e("RouterLink",{attrs:{to:"/sw/swagger-parser.html#api-object"}},[e("code",[t._v("parser.api")])]),t._v(" and "),e("RouterLink",{attrs:{to:"/sw/swagger-parser.html#refs"}},[e("code",[t._v("parser.$refs")])]),t._v(") anytime you want, rather than just in the callback function.")],1),t._v(" "),e("h3",{attrs:{id:"callbacks-vs-promises"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#callbacks-vs-promises"}},[t._v("#")]),t._v(" Callbacks vs. Promises")]),t._v(" "),e("p",[t._v("Many people prefer "),e("code",[t._v("async")]),t._v("/"),e("code",[t._v("await")]),t._v(" or "),e("a",{attrs:{href:"http://javascriptplayground.com/blog/2015/02/promises/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Promise"),e("OutboundLink")],1),t._v(" syntax instead of callbacks.  Swagger Parser allows you to use whichever one you prefer.")]),t._v(" "),e("p",[t._v("If you pass a callback function to any method, then the method will call the callback using the Node.js error-first convention.  If you do "),e("em",[t._v("not")]),t._v(" pass a callback function, then the method will return a Promise.")]),t._v(" "),e("p",[t._v("The following two examples are equivalent:")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Callback syntax")]),t._v("\nSwaggerParser"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("validate")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mySchema"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" api")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Error")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Success")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// async/await syntax")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" api "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" SwaggerParser"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("validate")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mySchema"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Success")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Error")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"circular-refs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#circular-refs"}},[t._v("#")]),t._v(" Circular $Refs")]),t._v(" "),e("p",[t._v("Swagger APIs can contain "),e("a",{attrs:{href:"https://gist.github.com/JamesMessinger/d18278935fc73e3a0ee1",target:"_blank",rel:"noopener noreferrer"}},[t._v("circular $ref pointers"),e("OutboundLink")],1),t._v(", and Swagger Parser fully supports them. Circular references can be resolved and dereferenced just like any other reference.  However, if you intend to serialize the dereferenced api as JSON, then you should be aware that "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("JSON.stringify")]),e("OutboundLink")],1),t._v(" does not support circular references by default, so you will need to "),e("a",{attrs:{href:"https://stackoverflow.com/questions/11616630/json-stringify-avoid-typeerror-converting-circular-structure-to-json",target:"_blank",rel:"noopener noreferrer"}},[t._v("use a custom replacer function"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("You can disable circular references by setting the "),e("RouterLink",{attrs:{to:"/sw/options.html"}},[e("code",[t._v("dereference.circular")])]),t._v(" option to "),e("code",[t._v("false")]),t._v(". Then, if a circular reference is found, a "),e("code",[t._v("ReferenceError")]),t._v(" will be thrown.")],1),t._v(" "),e("p",[t._v("Or you can choose to just ignore circular references altogether by setting the "),e("RouterLink",{attrs:{to:"/sw/options.html"}},[e("code",[t._v("dereference.circular")])]),t._v(" option to "),e("code",[t._v('"ignore"')]),t._v(".  In this case, all non-circular references will still be dereferenced as normal, but any circular references will remain in the schema.")],1),t._v(" "),e("p",[t._v("Another option is to use the "),e("RouterLink",{attrs:{to:"/sw/swagger-parser.html#bundleapi-options-callback"}},[e("code",[t._v("bundle")])]),t._v(" method rather than the "),e("RouterLink",{attrs:{to:"/sw/swagger-parser.html#dereferenceapi-options-callback"}},[e("code",[t._v("dereference")])]),t._v(" method.  Bundling does "),e("em",[t._v("not")]),t._v(" result in circular references, because it simply converts "),e("em",[t._v("external")]),t._v(" "),e("code",[t._v("$ref")]),t._v(" pointers to "),e("em",[t._v("internal")]),t._v(" ones.")],1),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"person"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"properties"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"spouse"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$ref"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#/person"')]),t._v("        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// circular reference")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);