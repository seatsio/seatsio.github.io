(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return d}));var a=n(3),o=n(7),r=(n(0),n(354)),c=n(357),i=n(358),l={title:"Temporarily hold objects",slug:"/api-temporarily-hold-objects",hidden:!1,createdAt:"2018-07-31T09:20:48.306Z",updatedAt:"2020-10-05T09:37:42.286Z"},s={unversionedId:"REST API/api-objects/api-temporarily-hold-objects",id:"REST API/api-objects/api-temporarily-hold-objects",isDocsHomePage:!1,title:"Temporarily hold objects",description:"Objects can be held for a certain time period. During this period, other users cannot hold or book the same seats.",source:"@site/docs/REST API/api-objects/api-temporarily-hold-objects.md",slug:"/api-temporarily-hold-objects",permalink:"/docs/api-temporarily-hold-objects",version:"current",sidebar:"docs",previous:{title:"Release objects",permalink:"/docs/api-release-objects"},next:{title:"Custom object status",permalink:"/docs/api-custom-object-status"}},b=[{value:"Request",id:"request",children:[]},{value:"Response",id:"response",children:[]}],p={toc:b};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Objects can be held for a certain time period. During this period, other users cannot hold or book the same seats."),Object(r.b)("p",null,"By default the expiration time for held objects is 15 minutes, but this can be changed via ",Object(r.b)("a",{parentName:"p",href:"https://app.seats.io/company-settings"},"your company settings page"),"."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"You only need this API call when holding best available objects."),Object(r.b)("p",{parentName:"div"},"If you render the chart with a ",Object(r.b)("a",{parentName:"p",href:"/docs/renderer-config-session"},"session")," parameter, objects get held when the ticket buyer clicks on them. So no need to manually call ",Object(r.b)("inlineCode",{parentName:"p"},"/hold")," in that case."))),Object(r.b)("p",null,"To hold objects using the manual API method, you first need to generate a hold token, which you then pass to the following API call:"),Object(r.b)(c.a,{defaultValue:"text",values:[{label:"Text",value:"text"},{label:"PHP",value:"php"},{label:"C#",value:"csharp"},{label:"Java",value:"java"},{label:"Python",value:"python"},{label:"Ruby",value:"ruby"},{label:"Javascript",value:"javascript"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"text",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-text"},"POST https://api.seatsio.net/events/{eventKey}/actions/hold\n\nPOST https://api.seatsio.net/events/{eventKey}/actions/hold?expand=objects\n"))),Object(r.b)(i.a,{value:"php",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-php"},'// No ticket types\n$seatsioClient->events->hold(\n  "event1", // the event key\n  ["A-3", "A-5"], // object labels\n  "17378c14-ae6a-46a4-ada4-9c745a45e018" // hold token\n);\n\n// Ticket types\n$seatsioClient->events->hold(\n  "event1",\n  [\n    ["objectId" => "A-3", "ticketType" => "adult"],\n    ["objectId" => "A-5", "ticketType" => "child"]\n  ],\n  "17378c14-ae6a-46a4-ada4-9c745a45e018" // hold token\n);\n'))),Object(r.b)(i.a,{value:"csharp",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-csharp"},'// No ticket types\nClient.Events.Hold("event1", new [] { "A-3", "A-5" }, "17378c14-ae6a-46a4-ada4-9c745a45e018");\n\n// Ticket types\nObjectProperties object1 = new ObjectProperties("A-3", "adult");\nObjectProperties object2 = new ObjectProperties("A-5", "child");\nClient.Events.Hold("event1", new [] { object1, object2 }, "17378c14-ae6a-46a4-ada4-9c745a45e018");\n'))),Object(r.b)(i.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'// No ticket types\nclient.events.hold("event1", Arrays.asList("A-3", "A-5"), "17378c14-ae6a-46a4-ada4-9c745a45e018");\n\n// Ticket types\nObjectProperties object1 = new ObjectProperties("A-3", "adult");\nObjectProperties object2 = new ObjectProperties("A-5", "child");\nclient.events.hold("event1", Arrays.asList(object1, object2), "17378c14-ae6a-46a4-ada4-9c745a45e018");\n'))),Object(r.b)(i.a,{value:"python",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},'# No ticket types\nclient.events.hold("event1", ["A-3", "A-5"], hold_token="17378c14-ae6a-46a4-ada4-9c745a45e018")\n\n# Ticket types\nobject1 = ObjectProperties("A-3", ticket_type="adult")\nobject2 = ObjectProperties("A-5", ticket_type="child")\nclient.events.hold("event1", [object1, object2], hold_token="17378c14-ae6a-46a4-ada4-9c745a45e018")\n'))),Object(r.b)(i.a,{value:"ruby",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ruby"},"# No ticket types\nclient.events.hold('event1', ['A-3', 'A-5'], '17378c14-ae6a-46a4-ada4-9c745a45e018')\n\n# Ticket types\nobject1 = {:objectId => 'A-3', :ticketType => 'adult'}\nobject2 = {:objectId => 'A-5', :ticketType => 'child'}\nclient.events.hold('event1', [object1, object2], '17378c14-ae6a-46a4-ada4-9c745a45e018')\n"))),Object(r.b)(i.a,{value:"javascript",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"// No ticket types\nlet holdToken = await client.holdTokens.create();\nawait client.events.hold('eventKey', ['A-3', 'A-5'], holdToken.holdToken);\n\n// Ticket types\nlet object1 = {objectId: 'A-3', ticketType: 'adult'};\nlet object2 = {objectId: 'A-5', ticketType: 'child'};\nlet holdToken = await client.holdTokens.create();\nawait client.events.hold('eventKey', [object1, object2], holdToken.holdToken);\n")))),Object(r.b)("h2",{id:"request"},"Request"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'// No ticket types\n{\n    "objects": ["A-3", "A-5"],\n    "holdToken": "17378c14-ae6a-46a4-ada4-9c745a45e018"\n}\n\n// Ticket types\n{\n    "objects": [\n        {"objectId": "A-3", "ticketType": "adult"},\n        {"objectId": "A-5", "ticketType": "child"}\n    ],\n    "holdToken": "17378c14-ae6a-46a4-ada4-9c745a45e018"\n}\n\n// Best available\n{\n    "bestAvailable": {\n        number: 2,\n        categories: ["balcony", "stalls"],\n        extraData: [{"name": "John Doe"}, {"name": "Jane Doe"}],\n        ticketTypes: ["adult", "child"]\n    },\n    "holdToken": "17378c14-ae6a-46a4-ada4-9c745a45e018"\n}\n')),Object(r.b)("p",null,"After invoking this API call, the objects get the status ",Object(r.b)("inlineCode",{parentName:"p"},"reservedByToken"),".\n(Note: this is a legacy status name: in the past, holding an object was known as reserving an object. We kept the status ",Object(r.b)("inlineCode",{parentName:"p"},"reservedByToken")," to maintain backwards compatibility, i.e. to not break existing integrations)"),Object(r.b)("p",null,"When you're ready to confirm the booking for a held object (e.g. after payment was received), issue a ",Object(r.b)("inlineCode",{parentName:"p"},"/book")," or ",Object(r.b)("inlineCode",{parentName:"p"},"/change-object-status")," call, passing in the same hold token that was used for acquiring the hold."),Object(r.b)("p",null,"If no definitive booking is made before the hold expires, the seat are released again. And if you want to cancel a hold before the hold period expires, you just ",Object(r.b)("a",{parentName:"p",href:"api-release-objects"},"release")," the objects."),Object(r.b)("p",null,"Even for objects that are held, the hold token is an optional argument to ",Object(r.b)("inlineCode",{parentName:"p"},"/book")," and ",Object(r.b)("inlineCode",{parentName:"p"},"/change-object-status"),". You only need to pass it when it is the person that made the hold who triggers the API call. If on the other hand you implemented some back office functionality in which venue managers can change the status of held objects, you don't need to pass in the hold token."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Holding also works for season tickets. Just pass in an array of events instead of a single event."))),Object(r.b)("h2",{id:"response"},"Response"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("em",{parentName:"strong"}," Without expand=objects ")),"\n204 - No Content"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("em",{parentName:"strong"}," With expand=objects ")),"\n200 - ok"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "A-3": {\n    "label": "A-3",\n    "labels": {\n      "own": {\n        "label": "3",\n        "type": "seat"\n      },\n      "parent": {\n        "label": "A",\n        "type": "row"\n      },\n    },\n    "status": "reservedByToken",\n    "holdToken": "17378c14-ae6a-46a4-ada4-9c745a45e018",\n    "categoryLabel": "Ground Floor",\n    "categoryKey": "4",\n    "ticketType": "adult",\n    "orderId": "order1",\n    "forSale": true,\n    "objectType": "seat",\n    "leftNeighbour": "A-2",\n    "rightNeighbour": "A-4"\n  },\n  "A-5": {\n    "label": "A-5",\n    "labels": {\n      "own": {\n        "label": "5",\n        "type": "seat"\n      },\n      "parent": {\n        "label": "A",\n        "type": "row"\n      },\n    },\n    "status": "reservedByToken",\n    "holdToken": "17378c14-ae6a-46a4-ada4-9c745a45e018",\n    "categoryLabel": "Ground Floor",\n    "categoryKey": "4",\n    "ticketType": "adult",\n    "orderId": "order1",\n    "forSale": true,\n    "objectType": "seat",\n    "leftNeighbour": "A-4",\n    "rightNeighbour": "A-6"\n  }\n}\n')))}d.isMDXComponent=!0},353:function(e,t,n){"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}},354:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,h=p["".concat(c,".").concat(u)]||p[u]||d[u]||r;return n?o.a.createElement(h,i(i({ref:t},s),{},{components:n})):o.a.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<r;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},355:function(e,t,n){"use strict";var a=n(0),o=n(356);t.a=function(){var e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},356:function(e,t,n){"use strict";var a=n(0),o=Object(a.createContext)(void 0);t.a=o},357:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(355),c=n(353),i=n(53),l=n.n(i),s=37,b=39;t.a=function(e){var t=e.lazy,n=e.block,i=e.defaultValue,p=e.values,d=e.groupId,u=e.className,h=Object(r.a)(),m=h.tabGroupChoices,j=h.setTabGroupChoices,v=Object(a.useState)(i),y=v[0],f=v[1],O=a.Children.toArray(e.children);if(null!=d){var g=m[d];null!=g&&g!==y&&p.some((function(e){return e.value===g}))&&f(g)}var k=function(e){f(e),null!=d&&j(d,e)},N=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},u)},p.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(c.a)("tabs__item",l.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case b:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return k(t)},onClick:function(){k(t)}},n)}))),t?Object(a.cloneElement)(O.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},358:function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return o.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}}}]);