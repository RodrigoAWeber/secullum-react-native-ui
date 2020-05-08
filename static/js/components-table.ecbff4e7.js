(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"./docs/components/Table.mdx":function(e,t,n){"use strict";n.r(t);var o=n("./node_modules/react/index.js"),r=n.n(o),a=n("./node_modules/@mdx-js/tag/dist/index.js"),l=n("./node_modules/docz/dist/index.m.js"),i=n("./node_modules/react-native-vector-icons/FontAwesome.js"),c=n("./src/modules/theme.ts"),u=n("./node_modules/react-native-web/dist/exports/ScrollView/index.js"),d=n("./node_modules/react-native-web/dist/exports/View/index.js"),s=n("./node_modules/react-native-web/dist/exports/Text/index.js"),m=n("./node_modules/react-native-web/dist/exports/StyleSheet/index.js"),p=n("./src/components/CheckBox.tsx");function y(e){return(y="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function b(e,t){return!t||"object"!==y(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var S=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),b(this,g(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,o["Component"]),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.columns,n=e.data,r=e.idAttribute,a=e.style,l=e.cellStyle,c=e.nativeID,m=e.onSelect,y=e.onSelectAll;return o.createElement(u.a,{horizontal:!0},o.createElement(d.a,{nativeID:c,style:a},o.createElement(d.a,{style:x.row},t.map(function(e){return"checkbox"===e.type?o.createElement(p.a,{key:e.key,style:{marginLeft:8},value:n.every(function(e){return e.selected})||!1,onChange:function(e){return y&&y(e)}}):o.createElement(s.a,{key:e.key,style:[x.cell,x.cellHeader,e.style,e.headerStyle]},e.title)})),n.map(function(e,n){return o.createElement(d.a,{key:e[r].toString(),style:[x.row,{backgroundColor:n%2===0?h.backgroundColor2:h.backgroundColor1}]},t.map(function(t){var n=l&&l[e[r].toString()]&&l[e[r].toString()][t.key];return"icon"===t.type?o.createElement(i.a,{key:t.key,name:e[t.key].toString(),style:[x.cellIcon,n,t.style]}):"checkbox"===t.type?o.createElement(p.a,{key:t.key,style:{marginLeft:8},value:e.selected||!1,onChange:function(n){return m&&m(e[t.key].toString(),n)}}):o.createElement(s.a,{key:t.key,style:[x.cell,n,t.style]},e[t.key].toString())}))})))}}])&&f(n.prototype,r),a&&f(n,a),t}(),h=Object(c.a)(),x=m.a.create({row:{flexDirection:"row",alignItems:"center",paddingVertical:8,minHeight:45},cell:{fontFamily:"Lato-Regular",fontSize:14,marginLeft:8,lineHeight:18,color:h.textColor1},cellHeader:{fontFamily:"Lato-Bold",color:h.textColor1},cellIcon:{fontSize:24,marginLeft:8,textAlign:"center",textAlignVertical:"center"}});try{S.displayName="Table",S.__docgenInfo={description:"",displayName:"Table",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"TableColumn[]"}},subHeaderData:{defaultValue:null,description:"",name:"subHeaderData",required:!1,type:{name:"TableColumn[]"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"any[]"}},idAttribute:{defaultValue:null,description:"",name:"idAttribute",required:!0,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}},cellStyle:{defaultValue:null,description:"",name:"cellStyle",required:!1,type:{name:"TableCellStyle"}},nativeID:{defaultValue:null,description:"",name:"nativeID",required:!1,type:{name:"string"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"(name: string, value: boolean) => void"}},onSelectAll:{defaultValue:null,description:"",name:"onSelectAll",required:!1,type:{name:"(value: boolean) => void"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Table.tsx#Table"]={docgenInfo:S.__docgenInfo,name:"Table",path:"src/components/Table.tsx#Table"})}catch(e){}var k=n("./src/components/Space.tsx");function w(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}t.default=function(e){var t=e.components,n=w(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:t},r.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"table"}},"Table"),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"properties"}},"Properties"),r.a.createElement(l.PropsTable,{of:S}),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"example"}},"Example"),r.a.createElement(l.Playground,{__position:1,__code:"<Table\n  idAttribute=\"id\"\n  data={[\n    { id: 1, name: 'Fernando', favoriteColor: 'Red' },\n    { id: 2, name: 'Alex', favoriteColor: 'Green' },\n    { id: 3, name: 'Jo\xe3o', favoriteColor: 'Blue' },\n  ]}\n  columns={[\n    { key: 'name', title: 'Name', width: 200 },\n    { key: 'favoriteColor', title: 'Favorite Color', width: 100 },\n  ]}\n/>\n<Space />\n<Table\n  idAttribute=\"id\"\n  data={[\n    { id: 1, name: 'Fernando' },\n    { id: 2, name: 'Alex' },\n    { id: 3, name: 'Jo\xe3o', selected: true },\n  ]}\n  columns={[\n    { key: 'selected', type: 'checkbox' },\n    { key: 'name', title: 'Name', width: 100 },\n  ]}\n/>",__scope:{props:n,Table:S,Space:k.a}},r.a.createElement(S,{idAttribute:"id",data:[{id:1,name:"Fernando",favoriteColor:"Red"},{id:2,name:"Alex",favoriteColor:"Green"},{id:3,name:"Jo\xe3o",favoriteColor:"Blue"}],columns:[{key:"name",title:"Name",width:200},{key:"favoriteColor",title:"Favorite Color",width:100}]}),r.a.createElement(k.a,null),r.a.createElement(S,{idAttribute:"id",data:[{id:1,name:"Fernando"},{id:2,name:"Alex"},{id:3,name:"Jo\xe3o",selected:!0}],columns:[{key:"selected",type:"checkbox"},{key:"name",title:"Name",width:100}]})))}}}]);