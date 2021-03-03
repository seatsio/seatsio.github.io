(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),c=(n(0),n(358)),o=(n(361),n(362),{title:"chart.listSelectedObjects()",slug:"/chartlistselectedobjects",hidden:!1,createdAt:"2018-10-24T11:28:22.522Z",updatedAt:"2018-10-24T11:46:56.482Z"}),l={unversionedId:"Rendering Floor Plans/rendered-chart-properties/chartlistselectedobjects",id:"Rendering Floor Plans/rendered-chart-properties/chartlistselectedobjects",isDocsHomePage:!1,title:"chart.listSelectedObjects()",description:"Type: function(selectedObjectsCallback)",source:"@site/docs/Rendering Floor Plans/rendered-chart-properties/chartlistselectedobjects.md",slug:"/chartlistselectedobjects",permalink:"/docs/chartlistselectedobjects",version:"current",sidebar:"docs",previous:{title:"chart.zoomToSelectedObjects()",permalink:"/docs/renderer-chart-properties-chartzoomtoselectedobjects"},next:{title:"Authentication",permalink:"/docs/api-authentication"}},i=[],s={toc:i};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Type"),": function(selectedObjectsCallback)  "),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},"chart.listSelectedObjects(callback)\n")),Object(c.b)("p",null,"Asynchronously lists all selected objects with their properties. The provided callback is invoked on each selected object. "),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},"chart.listSelectedObjects(selectedObject => console.log(selectedObject.label));\n")),Object(c.b)("p",null,"The objects passed to the callback contain many useful properties, such as: "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"the object's category "),Object(c.b)("li",{parentName:"ul"},"optional extraData"),Object(c.b)("li",{parentName:"ul"},'the object\'s label (e.g. "A-1")'),Object(c.b)("li",{parentName:"ul"},"a breakdown of the object's label components: ",Object(c.b)("inlineCode",{parentName:"li"},'{own: "1", parent: "A", section: null, displayedLabel: "A-1"}')),Object(c.b)("li",{parentName:"ul"},"an isOrphan flag"),Object(c.b)("li",{parentName:"ul"},'the objectType (e.g. "Seat")'),Object(c.b)("li",{parentName:"ul"},'the object\'s status (e.g. "booked")')))}u.isMDXComponent=!0},357:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},358:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,f=b["".concat(o,".").concat(d)]||b[d]||p[d]||c;return n?a.a.createElement(f,l(l({ref:t},s),{},{components:n})):a.a.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<c;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},359:function(e,t,n){"use strict";var r=n(0),a=n(360);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},360:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},361:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(359),o=n(357),l=n(54),i=n.n(l),s=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,l=e.defaultValue,b=e.values,p=e.groupId,d=e.className,f=Object(c.a)(),m=f.tabGroupChoices,j=f.setTabGroupChoices,O=Object(r.useState)(l),h=O[0],v=O[1],y=r.Children.toArray(e.children);if(null!=p){var g=m[p];null!=g&&g!==h&&b.some((function(e){return e.value===g}))&&v(g)}var w=function(e){v(e),null!=p&&j(p,e)},N=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},d)},b.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(o.a)("tabs__item",i.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(r.cloneElement)(y.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},362:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}}}]);