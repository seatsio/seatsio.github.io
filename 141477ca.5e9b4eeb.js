(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{361:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},362:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(n),m=a,d=b["".concat(o,".").concat(m)]||b[m]||p[m]||i;return n?r.a.createElement(d,c(c({ref:t},l),{},{components:n})):r.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},363:function(e,t,n){"use strict";var a=n(0),r=n(364);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},364:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},365:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(363),o=n(361),c=n(54),s=n.n(c),l=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,b=e.values,p=e.groupId,m=e.className,d=Object(i.a)(),h=d.tabGroupChoices,f=d.setTabGroupChoices,v=Object(a.useState)(c),y=v[0],O=v[1],j=a.Children.toArray(e.children);if(null!=p){var g=h[p];null!=g&&g!==y&&b.some((function(e){return e.value===g}))&&O(g)}var w=function(e){O(e),null!=p&&f(p,e)},N=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},m)},b.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(o.a)("tabs__item",s.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(a.cloneElement)(j.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},366:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),i=(n(0),n(362)),o=(n(365),n(366),{title:"Rate limit",slug:"/api/rate-limit",hidden:!1}),c={unversionedId:"REST API/api-overview/api-rate-limit",id:"REST API/api-overview/api-rate-limit",isDocsHomePage:!1,title:"Rate limit",description:"Only accounts created after 2021-05-17 are rate limited. Older accounts don't have a limit (for now).",source:"@site/docs/REST API/api-overview/api-rate-limit.md",slug:"/api/rate-limit",permalink:"/docs/api/rate-limit",version:"current",sidebar:"api",previous:{title:"Authentication",permalink:"/docs/api/authentication"},next:{title:"Error handling",permalink:"/docs/api/error-handling"}},s=[{value:"How many ticket buyers can enter my site?",id:"how-many-ticket-buyers-can-enter-my-site",children:[]},{value:"Handling rate limited requests",id:"handling-rate-limited-requests",children:[]},{value:"Higher rate limit",id:"higher-rate-limit",children:[]}],l={toc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Only accounts created after 2021-05-17 are rate limited. Older accounts don't have a limit (for now)."))),Object(i.b)("p",null,"The seats.io API is rate limited, to keep the servers running smoothly when they receive an extremely high number of requests."),Object(i.b)("p",null,"This limit is set to ",Object(i.b)("strong",{parentName:"p"},"100 concurrent requests")," per seats.io account. That means that 100 requests can be active at any given time (per account)."),Object(i.b)("p",null,"When you send more simultaneous requests, the API answers with status code ",Object(i.b)("inlineCode",{parentName:"p"},"429 - Too Many Requests"),"."),Object(i.b)("p",null,"Note that this is not a limit on the number of concurrent ticket buyers (see below)."),Object(i.b)("p",null,"Also, we don't enforce a maximum on the number of requests per second. It's perfectly fine to do hundreds of fast calls per second, as long as you respect the limit of 100 concurrent requests."),Object(i.b)("h2",{id:"how-many-ticket-buyers-can-enter-my-site"},"How many ticket buyers can enter my site?"),Object(i.b)("p",null,"In-browser calls by rendered charts (e.g. to fetch object statuses, or to create a hold token) also count towards the rate limit - not just API calls from your server to seats.io."),Object(i.b)("p",null,"100 concurrent requests corresponds to about ",Object(i.b)("strong",{parentName:"p"},"100 renderings and 200 booked places per second"),". In other words: 100 ticket buyers\ncan enter your site every second and book 2 places, without hitting the concurrent requests rate limit."),Object(i.b)("p",null,"Be aware: this depends on a number of factors, such as the size of the chart, whether social distancing rules are in place, the number of already booked places etc.\nSo it's very important to do proper load testing before you go live."),Object(i.b)("p",null,"Calls to book best available seats take a little longer than normal booking calls, meaning you'll be able to do only about 100 requests per second instead of 200, before hitting the rate limit."),Object(i.b)("h2",{id:"handling-rate-limited-requests"},"Handling rate limited requests"),Object(i.b)("p",null,"Status ",Object(i.b)("inlineCode",{parentName:"p"},"429")," should be handled by a retry mechanism."),Object(i.b)("p",null,"You could build that yourself (e.g through ",Object(i.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Exponential_backoff"},"exponential backoff"),"),\nor just use our ",Object(i.b)("a",{parentName:"p",href:"/docs/api/client-libraries"},"api client libraries"),". They have exponential backoff built-in."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/seatsio/seatsio-php"},"PHP"),": since v74.0"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/seatsio/seatsio-java"},"Java"),": since v64.0"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/seatsio/seatsio-ruby"},"Ruby"),": since v32.0"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/seatsio/seatsio-python"},"Python"),": since v60.0"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/seatsio/seatsio-js"},"JS"),": since v63.0"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/seatsio/seatsio-dotnet"},"C#"),": since v81.0")),Object(i.b)("p",null,"So if you use one of these, then you don't have to do anything: the client library will automatically and repeatedly retry requests that fail with status 429."),Object(i.b)("h2",{id:"higher-rate-limit"},"Higher rate limit"),Object(i.b)("p",null,"Expecting a higher load than what we allow on our shared instance? A dedicated seats.io server might be an option. Please ",Object(i.b)("a",{parentName:"p",href:"mailto:sales@seats.io"},"get in touch"),"."))}u.isMDXComponent=!0}}]);