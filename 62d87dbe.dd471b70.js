(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{192:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),o=(n(0),n(362)),i=(n(365),n(366),{title:"Objects",slug:"/api/objects",hidden:!1,createdAt:"2018-07-31T08:44:07.224Z",updatedAt:"2019-12-10T12:52:35.458Z"}),c={unversionedId:"REST API/api-objects",id:"REST API/api-objects",isDocsHomePage:!1,title:"Objects",description:"In this section, object is short for bookable object: these can be seats that are part of a row, seats at a table, booths or general admission areas.",source:"@site/docs/REST API/api-objects.md",slug:"/api/objects",permalink:"/docs/api/objects",version:"current",sidebar:"api",previous:{title:"URI encoding",permalink:"/docs/api/uri-encoding"},next:{title:"Book objects",permalink:"/docs/api/book-objects"}},s=[],l={toc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In this section, ",Object(o.b)("em",{parentName:"p"},"object")," is short for ",Object(o.b)("em",{parentName:"p"},"bookable object"),": these can be seats that are part of a row, seats at a table, booths or general admission areas.  "),Object(o.b)("p",null,"In Seats.io, objects can have one of three statuses for an event: ",Object(o.b)("inlineCode",{parentName:"p"},"free"),", ",Object(o.b)("inlineCode",{parentName:"p"},"reservedByToken"),"and ",Object(o.b)("inlineCode",{parentName:"p"},"booked"),".\nInitially, all objects start in status ",Object(o.b)("inlineCode",{parentName:"p"},"free"),"."),Object(o.b)("p",null,"Suppose then that you've enabled ",Object(o.b)("inlineCode",{parentName:"p"},"session")," when rendering a chart. In that case, as soon as the ticket buyer clicks on a seat, it goes to status ",Object(o.b)("inlineCode",{parentName:"p"},"reservedByToken"),". Note that this is a legacy status name: in the past, holding an object was known as reserving an object. We kept the status ",Object(o.b)("inlineCode",{parentName:"p"},"reservedByToken")," to not break existing integrations."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"reservedByToken")," means that the object is temporarily 'locked' so that only the person that originally held it can confirm the booking through a secret hold token. If no booking arrives within 15 minutes (by default) of holding the objects, seats.io automatically releases the held objects again."),Object(o.b)("p",null,"The exact meaning of a ",Object(o.b)("inlineCode",{parentName:"p"},"booked")," seat depends on your sales process, but this would typically be right before the payment gets processed. An object can go from ",Object(o.b)("inlineCode",{parentName:"p"},"free")," to ",Object(o.b)("inlineCode",{parentName:"p"},"booked")," directly, or from ",Object(o.b)("inlineCode",{parentName:"p"},"free")," to ",Object(o.b)("inlineCode",{parentName:"p"},"reservedByToken")," to ",Object(o.b)("inlineCode",{parentName:"p"},"booked"),". That's up to you."),Object(o.b)("p",null,"There are API calls to ",Object(o.b)("inlineCode",{parentName:"p"},"/book")," and ",Object(o.b)("inlineCode",{parentName:"p"},"/release")," seats",Object(o.b)("inlineCode",{parentName:"p"},", and also to "),"hold them if you prefer to do that yourself instead of relying on the chart renderer parameter ",Object(o.b)("inlineCode",{parentName:"p"},"session"),". You can also assign other, custom statuses. Say you want to create a separate status 'VIP', which indicates that a seat can only be booked by people that are logged in on your site as VIP. That's where /changeStatus comes into place."))}u.isMDXComponent=!0},361:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},362:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(n),d=a,f=b["".concat(i,".").concat(d)]||b[d]||p[d]||o;return n?r.a.createElement(f,c(c({ref:t},l),{},{components:n})):r.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},363:function(e,t,n){"use strict";var a=n(0),r=n(364);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},364:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},365:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(363),i=n(361),c=n(54),s=n.n(c),l=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,b=e.values,p=e.groupId,d=e.className,f=Object(o.a)(),m=f.tabGroupChoices,h=f.setTabGroupChoices,j=Object(a.useState)(c),y=j[0],O=j[1],v=a.Children.toArray(e.children);if(null!=p){var g=m[p];null!=g&&g!==y&&b.some((function(e){return e.value===g}))&&O(g)}var k=function(e){O(e),null!=p&&h(p,e)},w=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},d)},b.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return k(t)},onClick:function(){k(t)}},n)}))),t?Object(a.cloneElement)(v.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},366:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}}}]);