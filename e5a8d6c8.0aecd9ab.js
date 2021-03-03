(window.webpackJsonp=window.webpackJsonp||[]).push([[260],{332:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),i=(r(0),r(358)),o=(r(361),r(362),{title:"chart.setFilteredCategories()",slug:"/chartsetfilteredcategories",hidden:!1,createdAt:"2019-04-08T23:45:13.309Z",updatedAt:"2019-08-16T06:25:57.524Z"}),c={unversionedId:"Rendering Floor Plans/rendered-chart-properties/chartsetfilteredcategories",id:"Rendering Floor Plans/rendered-chart-properties/chartsetfilteredcategories",isDocsHomePage:!1,title:"chart.setFilteredCategories()",description:"Deprecated. See changeConfig instead.",source:"@site/docs/Rendering Floor Plans/rendered-chart-properties/chartsetfilteredcategories.md",slug:"/chartsetfilteredcategories",permalink:"/docs/chartsetfilteredcategories",version:"current",sidebar:"docs",previous:{title:"chart.setAvailableCategories()",permalink:"/docs/chartsetavailablecategories"},next:{title:"chart.changeConfig()",permalink:"/docs/renderer-chart-properties-chartchangeconfig"}},s=[],l={toc:s};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},Object(i.b)("strong",{parentName:"p"},"Deprecated.")," See ",Object(i.b)("a",{parentName:"p",href:"https://docs.seats.io/docs/renderer-chart-properties-chartchangeconfig"},"changeConfig")," instead."))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Type"),": function(labelsOrIds)",Object(i.b)("br",{parentName:"p"}),"\n","Leaves the specified categories normally visible, while making all others dimmed out. The parameter ",Object(i.b)("inlineCode",{parentName:"p"},"labelsOrIds")," must be an array of strings, which are the label or ID of the target categories to leave fully visible."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"chart.setFilteredCategories(['Stalls', 'Choir']);\nchart.setFilteredCategories([1, 2]);\n")),Object(i.b)("p",null,"The code above makes the Stalls (id: 1) and Choir (id: 2) categories fully visible, while dimming out all others."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Notice")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"This does not make any categories available or unavailable from selection, and it's meant to be used as a visual filter/aid only."))))}u.isMDXComponent=!0},357:function(e,t,r){"use strict";function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}},358:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(r),b=n,f=d["".concat(o,".").concat(b)]||d[b]||p[b]||i;return r?a.a.createElement(f,c(c({ref:t},l),{},{components:r})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},359:function(e,t,r){"use strict";var n=r(0),a=r(360);t.a=function(){var e=Object(n.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},360:function(e,t,r){"use strict";var n=r(0),a=Object(n.createContext)(void 0);t.a=a},361:function(e,t,r){"use strict";var n=r(0),a=r.n(n),i=r(359),o=r(357),c=r(54),s=r.n(c),l=37,u=39;t.a=function(e){var t=e.lazy,r=e.block,c=e.defaultValue,d=e.values,p=e.groupId,b=e.className,f=Object(i.a)(),m=f.tabGroupChoices,v=f.setTabGroupChoices,h=Object(n.useState)(c),g=h[0],O=h[1],y=n.Children.toArray(e.children);if(null!=p){var j=m[p];null!=j&&j!==g&&d.some((function(e){return e.value===j}))&&O(j)}var N=function(e){O(e),null!=p&&v(p,e)},w=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":r},b)},d.map((function(e){var t=e.value,r=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(o.a)("tabs__item",s.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,r){switch(r.keyCode){case u:!function(e,t){var r=e.indexOf(t)+1;e[r]?e[r].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var r=e.indexOf(t)-1;e[r]?e[r].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},r)}))),t?Object(n.cloneElement)(y.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},362:function(e,t,r){"use strict";var n=r(0),a=r.n(n);t.a=function(e){var t=e.children,r=e.hidden,n=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:r,className:n},t)}}}]);