(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{107:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),c=(r(0),r(359)),o=(r(362),r(363),{title:"chart.listSelectedObjects()",slug:"/renderer/chartlistselectedobjects",hidden:!1,createdAt:"2018-10-24T11:28:22.522Z",updatedAt:"2018-10-24T11:46:56.482Z"}),i={unversionedId:"Rendering Floor Plans/rendered-chart-properties/chartlistselectedobjects",id:"Rendering Floor Plans/rendered-chart-properties/chartlistselectedobjects",isDocsHomePage:!1,title:"chart.listSelectedObjects()",description:"Type: function()",source:"@site/docs/Rendering Floor Plans/rendered-chart-properties/chartlistselectedobjects.md",slug:"/renderer/chartlistselectedobjects",permalink:"/docs/renderer/chartlistselectedobjects",version:"current",sidebar:"renderer",previous:{title:"chart.startNewSession()",permalink:"/docs/renderer/chartstartnewsession"},next:{title:"chart.selectBestAvailable()",permalink:"/docs/renderer/chart-properties-chartselectbestavailableconfig"}},l=[],s={toc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Type"),": function()",Object(c.b)("br",{parentName:"p"}),"\n",Object(c.b)("strong",{parentName:"p"},"Returns"),": Promise","<","Object[]",">"),Object(c.b)("p",null,"Asynchronously lists all selected objects with their properties. The promise gets resolved to an array of selected objects. "),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},"const selectedObjects = await chart.listSelectedObjects()\n")),Object(c.b)("p",null,"The objects contain many useful properties, such as: "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"the object's category "),Object(c.b)("li",{parentName:"ul"},"optional extraData"),Object(c.b)("li",{parentName:"ul"},'the object\'s label (e.g. "A-1")'),Object(c.b)("li",{parentName:"ul"},"a breakdown of the object's label components: ",Object(c.b)("inlineCode",{parentName:"li"},'{own: "1", parent: "A", section: null, displayedLabel: "A-1"}')),Object(c.b)("li",{parentName:"ul"},"an isOrphan flag"),Object(c.b)("li",{parentName:"ul"},'the objectType (e.g. "Seat")'),Object(c.b)("li",{parentName:"ul"},'the object\'s status (e.g. "booked")')))}u.isMDXComponent=!0},358:function(e,t,r){"use strict";function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}},359:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),f=n,d=p["".concat(o,".").concat(f)]||p[f]||b[f]||c;return r?a.a.createElement(d,i(i({ref:t},s),{},{components:r})):a.a.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<c;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},360:function(e,t,r){"use strict";var n=r(0),a=r(361);t.a=function(){var e=Object(n.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},361:function(e,t,r){"use strict";var n=r(0),a=Object(n.createContext)(void 0);t.a=a},362:function(e,t,r){"use strict";var n=r(0),a=r.n(n),c=r(360),o=r(358),i=r(54),l=r.n(i),s=37,u=39;t.a=function(e){var t=e.lazy,r=e.block,i=e.defaultValue,p=e.values,b=e.groupId,f=e.className,d=Object(c.a)(),m=d.tabGroupChoices,j=d.setTabGroupChoices,O=Object(n.useState)(i),y=O[0],h=O[1],v=n.Children.toArray(e.children);if(null!=b){var g=m[b];null!=g&&g!==y&&p.some((function(e){return e.value===g}))&&h(g)}var w=function(e){h(e),null!=b&&j(b,e)},N=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":r},f)},p.map((function(e){var t=e.value,r=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,r){switch(r.keyCode){case u:!function(e,t){var r=e.indexOf(t)+1;e[r]?e[r].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var r=e.indexOf(t)-1;e[r]?e[r].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},r)}))),t?Object(n.cloneElement)(v.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},363:function(e,t,r){"use strict";var n=r(0),a=r.n(n);t.a=function(e){var t=e.children,r=e.hidden,n=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:r,className:n},t)}}}]);