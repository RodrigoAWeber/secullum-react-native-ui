(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"./docs/components/Text.mdx":function(e,t,n){"use strict";n.r(t);var o=n("./node_modules/react/index.js"),r=n.n(o),a=n("./node_modules/@mdx-js/tag/dist/index.js"),l=n("./node_modules/docz/dist/index.m.js"),i=n("./node_modules/react-native-web/dist/exports/Text/index.js"),u=n("./src/modules/theme.ts");function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=Object(u.a)(),y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,f(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,o["Component"]),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.bold,n=e.color,r=e.size,a=e.style,l=e.flex,u=e.align,c=e.children,s=e.nativeID;return o.createElement(i.a,{nativeID:s,style:[{color:n,flex:l,fontSize:r,textAlign:u,fontFamily:t?"Lato-Bold":"Lato-Regular"},a]},c)}}])&&s(n.prototype,r),a&&s(n,a),t}();y.defaultProps={bold:!1,size:14,color:m.textColor1};try{y.displayName="Text",y.__docgenInfo={description:"",displayName:"Text",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"StyleProp<TextStyle>"}},bold:{defaultValue:{value:"false"},description:"",name:"bold",required:!0,type:{name:"boolean"}},size:{defaultValue:{value:"14"},description:"",name:"size",required:!0,type:{name:"number"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"number"}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:'"auto" | "left" | "right" | "center" | "justify"'}},nativeID:{defaultValue:null,description:"",name:"nativeID",required:!1,type:{name:"string"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Text.tsx#Text"]={docgenInfo:y.__docgenInfo,name:"Text",path:"src/components/Text.tsx#Text"})}catch(e){}function b(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}t.default=function(e){var t=e.components,n=b(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:t},r.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"text"}},"Text"),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"properties"}},"Properties"),r.a.createElement(l.PropsTable,{of:y}),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"example"}},"Example"),r.a.createElement(l.Playground,{__position:1,__code:"<Text>Ol\xe1 mundo</Text>",__scope:{props:n,Text:y}},r.a.createElement(y,null,"Ol\xe1 mundo")))}}}]);