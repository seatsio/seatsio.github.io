(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{226:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(354)),c=(n(357),n(358),{title:"colorScheme",slug:"/colorscheme",hidden:!1,createdAt:"2019-07-22T20:53:35.661Z",updatedAt:"2019-10-03T16:40:03.957Z"}),i={unversionedId:"Rendering Floor Plans/style-your-floor-plan/colorscheme",id:"Rendering Floor Plans/style-your-floor-plan/colorscheme",isDocsHomePage:!1,title:"colorScheme",description:"Type: string",source:"@site/docs/Rendering Floor Plans/style-your-floor-plan/colorscheme.md",slug:"/colorscheme",permalink:"/docs/colorscheme",version:"current",sidebar:"docs",previous:{title:"channels",permalink:"/docs/renderer-config-channels"},next:{title:"colors",permalink:"/docs/colors"}},l=[],s={toc:l};function u(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Type"),": string",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("strong",{parentName:"p"},"Default"),": ",Object(o.b)("inlineCode",{parentName:"p"},'"light"'),"  "),Object(o.b)("p",null,Object(o.b)("img",{alt:"Screen Shot 2019-07-22 at 2.24.34 PM.png",src:n(412).default})),Object(o.b)("p",null,"Sets the color scheme for the user interface. The colors of certain floor plan elements, such as zoomed-in sections, will also be adjusted accordingly."),Object(o.b)("p",null,"You can pick between:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"light")," - ",Object(o.b)("strong",{parentName:"li"},"Default.")," Ideal for applications with light backdrops."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"dark")," - Ideal for applications with dark backdrops.")),Object(o.b)("iframe",{width:"100%",height:"580",src:"//jsfiddle.net/seatsio/j63n5Loc/21/embedded/js,html,result/",allowfullscreen:"allowfullscreen",frameborder:"0"}),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Notice about dark background")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"When using the ",Object(o.b)("inlineCode",{parentName:"p"},"dark")," setting, notice that the background remains transparent. Make sure that the color of chart container is also a dark shade."))))}u.isMDXComponent=!0},353:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},354:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,d=p["".concat(c,".").concat(b)]||p[b]||f[b]||o;return n?a.a.createElement(d,i(i({ref:t},s),{},{components:n})):a.a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},355:function(e,t,n){"use strict";var r=n(0),a=n(356);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},356:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},357:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(355),c=n(353),i=n(54),l=n.n(i),s=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,i=e.defaultValue,p=e.values,f=e.groupId,b=e.className,d=Object(o.a)(),m=d.tabGroupChoices,h=d.setTabGroupChoices,v=Object(r.useState)(i),O=v[0],g=v[1],j=r.Children.toArray(e.children);if(null!=f){var y=m[f];null!=y&&y!==O&&p.some((function(e){return e.value===y}))&&g(y)}var w=function(e){g(e),null!=f&&h(f,e)},N=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},b)},p.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(c.a)("tabs__item",l.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(r.cloneElement)(j.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},358:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},412:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Screen-Shot-2019-07-22-at-2.24.34-PM-4cec9157222ff7551898eb50ced8e793.png"}}]);