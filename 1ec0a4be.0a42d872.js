(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{353:function(e,t,r){"use strict";function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}},354:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(r),b=n,d=p["".concat(a,".").concat(b)]||p[b]||f[b]||c;return r?o.a.createElement(d,i(i({ref:t},s),{},{components:r})):o.a.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=b;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var s=2;s<c;s++)a[s]=r[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},355:function(e,t,r){"use strict";var n=r(0),o=r(356);t.a=function(){var e=Object(n.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},356:function(e,t,r){"use strict";var n=r(0),o=Object(n.createContext)(void 0);t.a=o},357:function(e,t,r){"use strict";var n=r(0),o=r.n(n),c=r(355),a=r(353),i=r(53),u=r.n(i),s=37,l=39;t.a=function(e){var t=e.lazy,r=e.block,i=e.defaultValue,p=e.values,f=e.groupId,b=e.className,d=Object(c.a)(),m=d.tabGroupChoices,j=d.setTabGroupChoices,y=Object(n.useState)(i),v=y[0],g=y[1],O=n.Children.toArray(e.children);if(null!=f){var h=m[f];null!=h&&h!==v&&p.some((function(e){return e.value===h}))&&g(h)}var w=function(e){g(e),null!=f&&j(f,e)},P=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(a.a)("tabs",{"tabs--block":r},b)},p.map((function(e){var t=e.value,r=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(a.a)("tabs__item",u.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return P.push(e)},onKeyDown:function(e){!function(e,t,r){switch(r.keyCode){case l:!function(e,t){var r=e.indexOf(t)+1;e[r]?e[r].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var r=e.indexOf(t)-1;e[r]?e[r].focus():e[e.length-1].focus()}(e,t)}}(P,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},r)}))),t?Object(n.cloneElement)(O.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},358:function(e,t,r){"use strict";var n=r(0),o=r.n(n);t.a=function(e){var t=e.children,r=e.hidden,n=e.className;return o.a.createElement("div",{role:"tabpanel",hidden:r,className:n},t)}},98:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),c=(r(0),r(354)),a=(r(357),r(358),{title:"object.pricing",slug:"/renderer-object-properties-objectpricing",hidden:!1,createdAt:"2018-08-24T07:58:59.700Z",updatedAt:"2019-04-16T00:05:43.244Z"}),i={unversionedId:"Rendering Floor Plans/renderer-object-properties/renderer-object-properties-objectpricing",id:"Rendering Floor Plans/renderer-object-properties/renderer-object-properties-objectpricing",isDocsHomePage:!1,title:"object.pricing",description:"Type: array of objects or object",source:"@site/docs/Rendering Floor Plans/renderer-object-properties/renderer-object-properties-objectpricing.md",slug:"/renderer-object-properties-objectpricing",permalink:"/docs/renderer-object-properties-objectpricing",version:"current",sidebar:"docs",previous:{title:"object.labels",permalink:"/docs/renderer-object-properties-objectlabels"},next:{title:"object.status",permalink:"/docs/renderer-object-properties-objectstatus"}},u=[],s={toc:u};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Type"),": array of objects or object"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json"},"[\n  {ticketType: 'student', price: 10, formattedPrice: '10$'},\n  {ticketType: 'normal', price: 20, formattedPrice: '20$'}\n]\n")))}l.isMDXComponent=!0}}]);