(window.webpackJsonp=window.webpackJsonp||[]).push([[250],{320:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),c=n(7),o=(n(0),n(358)),a=(n(361),n(362),{title:"onObjectSelected",slug:"/renderer/events-onobjectselected",hidden:!1,createdAt:"2018-08-03T13:33:32.576Z",updatedAt:"2018-08-23T14:18:40.093Z"}),i={unversionedId:"Rendering Floor Plans/renderer-react-to-events/renderer-events-onobjectselected",id:"Rendering Floor Plans/renderer-react-to-events/renderer-events-onobjectselected",isDocsHomePage:!1,title:"onObjectSelected",description:"Type: function(object, selectedTicketType)",source:"@site/docs/Rendering Floor Plans/renderer-react-to-events/renderer-events-onobjectselected.md",slug:"/renderer/events-onobjectselected",permalink:"/docs/renderer/events-onobjectselected",version:"current",sidebar:"renderer",previous:{title:"onObjectClicked",permalink:"/docs/renderer/events-onobjectclicked"},next:{title:"onObjectDeselected",permalink:"/docs/renderer/events-onobjectdeselected"}},l=[],s={toc:l};function u(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Type"),": function(object, selectedTicketType)  "),Object(o.b)("p",null,"Fired when the user selects an object. The selected object is passed into this function as a parameter. "),Object(o.b)("p",null,"selectedTicketType is only passed when using ",Object(o.b)("a",{parentName:"p",href:"/docs/renderer/config-pricing"},"multi-level pricing"),". The ticketType object contains a price and a ticketType property: "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'{\n    "price": 40\n    "ticketType": "child"\n}\n')))}u.isMDXComponent=!0},357:function(e,t,n){"use strict";function r(e){var t,n,c="";if("string"==typeof e||"number"==typeof e)c+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(c&&(c+=" "),c+=n);else for(t in e)e[t]&&(c&&(c+=" "),c+=t);return c}t.a=function(){for(var e,t,n=0,c="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(c&&(c+=" "),c+=t);return c}},358:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),c=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var s=c.a.createContext({}),u=function(e){var t=c.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return c.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},f=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,b=p["".concat(a,".").concat(f)]||p[f]||d[f]||o;return n?c.a.createElement(b,i(i({ref:t},s),{},{components:n})):c.a.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var s=2;s<o;s++)a[s]=n[s];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},359:function(e,t,n){"use strict";var r=n(0),c=n(360);t.a=function(){var e=Object(r.useContext)(c.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},360:function(e,t,n){"use strict";var r=n(0),c=Object(r.createContext)(void 0);t.a=c},361:function(e,t,n){"use strict";var r=n(0),c=n.n(r),o=n(359),a=n(357),i=n(54),l=n.n(i),s=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,i=e.defaultValue,p=e.values,d=e.groupId,f=e.className,b=Object(o.a)(),m=b.tabGroupChoices,v=b.setTabGroupChoices,y=Object(r.useState)(i),j=y[0],O=y[1],g=r.Children.toArray(e.children);if(null!=d){var h=m[d];null!=h&&h!==j&&p.some((function(e){return e.value===h}))&&O(h)}var w=function(e){O(e),null!=d&&v(d,e)},T=[];return c.a.createElement("div",null,c.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(a.a)("tabs",{"tabs--block":n},f)},p.map((function(e){var t=e.value,n=e.label;return c.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(a.a)("tabs__item",l.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(T,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(r.cloneElement)(g.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):c.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},362:function(e,t,n){"use strict";var r=n(0),c=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return c.a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}}}]);