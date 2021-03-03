(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{122:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return l})),t.d(a,"metadata",(function(){return p})),t.d(a,"toc",(function(){return u})),t.d(a,"default",(function(){return b}));var n=t(3),r=t(7),c=(t(0),t(358)),o=t(361),s=t(362),l={title:"Update a workspace",slug:"/api/workspaces-update",hidden:!1,createdAt:"2020-02-27T22:00:24.807Z",updatedAt:"2020-02-28T12:51:41.416Z"},p={unversionedId:"REST API/api-workspaces/api-workspaces-update",id:"REST API/api-workspaces/api-workspaces-update",isDocsHomePage:!1,title:"Update a workspace",description:"Creates a workspace. Only the name is required.",source:"@site/docs/REST API/api-workspaces/api-workspaces-update.md",slug:"/api/workspaces-update",permalink:"/docs/api/workspaces-update",version:"current",sidebar:"api",previous:{title:"Create a workspace",permalink:"/docs/api/workspaces-create"},next:{title:"Retrieve a workspace",permalink:"/docs/api/workspaces-retrieve"}},u=[],i={toc:u};function b(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},i,t,{components:a,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Creates a workspace. Only the name is required."),Object(c.b)(o.a,{groupId:"serverside-code-samples",defaultValue:"shell",values:[{label:"Text",value:"shell"},{label:"PHP",value:"php"},{label:"C#",value:"csharp"},{label:"Java",value:"java"},{label:"Python",value:"python"},{label:"Ruby",value:"ruby"},{label:"Javascript",value:"javascript"}],mdxType:"Tabs"},Object(c.b)(s.a,{value:"shell",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"POST https://api.seatsio.net/workspaces/{key}\n"))),Object(c.b)(s.a,{value:"php",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-php"},'$seatsioClient->workspaces->update($key, "a workspace");\n'))),Object(c.b)(s.a,{value:"csharp",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-csharp"},'Client.Workspaces.Update(key, "a workspace);\n\n'))),Object(c.b)(s.a,{value:"java",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},'client.workspaces.update(key, "a workspace");\n'))),Object(c.b)(s.a,{value:"python",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-python"},'client.workspaces.update(key, "a workspace")\n'))),Object(c.b)(s.a,{value:"ruby",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ruby"},'client.workspaces.update key: key, name: "a workspace"\n'))),Object(c.b)(s.a,{value:"javascript",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},"await client.workspaces.update(key, 'a workspace');\n\n")))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "a workspace",\n}\n')),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"name"),": the name of the workspace. Can be any string (including spaces or special characters)")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"curl -X POST https://api.seatsio.net/workspaces/18725661-36d6-4755-905a-28ce82d0c2d5 \\\n-u anAdminKey: -X POST -H 'Content-Type: application/json' -d '{\"name\": \"a workspace\"}'\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Response")),Object(c.b)("p",null,"204 - No Content"))}b.isMDXComponent=!0},357:function(e,a,t){"use strict";function n(e){var a,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=n(e[a]))&&(r&&(r+=" "),r+=t);else for(a in e)e[a]&&(r&&(r+=" "),r+=a);return r}a.a=function(){for(var e,a,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(a=n(e))&&(r&&(r+=" "),r+=a);return r}},358:function(e,a,t){"use strict";t.d(a,"a",(function(){return i})),t.d(a,"b",(function(){return m}));var n=t(0),r=t.n(n);function c(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){c(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),u=function(e){var a=r.a.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},i=function(e){var a=u(e.components);return r.a.createElement(p.Provider,{value:a},e.children)},b={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},d=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),i=u(t),d=n,m=i["".concat(o,".").concat(d)]||i[d]||b[d]||c;return t?r.a.createElement(m,s(s({ref:a},p),{},{components:t})):r.a.createElement(m,s({ref:a},p))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var c=t.length,o=new Array(c);o[0]=d;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<c;p++)o[p]=t[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},359:function(e,a,t){"use strict";var n=t(0),r=t(360);a.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},360:function(e,a,t){"use strict";var n=t(0),r=Object(n.createContext)(void 0);a.a=r},361:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(359),o=t(357),s=t(54),l=t.n(s),p=37,u=39;a.a=function(e){var a=e.lazy,t=e.block,s=e.defaultValue,i=e.values,b=e.groupId,d=e.className,m=Object(c.a)(),f=m.tabGroupChoices,v=m.setTabGroupChoices,O=Object(n.useState)(s),y=O[0],j=O[1],w=n.Children.toArray(e.children);if(null!=b){var k=f[b];null!=k&&k!==y&&i.some((function(e){return e.value===k}))&&j(k)}var g=function(e){j(e),null!=b&&v(b,e)},h=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t},d)},i.map((function(e){var a=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===a,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":y===a}),key:a,ref:function(e){return h.push(e)},onKeyDown:function(e){!function(e,a,t){switch(t.keyCode){case u:!function(e,a){var t=e.indexOf(a)+1;e[t]?e[t].focus():e[0].focus()}(e,a);break;case p:!function(e,a){var t=e.indexOf(a)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,a)}}(h,e.target,e)},onFocus:function(){return g(a)},onClick:function(){g(a)}},t)}))),a?Object(n.cloneElement)(w.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},w.map((function(e,a){return Object(n.cloneElement)(e,{key:a,hidden:e.props.value!==y})}))))}},362:function(e,a,t){"use strict";var n=t(0),r=t.n(n);a.a=function(e){var a=e.children,t=e.hidden,n=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:t,className:n},a)}}}]);