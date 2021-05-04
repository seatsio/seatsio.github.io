(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{251:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(7),o=(t(0),t(362)),i=(t(365),t(366),{title:"onSessionInitialized",slug:"/renderer/events-onsessioninitialized",hidden:!1,createdAt:"2021-01-06T10:45:54.944Z",updatedAt:"2021-01-06T10:56:37.737Z"}),c={unversionedId:"Rendering Floor Plans/renderer-react-to-events/renderer-events-onsessioninitialized",id:"Rendering Floor Plans/renderer-react-to-events/renderer-events-onsessioninitialized",isDocsHomePage:!1,title:"onSessionInitialized",description:"Type: function(holdToken)",source:"@site/docs/Rendering Floor Plans/renderer-react-to-events/renderer-events-onsessioninitialized.md",slug:"/renderer/events-onsessioninitialized",permalink:"/docs/renderer/events-onsessioninitialized",version:"current",sidebar:"renderer",previous:{title:"onBestAvailableSelectionFailed",permalink:"/docs/renderer/events-onbestavailableselectionfailed"},next:{title:"onHoldSucceeded",permalink:"/docs/renderer/events-onholdsucceeded"}},s=[],l={toc:s};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Type"),": function(holdToken)  "),Object(o.b)("p",null,"Fired when a session is initialized. This is either when:  "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"a new session is started, e.g. when ",Object(o.b)("a",{parentName:"li",href:"chartstartnewsession"},"chart.startNewSession()"),'  is called, or when the user clicks on the "start over" button on the "session expired" dialog'),Object(o.b)("li",{parentName:"ul"},"or when the chart is (re-)rendered with an already active session, e.g. after a browser refresh. ")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"holdToken")," parameter that gets passed into this callback is an object with the following structure: "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'{    \n    "holdToken": "wvXbB9MlHt",\n    "expiresAt": "2020-01-06T10:58:44.715Z",\n    "expiresInSeconds": 599\n}\n')),Object(o.b)("p",null,"You can listen to this event to update a timer in your host page."))}u.isMDXComponent=!0},361:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}n.a=function(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}},362:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=u(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(t),f=r,b=d["".concat(i,".").concat(f)]||d[f]||p[f]||o;return t?a.a.createElement(b,c(c({ref:n},l),{},{components:t})):a.a.createElement(b,c({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},363:function(e,n,t){"use strict";var r=t(0),a=t(364);n.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},364:function(e,n,t){"use strict";var r=t(0),a=Object(r.createContext)(void 0);n.a=a},365:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(363),i=t(361),c=t(54),s=t.n(c),l=37,u=39;n.a=function(e){var n=e.lazy,t=e.block,c=e.defaultValue,d=e.values,p=e.groupId,f=e.className,b=Object(o.a)(),m=b.tabGroupChoices,v=b.setTabGroupChoices,h=Object(r.useState)(c),y=h[0],O=h[1],g=r.Children.toArray(e.children);if(null!=p){var j=m[p];null!=j&&j!==y&&d.some((function(e){return e.value===j}))&&O(j)}var w=function(e){O(e),null!=p&&v(p,e)},k=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t},f)},d.map((function(e){var n=e.value,t=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===n,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":y===n}),key:n,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case u:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case l:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(k,e.target,e)},onFocus:function(){return w(n)},onClick:function(){w(n)}},t)}))),n?Object(r.cloneElement)(g.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,n){return Object(r.cloneElement)(e,{key:n,hidden:e.props.value!==y})}))))}},366:function(e,n,t){"use strict";var r=t(0),a=t.n(r);n.a=function(e){var n=e.children,t=e.hidden,r=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}}}]);