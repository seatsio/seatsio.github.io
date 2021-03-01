(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{206:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return l})),t.d(a,"metadata",(function(){return p})),t.d(a,"toc",(function(){return i})),t.d(a,"default",(function(){return b}));var r=t(3),n=t(7),c=(t(0),t(358)),o=t(361),s=t(362),l={title:"Create a workspace",slug:"/api-workspaces-create",hidden:!1,createdAt:"2020-02-27T22:00:24.623Z",updatedAt:"2020-07-03T16:00:35.910Z"},p={unversionedId:"REST API/api-workspaces/api-workspaces-create",id:"REST API/api-workspaces/api-workspaces-create",isDocsHomePage:!1,title:"Create a workspace",description:"Creates a workspace. Only the name is required.",source:"@site/docs/REST API/api-workspaces/api-workspaces-create.md",slug:"/api-workspaces-create",permalink:"/docs/api-workspaces-create",version:"current",sidebar:"docs",previous:{title:"Workspaces",permalink:"/docs/api-workspaces"},next:{title:"Update a workspace",permalink:"/docs/api-workspaces-update"}},i=[],u={toc:i};function b(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,t,{components:a,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Creates a workspace. Only the name is required."),Object(c.b)(o.a,{groupId:"serverside-code-samples",defaultValue:"shell",values:[{label:"Text",value:"shell"},{label:"PHP",value:"php"},{label:"C#",value:"csharp"},{label:"Java",value:"java"},{label:"Python",value:"python"},{label:"Ruby",value:"ruby"},{label:"Javascript",value:"javascript"}],mdxType:"Tabs"},Object(c.b)(s.a,{value:"shell",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"POST https://api.seatsio.net/workspaces\n"))),Object(c.b)(s.a,{value:"php",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-php"},'$seatsioClient->workspaces->create("a workspace");\n'))),Object(c.b)(s.a,{value:"csharp",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-csharp"},'Client.Workspaces.Create("a workspace);\n\n'))),Object(c.b)(s.a,{value:"java",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},'client.workspaces.create("a workspace");\n'))),Object(c.b)(s.a,{value:"python",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-python"},'client.workspaces.create("a workspace")\n'))),Object(c.b)(s.a,{value:"ruby",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ruby"},'client.workspaces.create name: "a workspace"\n'))),Object(c.b)(s.a,{value:"javascript",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},"await client.workspaces.create('a workspace');\n\n")))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "a workspace",\n    "isTest": false\n}\n')),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"name"),": the name of the workspace. Can be any string (including spaces or special characters)"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"isTest"),": optional. Defaults to false.")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"curl -X POST https://api.seatsio.net/workspaces \\\n-u anAdminKey: -X POST -H 'Content-Type: application/json' -d '{\"name\": \"a workspace\"}'\n")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 169,\n    "name": "a workspace",\n    "key": "18725661-36d6-4755-905a-28ce82d0c2d5",\n    "secretKey": "7c647eed-0880-4118-9459-82757579703e",\n    "isDefault": true,\n    "isTest": false,\n    "isActive": true\n}\n\n')))}b.isMDXComponent=!0},357:function(e,a,t){"use strict";function r(e){var a,t,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=r(e[a]))&&(n&&(n+=" "),n+=t);else for(a in e)e[a]&&(n&&(n+=" "),n+=a);return n}a.a=function(){for(var e,a,t=0,n="";t<arguments.length;)(e=arguments[t++])&&(a=r(e))&&(n&&(n+=" "),n+=a);return n}},358:function(e,a,t){"use strict";t.d(a,"a",(function(){return u})),t.d(a,"b",(function(){return f}));var r=t(0),n=t.n(r);function c(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){c(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=n.a.createContext({}),i=function(e){var a=n.a.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},u=function(e){var a=i(e.components);return n.a.createElement(p.Provider,{value:a},e.children)},b={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},m=n.a.forwardRef((function(e,a){var t=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=i(t),m=r,f=u["".concat(o,".").concat(m)]||u[m]||b[m]||c;return t?n.a.createElement(f,s(s({ref:a},p),{},{components:t})):n.a.createElement(f,s({ref:a},p))}));function f(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var c=t.length,o=new Array(c);o[0]=m;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<c;p++)o[p]=t[p];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},359:function(e,a,t){"use strict";var r=t(0),n=t(360);a.a=function(){var e=Object(r.useContext)(n.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},360:function(e,a,t){"use strict";var r=t(0),n=Object(r.createContext)(void 0);a.a=n},361:function(e,a,t){"use strict";var r=t(0),n=t.n(r),c=t(359),o=t(357),s=t(54),l=t.n(s),p=37,i=39;a.a=function(e){var a=e.lazy,t=e.block,s=e.defaultValue,u=e.values,b=e.groupId,m=e.className,f=Object(c.a)(),d=f.tabGroupChoices,O=f.setTabGroupChoices,v=Object(r.useState)(s),j=v[0],y=v[1],w=r.Children.toArray(e.children);if(null!=b){var g=d[b];null!=g&&g!==j&&u.some((function(e){return e.value===g}))&&y(g)}var k=function(e){y(e),null!=b&&O(b,e)},h=[];return n.a.createElement("div",null,n.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t},m)},u.map((function(e){var a=e.value,t=e.label;return n.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===a,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":j===a}),key:a,ref:function(e){return h.push(e)},onKeyDown:function(e){!function(e,a,t){switch(t.keyCode){case i:!function(e,a){var t=e.indexOf(a)+1;e[t]?e[t].focus():e[0].focus()}(e,a);break;case p:!function(e,a){var t=e.indexOf(a)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,a)}}(h,e.target,e)},onFocus:function(){return k(a)},onClick:function(){k(a)}},t)}))),a?Object(r.cloneElement)(w.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):n.a.createElement("div",{className:"margin-vert--md"},w.map((function(e,a){return Object(r.cloneElement)(e,{key:a,hidden:e.props.value!==j})}))))}},362:function(e,a,t){"use strict";var r=t(0),n=t.n(r);a.a=function(e){var a=e.children,t=e.hidden,r=e.className;return n.a.createElement("div",{role:"tabpanel",hidden:t,className:r},a)}}}]);