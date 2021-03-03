(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),o=(n(0),n(358)),i=(n(361),n(362),{title:"How to embed the Event Manager",slug:"/event-manager/how-to-embed",hidden:!1,createdAt:"2018-07-27T11:35:01.450Z",updatedAt:"2020-09-02T09:26:53.821Z"}),c={unversionedId:"Event Manager/event-manager-how-to-embed",id:"Event Manager/event-manager-how-to-embed",isDocsHomePage:!1,title:"How to embed the Event Manager",description:"To show the event manager to your admins or box office managers, you need to do the following:",source:"@site/docs/Event Manager/event-manager-how-to-embed.md",slug:"/event-manager/how-to-embed",permalink:"/docs/event-manager/how-to-embed",version:"current",sidebar:"eventManager",previous:{title:"Introduction",permalink:"/docs/event-manager/introduction"},next:{title:"Configuring the Event Manager",permalink:"/docs/event-manager/configuring"}},s=[],l={toc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To show the event manager to your admins or box office managers, you need to do the following:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"add an empty div to your page and give it an id (\u2018event-manager\u2019 is a good choice)"),Object(o.b)("li",{parentName:"ol"},"load ",Object(o.b)("a",{parentName:"li",href:"https://cdn.seatsio.net/chart.js"},"https://cdn.seatsio.net/chart.js")),Object(o.b)("li",{parentName:"ol"},"create a new ",Object(o.b)("inlineCode",{parentName:"li"},"seatsio.EventManager")," object, configure it and call its ",Object(o.b)("inlineCode",{parentName:"li"},"render()")," method")),Object(o.b)("p",null,"So in short: just copy & paste this code snippet and adapt it to your needs."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},"<div id=\"event-manager\"></div>\n\n<script src=\"https://cdn.seatsio.net/chart.js\"><\/script>\n<script>\n    new seatsio.EventManager({\n        divId: 'event-manager',\n        secretKey: 'your secret key', // never expose the secret key on a public web page!\n        event: 'your event key',\n        mode: 'manageForSaleConfig' // 'manageObjectStatuses' or 'manageForSaleConfig'. More to follow.\n    }).render();\n<\/script>\n")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"A special note to React, Angular and Android users")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"The easiest way to show the event manager is to use the official wrapper packages: "),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"React"),": ",Object(o.b)("a",{parentName:"li",href:"https://github.com/seatsio/seatsio-react"},"https://github.com/seatsio/seatsio-react")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Angular"),": ",Object(o.b)("a",{parentName:"li",href:"https://github.com/seatsio/seatsio-angular"},"https://github.com/seatsio/seatsio-angular")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Android"),": ",Object(o.b)("a",{parentName:"li",href:"https://github.com/seatsio/seatsio-android"},"https://github.com/seatsio/seatsio-android")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"TypeScript"),": ",Object(o.b)("a",{parentName:"li",href:"https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/seatsio"},"https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/seatsio"))))))}u.isMDXComponent=!0},357:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},358:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=a,d=p["".concat(i,".").concat(b)]||p[b]||m[b]||o;return n?r.a.createElement(d,c(c({ref:t},l),{},{components:n})):r.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},359:function(e,t,n){"use strict";var a=n(0),r=n(360);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},360:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},361:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(359),i=n(357),c=n(54),s=n.n(c),l=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,p=e.values,m=e.groupId,b=e.className,d=Object(o.a)(),f=d.tabGroupChoices,v=d.setTabGroupChoices,g=Object(a.useState)(c),h=g[0],y=g[1],O=a.Children.toArray(e.children);if(null!=m){var j=f[m];null!=j&&j!==h&&p.some((function(e){return e.value===j}))&&y(j)}var w=function(e){y(e),null!=m&&v(m,e)},N=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},b)},p.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(a.cloneElement)(O.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},362:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}}}]);