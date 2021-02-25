(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{111:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return c})),r.d(n,"toc",(function(){return u})),r.d(n,"default",(function(){return s}));var t=r(3),o=r(7),a=(r(0),r(354)),i=(r(357),r(358),{title:"showViewFromYourSeatOnMobile",slug:"/renderer-config-showviewfromyourseatonmobile",hidden:!1,createdAt:"2018-08-03T12:03:25.670Z",updatedAt:"2018-08-03T13:17:19.405Z"}),c={unversionedId:"Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-showviewfromyourseatonmobile",id:"Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-showviewfromyourseatonmobile",isDocsHomePage:!1,title:"showViewFromYourSeatOnMobile",description:"Type: boolean",source:"@site/docs/Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-showviewfromyourseatonmobile.md",slug:"/renderer-config-showviewfromyourseatonmobile",permalink:"/docs/renderer-config-showviewfromyourseatonmobile",version:"current",sidebar:"docs",previous:{title:"showActiveSectionTooltipOnMobile",permalink:"/docs/renderer-config-showactivesectiontooltiponmobile"},next:{title:"showViewFromYourSeatOnDesktop",permalink:"/docs/renderer-config-showviewfromyourseatondesktop"}},u=[],l={toc:u};function s(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},l,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Type"),": boolean",Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("strong",{parentName:"p"},"Default"),": true  "),Object(a.b)("p",null,"On mobile, a view from seat thumbnail is displayed on the top left of the screen. Tapping this image will expand the thumbnail.\nYou can hide this thumbnail on mobile by passing ",Object(a.b)("inlineCode",{parentName:"p"},"showViewFromYourSeatOnMobile: false"),"."))}s.isMDXComponent=!0},353:function(e,n,r){"use strict";function t(e){var n,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(r=t(e[n]))&&(o&&(o+=" "),o+=r);else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}n.a=function(){for(var e,n,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(n=t(e))&&(o&&(o+=" "),o+=n);return o}},354:function(e,n,r){"use strict";r.d(n,"a",(function(){return f})),r.d(n,"b",(function(){return b}));var t=r(0),o=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var n=o.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},f=function(e){var n=s(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=s(r),m=t,b=f["".concat(i,".").concat(m)]||f[m]||p[m]||a;return r?o.a.createElement(b,c(c({ref:n},l),{},{components:r})):o.a.createElement(b,c({ref:n},l))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},355:function(e,n,r){"use strict";var t=r(0),o=r(356);n.a=function(){var e=Object(t.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},356:function(e,n,r){"use strict";var t=r(0),o=Object(t.createContext)(void 0);n.a=o},357:function(e,n,r){"use strict";var t=r(0),o=r.n(t),a=r(355),i=r(353),c=r(54),u=r.n(c),l=37,s=39;n.a=function(e){var n=e.lazy,r=e.block,c=e.defaultValue,f=e.values,p=e.groupId,m=e.className,b=Object(a.a)(),d=b.tabGroupChoices,v=b.setTabGroupChoices,y=Object(t.useState)(c),O=y[0],w=y[1],g=t.Children.toArray(e.children);if(null!=p){var h=d[p];null!=h&&h!==O&&f.some((function(e){return e.value===h}))&&w(h)}var j=function(e){w(e),null!=p&&v(p,e)},E=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":r},m)},f.map((function(e){var n=e.value,r=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===n,className:Object(i.a)("tabs__item",u.a.tabItem,{"tabs__item--active":O===n}),key:n,ref:function(e){return E.push(e)},onKeyDown:function(e){!function(e,n,r){switch(r.keyCode){case s:!function(e,n){var r=e.indexOf(n)+1;e[r]?e[r].focus():e[0].focus()}(e,n);break;case l:!function(e,n){var r=e.indexOf(n)-1;e[r]?e[r].focus():e[e.length-1].focus()}(e,n)}}(E,e.target,e)},onFocus:function(){return j(n)},onClick:function(){j(n)}},r)}))),n?Object(t.cloneElement)(g.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,n){return Object(t.cloneElement)(e,{key:n,hidden:e.props.value!==O})}))))}},358:function(e,n,r){"use strict";var t=r(0),o=r.n(t);n.a=function(e){var n=e.children,r=e.hidden,t=e.className;return o.a.createElement("div",{role:"tabpanel",hidden:r,className:t},n)}}}]);