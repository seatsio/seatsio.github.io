(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{274:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return i}));var r=n(3),a=n(7),o=(n(0),n(358)),c=(n(361),n(362),{title:"stylePreset",slug:"/renderer/stylepreset",hidden:!1,createdAt:"2019-07-22T20:53:54.085Z",updatedAt:"2019-07-22T22:28:16.904Z"}),l={unversionedId:"Rendering Floor Plans/style-your-floor-plan/stylepreset",id:"Rendering Floor Plans/style-your-floor-plan/stylepreset",isDocsHomePage:!1,title:"stylePreset",description:"Type: string",source:"@site/docs/Rendering Floor Plans/style-your-floor-plan/stylepreset.md",slug:"/renderer/stylepreset",permalink:"/docs/renderer/stylepreset",version:"current",sidebar:"renderer",previous:{title:"colors",permalink:"/docs/renderer/colors"},next:{title:"style",permalink:"/docs/renderer/style"}},s=[{value:"<strong>&quot;balance&quot; (default)</strong>",id:"balance-default",children:[]},{value:"<strong>&quot;bubblegum&quot;</strong>",id:"bubblegum",children:[]},{value:"<strong>&quot;flathead&quot;</strong>",id:"flathead",children:[{value:"<strong>&quot;bezels&quot;</strong>",id:"bezels",children:[]},{value:"<strong>&quot;leaf&quot;</strong>",id:"leaf",children:[]}]}],u={toc:s};function i(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Type"),": string",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("strong",{parentName:"p"},"Default"),": ",Object(o.b)("inlineCode",{parentName:"p"},'"balance"'),"  "),Object(o.b)("p",null,"Sets the preset of styles to use for the seating chart user interface."),Object(o.b)("p",null,"Styles can still be overwritten by using the ",Object(o.b)("a",{parentName:"p",href:"/docs/renderer/style"},"style")," setting."),Object(o.b)("h1",{id:"list-of-style-presets"},"List of style presets:"),Object(o.b)("h2",{id:"balance-default"},Object(o.b)("strong",{parentName:"h2"},'"balance" (default)')),Object(o.b)("p",null,Object(o.b)("img",{alt:"Balance.png",src:n(434).default})),Object(o.b)("h2",{id:"bubblegum"},Object(o.b)("strong",{parentName:"h2"},'"bubblegum"')),Object(o.b)("p",null,Object(o.b)("img",{alt:"Bubblegum.png",src:n(435).default})),Object(o.b)("h2",{id:"flathead"},Object(o.b)("strong",{parentName:"h2"},'"flathead"')),Object(o.b)("p",null,Object(o.b)("img",{alt:"Flathead.png",src:n(436).default})),Object(o.b)("h3",{id:"bezels"},Object(o.b)("strong",{parentName:"h3"},'"bezels"')),Object(o.b)("p",null,Object(o.b)("img",{alt:"Bezels.png",src:n(437).default})),Object(o.b)("h3",{id:"leaf"},Object(o.b)("strong",{parentName:"h3"},'"leaf"')),Object(o.b)("p",null,Object(o.b)("img",{alt:"Leaf.png",src:n(438).default})))}i.isMDXComponent=!0},357:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},358:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),i=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=i(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=i(n),p=r,d=b["".concat(c,".").concat(p)]||b[p]||f[p]||o;return n?a.a.createElement(d,l(l({ref:t},u),{},{components:n})):a.a.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},359:function(e,t,n){"use strict";var r=n(0),a=n(360);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},360:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},361:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(359),c=n(357),l=n(54),s=n.n(l),u=37,i=39;t.a=function(e){var t=e.lazy,n=e.block,l=e.defaultValue,b=e.values,f=e.groupId,p=e.className,d=Object(o.a)(),m=d.tabGroupChoices,g=d.setTabGroupChoices,y=Object(r.useState)(l),O=y[0],v=y[1],j=r.Children.toArray(e.children);if(null!=f){var h=m[f];null!=h&&h!==O&&b.some((function(e){return e.value===h}))&&v(h)}var w=function(e){v(e),null!=f&&g(f,e)},N=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},p)},b.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(c.a)("tabs__item",s.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case i:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(r.cloneElement)(j.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},362:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},434:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Balance-a9f6d9441f2563b453ad72b48da2a0eb.png"},435:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Bubblegum-f46797cf61845a8b217a867d0169c659.png"},436:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Flathead-c9da8d99ea75c7386459a5020e887881.png"},437:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Bezels-dbb5c718d94b41a55ad76abeddab5b5a.png"},438:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Leaf-c396aef9ce50463c478f24892ffa9954.png"}}]);