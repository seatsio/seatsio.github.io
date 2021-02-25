(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{159:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),c=(n(0),n(354)),o=(n(357),n(358),{title:"selectBestAvailable",slug:"/renderer-config-selectbestavailable",hidden:!1,createdAt:"2018-08-03T11:55:23.746Z",updatedAt:"2019-12-02T12:57:29.735Z"}),l={unversionedId:"Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-selectbestavailable",id:"Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-selectbestavailable",isDocsHomePage:!1,title:"selectBestAvailable",description:"Type: object",source:"@site/docs/Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-selectbestavailable.md",slug:"/renderer-config-selectbestavailable",permalink:"/docs/renderer-config-selectbestavailable",version:"current",sidebar:"docs",previous:{title:"canGASelectionBeIncreased",permalink:"/docs/renderer-config-cangaselectionbeincreased"},next:{title:"showRowLines",permalink:"/docs/renderer-config-showrowlines"}},s=[],i={toc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Type"),": object  "),Object(c.b)("p",null,"Automatically pre-select the best available objects (and deselect already selected objects)."),Object(c.b)("p",null,"The object you pass in must contain the number of objects to select, either by specifying a plain number, or a number per ticket type. It can have an optional category key or label, to auto select only objects in that category."),Object(c.b)("p",null,"This works for seats in rows, seats at tables, whole tables (if the table is bookable by table), booths and general admission (GA) areas. "),Object(c.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Do not use this config param if you expect high load on-sales")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"If you use this config parameter, the best available seats are calculated within the ticket buyers browser, which means it will yield the same result for concurrent users.\nUse the ",Object(c.b)("a",{parentName:"p",href:"https://docs.seats.io/docs/api-best-available"},"server-side version ")," of the seats.io best available algorithm instead."))),Object(c.b)("p",null,"To select 2 objects (or places, in the case of a GA) in any category:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},"selectBestAvailable: {\n    number: 2\n}\n")),Object(c.b)("p",null,"To select 2 objects in category 'Stalls':"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},"selectBestAvailable: {\n    number: 2,\n    category: 'Stalls'\n}\n")),Object(c.b)("p",null,"You can also pass in an array of categories. Suppose you want to select seats in the Stalls or Balcony categories:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},"selectBestAvailable: {\n    number: 2,\n    category: ['Stalls', 'Balcony']\n}\n")),Object(c.b)("p",null,"Ticket types are supported as well. E.g. 2 adult tickets and 3 child tickets in either category \u2018Stalls\u2019 or \u2018Balcony\u2019:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},"selectBestAvailable: {\n  category: ['Stalls', 'Balcony'],\n  ticketTypes: {\n    'adult': 2,\n    'child': 3\n  }\n}\n")),Object(c.b)("p",null,"Or 2 adult tickets and 3 child tickets in any category:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},"selectBestAvailable: {\n  ticketTypes: {\n    'adult': 2,\n    'child': 3\n  }\n}\n")),Object(c.b)("p",null,"By default, selecting best available objects clears the current selection. If you want to prevent that, pass in ",Object(c.b)("inlineCode",{parentName:"p"},"clearSelection: false")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},"selectedObjects: ['A-1', 'A-2'],\nselectBestAvailable: {\n    number: 5,\n    clearSelection: false // select the 5 best available seats in addition to A-1 and A-2\n}\n")))}u.isMDXComponent=!0},353:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},354:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),u=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),b=u(n),d=a,f=b["".concat(o,".").concat(d)]||b[d]||p[d]||c;return n?r.a.createElement(f,l(l({ref:t},i),{},{components:n})):r.a.createElement(f,l({ref:t},i))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var i=2;i<c;i++)o[i]=n[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},355:function(e,t,n){"use strict";var a=n(0),r=n(356);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},356:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},357:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(355),o=n(353),l=n(54),s=n.n(l),i=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,l=e.defaultValue,b=e.values,p=e.groupId,d=e.className,f=Object(c.a)(),m=f.tabGroupChoices,v=f.setTabGroupChoices,y=Object(a.useState)(l),g=y[0],j=y[1],h=a.Children.toArray(e.children);if(null!=p){var O=m[p];null!=O&&O!==g&&b.some((function(e){return e.value===O}))&&j(O)}var w=function(e){j(e),null!=p&&v(p,e)},N=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},d)},b.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(o.a)("tabs__item",s.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case i:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(a.cloneElement)(h.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},358:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}}}]);