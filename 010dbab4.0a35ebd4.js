(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{353:function(e,t,r){"use strict";function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}},354:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),d=n,b=p["".concat(a,".").concat(d)]||p[d]||f[d]||i;return r?o.a.createElement(b,c(c({ref:t},u),{},{components:r})):o.a.createElement(b,c({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},355:function(e,t,r){"use strict";var n=r(0),o=r(356);t.a=function(){var e=Object(n.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},356:function(e,t,r){"use strict";var n=r(0),o=Object(n.createContext)(void 0);t.a=o},357:function(e,t,r){"use strict";var n=r(0),o=r.n(n),i=r(355),a=r(353),c=r(53),s=r.n(c),u=37,l=39;t.a=function(e){var t=e.lazy,r=e.block,c=e.defaultValue,p=e.values,f=e.groupId,d=e.className,b=Object(i.a)(),m=b.tabGroupChoices,v=b.setTabGroupChoices,y=Object(n.useState)(c),O=y[0],h=y[1],j=n.Children.toArray(e.children);if(null!=f){var g=m[f];null!=g&&g!==O&&p.some((function(e){return e.value===g}))&&h(g)}var w=function(e){h(e),null!=f&&v(f,e)},P=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(a.a)("tabs",{"tabs--block":r},d)},p.map((function(e){var t=e.value,r=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(a.a)("tabs__item",s.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return P.push(e)},onKeyDown:function(e){!function(e,t,r){switch(r.keyCode){case l:!function(e,t){var r=e.indexOf(t)+1;e[r]?e[r].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var r=e.indexOf(t)-1;e[r]?e[r].focus():e[e.length-1].focus()}(e,t)}}(P,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},r)}))),t?Object(n.cloneElement)(j.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},358:function(e,t,r){"use strict";var n=r(0),o=r.n(n);t.a=function(e){var t=e.children,r=e.hidden,n=e.className;return o.a.createElement("div",{role:"tabpanel",hidden:r,className:n},t)}},67:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),i=(r(0),r(354)),a=(r(357),r(358),{title:"section.isInteractive",slug:"/renderer-object-properties-sectionisinteractive",hidden:!1,createdAt:"2018-08-24T08:16:08.224Z",updatedAt:"2019-12-10T12:43:03.437Z"}),c={unversionedId:"Rendering Floor Plans/renderer-object-properties/renderer-object-properties-sectionisinteractive",id:"Rendering Floor Plans/renderer-object-properties/renderer-object-properties-sectionisinteractive",isDocsHomePage:!1,title:"section.isInteractive",description:"type: boolean",source:"@site/docs/Rendering Floor Plans/renderer-object-properties/renderer-object-properties-sectionisinteractive.md",slug:"/renderer-object-properties-sectionisinteractive",permalink:"/docs/renderer-object-properties-sectionisinteractive",version:"current",sidebar:"docs",previous:{title:"section.selectableCategories",permalink:"/docs/renderer-object-properties-sectionselectablecategories"},next:{title:"Rendered Chart Properties",permalink:"/docs/rendered-chart-properties"}},s=[],u={toc:s};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"type"),": boolean\nAn interactive section reacts to mouse hovers by changing color and showing a tooltip. This is determined by the zoom level: when a chart is zoomed out, sections are interactive. When a user clicks on a section, the chart zooms in, and the sections are not interactive anymore. Instead the individual objects become interactive."))}l.isMDXComponent=!0}}]);