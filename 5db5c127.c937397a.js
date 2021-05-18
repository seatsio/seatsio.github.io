(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{183:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),o=(r(0),r(364)),c=(r(367),r(368),{title:"Quick tutorial",slug:"/getting-started-quick-tutorial",hidden:!1,createdAt:"2018-08-21T08:33:33.105Z",updatedAt:"2019-12-02T13:22:42.501Z"}),i={unversionedId:"Getting Started/getting-started-quick-tutorial",id:"Getting Started/getting-started-quick-tutorial",isDocsHomePage:!1,title:"Quick tutorial",description:"1. Create an account",source:"@site/docs/Getting Started/getting-started-quick-tutorial.md",slug:"/getting-started-quick-tutorial",permalink:"/docs/getting-started-quick-tutorial",version:"current"},u=[],l={toc:u};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"/docs/tutorial/create-account"},"Create an account")," "),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"/docs/tutorial/draw-a-floor-plan"},"Draw a floor plan")," "),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"/docs/tutorial/create-an-event"},"Create an event")," "),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"/docs/tutorial/show-the-floor-plan-on-your-page"},"Show the floor plan on your page")," "),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"/docs/tutorial/submit-selected-seats"},"Submit selected seats")," "),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"/docs/tutorial/submit-hold-token"},"Submit hold token")," "),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"/docs/tutorial/book-selected-seats"},"Book selected seats")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"/docs/tutorial/further-reading"},"Further reading"))))}s.isMDXComponent=!0},363:function(e,t,r){"use strict";function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}},364:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=s(r),b=n,d=f["".concat(c,".").concat(b)]||f[b]||p[b]||o;return r?a.a.createElement(d,i(i({ref:t},l),{},{components:r})):a.a.createElement(d,i({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=b;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},365:function(e,t,r){"use strict";var n=r(0),a=r(366);t.a=function(){var e=Object(n.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},366:function(e,t,r){"use strict";var n=r(0),a=Object(n.createContext)(void 0);t.a=a},367:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(365),c=r(363),i=r(54),u=r.n(i),l=37,s=39;t.a=function(e){var t=e.lazy,r=e.block,i=e.defaultValue,f=e.values,p=e.groupId,b=e.className,d=Object(o.a)(),m=d.tabGroupChoices,O=d.setTabGroupChoices,v=Object(n.useState)(i),y=v[0],g=v[1],j=n.Children.toArray(e.children);if(null!=p){var h=m[p];null!=h&&h!==y&&f.some((function(e){return e.value===h}))&&g(h)}var w=function(e){g(e),null!=p&&O(p,e)},N=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":r},b)},f.map((function(e){var t=e.value,r=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(c.a)("tabs__item",u.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,r){switch(r.keyCode){case s:!function(e,t){var r=e.indexOf(t)+1;e[r]?e[r].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var r=e.indexOf(t)-1;e[r]?e[r].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},r)}))),t?Object(n.cloneElement)(j.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},368:function(e,t,r){"use strict";var n=r(0),a=r.n(n);t.a=function(e){var t=e.children,r=e.hidden,n=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:r,className:n},t)}}}]);