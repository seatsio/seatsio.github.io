(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(91)),i=(n(94),n(95),{title:"Introduction",slug:"event-manager-introduction",excerpt:"What is the Event Manager tool, and how to use it?",hidden:!1,createdAt:"2018-07-27T11:33:27.514Z",updatedAt:"2021-02-22T15:16:26.262Z"}),c={unversionedId:"Event Manager/event-manager-introduction",id:"Event Manager/event-manager-introduction",isDocsHomePage:!1,title:"Introduction",description:"Admin users need to be able to perform administrative tasks on events, e.g.",source:"@site/docs/Event Manager/event-manager-introduction.md",slug:"/Event Manager/event-manager-introduction",permalink:"/docs/Event Manager/event-manager-introduction",version:"current",sidebar:"docs",previous:{title:"6. Further reading",permalink:"/docs/Getting Started/getting-started-quick-tutorial/tutorial-further-reading"},next:{title:"How to embed the Event Manager",permalink:"/docs/Event Manager/event-manager-how-to-embed"}},u=[],l={toc:u};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Admin users need to be able to perform administrative tasks on events, e.g.\nbooking or releasing seats or marking seats as not for sale. "),Object(o.b)("p",null,"That\u2019s where the event manager comes in handy: it's a special tool for your admin users, that you can embed in your backoffice application. "),Object(o.b)("p",null,"You can set the Event Manager to different ",Object(o.b)("a",{parentName:"p",href:"doc:event-manager-configuring#mode"},Object(o.b)("em",{parentName:"a"},"modes")),", each mode offering different functionality. "),Object(o.b)("p",null,"Currently, you can use the Event Manager to: "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"book or release objects"),Object(o.b)("li",{parentName:"ul"},"mark objects as for sale or not for sale"),Object(o.b)("li",{parentName:"ul"},"indicate which tables are bookable as a whole, and which ones are bookable by seat"),Object(o.b)("li",{parentName:"ul"},"manage channels")))}s.isMDXComponent=!0},90:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},f=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=s(n),b=r,m=f["".concat(i,".").concat(b)]||f[b]||d[b]||o;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},92:function(e,t,n){"use strict";var r=n(0),a=n(93);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},93:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},94:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(92),i=n(90),c=n(53),u=n.n(c),l=37,s=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,f=e.values,d=e.groupId,b=e.className,m=Object(o.a)(),p=m.tabGroupChoices,v=m.setTabGroupChoices,g=Object(r.useState)(c),y=g[0],O=g[1],h=r.Children.toArray(e.children);if(null!=d){var j=p[d];null!=j&&j!==y&&f.some((function(e){return e.value===j}))&&O(j)}var w=function(e){O(e),null!=d&&v(d,e)},E=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},b)},f.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(i.a)("tabs__item",u.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return E.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(E,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(r.cloneElement)(h.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},95:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}}}]);