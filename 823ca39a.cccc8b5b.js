(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{226:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return u})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),c=(a(0),a(358)),o=a(361),s=a(362),u={title:"Regenerate the secret key of a subaccount",slug:"/api/regenerate-a-subaccounts-secret-key",hidden:!1,createdAt:"2018-08-02T10:18:29.569Z",updatedAt:"2021-02-23T13:13:23.966Z"},l={unversionedId:"REST API/api-subaccounts/api-regenerate-a-subaccounts-secret-key",id:"REST API/api-subaccounts/api-regenerate-a-subaccounts-secret-key",isDocsHomePage:!1,title:"Regenerate the secret key of a subaccount",description:"Subaccounts are deprecated. Please use Workspaces  instead.",source:"@site/docs/REST API/api-subaccounts/api-regenerate-a-subaccounts-secret-key.md",slug:"/api/regenerate-a-subaccounts-secret-key",permalink:"/docs/api/regenerate-a-subaccounts-secret-key",version:"current"},i=[{value:"Regenerate the secret key",id:"regenerate-the-secret-key",children:[]}],b={toc:i};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"Subaccounts are deprecated. Please use ",Object(c.b)("a",{parentName:"p",href:"/docs/api/workspaces"},"Workspaces"),"  instead."))),Object(c.b)("h3",{id:"regenerate-the-secret-key"},"Regenerate the secret key"),Object(c.b)("p",null,"The secret key of a subaccount should be kept secret at all times. If it does get compromised, you can generate a new one. "),Object(c.b)(o.a,{groupId:"serverside-code-samples",defaultValue:"shell",values:[{label:"Text",value:"shell"},{label:"PHP",value:"php"},{label:"C#",value:"csharp"},{label:"Java",value:"java"},{label:"Python",value:"python"},{label:"Ruby",value:"ruby"},{label:"Javascript",value:"javascript"}],mdxType:"Tabs"},Object(c.b)(s.a,{value:"shell",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"POST https://api.seatsio.net/subaccounts/{id}/secret-key/actions/regenerate\n"))),Object(c.b)(s.a,{value:"php",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-php"},"$seatsioClient->subaccounts->regenerateSecretKey(169);\n"))),Object(c.b)(s.a,{value:"csharp",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-csharp"},"Client.Subaccounts.RegenerateSecretKey(169);\n"))),Object(c.b)(s.a,{value:"java",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},"client.subaccounts.regenerateSecretKey(169);\n"))),Object(c.b)(s.a,{value:"python",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-python"},"client.subaccounts.regenerate_secret_key(169)\n"))),Object(c.b)(s.a,{value:"ruby",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ruby"},"client.subaccounts.regenerate_secret_key id: 169\n"))),Object(c.b)(s.a,{value:"javascript",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},"await client.subaccounts.regenerateSecretKey('subaccountId');\n")))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"curl -X POST https://api.seatsio.net/subaccounts/169/secret-key/actions/regenerate \\\n-u aSecretKey:\n")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json"},'{\n    "secretKey": "7c647eed-0880-4118-9459-82757579703e"\n}\n')))}p.isMDXComponent=!0},357:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},358:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),i=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},b=function(e){var t=i(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),b=i(a),d=n,m=b["".concat(o,".").concat(d)]||b[d]||p[d]||c;return a?r.a.createElement(m,s(s({ref:t},l),{},{components:a})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<c;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},359:function(e,t,a){"use strict";var n=a(0),r=a(360);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},360:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},361:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(359),o=a(357),s=a(54),u=a.n(s),l=37,i=39;t.a=function(e){var t=e.lazy,a=e.block,s=e.defaultValue,b=e.values,p=e.groupId,d=e.className,m=Object(c.a)(),f=m.tabGroupChoices,v=m.setTabGroupChoices,y=Object(n.useState)(s),O=y[0],g=y[1],j=n.Children.toArray(e.children);if(null!=p){var h=f[p];null!=h&&h!==O&&b.some((function(e){return e.value===h}))&&g(h)}var N=function(e){g(e),null!=p&&v(p,e)},w=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":a},d)},b.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(o.a)("tabs__item",u.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case i:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},a)}))),t?Object(n.cloneElement)(j.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},362:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.children,a=e.hidden,n=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}}}]);