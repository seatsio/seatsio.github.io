(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{358:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},359:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(n),d=a,m=u["".concat(i,".").concat(d)]||u[d]||p[d]||o;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},360:function(e,t,n){"use strict";var a=n(0),r=n(361);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},361:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},362:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(360),i=n(358),c=n(54),l=n.n(c),s=37,b=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,u=e.values,p=e.groupId,d=e.className,m=Object(o.a)(),f=m.tabGroupChoices,g=m.setTabGroupChoices,h=Object(a.useState)(c),j=h[0],O=h[1],v=a.Children.toArray(e.children);if(null!=p){var y=f[p];null!=y&&y!==j&&u.some((function(e){return e.value===y}))&&O(y)}var N=function(e){O(e),null!=p&&g(p,e)},w=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},d)},u.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case b:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},n)}))),t?Object(a.cloneElement)(v.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},363:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),o=(n(0),n(359)),i=(n(362),n(363),{title:"Configuring the Event Manager",slug:"/event-manager/configuring",hidden:!1,createdAt:"2018-07-27T11:38:28.723Z",updatedAt:"2021-02-26T13:31:42.027Z"}),c={unversionedId:"Event Manager/event-manager-configuring",id:"Event Manager/event-manager-configuring",isDocsHomePage:!1,title:"Configuring the Event Manager",description:"divId",source:"@site/docs/Event Manager/event-manager-configuring.md",slug:"/event-manager/configuring",permalink:"/docs/event-manager/configuring",version:"current",sidebar:"eventManager",previous:{title:"How to embed the Event Manager",permalink:"/docs/event-manager/how-to-embed"},next:{title:"Styling the Event Manager",permalink:"/docs/event-manager/styling"}},l=[{value:"divId",id:"divid",children:[]},{value:"secretKey",id:"secretkey",children:[]},{value:"event",id:"event",children:[]},{value:"events",id:"events",children:[]},{value:"mode",id:"mode",children:[]},{value:"language",id:"language",children:[]},{value:"messages",id:"messages",children:[]},{value:"tooltipInfo",id:"tooltipinfo",children:[]},{value:"showFullScreenButton",id:"showfullscreenbutton",children:[]},{value:"fitTo",id:"fitto",children:[]},{value:"objectColor",id:"objectcolor",children:[]}],s={toc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"divid"},"divId"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Type"),": string  "),Object(o.b)("p",null,"The id of the div on your page in which you want seats.io to render the event manager. This is a required config option."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"divId: 'event-manager'\n")),Object(o.b)("h2",{id:"secretkey"},"secretKey"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Type"),": string",Object(o.b)("br",{parentName:"p"}),"\n","The secret key of a workspace, or the company admin key."),Object(o.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Important")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Never expose this secret key on a public web page! Only use the event manager behind a login wall."))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"secretKey: 'my secret key'\n")),Object(o.b)("h2",{id:"event"},"event"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Type"),": string  "),Object(o.b)("p",null,"The key of the event for which you want to render the event manager."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"event: 'smallTheatreEvent1'\n")),Object(o.b)("h2",{id:"events"},"events"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Type"),": string[]  "),Object(o.b)("p",null,"The keys of the events for which you want to render the event manager. Only ",Object(o.b)("inlineCode",{parentName:"p"},"manageObjectStatuses")," mode supports ",Object(o.b)("inlineCode",{parentName:"p"},"events"),"."),Object(o.b)("h2",{id:"mode"},"mode"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Type"),": string  "),Object(o.b)("p",null,"Can be either:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'manageObjectStatuses'"),": to book and release seats"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'manageForSaleConfig'"),": to mark seats as ",Object(o.b)("a",{parentName:"li",href:"/docs/api/for-sale-not-for-sale"},"for sale / not for sale"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'manageTableBooking'"),": to indicate which tables are bookable as a whole, and which ones are bookable by seat"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'manageChannels'"),": to manage the list of channels for the event, and to assign objects to channels. ")),Object(o.b)("h2",{id:"language"},"language"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Type"),": string  "),Object(o.b)("p",null,"Currently supported languages are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'nl'")," \u2013 Dutch"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'en'")," \u2013 English"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'de'")," \u2013 German"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'pt'")," \u2013 Portuguese"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'es'")," \u2013 Spanish"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'fr'")," \u2013 French")),Object(o.b)("h2",{id:"messages"},"messages"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Type"),": object  "),Object(o.b)("p",null,"The messages parameter allows you to change all kinds of texts that are displayed on the chart: section labels, tooltip texts, static text objects ... you name it.\nJust pass in an object with the original texts as keys, and the translations as values.\nFor a more detailed explanation, check ",Object(o.b)("a",{parentName:"p",href:"http://support.seats.io/integrating-seats-io/multi-language-i18n-support"},"this page"),"."),Object(o.b)("h2",{id:"tooltipinfo"},"tooltipInfo"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Type"),": function(object)",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("strong",{parentName:"p"},"Return"),": string"),Object(o.b)("p",null,"A function whose result will be displayed as extra information on the cursor tooltip.\nSee ",Object(o.b)("a",{parentName:"p",href:"/docs/renderer/config-tooltipinfo"},"https://docs.seats.io/docs/renderer-config-tooltipinfo")," for more info."),Object(o.b)("h2",{id:"showfullscreenbutton"},"showFullScreenButton"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Type"),": boolean  "),Object(o.b)("p",null,"Whether to show the full screen button or not. Defaults to true."),Object(o.b)("h2",{id:"fitto"},"fitTo"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Type"),": string  "),Object(o.b)("p",null,"Whether to adapt to the container div width, or to its width and height."),Object(o.b)("p",null,"See ",Object(o.b)("a",{parentName:"p",href:"/docs/renderer/config-fitto"},"https://docs.seats.io/docs/renderer-config-fitto")),Object(o.b)("h2",{id:"objectcolor"},"objectColor"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Type"),": function(object, defaultColor, extraConfig)\n",Object(o.b)("strong",{parentName:"p"},"Default"),": depends on the event manager mode (e.g. in ",Object(o.b)("inlineCode",{parentName:"p"},"manageChannels")," mode, a seat gets the color of its assigned channel)"),Object(o.b)("p",null,"A function that determines the object color. "),Object(o.b)("p",null,"See ",Object(o.b)("a",{parentName:"p",href:"/docs/renderer/config-objectcolor"},"https://docs.seats.io/docs/renderer/config-objectcolor")))}b.isMDXComponent=!0}}]);