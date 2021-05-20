(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{132:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(366)),c=(r(369),r(370),{title:"Object Properties",slug:"/renderer/object-properties",hidden:!1,createdAt:"2018-08-24T07:49:59.418Z",updatedAt:"2018-08-24T07:52:14.187Z"}),i={unversionedId:"Rendering Floor Plans/renderer-object-properties",id:"Rendering Floor Plans/renderer-object-properties",isDocsHomePage:!1,title:"Object Properties",description:"Most event handling functions take a bookable object (i.e. a seat, a table, a booth) as a parameter, for example when a user clicks a seat.",source:"@site/docs/Rendering Floor Plans/renderer-object-properties.md",slug:"/renderer/object-properties",permalink:"/docs/renderer/object-properties",version:"current",sidebar:"renderer",previous:{title:"onFilteredCategoriesChanged",permalink:"/docs/renderer/events-onfilteredcategorieschanged"},next:{title:"object.accessible",permalink:"/docs/renderer/objectaccessible"}},s=[],u={toc:s};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Most event handling functions take a bookable object (i.e. a seat, a table, a booth) as a parameter, for example when a user clicks a seat. "),Object(o.b)("p",null,"This documentation section describes the different properties available on these objects."))}l.isMDXComponent=!0},365:function(e,t,r){"use strict";function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}},366:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(r),b=n,d=f["".concat(c,".").concat(b)]||f[b]||p[b]||o;return r?a.a.createElement(d,i(i({ref:t},u),{},{components:r})):a.a.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},367:function(e,t,r){"use strict";var n=r(0),a=r(368);t.a=function(){var e=Object(n.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},368:function(e,t,r){"use strict";var n=r(0),a=Object(n.createContext)(void 0);t.a=a},369:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(367),c=r(365),i=r(54),s=r.n(i),u=37,l=39;t.a=function(e){var t=e.lazy,r=e.block,i=e.defaultValue,f=e.values,p=e.groupId,b=e.className,d=Object(o.a)(),m=d.tabGroupChoices,v=d.setTabGroupChoices,y=Object(n.useState)(i),O=y[0],j=y[1],g=n.Children.toArray(e.children);if(null!=p){var h=m[p];null!=h&&h!==O&&f.some((function(e){return e.value===h}))&&j(h)}var w=function(e){j(e),null!=p&&v(p,e)},k=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":r},b)},f.map((function(e){var t=e.value,r=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(c.a)("tabs__item",s.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,t,r){switch(r.keyCode){case l:!function(e,t){var r=e.indexOf(t)+1;e[r]?e[r].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var r=e.indexOf(t)-1;e[r]?e[r].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},r)}))),t?Object(n.cloneElement)(g.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},370:function(e,t,r){"use strict";var n=r(0),a=r.n(n);t.a=function(e){var t=e.children,r=e.hidden,n=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:r,className:n},t)}}}]);