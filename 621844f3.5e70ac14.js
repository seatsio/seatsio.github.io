(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{190:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return d}));var r=n(3),i=n(7),o=(n(0),n(367)),a=(n(370),n(371),{title:"Configuration",slug:"/embedded-designer/configuration",hidden:!1,createdAt:"2018-08-21T12:58:50.561Z",updatedAt:"2019-11-28T11:06:24.639Z"}),c={unversionedId:"Embedded Designer/embedded-designer-configuration",id:"Embedded Designer/embedded-designer-configuration",isDocsHomePage:!1,title:"Configuration",description:"This section gives an overview of the options you can use when embedding the seats.io chart designer.",source:"@site/docs/Embedded Designer/embedded-designer-configuration.md",slug:"/embedded-designer/configuration",permalink:"/docs/embedded-designer/configuration",version:"current",sidebar:"embeddedDesigner",previous:{title:"Introduction",permalink:"/docs/embedded-designer/introduction"},next:{title:"divId",permalink:"/docs/embedded-designer/configuration-divid"}},u=[],s={toc:u};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This section gives an overview of the options you can use when embedding the seats.io chart designer."),Object(o.b)("p",null,"The minimal required configuration options are: "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"divId: the id if the ",Object(o.b)("inlineCode",{parentName:"li"},"<div>")," element in which you want to render the Designer"),Object(o.b)("li",{parentName:"ul"},"secretKey: your secret key (find it on your ",Object(o.b)("a",{parentName:"li",href:"https://app.seats.io/settings"},"settings")," page).")))}d.isMDXComponent=!0},366:function(e,t,n){"use strict";function r(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}},367:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),d=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=d(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=d(n),p=r,b=l["".concat(a,".").concat(p)]||l[p]||f[p]||o;return n?i.a.createElement(b,c(c({ref:t},s),{},{components:n})):i.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},368:function(e,t,n){"use strict";var r=n(0),i=n(369);t.a=function(){var e=Object(r.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},369:function(e,t,n){"use strict";var r=n(0),i=Object(r.createContext)(void 0);t.a=i},370:function(e,t,n){"use strict";var r=n(0),i=n.n(r),o=n(368),a=n(366),c=n(54),u=n.n(c),s=37,d=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,l=e.values,f=e.groupId,p=e.className,b=Object(o.a)(),m=b.tabGroupChoices,g=b.setTabGroupChoices,v=Object(r.useState)(c),y=v[0],O=v[1],h=r.Children.toArray(e.children);if(null!=f){var j=m[f];null!=j&&j!==y&&l.some((function(e){return e.value===j}))&&O(j)}var w=function(e){O(e),null!=f&&g(f,e)},E=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(a.a)("tabs",{"tabs--block":n},p)},l.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(a.a)("tabs__item",u.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return E.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case d:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(E,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(r.cloneElement)(h.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},371:function(e,t,n){"use strict";var r=n(0),i=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return i.a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}}}]);