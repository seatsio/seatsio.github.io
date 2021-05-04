(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{171:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),a=(n(0),n(362)),c=(n(365),n(366),{title:"objectIcon",slug:"/renderer/config-objecticon",hidden:!1,createdAt:"2018-08-03T11:54:13.794Z",updatedAt:"2020-12-10T20:49:00.218Z"}),i={unversionedId:"Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-objecticon",id:"Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-objecticon",isDocsHomePage:!1,title:"objectIcon",description:"Type: function(object, defaultIcon, extraConfig)",source:"@site/docs/Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-objecticon.md",slug:"/renderer/config-objecticon",permalink:"/docs/renderer/config-objecticon",version:"current",sidebar:"renderer",previous:{title:"objectLabel",permalink:"/docs/renderer/config-objectlabel"},next:{title:"isObjectVisible",permalink:"/docs/renderer/config-isobjectvisible"}},l=[],u={toc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Type"),": function(object, defaultIcon, extraConfig)  "),Object(a.b)("p",null,"By default, no icon is shown on rendered floor plans, except for: "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"a wheelchair icon on objects that have an accessible category.   "),Object(a.b)("li",{parentName:"ul"},"a checkmark icon on selected objects.")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"objectIcon")," callback allows you to show other icons within a seat or other object, and to override that default behaviour."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"objectIcon")," should be a function that returns the name of a FontAwesome v4.7.0 icon. ",Object(a.b)("a",{parentName:"p",href:"https://fontawesome.com/v4.7.0/icons/"},"See the full list of available icons.")),Object(a.b)("p",null,"The icon will be sized automatically, based on the size of the object in question."),Object(a.b)("p",null,"The parameters that are passed to ",Object(a.b)("inlineCode",{parentName:"p"},"objectIcon")," are:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"object"),": the current object"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"defaultIcon"),": the default icon (e.g. 'check' in case of a selected object)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"extraConfig"),": see ",Object(a.b)("a",{parentName:"li",href:"/docs/renderer/config-extraconfig"},"extraConfig")," ")),Object(a.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Warning")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"this function is called for each object on the chart; make sure it's fast, or chart rendering times will suffer. Read more ",Object(a.b)("a",{parentName:"p",href:"http://support.seats.io/integrating-seats-io/performance-tips-for-renderer-callbacks"},"here"),"."))))}s.isMDXComponent=!0},361:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},362:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=s(n),p=r,d=b["".concat(c,".").concat(p)]||b[p]||f[p]||a;return n?o.a.createElement(d,i(i({ref:t},u),{},{components:n})):o.a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},363:function(e,t,n){"use strict";var r=n(0),o=n(364);t.a=function(){var e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},364:function(e,t,n){"use strict";var r=n(0),o=Object(r.createContext)(void 0);t.a=o},365:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(363),c=n(361),i=n(54),l=n.n(i),u=37,s=39;t.a=function(e){var t=e.lazy,n=e.block,i=e.defaultValue,b=e.values,f=e.groupId,p=e.className,d=Object(a.a)(),m=d.tabGroupChoices,j=d.setTabGroupChoices,h=Object(r.useState)(i),v=h[0],O=h[1],g=r.Children.toArray(e.children);if(null!=f){var y=m[f];null!=y&&y!==v&&b.some((function(e){return e.value===y}))&&O(y)}var w=function(e){O(e),null!=f&&j(f,e)},N=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},p)},b.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(c.a)("tabs__item",l.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(r.cloneElement)(g.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},366:function(e,t,n){"use strict";var r=n(0),o=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return o.a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}}}]);