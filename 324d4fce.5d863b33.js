(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{125:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(367)),i=(n(370),n(371),{title:"3. Create an event",slug:"/tutorial/create-an-event",hidden:!1,createdAt:"2018-08-21T09:07:21.083Z",updatedAt:"2018-08-23T14:13:17.396Z"}),c={unversionedId:"Getting Started/getting-started-quick-tutorial/tutorial-create-an-event",id:"Getting Started/getting-started-quick-tutorial/tutorial-create-an-event",isDocsHomePage:!1,title:"3. Create an event",description:"An interactive floor plan is only useful to a ticket buyer if they can see which seats are available, and which are not.",source:"@site/docs/Getting Started/getting-started-quick-tutorial/tutorial-create-an-event.md",slug:"/tutorial/create-an-event",permalink:"/docs/tutorial/create-an-event",version:"current",sidebar:"tutorial",previous:{title:"2. Draw a floor plan",permalink:"/docs/tutorial/draw-a-floor-plan"},next:{title:"4. Show the floor plan on your page",permalink:"/docs/tutorial/show-the-floor-plan-on-your-page"}},u=[],l={toc:u};function s(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"An interactive floor plan is only useful to a ticket buyer if they can see which seats are available, and which are not. "),Object(o.b)("p",null,"That is what the concept of an ",Object(o.b)("em",{parentName:"p"},"event")," is for.\nIn seats.io speak, an event is a single instance of a concert, show or sports match. An event is used to keep track of which seat is booked or free; this allows you to re-use the same floor plan for multiple events, without having to go over the design process again."),Object(o.b)("p",null,"You can create an event for a floor plan in 2 ways: either through the seats.io web application, or using the ",Object(o.b)("a",{parentName:"p",href:"/docs/api/create-an-event"},"create event API endpoint"),"."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Screenshot 2018-08-21 11.46.50.png",src:n(430).default})))}s.isMDXComponent=!0},366:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},367:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},f=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=s(n),d=r,b=f["".concat(i,".").concat(d)]||f[d]||p[d]||o;return n?a.a.createElement(b,c(c({ref:t},l),{},{components:n})):a.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},368:function(e,t,n){"use strict";var r=n(0),a=n(369);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},369:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},370:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(368),i=n(366),c=n(54),u=n.n(c),l=37,s=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,f=e.values,p=e.groupId,d=e.className,b=Object(o.a)(),v=b.tabGroupChoices,m=b.setTabGroupChoices,h=Object(r.useState)(c),y=h[0],g=h[1],O=r.Children.toArray(e.children);if(null!=p){var w=v[p];null!=w&&w!==y&&f.some((function(e){return e.value===w}))&&g(w)}var j=function(e){g(e),null!=p&&m(p,e)},k=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},d)},f.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(i.a)("tabs__item",u.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e)},onFocus:function(){return j(t)},onClick:function(){j(t)}},n)}))),t?Object(r.cloneElement)(O.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},371:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},430:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/create-event-16f41b61dd95264c33e6e57bfc9ef41b.png"}}]);