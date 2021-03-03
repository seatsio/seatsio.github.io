(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{280:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(7),a=(r(0),r(358)),c=(r(361),r(362),{title:"ga.numSelected",slug:"/renderer-object-properties-ge-numselected",hidden:!1,createdAt:"2018-08-24T08:13:35.020Z",updatedAt:"2018-08-24T08:13:46.124Z"}),i={unversionedId:"Rendering Floor Plans/renderer-object-properties/renderer-object-properties-ge-numselected",id:"Rendering Floor Plans/renderer-object-properties/renderer-object-properties-ge-numselected",isDocsHomePage:!1,title:"ga.numSelected",description:"Type: number",source:"@site/docs/Rendering Floor Plans/renderer-object-properties/renderer-object-properties-ge-numselected.md",slug:"/renderer-object-properties-ge-numselected",permalink:"/docs/renderer-object-properties-ge-numselected",version:"current",sidebar:"docs",previous:{title:"ga.numFree",permalink:"/docs/renderer-object-properties-ga-numfree"},next:{title:"ga.selectionPerTicketType",permalink:"/docs/renderer-object-properties-ga-selection-per-ticket-type"}},u=[],l={toc:u};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Type"),": number",Object(a.b)("br",{parentName:"p"}),"\n","The total number of places the user selected in the GA area. If there are multiple ticket types, numSelected is equal to the sum of all selections per ticket type."))}s.isMDXComponent=!0},357:function(e,t,r){"use strict";function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}},358:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(r),d=n,m=p["".concat(c,".").concat(d)]||p[d]||f[d]||a;return r?o.a.createElement(m,i(i({ref:t},l),{},{components:r})):o.a.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},359:function(e,t,r){"use strict";var n=r(0),o=r(360);t.a=function(){var e=Object(n.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},360:function(e,t,r){"use strict";var n=r(0),o=Object(n.createContext)(void 0);t.a=o},361:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(359),c=r(357),i=r(54),u=r.n(i),l=37,s=39;t.a=function(e){var t=e.lazy,r=e.block,i=e.defaultValue,p=e.values,f=e.groupId,d=e.className,m=Object(a.a)(),b=m.tabGroupChoices,y=m.setTabGroupChoices,v=Object(n.useState)(i),g=v[0],O=v[1],j=n.Children.toArray(e.children);if(null!=f){var h=b[f];null!=h&&h!==g&&p.some((function(e){return e.value===h}))&&O(h)}var w=function(e){O(e),null!=f&&y(f,e)},P=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":r},d)},p.map((function(e){var t=e.value,r=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(c.a)("tabs__item",u.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return P.push(e)},onKeyDown:function(e){!function(e,t,r){switch(r.keyCode){case s:!function(e,t){var r=e.indexOf(t)+1;e[r]?e[r].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var r=e.indexOf(t)-1;e[r]?e[r].focus():e[e.length-1].focus()}(e,t)}}(P,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},r)}))),t?Object(n.cloneElement)(j.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},362:function(e,t,r){"use strict";var n=r(0),o=r.n(n);t.a=function(e){var t=e.children,r=e.hidden,n=e.className;return o.a.createElement("div",{role:"tabpanel",hidden:r,className:n},t)}}}]);