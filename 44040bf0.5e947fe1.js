(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(7),o=(n(0),n(354)),c=(n(357),n(358),{title:"Subaccounts",slug:"/api-subaccounts",hidden:!1,createdAt:"2018-08-02T10:12:51.493Z",updatedAt:"2020-02-28T13:13:56.342Z"}),i={unversionedId:"REST API/api-subaccounts",id:"REST API/api-subaccounts",isDocsHomePage:!1,title:"Subaccounts",description:"Subaccounts are deprecated. Please use workspaces instead.",source:"@site/docs/REST API/api-subaccounts.md",slug:"/api-subaccounts",permalink:"/docs/api-subaccounts",version:"current"},u=[],s={toc:u};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Subaccounts are deprecated. Please use ",Object(o.b)("a",{parentName:"p",href:"api-workspaces"},"workspaces")," instead."))),Object(o.b)("p",null,"A subaccount is a special type of Seats.io user account. Its usage is billed to the ",Object(o.b)("em",{parentName:"p"},"parent account")," (i.e. your account). You can create it from within the seats.io webapp. "),Object(o.b)("p",null,"Other than that, subaccounts are normal and fully functional Seats accounts. Just like normal accounts, they:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"can log in to the dashboard (",Object(o.b)("a",{parentName:"li",href:"https://app.seats.io"},"https://app.seats.io"),")"),Object(o.b)("li",{parentName:"ul"},"have their own set of API keys"),Object(o.b)("li",{parentName:"ul"},"have their own set of floor plans")),Object(o.b)("p",null,"If you want your users to do their own floor plan design, you should create a subaccount for each of them, to prevent them from accessing and editing each other floor plans, and to prevent them from booking seats on other than their own events."))}l.isMDXComponent=!0},353:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},354:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(n),b=a,d=p["".concat(c,".").concat(b)]||p[b]||f[b]||o;return n?r.a.createElement(d,i(i({ref:t},s),{},{components:n})):r.a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},355:function(e,t,n){"use strict";var a=n(0),r=n(356);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},356:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},357:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(355),c=n(353),i=n(53),u=n.n(i),s=37,l=39;t.a=function(e){var t=e.lazy,n=e.block,i=e.defaultValue,p=e.values,f=e.groupId,b=e.className,d=Object(o.a)(),m=d.tabGroupChoices,v=d.setTabGroupChoices,h=Object(a.useState)(i),O=h[0],y=h[1],j=a.Children.toArray(e.children);if(null!=f){var g=m[f];null!=g&&g!==O&&p.some((function(e){return e.value===g}))&&y(g)}var w=function(e){y(e),null!=f&&v(f,e)},N=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},b)},p.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(c.a)("tabs__item",u.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case l:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(a.cloneElement)(j.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},358:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}}}]);