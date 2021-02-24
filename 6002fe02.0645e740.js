(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{184:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),c=(r(0),r(354)),o=(r(357),r(358),{title:"chart.clearSelection()",slug:"/renderer-chart-properties-chartclearselection",hidden:!1,createdAt:"2018-08-24T09:30:21.160Z",updatedAt:"2019-12-10T12:48:43.766Z"}),l={unversionedId:"Rendering Floor Plans/rendered-chart-properties/renderer-chart-properties-chartclearselection",id:"Rendering Floor Plans/rendered-chart-properties/renderer-chart-properties-chartclearselection",isDocsHomePage:!1,title:"chart.clearSelection()",description:"type: function(successCallback, failedCallback)",source:"@site/docs/Rendering Floor Plans/rendered-chart-properties/renderer-chart-properties-chartclearselection.md",slug:"/renderer-chart-properties-chartclearselection",permalink:"/docs/renderer-chart-properties-chartclearselection",version:"current",sidebar:"docs",previous:{title:"chart.selectBestAvailable()",permalink:"/docs/renderer-chart-properties-chartselectbestavailableconfig"},next:{title:"chart.selectObjects()",permalink:"/docs/renderer-chart-properties-chartselectobjects"}},i=[],s={toc:i};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"type"),": function(successCallback, failedCallback)"),Object(c.b)("p",null,"Deselects the currently selected objects."),Object(c.b)("p",null,"The optional successCallback is invoked when the selection was successfully cleared. This means that the objects are not selected anymore, and that they have been released if they were temporarily held."),Object(c.b)("p",null,"failedCallback is invoked when releasing the held seats fails (e.g. due to a network issue). This callback is optional, just like successCallback."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},"chart.clearSelection(\n    () => console.log('ok'),\n    () => console.log('not ok')\n);\n")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},"")))}u.isMDXComponent=!0},353:function(e,t,r){"use strict";function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}},354:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,b=p["".concat(o,".").concat(d)]||p[d]||f[d]||c;return r?a.a.createElement(b,l(l({ref:t},s),{},{components:r})):a.a.createElement(b,l({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<c;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},355:function(e,t,r){"use strict";var n=r(0),a=r(356);t.a=function(){var e=Object(n.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},356:function(e,t,r){"use strict";var n=r(0),a=Object(n.createContext)(void 0);t.a=a},357:function(e,t,r){"use strict";var n=r(0),a=r.n(n),c=r(355),o=r(353),l=r(53),i=r.n(l),s=37,u=39;t.a=function(e){var t=e.lazy,r=e.block,l=e.defaultValue,p=e.values,f=e.groupId,d=e.className,b=Object(c.a)(),m=b.tabGroupChoices,h=b.setTabGroupChoices,v=Object(n.useState)(l),y=v[0],O=v[1],j=n.Children.toArray(e.children);if(null!=f){var g=m[f];null!=g&&g!==y&&p.some((function(e){return e.value===g}))&&O(g)}var w=function(e){O(e),null!=f&&h(f,e)},k=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":r},d)},p.map((function(e){var t=e.value,r=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(o.a)("tabs__item",i.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,t,r){switch(r.keyCode){case u:!function(e,t){var r=e.indexOf(t)+1;e[r]?e[r].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var r=e.indexOf(t)-1;e[r]?e[r].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},r)}))),t?Object(n.cloneElement)(j.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},358:function(e,t,r){"use strict";var n=r(0),a=r.n(n);t.a=function(e){var t=e.children,r=e.hidden,n=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:r,className:n},t)}}}]);