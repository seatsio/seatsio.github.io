(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{291:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(362)),i=(n(365),n(366),{title:"URI encoding",slug:"/api/uri-encoding",hidden:!1,createdAt:"2018-07-31T08:40:44.718Z",updatedAt:"2018-07-31T08:42:08.582Z"}),c={unversionedId:"REST API/api-overview/api-uri-encoding",id:"REST API/api-overview/api-uri-encoding",isDocsHomePage:!1,title:"URI encoding",description:"Don't forget to URI-encode string parameters in URLs.",source:"@site/docs/REST API/api-overview/api-uri-encoding.md",slug:"/api/uri-encoding",permalink:"/docs/api/uri-encoding",version:"current",sidebar:"api",previous:{title:"GZIP",permalink:"/docs/api/gzip"},next:{title:"Objects",permalink:"/docs/api/objects"}},u=[],l={toc:u};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Don't forget to URI-encode string parameters in URLs."),Object(o.b)("p",null,"For example, the reporting call ",Object(o.b)("inlineCode",{parentName:"p"},"/reports/events/{eventKey}/byCategoryLabel/{label}")," takes a ",Object(o.b)("inlineCode",{parentName:"p"},"label")," parameter. When this parameter contains reserved ASCII characters such as '/' and ':', or non ASCII characters such as '\xe3', you must apply ",Object(o.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Percent-encoding"},"percent-encoding"),". "),Object(o.b)("p",null,"E.g. ",Object(o.b)("inlineCode",{parentName:"p"},"Balc\xe3o Nobre")," becomes ",Object(o.b)("inlineCode",{parentName:"p"},"Balc%C3%A3o%20Nobre"),"."),Object(o.b)("p",null,"Note that our ",Object(o.b)("a",{parentName:"p",href:"/docs/api/client-libraries"},"API Client libraries")," do this under the hood, so you don't have to encode anything when using them."))}s.isMDXComponent=!0},361:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},362:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,b=p["".concat(i,".").concat(d)]||p[d]||f[d]||o;return n?a.a.createElement(b,c(c({ref:t},l),{},{components:n})):a.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},363:function(e,t,n){"use strict";var r=n(0),a=n(364);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},364:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},365:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(363),i=n(361),c=n(54),u=n.n(c),l=37,s=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,p=e.values,f=e.groupId,d=e.className,b=Object(o.a)(),m=b.tabGroupChoices,v=b.setTabGroupChoices,y=Object(r.useState)(c),g=y[0],O=y[1],h=r.Children.toArray(e.children);if(null!=f){var j=m[f];null!=j&&j!==g&&p.some((function(e){return e.value===j}))&&O(j)}var w=function(e){O(e),null!=f&&v(f,e)},C=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},d)},p.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(i.a)("tabs__item",u.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(C,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(r.cloneElement)(h.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},366:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}}}]);