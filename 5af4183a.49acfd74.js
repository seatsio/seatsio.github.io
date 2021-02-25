(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{174:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(354)),l=n(357),c=n(358),s={title:"Release objects",slug:"/api-release-objects",hidden:!1,createdAt:"2018-07-31T09:11:57.723Z",updatedAt:"2020-10-13T07:32:57.352Z"},i={unversionedId:"REST API/api-objects/api-release-objects",id:"REST API/api-objects/api-release-objects",isDocsHomePage:!1,title:"Release objects",description:"Changes the object status to 'free'. Free seats are selectable on a rendered chart.",source:"@site/docs/REST API/api-objects/api-release-objects.md",slug:"/api-release-objects",permalink:"/docs/api-release-objects",version:"current",sidebar:"docs",previous:{title:"Book objects",permalink:"/docs/api-book-objects"},next:{title:"Temporarily hold objects",permalink:"/docs/api-temporarily-hold-objects"}},b=[{value:"Request",id:"request",children:[]},{value:"Response",id:"response",children:[]}],u={toc:b};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Changes the object status to 'free'. Free seats are selectable on a rendered chart."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"releasing objects can also be used to cancel objects that are ",Object(o.b)("a",{parentName:"p",href:"doc:api-temporarily-hold-objects"},"temporarily held")," ."))),Object(o.b)(l.a,{defaultValue:"shell",values:[{label:"Text",value:"shell"},{label:"PHP",value:"php"},{label:"C#",value:"csharp"},{label:"Java",value:"java"},{label:"Python",value:"python"},{label:"Ruby",value:"ruby"},{label:"Javascript",value:"javascript"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"shell",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"POST https://api.seatsio.net/events/{eventKey}/actions/release\n\nPOST https://api.seatsio.net/events/{eventKey}/actions/release?expand=objects\n"))),Object(o.b)(c.a,{value:"php",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},'$seatsioClient->events->release("event1", ["A-3", "A-5"]);\n'))),Object(o.b)(c.a,{value:"csharp",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-csharp"},'Client.Events.Release("event1", new [] { "A-3", "A-5" });\n'))),Object(o.b)(c.a,{value:"java",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'client.events.release("event1", Arrays.asList("A-3", "A-5"));\n'))),Object(o.b)(c.a,{value:"python",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},'client.events.release("event1", ["A-3", "A-5"])\n'))),Object(o.b)(c.a,{value:"ruby",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ruby"},"seatsio.events.release('event1', ['A-3', 'A-5'])\n"))),Object(o.b)(c.a,{value:"javascript",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"await client.events.release('eventKey', ['A-3', 'A-5']);\n")))),Object(o.b)("h2",{id:"request"},"Request"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},"{\n    'objects': ['A-3', 'A-5']\n}\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"objects"),": an array of object IDs to release"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"holdToken")," ",Object(o.b)("em",{parentName:"li"},"(optional)"),": the hold token must be supplied when you want to make sure that the same person that made the hold releases the objects."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"channelKeys")," ",Object(o.b)("i",null,"(optional)"),": an array of strings, i.e. the channel keys of the channel(s) to which the objects belong. If omitted, and the objects to be released are assigned to a channel, the request will fail with 400 Bad request. Pass in ",Object(o.b)("inlineCode",{parentName:"li"},"NO_CHANNEL")," as channel key to allow objects without a channel."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"ignoreChannels")," ",Object(o.b)("i",null,"(optional)"),": if true, the release call succeeds, even if the released objects belong to a channel. Useful inside a back office application, in which the user is allowed to release any seat - no matter the channel.\nShould not be used in combination with ",Object(o.b)("inlineCode",{parentName:"li"},"channelKeys"),".")),Object(o.b)("h2",{id:"response"},"Response"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"}," Without expand=objects ")),"\n204 - No Content"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"}," With expand=objects ")),"\n200 - ok"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "objects": {\n    "A-3": {\n      "label": "A-3",\n      "labels": {\n        "own": {\n          "label": "3",\n          "type": "seat"\n        },\n        "parent": {\n          "label": "A",\n          "type": "row"\n        },\n      },\n      "status": "free",\n      "categoryLabel": "Ground Floor",\n      "categoryKey": "4",\n      "ticketType": "adult",\n      "orderId": "order1",\n      "forSale": true,\n      "objectType": "seat",\n      "leftNeighbour": "A-2",\n      "rightNeighbour": "A-4"\n    },\n    "A-5": {\n      "label": "A-5",\n      "labels": {\n        "own": {\n          "label": "5",\n          "type": "seat"\n        },\n        "parent": {\n          "label": "A",\n          "type": "row"\n        },\n      },\n      "status": "free",\n      "categoryLabel": "Ground Floor",\n      "categoryKey": "4",\n      "ticketType": "adult",\n      "orderId": "order1",\n      "forSale": true,\n      "objectType": "seat",\n      "leftNeighbour": "A-4",\n      "rightNeighbour": "A-6"\n    }\n  }\n}\n')))}p.isMDXComponent=!0},353:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},354:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),b=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=b(n),d=a,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||o;return n?r.a.createElement(m,c(c({ref:t},i),{},{components:n})):r.a.createElement(m,c({ref:t},i))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=n[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},355:function(e,t,n){"use strict";var a=n(0),r=n(356);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},356:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},357:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(355),l=n(353),c=n(54),s=n.n(c),i=37,b=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,u=e.values,p=e.groupId,d=e.className,m=Object(o.a)(),j=m.tabGroupChoices,f=m.setTabGroupChoices,h=Object(a.useState)(c),v=h[0],O=h[1],y=a.Children.toArray(e.children);if(null!=p){var g=j[p];null!=g&&g!==v&&u.some((function(e){return e.value===g}))&&O(g)}var N=function(e){O(e),null!=p&&f(p,e)},w=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},d)},u.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(l.a)("tabs__item",s.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case b:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case i:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},n)}))),t?Object(a.cloneElement)(y.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},358:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}}}]);