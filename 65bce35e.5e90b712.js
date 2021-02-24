(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{192:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(354)),i=(n(357),n(358),{title:"onBestAvailableSelectionFailed",slug:"/renderer-events-onbestavailableselectionfailed",hidden:!1,createdAt:"2018-08-03T13:34:21.920Z",updatedAt:"2018-08-23T14:20:02.657Z"}),c={unversionedId:"Rendering Floor Plans/renderer-react-to-events/renderer-events-onbestavailableselectionfailed",id:"Rendering Floor Plans/renderer-react-to-events/renderer-events-onbestavailableselectionfailed",isDocsHomePage:!1,title:"onBestAvailableSelectionFailed",description:"Type: function()",source:"@site/docs/Rendering Floor Plans/renderer-react-to-events/renderer-events-onbestavailableselectionfailed.md",slug:"/renderer-events-onbestavailableselectionfailed",permalink:"/docs/renderer-events-onbestavailableselectionfailed",version:"current",sidebar:"docs",previous:{title:"onBestAvailableSelected",permalink:"/docs/renderer-events-onbestavailableselected"},next:{title:"onSessionInitialized",permalink:"/docs/renderer-events-onsessioninitialized"}},l=[],s={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Type"),": function()"),Object(o.b)("p",null,"Fired when no best available objects could be found, because there are not enough selectable objects available."),Object(o.b)("p",null,"You should implement this callback if you're using ",Object(o.b)("a",{parentName:"p",href:"renderer-config-selectbestavailable"},"Best Available seat selection"),"."))}u.isMDXComponent=!0},353:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},354:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return p}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},f=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(n),b=r,p=f["".concat(i,".").concat(b)]||f[b]||d[b]||o;return n?a.a.createElement(p,c(c({ref:t},s),{},{components:n})):a.a.createElement(p,c({ref:t},s))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},355:function(e,t,n){"use strict";var r=n(0),a=n(356);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},356:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},357:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(355),i=n(353),c=n(53),l=n.n(c),s=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,f=e.values,d=e.groupId,b=e.className,p=Object(o.a)(),v=p.tabGroupChoices,m=p.setTabGroupChoices,y=Object(r.useState)(c),O=y[0],g=y[1],j=r.Children.toArray(e.children);if(null!=d){var h=v[d];null!=h&&h!==O&&f.some((function(e){return e.value===h}))&&g(h)}var w=function(e){g(e),null!=d&&m(d,e)},E=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},b)},f.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return E.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(E,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(r.cloneElement)(j.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},358:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}}}]);