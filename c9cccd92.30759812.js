(window.webpackJsonp=window.webpackJsonp||[]).push([[229],{299:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return u})),t.d(r,"default",(function(){return s}));var n=t(3),o=t(7),a=(t(0),t(358)),c=(t(361),t(362),{title:"cursorTooltip",slug:"/renderer/config-cursortooltip",hidden:!1,createdAt:"2018-12-17T18:58:27.515Z",updatedAt:"2018-12-27T21:30:47.858Z"}),i={unversionedId:"Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-cursortooltip",id:"Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-cursortooltip",isDocsHomePage:!1,title:"cursorTooltip",description:"Deprecated. Settings are inherited directly from the newer objectTooltip setting.",source:"@site/docs/Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-cursortooltip.md",slug:"/renderer/config-cursortooltip",permalink:"/docs/renderer/config-cursortooltip",version:"current",sidebar:"renderer",previous:{title:"fitTo",permalink:"/docs/renderer/config-fitto"},next:{title:"ticketListings",permalink:"/docs/renderer/config-ticketlistings"}},u=[],l={toc:u};function s(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Deprecated.")," Settings are inherited directly from the newer ",Object(a.b)("a",{parentName:"p",href:"/docs/renderer/config-objecttooltip"},"objectTooltip")," setting."))}s.isMDXComponent=!0},357:function(e,r,t){"use strict";function n(e){var r,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(t=n(e[r]))&&(o&&(o+=" "),o+=t);else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}r.a=function(){for(var e,r,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(r=n(e))&&(o&&(o+=" "),o+=r);return o}},358:function(e,r,t){"use strict";t.d(r,"a",(function(){return f})),t.d(r,"b",(function(){return b}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),s=function(e){var r=o.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},f=function(e){var r=s(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},d=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=s(t),d=n,b=f["".concat(c,".").concat(d)]||f[d]||p[d]||a;return t?o.a.createElement(b,i(i({ref:r},l),{},{components:t})):o.a.createElement(b,i({ref:r},l))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=d;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},359:function(e,r,t){"use strict";var n=t(0),o=t(360);r.a=function(){var e=Object(n.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},360:function(e,r,t){"use strict";var n=t(0),o=Object(n.createContext)(void 0);r.a=o},361:function(e,r,t){"use strict";var n=t(0),o=t.n(n),a=t(359),c=t(357),i=t(54),u=t.n(i),l=37,s=39;r.a=function(e){var r=e.lazy,t=e.block,i=e.defaultValue,f=e.values,p=e.groupId,d=e.className,b=Object(a.a)(),m=b.tabGroupChoices,y=b.setTabGroupChoices,g=Object(n.useState)(i),v=g[0],O=g[1],j=n.Children.toArray(e.children);if(null!=p){var h=m[p];null!=h&&h!==v&&f.some((function(e){return e.value===h}))&&O(h)}var w=function(e){O(e),null!=p&&y(p,e)},E=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t},d)},f.map((function(e){var r=e.value,t=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===r,className:Object(c.a)("tabs__item",u.a.tabItem,{"tabs__item--active":v===r}),key:r,ref:function(e){return E.push(e)},onKeyDown:function(e){!function(e,r,t){switch(t.keyCode){case s:!function(e,r){var t=e.indexOf(r)+1;e[t]?e[t].focus():e[0].focus()}(e,r);break;case l:!function(e,r){var t=e.indexOf(r)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,r)}}(E,e.target,e)},onFocus:function(){return w(r)},onClick:function(){w(r)}},t)}))),r?Object(n.cloneElement)(j.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,r){return Object(n.cloneElement)(e,{key:r,hidden:e.props.value!==v})}))))}},362:function(e,r,t){"use strict";var n=t(0),o=t.n(n);r.a=function(e){var r=e.children,t=e.hidden,n=e.className;return o.a.createElement("div",{role:"tabpanel",hidden:t,className:n},r)}}}]);