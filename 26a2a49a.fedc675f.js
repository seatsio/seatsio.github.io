(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),i=(n(0),n(362)),o=(n(365),n(366),{title:"URL",slug:"/api/url",hidden:!1}),c={unversionedId:"REST API/api-overview/api-url",id:"REST API/api-overview/api-url",isDocsHomePage:!1,title:"URL",description:"The base URL for all API calls is https://api-{region}.seatsio.net",source:"@site/docs/REST API/api-overview/api-url.md",slug:"/api/url",permalink:"/docs/api/url",version:"current",sidebar:"api",previous:{title:"API Client libraries",permalink:"/docs/api/client-libraries"},next:{title:"Authentication",permalink:"/docs/api/authentication"}},l=[],u={toc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The base URL for all API calls is ",Object(i.b)("inlineCode",{parentName:"p"},"https://api-{region}.seatsio.net")),Object(i.b)("p",null,"Where {region} corresponds to the the region of your account:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"https://api-eu.seatsio.net")," (Europe)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"https://api-na.seatsio.net")," (North America)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"https://api-sa.seatsio.net")," (South America)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"https://api-oc.seatsio.net")," (Oceania)")),Object(i.b)("p",null,"All requests must be made over ",Object(i.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/HTTPS"},"HTTPS"),". If you try to access the seats.io API over HTTP, you\u2019ll receive a 404 (Not Found). "))}s.isMDXComponent=!0},361:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},362:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),b=r,m=p["".concat(o,".").concat(b)]||p[b]||f[b]||i;return n?a.a.createElement(m,c(c({ref:t},u),{},{components:n})):a.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},363:function(e,t,n){"use strict";var r=n(0),a=n(364);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},364:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},365:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(363),o=n(361),c=n(54),l=n.n(c),u=37,s=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,p=e.values,f=e.groupId,b=e.className,m=Object(i.a)(),d=m.tabGroupChoices,v=m.setTabGroupChoices,O=Object(r.useState)(c),y=O[0],h=O[1],j=r.Children.toArray(e.children);if(null!=f){var g=d[f];null!=g&&g!==y&&p.some((function(e){return e.value===g}))&&h(g)}var w=function(e){h(e),null!=f&&v(f,e)},P=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},b)},p.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return P.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(P,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(r.cloneElement)(j.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},366:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}}}]);