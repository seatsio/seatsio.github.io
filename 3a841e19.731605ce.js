(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{134:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=(r(0),r(353)),c=(r(356),r(357),{title:"objectColor",slug:"/renderer-config-objectcolor",hidden:!1,createdAt:"2018-08-03T11:50:07.159Z",updatedAt:"2018-08-23T14:42:44.611Z"}),i={unversionedId:"Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-objectcolor",id:"Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-objectcolor",isDocsHomePage:!1,title:"objectColor",description:"Type: function(object, defaultColor, extraConfig)",source:"@site/docs/Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-objectcolor.md",slug:"/renderer-config-objectcolor",permalink:"/docs/renderer-config-objectcolor",version:"current",sidebar:"docs",previous:{title:"filteredCategories",permalink:"/docs/filteredcategories"},next:{title:"sectionColor",permalink:"/docs/renderer-config-sectioncolor"}},l=[],s={toc:l};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Type"),": function(object, defaultColor, extraConfig)\n",Object(a.b)("strong",{parentName:"p"},"Default"),": Grey if the object is not available for selection, the category color otherwise."),Object(a.b)("p",null,"A function that determines the object color. Can be based on ",Object(a.b)("inlineCode",{parentName:"p"},"object.status"),", ",Object(a.b)("inlineCode",{parentName:"p"},"object.category"),", ",Object(a.b)("inlineCode",{parentName:"p"},"object.isSelectable()")," or on other criteria. "),Object(a.b)("p",null,"By default, selectable objects are shown in their category color, and other objects are rendered grey. "),Object(a.b)("p",null,"Your implementation of ",Object(a.b)("inlineCode",{parentName:"p"},"objectColor")," must return a CSS string (e.g. 'red' or '#ccc')."),Object(a.b)("p",null,"The parameters that are passed to objectColor are:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"object"),": the current object"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"defaultColor"),": the default object color"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"extraConfig"),": see ",Object(a.b)("a",{parentName:"li",href:"renderer-config-extraconfig"},"extraConfig")," ")),Object(a.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Warning")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"this function is called for each object on the chart; make sure it's fast, or chart rendering times will suffer. Avoid using slow methods such as Array.indexOf. Read more ",Object(a.b)("a",{parentName:"p",href:"http://support.seats.io/integrating-seats-io/performance-tips-for-renderer-callbacks"},"here"),"."))),Object(a.b)("iframe",{width:"100%",height:"580",src:"//jsfiddle.net/seatsio/w73h60yg/embedded/js,html,result/",allowfullscreen:"allowfullscreen",frameborder:"0"}))}u.isMDXComponent=!0},352:function(e,t,r){"use strict";function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}},353:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return p}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(r),d=n,p=b["".concat(c,".").concat(d)]||b[d]||f[d]||a;return r?o.a.createElement(p,i(i({ref:t},s),{},{components:r})):o.a.createElement(p,i({ref:t},s))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},354:function(e,t,r){"use strict";var n=r(0),o=r(355);t.a=function(){var e=Object(n.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},355:function(e,t,r){"use strict";var n=r(0),o=Object(n.createContext)(void 0);t.a=o},356:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(354),c=r(352),i=r(53),l=r.n(i),s=37,u=39;t.a=function(e){var t=e.lazy,r=e.block,i=e.defaultValue,b=e.values,f=e.groupId,d=e.className,p=Object(a.a)(),m=p.tabGroupChoices,j=p.setTabGroupChoices,g=Object(n.useState)(i),O=g[0],v=g[1],h=n.Children.toArray(e.children);if(null!=f){var y=m[f];null!=y&&y!==O&&b.some((function(e){return e.value===y}))&&v(y)}var w=function(e){v(e),null!=f&&j(f,e)},N=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":r},d)},b.map((function(e){var t=e.value,r=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(c.a)("tabs__item",l.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,r){switch(r.keyCode){case u:!function(e,t){var r=e.indexOf(t)+1;e[r]?e[r].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var r=e.indexOf(t)-1;e[r]?e[r].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},r)}))),t?Object(n.cloneElement)(h.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},357:function(e,t,r){"use strict";var n=r(0),o=r.n(n);t.a=function(e){var t=e.children,r=e.hidden,n=e.className;return o.a.createElement("div",{role:"tabpanel",hidden:r,className:n},t)}}}]);