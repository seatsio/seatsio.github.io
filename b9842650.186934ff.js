(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{280:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(7),o=(t(0),t(360)),c=(t(363),t(364),{title:"object.isInChannel([channelKey])",slug:"/renderer/object-properties-objectisinchannel",hidden:!1,createdAt:"2018-08-24T08:09:42.598Z",updatedAt:"2019-01-07T08:48:41.672Z"}),i={unversionedId:"Rendering Floor Plans/renderer-object-properties/renderer-object-properties-objectisinchannel",id:"Rendering Floor Plans/renderer-object-properties/renderer-object-properties-objectisinchannel",isDocsHomePage:!1,title:"object.isInChannel([channelKey])",description:"Param: channelKey",source:"@site/docs/Rendering Floor Plans/renderer-object-properties/renderer-object-properties-objectisinchannel.md",slug:"/renderer/object-properties-objectisinchannel",permalink:"/docs/renderer/object-properties-objectisinchannel",version:"current",sidebar:"renderer",previous:{title:"object.selectedTicketType",permalink:"/docs/renderer/object-properties-objectselectedtickettype"},next:{title:"object.inSelectableChannel",permalink:"/docs/renderer/object-properties-inselectablechannel"}},l=[],s={toc:l};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Param"),": ",Object(o.b)("inlineCode",{parentName:"p"},"channelKey"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("strong",{parentName:"p"},"Type"),": ",Object(o.b)("inlineCode",{parentName:"p"},"string"),Object(o.b)("br",{parentName:"p"}),"\n","The key of the channel you want to check against."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns"),": ",Object(o.b)("inlineCode",{parentName:"p"},"boolean"),Object(o.b)("br",{parentName:"p"}),"\n","Whether the object is in the specified channel or not."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"object.isInChannel('8950dddc-e51f-c7cb-986a-2c5e728b8c21')\n")))}u.isMDXComponent=!0},359:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}n.a=function(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}},360:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),f=r,d=p["".concat(c,".").concat(f)]||p[f]||b[f]||o;return t?a.a.createElement(d,i(i({ref:n},s),{},{components:t})):a.a.createElement(d,i({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=f;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},361:function(e,n,t){"use strict";var r=t(0),a=t(362);n.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},362:function(e,n,t){"use strict";var r=t(0),a=Object(r.createContext)(void 0);n.a=a},363:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(361),c=t(359),i=t(54),l=t.n(i),s=37,u=39;n.a=function(e){var n=e.lazy,t=e.block,i=e.defaultValue,p=e.values,b=e.groupId,f=e.className,d=Object(o.a)(),m=d.tabGroupChoices,j=d.setTabGroupChoices,y=Object(r.useState)(i),v=y[0],O=y[1],h=r.Children.toArray(e.children);if(null!=b){var g=m[b];null!=g&&g!==v&&p.some((function(e){return e.value===g}))&&O(g)}var w=function(e){O(e),null!=b&&j(b,e)},C=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t},f)},p.map((function(e){var n=e.value,t=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===n,className:Object(c.a)("tabs__item",l.a.tabItem,{"tabs__item--active":v===n}),key:n,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case u:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case s:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(C,e.target,e)},onFocus:function(){return w(n)},onClick:function(){w(n)}},t)}))),n?Object(r.cloneElement)(h.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},h.map((function(e,n){return Object(r.cloneElement)(e,{key:n,hidden:e.props.value!==v})}))))}},364:function(e,n,t){"use strict";var r=t(0),a=t.n(r);n.a=function(e){var n=e.children,t=e.hidden,r=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}}}]);