(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{129:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return c})),n.d(r,"metadata",(function(){return i})),n.d(r,"toc",(function(){return u})),n.d(r,"default",(function(){return s}));var t=n(3),a=n(7),o=(n(0),n(365)),c=(n(368),n(369),{title:"onChartRendered",slug:"/renderer/events-onchartrendered",hidden:!1,createdAt:"2018-08-03T13:33:09.142Z",updatedAt:"2018-08-03T13:41:06.661Z"}),i={unversionedId:"Rendering Floor Plans/renderer-react-to-events/renderer-events-onchartrendered",id:"Rendering Floor Plans/renderer-react-to-events/renderer-events-onchartrendered",isDocsHomePage:!1,title:"onChartRendered",description:"Type: function(chart)",source:"@site/docs/Rendering Floor Plans/renderer-react-to-events/renderer-events-onchartrendered.md",slug:"/renderer/events-onchartrendered",permalink:"/docs/renderer/events-onchartrendered",version:"current",sidebar:"renderer",previous:{title:"React to events",permalink:"/docs/renderer/react-to-events"},next:{title:"onChartRenderingFailed",permalink:"/docs/renderer/events-onchartrenderingfailed"}},u=[],l={toc:u};function s(e){var r=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},l,n,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Type"),": function(chart)  "),Object(o.b)("p",null,"Fired after the seating chart is fully rendered. The rendered chart is passed in as a parameter."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"onChartRendered: function(chart) {\n  // here you are certain that the chart is fully rendered\n}\n")))}s.isMDXComponent=!0},364:function(e,r,n){"use strict";function t(e){var r,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(n=t(e[r]))&&(a&&(a+=" "),a+=n);else for(r in e)e[r]&&(a&&(a+=" "),a+=r);return a}r.a=function(){for(var e,r,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(r=t(e))&&(a&&(a+=" "),a+=r);return a}},365:function(e,r,n){"use strict";n.d(r,"a",(function(){return d})),n.d(r,"b",(function(){return b}));var t=n(0),a=n.n(t);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function u(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var r=a.a.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},d=function(e){var r=s(e.components);return a.a.createElement(l.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},p=a.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=s(n),p=t,b=d["".concat(c,".").concat(p)]||d[p]||f[p]||o;return n?a.a.createElement(b,i(i({ref:r},l),{},{components:n})):a.a.createElement(b,i({ref:r},l))}));function b(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,c=new Array(o);c[0]=p;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:t,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},366:function(e,r,n){"use strict";var t=n(0),a=n(367);r.a=function(){var e=Object(t.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},367:function(e,r,n){"use strict";var t=n(0),a=Object(t.createContext)(void 0);r.a=a},368:function(e,r,n){"use strict";var t=n(0),a=n.n(t),o=n(366),c=n(364),i=n(54),u=n.n(i),l=37,s=39;r.a=function(e){var r=e.lazy,n=e.block,i=e.defaultValue,d=e.values,f=e.groupId,p=e.className,b=Object(o.a)(),m=b.tabGroupChoices,v=b.setTabGroupChoices,y=Object(t.useState)(i),h=y[0],O=y[1],g=t.Children.toArray(e.children);if(null!=f){var j=m[f];null!=j&&j!==h&&d.some((function(e){return e.value===j}))&&O(j)}var w=function(e){O(e),null!=f&&v(f,e)},C=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},p)},d.map((function(e){var r=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===r,className:Object(c.a)("tabs__item",u.a.tabItem,{"tabs__item--active":h===r}),key:r,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,r,n){switch(n.keyCode){case s:!function(e,r){var n=e.indexOf(r)+1;e[n]?e[n].focus():e[0].focus()}(e,r);break;case l:!function(e,r){var n=e.indexOf(r)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,r)}}(C,e.target,e)},onFocus:function(){return w(r)},onClick:function(){w(r)}},n)}))),r?Object(t.cloneElement)(g.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,r){return Object(t.cloneElement)(e,{key:r,hidden:e.props.value!==h})}))))}},369:function(e,r,n){"use strict";var t=n(0),a=n.n(t);r.a=function(e){var r=e.children,n=e.hidden,t=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:n,className:t},r)}}}]);