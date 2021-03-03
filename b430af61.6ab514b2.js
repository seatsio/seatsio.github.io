(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{273:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return a})),r.d(n,"metadata",(function(){return c})),r.d(n,"toc",(function(){return d})),r.d(n,"default",(function(){return u}));var t=r(3),o=r(7),i=(r(0),r(358)),a=(r(361),r(362),{title:"onDesignerRenderingFailed",slug:"/embedded-designer/ondesignerrenderingfailed",hidden:!1,createdAt:"2019-04-02T12:58:55.980Z",updatedAt:"2019-04-02T13:02:19.694Z"}),c={unversionedId:"Embedded Designer/embedded-designer-configuration/ondesignerrenderingfailed",id:"Embedded Designer/embedded-designer-configuration/ondesignerrenderingfailed",isDocsHomePage:!1,title:"onDesignerRenderingFailed",description:"Type: function(designer)",source:"@site/docs/Embedded Designer/embedded-designer-configuration/ondesignerrenderingfailed.md",slug:"/embedded-designer/ondesignerrenderingfailed",permalink:"/docs/embedded-designer/ondesignerrenderingfailed",version:"current",sidebar:"embeddedDesigner",previous:{title:"onDesignerRendered",permalink:"/docs/embedded-designer/configuration-ondesignerrendered"},next:{title:"openLatestDrawing",permalink:"/docs/embedded-designer/openlatestdrawing"}},d=[],s={toc:d};function u(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},s,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Type"),": function(designer)  "),Object(i.b)("p",null,"Callback function that's invoked when the chart designer could not be loaded for some reason, e.g. in case of an unexisting chart key.\nThe designer object is passed in as a parameter, to allow you to ",Object(i.b)("a",{parentName:"p",href:"/docs/embedded-designer/functions-destroy"},"destroy")," it if needed, like so:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"onDesignerRenderingFailed: function(designer) {\n  designer.destroy();\n}\n")))}u.isMDXComponent=!0},357:function(e,n,r){"use strict";function t(e){var n,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(r=t(e[n]))&&(o&&(o+=" "),o+=r);else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}n.a=function(){for(var e,n,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(n=t(e))&&(o&&(o+=" "),o+=n);return o}},358:function(e,n,r){"use strict";r.d(n,"a",(function(){return l})),r.d(n,"b",(function(){return b}));var t=r(0),o=r.n(t);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function d(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),u=function(e){var n=o.a.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},l=function(e){var n=u(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},p=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,a=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),l=u(r),p=t,b=l["".concat(a,".").concat(p)]||l[p]||f[p]||i;return r?o.a.createElement(b,c(c({ref:n},s),{},{components:r})):o.a.createElement(b,c({ref:n},s))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,a=new Array(i);a[0]=p;var c={};for(var d in n)hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.originalType=e,c.mdxType="string"==typeof e?e:t,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},359:function(e,n,r){"use strict";var t=r(0),o=r(360);n.a=function(){var e=Object(t.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},360:function(e,n,r){"use strict";var t=r(0),o=Object(t.createContext)(void 0);n.a=o},361:function(e,n,r){"use strict";var t=r(0),o=r.n(t),i=r(359),a=r(357),c=r(54),d=r.n(c),s=37,u=39;n.a=function(e){var n=e.lazy,r=e.block,c=e.defaultValue,l=e.values,f=e.groupId,p=e.className,b=Object(i.a)(),m=b.tabGroupChoices,g=b.setTabGroupChoices,y=Object(t.useState)(c),v=y[0],O=y[1],j=t.Children.toArray(e.children);if(null!=f){var h=m[f];null!=h&&h!==v&&l.some((function(e){return e.value===h}))&&O(h)}var w=function(e){O(e),null!=f&&g(f,e)},E=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(a.a)("tabs",{"tabs--block":r},p)},l.map((function(e){var n=e.value,r=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===n,className:Object(a.a)("tabs__item",d.a.tabItem,{"tabs__item--active":v===n}),key:n,ref:function(e){return E.push(e)},onKeyDown:function(e){!function(e,n,r){switch(r.keyCode){case u:!function(e,n){var r=e.indexOf(n)+1;e[r]?e[r].focus():e[0].focus()}(e,n);break;case s:!function(e,n){var r=e.indexOf(n)-1;e[r]?e[r].focus():e[e.length-1].focus()}(e,n)}}(E,e.target,e)},onFocus:function(){return w(n)},onClick:function(){w(n)}},r)}))),n?Object(t.cloneElement)(j.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,n){return Object(t.cloneElement)(e,{key:n,hidden:e.props.value!==v})}))))}},362:function(e,n,r){"use strict";var t=r(0),o=r.n(t);n.a=function(e){var n=e.children,r=e.hidden,t=e.className;return o.a.createElement("div",{role:"tabpanel",hidden:r,className:t},n)}}}]);