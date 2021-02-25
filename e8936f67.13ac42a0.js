(window.webpackJsonp=window.webpackJsonp||[]).push([[262],{331:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),c=(r(0),r(354)),o=(r(357),r(358),{title:"chart.selectBestAvailable()",slug:"/renderer-chart-properties-chartselectbestavailableconfig",hidden:!1,createdAt:"2018-08-24T08:46:34.631Z",updatedAt:"2019-12-02T12:56:16.020Z"}),i={unversionedId:"Rendering Floor Plans/rendered-chart-properties/renderer-chart-properties-chartselectbestavailableconfig",id:"Rendering Floor Plans/rendered-chart-properties/renderer-chart-properties-chartselectbestavailableconfig",isDocsHomePage:!1,title:"chart.selectBestAvailable()",description:"Type: function(config)",source:"@site/docs/Rendering Floor Plans/rendered-chart-properties/renderer-chart-properties-chartselectbestavailableconfig.md",slug:"/renderer-chart-properties-chartselectbestavailableconfig",permalink:"/docs/renderer-chart-properties-chartselectbestavailableconfig",version:"current",sidebar:"docs",previous:{title:"chart.startNewSession()",permalink:"/docs/chartstartnewsession"},next:{title:"chart.clearSelection()",permalink:"/docs/renderer-chart-properties-chartclearselection"}},l=[],s={toc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Type"),": function(config)  "),Object(c.b)("p",null,"Selects best available objects (and deselects any already selected objects). "),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"config")," parameter should be a JavaScript object that looks like this:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},"chart.selectBestAvailable({\n    'number': 2,\n    'category': 1 // optional\n    'clearSelection': false // optional. Defaults to `true`\n});\n")),Object(c.b)("p",null,"Have a look at the docs for the ",Object(c.b)("a",{parentName:"p",href:"renderer-config-selectbestavailable"},"selectBestAvailable rendering parameter")," for more examples."),Object(c.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Do not use this method if you expect high load on-sales")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},Object(c.b)("inlineCode",{parentName:"p"},"chart.selectBestAvailable()")," calculates the best available seats in the ticket buyers browser, which means it will yield the same result for concurrent users.\nUse the ",Object(c.b)("a",{parentName:"p",href:"https://docs.seats.io/docs/api-best-available"},"server-side version ")," of the seats.io best available algorithm instead."))))}u.isMDXComponent=!0},353:function(e,t,r){"use strict";function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}},354:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,f=p["".concat(o,".").concat(d)]||p[d]||b[d]||c;return r?a.a.createElement(f,i(i({ref:t},s),{},{components:r})):a.a.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<c;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},355:function(e,t,r){"use strict";var n=r(0),a=r(356);t.a=function(){var e=Object(n.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},356:function(e,t,r){"use strict";var n=r(0),a=Object(n.createContext)(void 0);t.a=a},357:function(e,t,r){"use strict";var n=r(0),a=r.n(n),c=r(355),o=r(353),i=r(54),l=r.n(i),s=37,u=39;t.a=function(e){var t=e.lazy,r=e.block,i=e.defaultValue,p=e.values,b=e.groupId,d=e.className,f=Object(c.a)(),m=f.tabGroupChoices,v=f.setTabGroupChoices,h=Object(n.useState)(i),O=h[0],g=h[1],y=n.Children.toArray(e.children);if(null!=b){var j=m[b];null!=j&&j!==O&&p.some((function(e){return e.value===j}))&&g(j)}var w=function(e){g(e),null!=b&&v(b,e)},N=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":r},d)},p.map((function(e){var t=e.value,r=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,r){switch(r.keyCode){case u:!function(e,t){var r=e.indexOf(t)+1;e[r]?e[r].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var r=e.indexOf(t)-1;e[r]?e[r].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},r)}))),t?Object(n.cloneElement)(y.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},358:function(e,t,r){"use strict";var n=r(0),a=r.n(n);t.a=function(e){var t=e.children,r=e.hidden,n=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:r,className:n},t)}}}]);