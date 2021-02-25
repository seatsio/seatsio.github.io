(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{249:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return u})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),l=(a(0),a(354)),c=a(357),s=a(358),o={title:"List tags of all charts",slug:"/api-list-tags-of-all-charts",hidden:!1,createdAt:"2018-08-02T08:56:16.875Z",updatedAt:"2018-11-15T09:59:40.652Z"},i={unversionedId:"REST API/api-chart-tags/api-list-tags-of-all-charts",id:"REST API/api-chart-tags/api-list-tags-of-all-charts",isDocsHomePage:!1,title:"List tags of all charts",description:"List all tags of all active (i.e. non-archived) charts.",source:"@site/docs/REST API/api-chart-tags/api-list-tags-of-all-charts.md",slug:"/api-list-tags-of-all-charts",permalink:"/docs/api-list-tags-of-all-charts",version:"current",sidebar:"docs",previous:{title:"Save social distancing rulesets",permalink:"/docs/api-charts-save-social-distancing-rulesets"},next:{title:"Add a tag to a chart",permalink:"/docs/api-add-a-tag-to-a-chart"}},u=[],p={toc:u};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"List all tags of all active (i.e. non-archived) charts."),Object(l.b)(c.a,{defaultValue:"shell",values:[{label:"Text",value:"shell"},{label:"PHP",value:"php"},{label:"C#",value:"csharp"},{label:"Java",value:"java"},{label:"Python",value:"python"},{label:"Ruby",value:"ruby"},{label:"Javascript",value:"javascript"}],mdxType:"Tabs"},Object(l.b)(s.a,{value:"shell",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"GET https://api.seatsio.net/charts/tags\n"))),Object(l.b)(s.a,{value:"php",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-php"},"$seatsioClient->charts->listAllTags();\n"))),Object(l.b)(s.a,{value:"csharp",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-csharp"},"Client.Charts.ListAllTags();\n"))),Object(l.b)(s.a,{value:"java",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"client.charts.listAllTags();\n"))),Object(l.b)(s.a,{value:"python",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-python"},"client.charts.list_all_tags()\n"))),Object(l.b)(s.a,{value:"ruby",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-ruby"},"client.charts.list_all_tags\n"))),Object(l.b)(s.a,{value:"javascript",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},"await client.charts.listAllTags();\n")))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"curl https://api.seatsio.net/charts/tags -u aSecretKey: \n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n    "tags": ["tag1", "tag2", "tag3"]\n}\n')))}b.isMDXComponent=!0},353:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},354:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),u=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=u(a),f=n,m=p["".concat(c,".").concat(f)]||p[f]||b[f]||l;return a?r.a.createElement(m,s(s({ref:t},i),{},{components:a})):r.a.createElement(m,s({ref:t},i))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,c=new Array(l);c[0]=f;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var i=2;i<l;i++)c[i]=a[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}f.displayName="MDXCreateElement"},355:function(e,t,a){"use strict";var n=a(0),r=a(356);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},356:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},357:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(355),c=a(353),s=a(54),o=a.n(s),i=37,u=39;t.a=function(e){var t=e.lazy,a=e.block,s=e.defaultValue,p=e.values,b=e.groupId,f=e.className,m=Object(l.a)(),d=m.tabGroupChoices,v=m.setTabGroupChoices,g=Object(n.useState)(s),h=g[0],O=g[1],y=n.Children.toArray(e.children);if(null!=b){var j=d[b];null!=j&&j!==h&&p.some((function(e){return e.value===j}))&&O(j)}var T=function(e){O(e),null!=b&&v(b,e)},N=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":a},f)},p.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(c.a)("tabs__item",o.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case u:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case i:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return T(t)},onClick:function(){T(t)}},a)}))),t?Object(n.cloneElement)(y.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},358:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.children,a=e.hidden,n=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}}}]);