(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{361:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},362:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(n),m=r,d=b["".concat(o,".").concat(m)]||b[m]||p[m]||i;return n?a.a.createElement(d,c(c({ref:t},l),{},{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},363:function(e,t,n){"use strict";var r=n(0),a=n(364);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},364:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},365:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(363),o=n(361),c=n(54),s=n.n(c),l=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,b=e.values,p=e.groupId,m=e.className,d=Object(i.a)(),f=d.tabGroupChoices,h=d.setTabGroupChoices,y=Object(r.useState)(c),v=y[0],O=y[1],j=r.Children.toArray(e.children);if(null!=p){var g=f[p];null!=g&&g!==v&&b.some((function(e){return e.value===g}))&&O(g)}var w=function(e){O(e),null!=p&&h(p,e)},k=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},m)},b.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(o.a)("tabs__item",s.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(r.cloneElement)(j.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},366:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),i=(n(0),n(362)),o=(n(365),n(366),{title:"Rate limit",slug:"/api/rate-limit",hidden:!1}),c={unversionedId:"REST API/api-overview/api-rate-limit",id:"REST API/api-overview/api-rate-limit",isDocsHomePage:!1,title:"Rate limit",description:"Introduction",source:"@site/docs/REST API/api-overview/api-rate-limit.md",slug:"/api/rate-limit",permalink:"/docs/api/rate-limit",version:"current"},s=[{value:"Introduction",id:"introduction",children:[]},{value:"How many ticket buyers can enter my site?",id:"how-many-ticket-buyers-can-enter-my-site",children:[]},{value:"Handling rate limited requests",id:"handling-rate-limited-requests",children:[]},{value:"Higher rate limit",id:"higher-rate-limit",children:[]}],l={toc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"The seats.io API is rate limited, to keep the servers running smoothly when they receive an extremely high number of requests."),Object(i.b)("p",null,"This limit is set to ",Object(i.b)("strong",{parentName:"p"},"80 concurrent requests")," per seats.io account. That means that 80 requests can be active at any given time (per account)."),Object(i.b)("p",null,"When you send more simultaneous requests, the API answers with status code ",Object(i.b)("inlineCode",{parentName:"p"},"429 - Too Many Requests"),"."),Object(i.b)("p",null,"Note that this is not a limit on the number of concurrent ticket buyers (see below)."),Object(i.b)("p",null,"Also, we don't enforce a maximum on the number of requests per second. It's perfectly fine to do hundreds of fast calls per second, as long as you respect the limit of 80 concurrent requests."),Object(i.b)("h2",{id:"how-many-ticket-buyers-can-enter-my-site"},"How many ticket buyers can enter my site?"),Object(i.b)("p",null,"In-browser calls by rendered charts (e.g. to fetch object statuses, or to create a hold token) also count towards the rate limit - not just API calls from your server to seats.io."),Object(i.b)("p",null,"80 concurrent requests corresponds to about ",Object(i.b)("strong",{parentName:"p"},"100 renderings and 200 booked places per second"),". In other words: 100 ticket buyers\ncan enter your site every second and book 2 places, without hitting the concurrent requests rate limit."),Object(i.b)("p",null,"Be aware: this depends on a number of factors, such as the size of the chart, whether social distancing rules are in place, the number of already booked places etc.\nSo it's very important to do proper load testing before you go live."),Object(i.b)("p",null,"Calls to book best available seats take a little longer than normal booking calls, meaning you'll be able to do only about 100 requests per second instead of 200, before hitting the rate limit."),Object(i.b)("h2",{id:"handling-rate-limited-requests"},"Handling rate limited requests"),Object(i.b)("p",null,"Status ",Object(i.b)("inlineCode",{parentName:"p"},"429")," should be handled by a retry mechanism. You could build that yourself (e.g through ",Object(i.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Exponential_backoff"},"exponential backoff"),"),\nor just use our ",Object(i.b)("a",{parentName:"p",href:"/docs/api/client-libraries"},"api client libraries"),". They have exponential backoff built-in."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/seatsio/seatsio-php"},"PHP"),": since v74.0"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/seatsio/seatsio-java"},"Java"),": since v64.0"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/seatsio/seatsio-ruby"},"Ruby"),": since v32.0"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/seatsio/seatsio-python"},"Python"),": since v60.0"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/seatsio/seatsio-js"},"JS"),": since v63.0"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/seatsio/seatsio-dotnet"},"C#"),": since v81.0")),Object(i.b)("p",null,"So if you use one of these, then you don't have to do anything: the client library will automatically and repeatedly retry requests that fail with status 429."),Object(i.b)("h2",{id:"higher-rate-limit"},"Higher rate limit"),Object(i.b)("p",null,"Expecting a higher load than what we allow on our shared instance? A dedicated seats.io server might be an option. Please ",Object(i.b)("a",{parentName:"p",href:"mailto:sales@seats.io"},"get in touch"),"."))}u.isMDXComponent=!0}}]);