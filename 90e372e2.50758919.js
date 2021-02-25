(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{234:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(7),o=(t(0),t(354)),c=(t(357),t(358),{title:"legend",slug:"/renderer-config-legend",hidden:!1,createdAt:"2018-08-03T12:01:27.368Z",updatedAt:"2020-10-13T07:13:39.903Z"}),i={unversionedId:"Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-legend",id:"Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-legend",isDocsHomePage:!1,title:"legend",description:"showLegend",source:"@site/docs/Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-legend.md",slug:"/renderer-config-legend",permalink:"/docs/renderer-config-legend",version:"current",sidebar:"docs",previous:{title:"regenerateHoldToken",permalink:"/docs/renderer-config-regenerateholdtoken"},next:{title:"multiSelectEnabled",permalink:"/docs/renderer-config-multiselectenabled"}},l=[{value:"showLegend",id:"showlegend",children:[]},{value:"legend.hideNonSelectableCategories",id:"legendhidenonselectablecategories",children:[]},{value:"legend.hidePricing",id:"legendhidepricing",children:[]},{value:"legend.hideCategoryName",id:"legendhidecategoryname",children:[]}],u={toc:l};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"showlegend"},"showLegend"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Type"),": boolean",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("strong",{parentName:"p"},"Default"),": false  "),Object(o.b)("p",null,"If true, a legend with the category names and colors is rendered at the top of the chart."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"showLegend: true\n")),Object(o.b)("h2",{id:"legendhidenonselectablecategories"},"legend.hideNonSelectableCategories"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Type"),": boolean",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("strong",{parentName:"p"},"Default"),": false  "),Object(o.b)("p",null,"Set this property to true to hide non selectable categories in the legend. A non selectable category is a category for which there are no selectable objects on the chart."),Object(o.b)("p",null,"By default, even categories without selectable objects are shown in the legend."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"legend: {\n    hideNonSelectableCategories: true\n}\n")),Object(o.b)("h2",{id:"legendhidepricing"},"legend.hidePricing"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Type"),": boolean",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("strong",{parentName:"p"},"Default"),": false  "),Object(o.b)("p",null,"Set this property to true to only show category labels in the legend, without pricing information. Cannot be used in combination with ",Object(o.b)("inlineCode",{parentName:"p"},"legend.hideCategoryName: true"),". "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"legend: {\n    hidePricing: true\n}\n")),Object(o.b)("h2",{id:"legendhidecategoryname"},"legend.hideCategoryName"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Type"),": boolean",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("strong",{parentName:"p"},"Default"),": false  "),Object(o.b)("p",null,"Set this property to true to only show pricing information in the legend, without the category name. Cannot be used in combination with ",Object(o.b)("inlineCode",{parentName:"p"},"legend.hidePricing: true"),". "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"legend: {\n    hideCategoryName: true\n}\n")))}s.isMDXComponent=!0},353:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}n.a=function(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}},354:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return g}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),s=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},p=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),p=r,g=d["".concat(c,".").concat(p)]||d[p]||b[p]||o;return t?a.a.createElement(g,i(i({ref:n},u),{},{components:t})):a.a.createElement(g,i({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=p;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=t[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},355:function(e,n,t){"use strict";var r=t(0),a=t(356);n.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},356:function(e,n,t){"use strict";var r=t(0),a=Object(r.createContext)(void 0);n.a=a},357:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(355),c=t(353),i=t(54),l=t.n(i),u=37,s=39;n.a=function(e){var n=e.lazy,t=e.block,i=e.defaultValue,d=e.values,b=e.groupId,p=e.className,g=Object(o.a)(),f=g.tabGroupChoices,m=g.setTabGroupChoices,h=Object(r.useState)(i),O=h[0],y=h[1],j=r.Children.toArray(e.children);if(null!=b){var v=f[b];null!=v&&v!==O&&d.some((function(e){return e.value===v}))&&y(v)}var w=function(e){y(e),null!=b&&m(b,e)},N=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t},p)},d.map((function(e){var n=e.value,t=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===n,className:Object(c.a)("tabs__item",l.a.tabItem,{"tabs__item--active":O===n}),key:n,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case s:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case u:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(N,e.target,e)},onFocus:function(){return w(n)},onClick:function(){w(n)}},t)}))),n?Object(r.cloneElement)(j.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,n){return Object(r.cloneElement)(e,{key:n,hidden:e.props.value!==O})}))))}},358:function(e,n,t){"use strict";var r=t(0),a=t.n(r);n.a=function(e){var n=e.children,t=e.hidden,r=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}}}]);