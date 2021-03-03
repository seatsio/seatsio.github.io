(window.webpackJsonp=window.webpackJsonp||[]).push([[275],{347:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(358)),i=(n(361),n(362),{title:"Usage details for event in month",slug:"/api/usage-report-event-month",hidden:!1,createdAt:"2019-05-28T14:02:20.780Z",updatedAt:"2019-06-04T14:17:41.026Z"}),c={unversionedId:"REST API/api-usage-reports/api-usage-report-event-month",id:"REST API/api-usage-reports/api-usage-report-event-month",isDocsHomePage:!1,title:"Usage details for event in month",description:"Report with used seats for an event in a month.",source:"@site/docs/REST API/api-usage-reports/api-usage-report-event-month.md",slug:"/api/usage-report-event-month",permalink:"/docs/api/usage-report-event-month",version:"current",sidebar:"api",previous:{title:"Usage details for a single month",permalink:"/docs/api/usage-report-single-month"},next:{title:"Hold Tokens",permalink:"/docs/api/hold-tokens"}},s=[],u={toc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Report with used seats for an event in a month."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"GET /reports/usage/month/{month}/event/{eventId}\n")),Object(a.b)("p",null,"E.g. ",Object(a.b)("inlineCode",{parentName:"p"},"/reports/usage/month/2018-09/event/32429")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "object": "A-1",\n    "numFirstBookings": 1,\n    "firstBookingDate": "2018-09-13T00:16:43.176Z",\n    "numFirstSelections": 0,\n    "numFirstBookingsOrSelections": 1\n  },\n  {\n    "object": "A-2",\n    "numFirstBookings": 0,\n    "firstBookingDate": "2018-09-13T00:16:43.176Z",\n    "numFirstSelections": 1,\n    "numFirstBookingsOrSelections": 1\n  },\n  {\n    "object": "Standing",\n    "numFirstBookings": 34,\n    "numFirstSelections": 56,\n    "numFirstBookingsOrSelections": 56\n  }\n]\n')))}l.isMDXComponent=!0},357:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},358:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,d=p["".concat(i,".").concat(m)]||p[m]||f[m]||a;return n?o.a.createElement(d,c(c({ref:t},u),{},{components:n})):o.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},359:function(e,t,n){"use strict";var r=n(0),o=n(360);t.a=function(){var e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},360:function(e,t,n){"use strict";var r=n(0),o=Object(r.createContext)(void 0);t.a=o},361:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(359),i=n(357),c=n(54),s=n.n(c),u=37,l=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,p=e.values,f=e.groupId,m=e.className,d=Object(a.a)(),b=d.tabGroupChoices,v=d.setTabGroupChoices,g=Object(r.useState)(c),O=g[0],y=g[1],h=r.Children.toArray(e.children);if(null!=f){var j=b[f];null!=j&&j!==O&&p.some((function(e){return e.value===j}))&&y(j)}var w=function(e){y(e),null!=f&&v(f,e)},k=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case l:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(r.cloneElement)(h.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},362:function(e,t,n){"use strict";var r=n(0),o=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return o.a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}}}]);