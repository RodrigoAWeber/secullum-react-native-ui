(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"./docs/components/MultiSelect.mdx":function(e,t,n){"use strict";n.r(t);var o=n("./node_modules/react/index.js"),l=n.n(o),a=n("./node_modules/@mdx-js/tag/dist/index.js"),r=n("./node_modules/docz/dist/index.m.js"),i=n("./node_modules/react-native-vector-icons/FontAwesome.js"),c=n("./src/modules/theme.ts"),s=n("./node_modules/react-native-web/dist/exports/Dimensions/index.js"),d=n("./node_modules/react-native-web/dist/exports/StyleSheet/index.js"),u=n("./node_modules/react-native-web/dist/exports/View/index.js"),p=n("./node_modules/react-native-web/dist/exports/Text/index.js"),m=n("./node_modules/react-native-web/dist/exports/TouchableWithoutFeedback/index.js"),y=n("./node_modules/react-native-web/dist/exports/Platform/index.js"),f=n("./node_modules/react-native-web/dist/exports/FlatList/index.js"),h=n("./src/modules/layout.ts"),b=n("./src/components/Switch.tsx"),g=n("./src/components/Modal.tsx"),v=n("./src/components/Button.tsx"),w=n("./src/components/Space.tsx");function S(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function C(e){return(C="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function x(e,t,n){return t&&E(e.prototype,t),n&&E(e,n),e}function D(e,t){return!t||"object"!==C(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function V(e){return(V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function M(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var j=function(e){function t(){var e,n;O(this,t);for(var l=arguments.length,a=new Array(l),r=0;r<l;r++)a[r]=arguments[r];return(n=D(this,(e=V(t)).call.apply(e,[this].concat(a)))).getStyles=function(){var e=Object(c.a)(),t=s.a.get("screen").width;return d.a.create({text:{paddingHorizontal:16,paddingVertical:16,fontFamily:"Lato-Bold",fontSize:16,flexWrap:"wrap",maxWidth:t-150,color:e.textColor1},icon:{fontSize:26},rowView:{flexDirection:"row",paddingLeft:16},switch:{alignContent:"center",justifyContent:"center"},iconView:{width:50,alignItems:"center",justifyContent:"center"},iconOnlyView:{width:100,alignItems:"center",justifyContent:"center"},iconOnly:{paddingHorizontal:16,paddingVertical:16,fontSize:60},switchStyle:{paddingHorizontal:8,borderWidth:0}})},n.renderWithLabelAndIcon=function(e,t){var l=n.props,a=l.value,r=l.iconComponent,s=l.handleAdd,d=l.handleRemove,m=Object(c.a)(),y=n.getStyles();return o.createElement(u.a,{style:y.rowView},o.createElement(u.a,{style:y.switch},o.createElement(b.a,{value:n.props.checked,onChange:function(){n.props.checked?d(a):s(a)},style:y.switchStyle})),o.createElement(u.a,{style:y.iconView},r?o.createElement(r,{name:t,style:y.icon,color:m.textColor1}):o.createElement(i.a,{name:t,color:m.textColor1,style:y.icon})),o.createElement(u.a,null,o.createElement(p.a,{style:y.text},e)))},n.renderWithLabel=function(e){var t=n.props,l=t.value,a=t.handleAdd,r=t.handleRemove,i=n.getStyles();return o.createElement(u.a,{style:i.rowView},o.createElement(u.a,{style:i.switch},o.createElement(b.a,{value:n.props.checked,onChange:function(){n.props.checked?r(l):a(l)},style:i.switchStyle})),o.createElement(p.a,{style:i.text},e))},n.renderWithIcon=function(e){var t=n.props,l=t.value,a=t.iconComponent,r=t.handleAdd,s=t.handleRemove,d=Object(c.a)(),p=n.getStyles();return o.createElement(u.a,{style:p.rowView},o.createElement(u.a,{style:p.switch},o.createElement(b.a,{value:n.props.checked,onChange:function(){n.props.checked?s(l):r(l)},style:p.switchStyle})),o.createElement(u.a,{style:p.iconOnlyView},a?o.createElement(a,{name:e,style:p.iconOnly,color:d.textColor1}):o.createElement(i.a,{name:e,color:d.textColor1,style:p.iconOnly})))},n}return M(t,o["Component"]),x(t,[{key:"render",value:function(){var e=this.props,t=e.label,n=e.icon;return t&&n?this.renderWithLabelAndIcon(t,n):t&&!n?this.renderWithLabel(t):!t&&n?this.renderWithIcon(n):null}}]),t}(),k=function(e){function t(){var e,n;O(this,t);for(var l=arguments.length,a=new Array(l),r=0;r<l;r++)a[r]=arguments[r];return(n=D(this,(e=V(t)).call.apply(e,[this].concat(a)))).state={modalOpen:!1,selectedValues:[],selectedValuesInitial:[]},n.componentDidMount=function(){n.setState({selectedValues:n.props.values||[],selectedValuesInitial:n.props.values||[]})},n.componentDidUpdate=function(e){e.values!==n.props.values&&n.setState({selectedValues:n.props.values||[],selectedValuesInitial:n.props.values||[]})},n.handleAddValue=function(e){n.setState({selectedValues:S(n.state.selectedValues).concat([e])})},n.handleRemoveValue=function(e){n.setState({selectedValues:n.state.selectedValues.filter(function(t){return t!==e})})},n.handleSave=function(){var e=n.props.onChange,t=n.state.selectedValues;n.setState({modalOpen:!1,selectedValuesInitial:t}),e(t)},n.renderClosedWithNone=function(){var e=n.props.selectedNoneDescription,t=n.getStyles();return o.createElement(u.a,{style:t.rowView},o.createElement(p.a,{style:t.text},e),o.createElement(i.a,{name:"caret-down",style:t.seta}))},n.renderClosedWithAll=function(){var e=n.props.selectedAllDescription,t=n.getStyles();return o.createElement(u.a,{style:t.rowView},o.createElement(p.a,{style:t.text},e),o.createElement(i.a,{name:"caret-down",style:t.seta}))},n.renderClosedWithOneLabel=function(e){var t=n.getStyles();return o.createElement(u.a,{style:t.rowView},o.createElement(p.a,{style:t.text},e),o.createElement(i.a,{name:"caret-down",style:t.seta}))},n.renderClosedWithOneIcon=function(e){var t=n.props.iconComponent,l=Object(c.a)(),a=n.getStyles();return o.createElement(u.a,{style:a.rowView},t?o.createElement(t,{name:e,style:a.iconOnly,color:l.textColor1}):o.createElement(i.a,{name:e,color:l.textColor1,style:a.iconOnly}),o.createElement(i.a,{name:"caret-down",style:a.seta}))},n.renderClosedWithOneLabelAndIcon=function(e,t){var l=n.props.iconComponent,a=Object(c.a)(),r=n.getStyles();return o.createElement(u.a,{style:r.rowView},o.createElement(u.a,{style:r.iconView},l?o.createElement(l,{name:t,style:r.icon,color:a.textColor1}):o.createElement(i.a,{name:t,color:a.textColor1,style:r.icon})),o.createElement(u.a,{style:r.textView},o.createElement(p.a,{style:r.text},e)),o.createElement(i.a,{name:"caret-down",style:r.seta}))},n.renderClosedWithOne=function(e,t){return e&&t?n.renderClosedWithOneLabelAndIcon(e,t):e&&!t?n.renderClosedWithOneLabel(e):!e&&t?n.renderClosedWithOneIcon(t):null},n.renderClosedWithMany=function(){var e=n.props.selectedManyDescription,t=n.getStyles();return o.createElement(u.a,{style:t.rowView},o.createElement(p.a,{style:t.text},e),o.createElement(i.a,{name:"caret-down",style:t.seta}))},n.renderClosedMultiSelect=function(e,t){return 0===e.length?n.renderClosedWithNone():e.length===t?n.renderClosedWithAll():1===e.length?n.renderClosedWithOne(e[0].label,e[0].icon):n.renderClosedWithMany()},n.getStyles=function(){var e=Object(c.a)();return d.a.create({container:{paddingHorizontal:16,paddingVertical:8,borderWidth:1,borderColor:e.borderColor1,borderRadius:3},label:{color:e.textColor2,fontFamily:"Lato-Regular",fontSize:Object(h.a)()?15:12,lineHeight:16},textView:{flexDirection:"column",justifyContent:"center"},text:{height:27,alignSelf:"flex-start",color:e.textColor1,fontFamily:"Lato-Bold",fontSize:16},seta:{color:e.textColor1,fontSize:16,position:"absolute",bottom:0,right:0},modalOverlay:{justifyContent:"center",paddingBottom:16,paddingTop:16},modalContainer:{borderRadius:5,backgroundColor:e.backgroundColor1,margin:16},emptyMessageContainer:{flexDirection:"row",alignItems:"center",paddingHorizontal:16},readonly:{backgroundColor:e.disabledColor},icon:{fontSize:26},rowView:{flexDirection:"row"},iconView:{width:50,alignItems:"center",justifyContent:"center"},iconOnly:{fontSize:30,paddingLeft:16},buttonCancelar:{flex:1,backgroundColor:e.backgroundColor1},buttonOk:{flex:1},buttons:{flexDirection:"row",padding:16}})},n}return M(t,o["Component"]),x(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.modalOpen,l=t.selectedValues,a=t.selectedValuesInitial,r=this.props,s=r.label,d=r.items,h=r.emptyMessage,b=r.disabled,S=r.iconComponent,C=r.okButtonDescription,O=r.cancelButtonDescription,E=d.filter(function(e){return l.includes(e.value)}),x=this.getStyles(),D=Object(c.a)();return o.createElement(m.a,{onPress:function(){return e.setState({modalOpen:!0})},disabled:b},o.createElement(u.a,{style:[x.container,b?x.readonly:null]},o.createElement(p.a,{style:x.label},s),this.renderClosedMultiSelect(E,d.length),o.createElement(g.a,{visible:n,overlayStyle:x.modalOverlay},o.createElement(u.a,{style:[x.modalContainer,"web"===y.a.OS&&{margin:"auto",width:"90%",maxWidth:450,justifyContent:"center",marginBottom:"10px",marginTop:"10px"}]},d.length>0?o.createElement(f.a,{data:d,initialNumToRender:d.length,keyExtractor:function(e){return e.value.toString()},extraData:l,renderItem:function(t){var n=t.item;return o.createElement(j,{label:n.label,value:n.value,icon:n.icon,iconComponent:S,handleAdd:function(t){return e.handleAddValue(t)},handleRemove:function(t){return e.handleRemoveValue(t)},checked:l.includes(n.value)})}}):o.createElement(u.a,{style:x.emptyMessageContainer},o.createElement(i.a,{name:"warning",color:D.warningColor,size:24}),o.createElement(p.a,{style:x.text},h)),o.createElement(u.a,{style:x.buttons},o.createElement(v.a,{text:O||"Cancelar",style:x.buttonCancelar,primary:!1,onPress:function(){e.setState({modalOpen:!1,selectedValues:a})}}),o.createElement(w.a,{width:20}),o.createElement(v.a,{text:C||"Ok",style:x.buttonOk,onPress:this.handleSave}))))))}}]),t}();k.defaultProps={emptyMessage:"N\xe3o h\xe1 registros cadastrados",selectedAllDescription:"Todos",selectedManyDescription:"V\xe1rios",selectedNoneDescription:"Nenhum",okButtonDescription:"Ok",cancelButtonDescription:"Cancelar"};try{k.displayName="MultiSelect",k.__docgenInfo={description:"",displayName:"MultiSelect",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"{ label: string; value: any; icon?: string; }[]"}},values:{defaultValue:null,description:"",name:"values",required:!0,type:{name:"any[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: any) => void"}},selectedAllDescription:{defaultValue:{value:"Todos"},description:"",name:"selectedAllDescription",required:!1,type:{name:"string"}},selectedManyDescription:{defaultValue:{value:"V\xe1rios"},description:"",name:"selectedManyDescription",required:!1,type:{name:"string"}},selectedNoneDescription:{defaultValue:{value:"Nenhum"},description:"",name:"selectedNoneDescription",required:!1,type:{name:"string"}},okButtonDescription:{defaultValue:{value:"Ok"},description:"",name:"okButtonDescription",required:!1,type:{name:"string"}},cancelButtonDescription:{defaultValue:{value:"Cancelar"},description:"",name:"cancelButtonDescription",required:!1,type:{name:"string"}},emptyMessage:{defaultValue:{value:"N\xe3o h\xe1 registros cadastrados"},description:"",name:"emptyMessage",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},iconComponent:{defaultValue:null,description:"",name:"iconComponent",required:!1,type:{name:"ComponentClass<IconProps, any>"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MultiSelect.tsx#MultiSelect"]={docgenInfo:k.__docgenInfo,name:"MultiSelect",path:"src/components/MultiSelect.tsx#MultiSelect"})}catch(e){}function _(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}t.default=function(e){var t=e.components,n=_(e,["components"]);return l.a.createElement(a.MDXTag,{name:"wrapper",components:t},l.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"multiselect"}},"MultiSelect"),l.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"properties"}},"Properties"),l.a.createElement(r.PropsTable,{of:k}),l.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"example"}},"Example"),l.a.createElement(r.Playground,{__position:1,__code:"<MultiSelect\n  selectedNoneDescription={'None'}\n  selectedManyDescription={'Many'}\n  selectedAllDescription={'All'}\n  cancelButtonDescription={'Cancel'}\n  okButtonDescription={'Ok'}\n  label={'Operating Systems'}\n  items={[\n    { label: 'Android', value: 1 },\n    { label: 'iOS', value: 2 },\n    { label: 'Windows Phone', value: 3 },\n  ]}\n  values={[1]}\n  onChange={value => alert('Selected ' + value)}\n/>\n<Space />\n<MultiSelect\n  selectedNoneDescription={'None'}\n  selectedManyDescription={'Many'}\n  selectedAllDescription={'All'}\n  cancelButtonDescription={'Cancel'}\n  okButtonDescription={'Ok'}\n  label={'Operating Systems'}\n  items={[\n    { label: 'Android', icon: 'android', value: 1 },\n    { label: 'iOS', icon: 'apple', value: 2 },\n    { label: 'Windows Phone', icon: 'windows', value: 3 },\n  ]}\n  values={[1]}\n  onChange={value => alert('Selected ' + value)}\n/>\n<Space />\n<MultiSelect\n  selectedNoneDescription={'None'}\n  selectedManyDescription={'Many'}\n  selectedAllDescription={'All'}\n  cancelButtonDescription={'Cancel'}\n  okButtonDescription={'Ok'}\n  label={'Operating Systems'}\n  items={[\n    { icon: 'android', value: 1 },\n    { icon: 'apple', value: 2 },\n    { icon: 'windows', value: 3 },\n  ]}\n  values={[1]}\n  onChange={value => alert('Selected ' + value)}\n/>",__scope:{props:n,MultiSelect:k,Space:w.a}},l.a.createElement(k,{selectedNoneDescription:"None",selectedManyDescription:"Many",selectedAllDescription:"All",cancelButtonDescription:"Cancel",okButtonDescription:"Ok",label:"Operating Systems",items:[{label:"Android",value:1},{label:"iOS",value:2},{label:"Windows Phone",value:3}],values:[1],onChange:function(e){return alert("Selected "+e)}}),l.a.createElement(w.a,null),l.a.createElement(k,{selectedNoneDescription:"None",selectedManyDescription:"Many",selectedAllDescription:"All",cancelButtonDescription:"Cancel",okButtonDescription:"Ok",label:"Operating Systems",items:[{label:"Android",icon:"android",value:1},{label:"iOS",icon:"apple",value:2},{label:"Windows Phone",icon:"windows",value:3}],values:[1],onChange:function(e){return alert("Selected "+e)}}),l.a.createElement(w.a,null),l.a.createElement(k,{selectedNoneDescription:"None",selectedManyDescription:"Many",selectedAllDescription:"All",cancelButtonDescription:"Cancel",okButtonDescription:"Ok",label:"Operating Systems",items:[{icon:"android",value:1},{icon:"apple",value:2},{icon:"windows",value:3}],values:[1],onChange:function(e){return alert("Selected "+e)}})))}}}]);