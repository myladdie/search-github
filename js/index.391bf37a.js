(function(e){function t(t){for(var n,o,a=t[0],u=t[1],c=t[2],f=0,p=[];f<a.length;f++)o=a[f],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&p.push(s[o][0]),s[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,a=1;a<r.length;a++){var u=r[a];0!==s[u]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},s={index:0},i=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var l=u;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"3a0c":function(e,t,r){"use strict";r("bb1b")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("Search"),r("List")],1)},i=[],o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"jumbotron"},[r("h3",{staticClass:"jumbotron-heading"},[e._v("Search Github Users")]),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.keyWord,expression:"keyWord"}],attrs:{type:"text",placeholder:"enter the name you search"},domProps:{value:e.keyWord},on:{input:function(t){t.target.composing||(e.keyWord=t.target.value)}}}),e._v("  "),r("button",{on:{click:e.searchUsers}},[e._v("Search")])])])},a=[],u=r("bc3a"),c=r.n(u),l={name:"Search",data:function(){return{keyWord:""}},methods:{searchUsers:function(){var e=this;this.$bus.$emit("updateListData",{isLoading:!0,errMsg:"",users:[],isFirst:!1}),c.a.get("https://api.github.com/search/users?q=".concat(this.keyWord)).then((function(t){console.log("请求成功了"),e.$bus.$emit("updateListData",{isLoading:!1,errMsg:"",users:t.data.items})}),(function(t){e.$bus.$emit("updateListData",{isLoading:!1,errMsg:t.message,users:[]})}))}}},f=l,p=r("2877"),d=Object(p["a"])(f,o,a,!1,null,null,null),h=d.exports,v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row"},[e._l(e.info.users,(function(t){return r("div",{directives:[{name:"show",rawName:"v-show",value:e.info.users.length,expression:"info.users.length"}],key:t.login,staticClass:"card"},[r("a",{attrs:{href:t.html_url,target:"_blank"}},[r("img",{staticStyle:{width:"100px"},attrs:{src:t.avatar_url}})]),r("p",{staticClass:"card-text"},[e._v(e._s(t.login))])])})),r("h1",{directives:[{name:"show",rawName:"v-show",value:e.info.isFirst,expression:"info.isFirst"}]},[e._v("欢迎使用！")]),r("h1",{directives:[{name:"show",rawName:"v-show",value:e.info.isLoading,expression:"info.isLoading"}]},[e._v("加载中....")]),r("h1",{directives:[{name:"show",rawName:"v-show",value:e.info.errMsg,expression:"info.errMsg"}]},[e._v(e._s(e.info.errMsg))])],2)},b=[],m=r("5530"),g={name:"List",data:function(){return{info:{isFirst:!0,isLoading:!1,errMsg:"",users:[]}}},mounted:function(){var e=this;this.$bus.$on("updateListData",(function(t){e.info=Object(m["a"])(Object(m["a"])({},e.info),t)}))}},y=g,w=(r("3a0c"),Object(p["a"])(y,v,b,!1,null,"3feac8d4",null)),_=w.exports,x={name:"App",components:{Search:h,List:_}},j=x,O=Object(p["a"])(j,s,i,!1,null,null,null),L=O.exports;n["a"].config.productionTip=!1,new n["a"]({el:"#app",render:function(e){return e(L)},beforeCreate:function(){n["a"].prototype.$bus=this}})},bb1b:function(e,t,r){}});
//# sourceMappingURL=index.391bf37a.js.map