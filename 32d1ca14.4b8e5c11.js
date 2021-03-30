(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{125:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),c=(r(0),r(359)),o=(r(362),r(363),{title:"chart.selectObjects()",slug:"/renderer/chart-properties-chartselectobjects",hidden:!1,createdAt:"2018-08-24T09:31:33.192Z",updatedAt:"2021-01-06T14:09:33.649Z"}),s={unversionedId:"Rendering Floor Plans/rendered-chart-properties/renderer-chart-properties-chartselectobjects",id:"Rendering Floor Plans/rendered-chart-properties/renderer-chart-properties-chartselectobjects",isDocsHomePage:!1,title:"chart.selectObjects()",description:"Type: function()",source:"@site/docs/Rendering Floor Plans/rendered-chart-properties/renderer-chart-properties-chartselectobjects.md",slug:"/renderer/chart-properties-chartselectobjects",permalink:"/docs/renderer/chart-properties-chartselectobjects",version:"current",sidebar:"renderer",previous:{title:"chart.clearSelection()",permalink:"/docs/renderer/chart-properties-chartclearselection"},next:{title:"chart.deselectObjects()",permalink:"/docs/renderer/chart-properties-chartdeselectobjects"}},i=[],l={toc:i};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Type"),": function()",Object(c.b)("br",{parentName:"p"}),"\n",Object(c.b)("strong",{parentName:"p"},"Returns"),": Promise","<","void",">"),Object(c.b)("p",null,"Selects matched objects. The parameter ",Object(c.b)("inlineCode",{parentName:"p"},"objects")," must be an array of strings or an array of objects."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},"chart.selectObjects(['A-1', 'A-2']);\nchart.selectObjects(['A-1', 'A-2'], () => console.log('selection successful'));\nchart.selectObjects([{id: 'A-1', ticketType: 'adult'}]);\nchart.selectObjects(['General Admission 1', 'General Admission 1']);\nchart.selectObjects([{id: 'General Admission 1', ticketType: 'adult', amount: 3}]);\n")),Object(c.b)("p",null,"If a String is provided, the objects that match the provided IDs will be selected."),Object(c.b)("p",null,"If an array of objects is passed, these objects should have the following structure:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},"{\n    id: String, (required)\n    ticketType: String (optional)\n    amount: Number (optional)\n}\n")),Object(c.b)("p",null,"Note that the promise does not resolve to an array of selected objects. Use ",Object(c.b)("a",{parentName:"p",href:"/docs/renderer/events-onobjectselected"},"onObjectSelected")," for that."))}u.isMDXComponent=!0},358:function(e,t,r){"use strict";function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}},359:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,f=p["".concat(o,".").concat(d)]||p[d]||b[d]||c;return r?a.a.createElement(f,s(s({ref:t},l),{},{components:r})):a.a.createElement(f,s({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<c;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},360:function(e,t,r){"use strict";var n=r(0),a=r(361);t.a=function(){var e=Object(n.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},361:function(e,t,r){"use strict";var n=r(0),a=Object(n.createContext)(void 0);t.a=a},362:function(e,t,r){"use strict";var n=r(0),a=r.n(n),c=r(360),o=r(358),s=r(54),i=r.n(s),l=37,u=39;t.a=function(e){var t=e.lazy,r=e.block,s=e.defaultValue,p=e.values,b=e.groupId,d=e.className,f=Object(c.a)(),m=f.tabGroupChoices,h=f.setTabGroupChoices,j=Object(n.useState)(s),O=j[0],v=j[1],y=n.Children.toArray(e.children);if(null!=b){var g=m[b];null!=g&&g!==O&&p.some((function(e){return e.value===g}))&&v(g)}var w=function(e){v(e),null!=b&&h(b,e)},N=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":r},d)},p.map((function(e){var t=e.value,r=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(o.a)("tabs__item",i.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,r){switch(r.keyCode){case u:!function(e,t){var r=e.indexOf(t)+1;e[r]?e[r].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var r=e.indexOf(t)-1;e[r]?e[r].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},r)}))),t?Object(n.cloneElement)(y.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},363:function(e,t,r){"use strict";var n=r(0),a=r.n(n);t.a=function(e){var t=e.children,r=e.hidden,n=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:r,className:n},t)}}}]);