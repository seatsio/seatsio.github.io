(window.webpackJsonp=window.webpackJsonp||[]).push([[202],{270:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(7),a=(r(0),r(354)),c=(r(357),r(358),{title:"objectCategory",slug:"/renderer-config-objectcategory",hidden:!1,createdAt:"2018-08-03T12:04:53.051Z",updatedAt:"2019-10-31T15:12:47.144Z"}),i={unversionedId:"Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-objectcategory",id:"Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-objectcategory",isDocsHomePage:!1,title:"objectCategory",description:"Type: function(object, categories, defaultCategory, extraConfig)",source:"@site/docs/Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-objectcategory.md",slug:"/renderer-config-objectcategory",permalink:"/docs/renderer-config-objectcategory",version:"current",sidebar:"docs",previous:{title:"objectCategories",permalink:"/docs/renderer-config-objectcategories"},next:{title:"extraConfig",permalink:"/docs/renderer-config-extraconfig"}},l=[],u={toc:l};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Type"),": function(object, categories, defaultCategory, extraConfig)\n",Object(a.b)("strong",{parentName:"p"},"Default"),": not implemented"),Object(a.b)("p",null,"The objectCategory function allows the default category of an object to be overridden. It takes a number of parameters:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"object"),": the current object"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"categories"),": all categories of the chart. This object has a method called ",Object(a.b)("inlineCode",{parentName:"li"},"categories.get(categoryKeyOrLabel)"),", which takes a category key or label as a parameter, and which returns a category object based on that input."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"defaultCategory"),": this is either the category assigned to the object, or if it's not set, the category assigned to the section of the object."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"extraConfig"),": see ",Object(a.b)("a",{parentName:"li",href:"renderer-config-extraconfig"},"extraConfig")," ")),Object(a.b)("p",null,"objectCategory must return a category object, either one retrieved from ",Object(a.b)("inlineCode",{parentName:"p"},"categories"),", or the ",Object(a.b)("inlineCode",{parentName:"p"},"defaultCategory"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"objectCategory: function(object, categories, defaultCategory, extraConfig) {\n    if(object.label === 'A-1') {\n        return categories.get('Stalls');\n    }\n    return defaultCategory;\n}\n")))}s.isMDXComponent=!0},353:function(e,t,r){"use strict";function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}},354:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(r),p=n,d=f["".concat(c,".").concat(p)]||f[p]||b[p]||a;return r?o.a.createElement(d,i(i({ref:t},u),{},{components:r})):o.a.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},355:function(e,t,r){"use strict";var n=r(0),o=r(356);t.a=function(){var e=Object(n.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},356:function(e,t,r){"use strict";var n=r(0),o=Object(n.createContext)(void 0);t.a=o},357:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(355),c=r(353),i=r(53),l=r.n(i),u=37,s=39;t.a=function(e){var t=e.lazy,r=e.block,i=e.defaultValue,f=e.values,b=e.groupId,p=e.className,d=Object(a.a)(),g=d.tabGroupChoices,m=d.setTabGroupChoices,y=Object(n.useState)(i),j=y[0],O=y[1],v=n.Children.toArray(e.children);if(null!=b){var h=g[b];null!=h&&h!==j&&f.some((function(e){return e.value===h}))&&O(h)}var C=function(e){O(e),null!=b&&m(b,e)},w=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":r},p)},f.map((function(e){var t=e.value,r=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(c.a)("tabs__item",l.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,r){switch(r.keyCode){case s:!function(e,t){var r=e.indexOf(t)+1;e[r]?e[r].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var r=e.indexOf(t)-1;e[r]?e[r].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return C(t)},onClick:function(){C(t)}},r)}))),t?Object(n.cloneElement)(v.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},358:function(e,t,r){"use strict";var n=r(0),o=r.n(n);t.a=function(e){var t=e.children,r=e.hidden,n=e.className;return o.a.createElement("div",{role:"tabpanel",hidden:r,className:n},t)}}}]);