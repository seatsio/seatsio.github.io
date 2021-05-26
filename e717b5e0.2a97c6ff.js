(window.webpackJsonp=window.webpackJsonp||[]).push([[268],{340:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),c=(n(0),n(366)),o=(n(369),n(370),{title:"canGASelectionBeIncreased",slug:"/renderer/config-cangaselectionbeincreased",hidden:!1,createdAt:"2018-08-03T11:54:53.330Z",updatedAt:"2020-02-17T08:21:19.952Z"}),i={unversionedId:"Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-cangaselectionbeincreased",id:"Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-cangaselectionbeincreased",isDocsHomePage:!1,title:"canGASelectionBeIncreased",description:"Type: function(gaArea, defaultValue, extraConfig, ticketType)",source:"@site/docs/Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-cangaselectionbeincreased.md",slug:"/renderer/config-cangaselectionbeincreased",permalink:"/docs/renderer/config-cangaselectionbeincreased",version:"current",sidebar:"renderer",previous:{title:"isObjectVisible",permalink:"/docs/renderer/config-isobjectvisible"},next:{title:"selectBestAvailable",permalink:"/docs/renderer/config-selectbestavailable"}},l=[],s={toc:l};function u(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Type"),": function(gaArea, defaultValue, extraConfig, ticketType)  "),Object(c.b)("p",null,"This function is invoked when a user clicks on a GA area. If ",Object(c.b)("inlineCode",{parentName:"p"},"canGASelectionBeIncreased")," returns true, the user is able to increase the number of selected places by clicking on the + button of the ticket selector that pops up."),Object(c.b)("p",null,Object(c.b)("img",{alt:"Screenshot 2018-08-03 14.31.18.png",src:n(466).default})),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"gaArea"),": the GA area that has been selected"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"defaultValue"),": a boolean that indicates if additional GA places can be selected. This is determined by whether the number of selected places plus the number places booked by other users is smaller than the capacity of the GA area."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"extraConfig"),": see ",Object(c.b)("a",{parentName:"li",href:"/docs/renderer/config-extraconfig"},"extraConfig")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"ticketType"),": the ticket type for which the user clicked on the plus button. Optional. ")),Object(c.b)("p",null,"The default value is determined by evaluating:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},"gaArea.numBooked + gaArea.numSelected < gaArea.capacity\n")),Object(c.b)("p",null,"A good use case for this callback is to allow back office users to select places that are on hold for VIP customers. If 10 VIP places are held in a GA area with a capacity of 15, users would by default only be able to select 5 extra places. You can override this as follows:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},"canGASelectionBeIncreased: function(gaArea, defaultValue) {\n    if(gaArea.label === 'Standing') {\n        return gaArea.numBooked - 10 + gaArea.numSelected < gaArea.capacity;        \n    }\n    return defaultValue;\n}\n")))}u.isMDXComponent=!0},365:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},366:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},f=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(n),p=r,d=f["".concat(o,".").concat(p)]||f[p]||b[p]||c;return n?a.a.createElement(d,i(i({ref:t},s),{},{components:n})):a.a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<c;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},367:function(e,t,n){"use strict";var r=n(0),a=n(368);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},368:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},369:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(367),o=n(365),i=n(54),l=n.n(i),s=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,i=e.defaultValue,f=e.values,b=e.groupId,p=e.className,d=Object(c.a)(),m=d.tabGroupChoices,g=d.setTabGroupChoices,y=Object(r.useState)(i),O=y[0],h=y[1],v=r.Children.toArray(e.children);if(null!=b){var j=m[b];null!=j&&j!==O&&f.some((function(e){return e.value===j}))&&h(j)}var w=function(e){h(e),null!=b&&g(b,e)},k=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},p)},f.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(r.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},370:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},466:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Screenshot-2018-08-03-14.31.18-ff9a933b6166ab6d42d017c19210ecc0.png"}}]);