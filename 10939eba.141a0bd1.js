(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{357:function(e,r,t){"use strict";function n(e){var r,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(t=n(e[r]))&&(o&&(o+=" "),o+=t);else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}r.a=function(){for(var e,r,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(r=n(e))&&(o&&(o+=" "),o+=r);return o}},358:function(e,r,t){"use strict";t.d(r,"a",(function(){return f})),t.d(r,"b",(function(){return y}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=o.a.createContext({}),s=function(e){var r=o.a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},f=function(e){var r=s(e.components);return o.a.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},d=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),f=s(t),d=n,y=f["".concat(c,".").concat(d)]||f[d]||p[d]||a;return t?o.a.createElement(y,l(l({ref:r},i),{},{components:t})):o.a.createElement(y,l({ref:r},i))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=d;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var i=2;i<a;i++)c[i]=t[i];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},359:function(e,r,t){"use strict";var n=t(0),o=t(360);r.a=function(){var e=Object(n.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},360:function(e,r,t){"use strict";var n=t(0),o=Object(n.createContext)(void 0);r.a=o},361:function(e,r,t){"use strict";var n=t(0),o=t.n(n),a=t(359),c=t(357),l=t(54),u=t.n(l),i=37,s=39;r.a=function(e){var r=e.lazy,t=e.block,l=e.defaultValue,f=e.values,p=e.groupId,d=e.className,y=Object(a.a)(),m=y.tabGroupChoices,b=y.setTabGroupChoices,v=Object(n.useState)(l),O=v[0],g=v[1],h=n.Children.toArray(e.children);if(null!=p){var j=m[p];null!=j&&j!==O&&f.some((function(e){return e.value===j}))&&g(j)}var w=function(e){g(e),null!=p&&b(p,e)},E=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t},d)},f.map((function(e){var r=e.value,t=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===r,className:Object(c.a)("tabs__item",u.a.tabItem,{"tabs__item--active":O===r}),key:r,ref:function(e){return E.push(e)},onKeyDown:function(e){!function(e,r,t){switch(t.keyCode){case s:!function(e,r){var t=e.indexOf(r)+1;e[t]?e[t].focus():e[0].focus()}(e,r);break;case i:!function(e,r){var t=e.indexOf(r)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,r)}}(E,e.target,e)},onFocus:function(){return w(r)},onClick:function(){w(r)}},t)}))),r?Object(n.cloneElement)(h.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},h.map((function(e,r){return Object(n.cloneElement)(e,{key:r,hidden:e.props.value!==O})}))))}},362:function(e,r,t){"use strict";var n=t(0),o=t.n(n);r.a=function(e){var r=e.children,t=e.hidden,n=e.className;return o.a.createElement("div",{role:"tabpanel",hidden:t,className:n},r)}},82:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return l})),t.d(r,"toc",(function(){return u})),t.d(r,"default",(function(){return s}));var n=t(3),o=t(7),a=(t(0),t(358)),c=(t(361),t(362),{title:"Style your floor plan",slug:"/renderer/style-your-floor-plan",hidden:!1,createdAt:"2019-07-22T20:52:30.003Z",updatedAt:"2019-07-22T22:20:48.941Z"}),l={unversionedId:"Rendering Floor Plans/style-your-floor-plan",id:"Rendering Floor Plans/style-your-floor-plan",isDocsHomePage:!1,title:"Style your floor plan",description:"There are several parameters to configure the look and feel of your floor plan embed.",source:"@site/docs/Rendering Floor Plans/style-your-floor-plan.md",slug:"/renderer/style-your-floor-plan",permalink:"/docs/renderer/style-your-floor-plan",version:"current"},u=[],i={toc:u};function s(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},i,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"There are several parameters to configure the look and feel of your floor plan embed."))}s.isMDXComponent=!0}}]);