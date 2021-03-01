(window.webpackJsonp=window.webpackJsonp||[]).push([[276],{348:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return u})),a.d(t,"default",(function(){return b}));var r=a(3),n=a(7),c=(a(0),a(358)),o=a(361),s=a(362),l={title:"Retrieve a workspace",slug:"/api-workspaces-retrieve",hidden:!1,createdAt:"2020-02-27T22:00:24.127Z",updatedAt:"2020-07-03T16:00:51.844Z"},i={unversionedId:"REST API/api-workspaces/api-workspaces-retrieve",id:"REST API/api-workspaces/api-workspaces-retrieve",isDocsHomePage:!1,title:"Retrieve a workspace",description:"Retrieve a workspace",source:"@site/docs/REST API/api-workspaces/api-workspaces-retrieve.md",slug:"/api-workspaces-retrieve",permalink:"/docs/api-workspaces-retrieve",version:"current",sidebar:"docs",previous:{title:"Update a workspace",permalink:"/docs/api-workspaces-update"},next:{title:"List all workspaces",permalink:"/docs/api-workspaces-list"}},u=[{value:"Retrieve a workspace",id:"retrieve-a-workspace",children:[]}],p={toc:u};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"retrieve-a-workspace"},"Retrieve a workspace"),Object(c.b)(o.a,{groupId:"serverside-code-samples",defaultValue:"shell",values:[{label:"Text",value:"shell"},{label:"PHP",value:"php"},{label:"C#",value:"csharp"},{label:"Java",value:"java"},{label:"Python",value:"python"},{label:"Ruby",value:"ruby"},{label:"Javascript",value:"javascript"}],mdxType:"Tabs"},Object(c.b)(s.a,{value:"shell",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"GET https://api.seatsio.net/workspace/{key}\n"))),Object(c.b)(s.a,{value:"php",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-php"},"$seatsioClient->workspaces->retrieve($key);\n"))),Object(c.b)(s.a,{value:"csharp",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-csharp"},"Client.Workspaces.Retrieve(Key);\n"))),Object(c.b)(s.a,{value:"java",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},"client.workspaces.retrieve(key);\n"))),Object(c.b)(s.a,{value:"python",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-python"},"client.workspaces.retrieve(key)\n"))),Object(c.b)(s.a,{value:"ruby",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ruby"},"client.workspaces.retrieve key: key\n\n"))),Object(c.b)(s.a,{value:"javascript",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},"await client.workspaces.retrieve(key);\n")))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"curl https://api.seatsio.net/workspaces/18725661-36d6-4755-905a-28ce82d0c2d5 \\\n-u anAdminKey:\n")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 169,\n    "name": "a workspace",\n    "key": "18725661-36d6-4755-905a-28ce82d0c2d5",\n    "secretKey": "7c647eed-0880-4118-9459-82757579703e",\n    "isDefault": true,\n    "isTest": false,\n    "isActive": true\n}\n\n')),Object(c.b)("p",null,"Error 404 (Not Found) is returned when the workspace does not exist (or the passed in secret key doesn't give access to the workspace)."))}b.isMDXComponent=!0},357:function(e,t,a){"use strict";function r(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}t.a=function(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},358:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=n.a.createContext({}),u=function(e){var t=n.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=u(a),d=r,m=p["".concat(o,".").concat(d)]||p[d]||b[d]||c;return a?n.a.createElement(m,s(s({ref:t},i),{},{components:a})):n.a.createElement(m,s({ref:t},i))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,o=new Array(c);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var i=2;i<c;i++)o[i]=a[i];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},359:function(e,t,a){"use strict";var r=a(0),n=a(360);t.a=function(){var e=Object(r.useContext)(n.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},360:function(e,t,a){"use strict";var r=a(0),n=Object(r.createContext)(void 0);t.a=n},361:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(359),o=a(357),s=a(54),l=a.n(s),i=37,u=39;t.a=function(e){var t=e.lazy,a=e.block,s=e.defaultValue,p=e.values,b=e.groupId,d=e.className,m=Object(c.a)(),f=m.tabGroupChoices,v=m.setTabGroupChoices,y=Object(r.useState)(s),O=y[0],j=y[1],w=r.Children.toArray(e.children);if(null!=b){var k=f[b];null!=k&&k!==O&&p.some((function(e){return e.value===k}))&&j(k)}var g=function(e){j(e),null!=b&&v(b,e)},h=[];return n.a.createElement("div",null,n.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":a},d)},p.map((function(e){var t=e.value,a=e.label;return n.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return h.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case u:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case i:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(h,e.target,e)},onFocus:function(){return g(t)},onClick:function(){g(t)}},a)}))),t?Object(r.cloneElement)(w.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):n.a.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},362:function(e,t,a){"use strict";var r=a(0),n=a.n(r);t.a=function(e){var t=e.children,a=e.hidden,r=e.className;return n.a.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}}}]);