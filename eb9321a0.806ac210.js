(window.webpackJsonp=window.webpackJsonp||[]).push([[268],{336:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(354)),l=(n(357),n(358),{title:"multiSelectEnabled",slug:"/renderer-config-multiselectenabled",hidden:!1,createdAt:"2018-08-03T12:02:34.048Z",updatedAt:"2020-09-21T11:52:22.577Z"}),c={unversionedId:"Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-multiselectenabled",id:"Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-multiselectenabled",isDocsHomePage:!1,title:"multiSelectEnabled",description:"Type: boolean",source:"@site/docs/Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-multiselectenabled.md",slug:"/renderer-config-multiselectenabled",permalink:"/docs/renderer-config-multiselectenabled",version:"current",sidebar:"docs",previous:{title:"legend",permalink:"/docs/renderer-config-legend"},next:{title:"showMinimap",permalink:"/docs/renderer-config-showminimap"}},i=[],s={toc:i};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Type"),": boolean\n",Object(o.b)("strong",{parentName:"p"},"Default"),": false"),Object(o.b)("p",null,"If true, users will get a button on the top left hand side they can use to switch between different selection modes: seat selection, rectangle selection or lasso selection."),Object(o.b)("p",null,"multiSelectEnabled works together with ",Object(o.b)("a",{parentName:"p",href:"http://support.seats.io/integrating-seats-io/multilevel-pricing"},"multilevel pricing"),":"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"if the user selects multiple seats with the ",Object(o.b)("strong",{parentName:"li"},"same price levels")," (i.e. with the same categories), the price level selector is shown. When clicking on a price level, the seats become selected and onObjectSelected is triggered for all the seats. onObjectSelected receives the selected price level as second parameter."),Object(o.b)("li",{parentName:"ul"},"if the user selects multiple seats ",Object(o.b)("strong",{parentName:"li"},"without price levels"),", the seats become selected and onObjectSelected is triggered for all the seats. onObjectSelected receives 'undefined' as second parameter (no price level selected)."),Object(o.b)("li",{parentName:"ul"},"if the user selects multiple seats with ",Object(o.b)("strong",{parentName:"li"},"different price levels")," (i.e. with different categories), the price level selector is not shown, and no seats are selected."),Object(o.b)("li",{parentName:"ul"},"if the user selects ",Object(o.b)("strong",{parentName:"li"},"some seats with price levels")," and ",Object(o.b)("strong",{parentName:"li"},"some seats without price levels"),", the price level selector is not shown, and no seats are selected.")))}u.isMDXComponent=!0},353:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},354:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},f=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=u(n),d=r,b=f["".concat(l,".").concat(d)]||f[d]||p[d]||o;return n?a.a.createElement(b,c(c({ref:t},s),{},{components:n})):a.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},355:function(e,t,n){"use strict";var r=n(0),a=n(356);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},356:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},357:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(355),l=n(353),c=n(53),i=n.n(c),s=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,f=e.values,p=e.groupId,d=e.className,b=Object(o.a)(),m=b.tabGroupChoices,g=b.setTabGroupChoices,v=Object(r.useState)(c),h=v[0],O=v[1],y=r.Children.toArray(e.children);if(null!=p){var j=m[p];null!=j&&j!==h&&f.some((function(e){return e.value===j}))&&O(j)}var w=function(e){O(e),null!=p&&g(p,e)},N=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},d)},f.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(l.a)("tabs__item",i.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(r.cloneElement)(y.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},358:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}}}]);