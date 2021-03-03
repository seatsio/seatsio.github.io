(window.webpackJsonp=window.webpackJsonp||[]).push([[268],{340:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),i=(n(0),n(358)),a=(n(361),n(362),{title:"ticketListings",slug:"/renderer/config-ticketlistings",hidden:!1,createdAt:"2019-01-04T08:13:18.331Z",updatedAt:"2019-09-05T12:05:08.787Z"}),c={unversionedId:"Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-ticketlistings",id:"Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-ticketlistings",isDocsHomePage:!1,title:"ticketListings",description:"The ticketListings parameter is useful when you're selling tickets for which you only know the section name, but not the exact row or the seat.",source:"@site/docs/Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-ticketlistings.md",slug:"/renderer/config-ticketlistings",permalink:"/docs/renderer/config-ticketlistings",version:"current",sidebar:"renderer",previous:{title:"cursorTooltip",permalink:"/docs/renderer/config-cursortooltip"},next:{title:"showZoomOutButtonOnMobile",permalink:"/docs/renderer/config-showzoomoutbuttononmobile"}},s=[],u={toc:s};function l(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"ticketListings")," parameter is useful when you're selling tickets for which you only know the section name, but not the exact row or the seat."),Object(i.b)("p",null,"If you pass in ",Object(i.b)("inlineCode",{parentName:"p"},"ticketListings"),", the sections that have tickets available become selectable. So clicking on a section selects the section, instead of zooming in to the seats inside that section."),Object(i.b)("p",null,"This parameter requires you to pass in a chart key instead of an event key."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},"chart: '6451436c-24fb-11e7-93ae-92361f002671',\nticketListings: [\n  {section: '108', quantity: 4, price: 25},\n  {section: '108', quantity: 2, price: 35},\n  {section: '109', quantity: 2, price: 20},\n  {section: '110', quantity: 2, price: 35},\n  {section: '111', quantity: 1, price: 35}\n],\npriceFormatter: function (price) {\n  return price + '\u20ac';\n}\n")),Object(i.b)("p",null,Object(i.b)("img",{alt:"Screenshot 2019-01-04 at 09.15.55.png",src:n(458).default})))}l.isMDXComponent=!0},357:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},358:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},f=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(n),d=r,b=f["".concat(a,".").concat(d)]||f[d]||p[d]||i;return n?o.a.createElement(b,c(c({ref:t},u),{},{components:n})):o.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},359:function(e,t,n){"use strict";var r=n(0),o=n(360);t.a=function(){var e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},360:function(e,t,n){"use strict";var r=n(0),o=Object(r.createContext)(void 0);t.a=o},361:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(359),a=n(357),c=n(54),s=n.n(c),u=37,l=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,f=e.values,p=e.groupId,d=e.className,b=Object(i.a)(),m=b.tabGroupChoices,g=b.setTabGroupChoices,y=Object(r.useState)(c),v=y[0],h=y[1],O=r.Children.toArray(e.children);if(null!=p){var j=m[p];null!=j&&j!==v&&f.some((function(e){return e.value===j}))&&h(j)}var k=function(e){h(e),null!=p&&g(p,e)},w=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(a.a)("tabs",{"tabs--block":n},d)},f.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(a.a)("tabs__item",s.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case l:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return k(t)},onClick:function(){k(t)}},n)}))),t?Object(r.cloneElement)(O.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},362:function(e,t,n){"use strict";var r=n(0),o=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return o.a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},458:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Screenshot-2019-01-04-at-09.15.55-ccde5d896bcdb51b783317ce5ee5496b.png"}}]);