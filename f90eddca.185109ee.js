(window.webpackJsonp=window.webpackJsonp||[]).push([[275],{347:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),l=(n(0),n(359)),c=n(362),i=n(363),o={title:"Retrieve an event",slug:"/api/retrieve-an-event",hidden:!1,createdAt:"2018-08-02T09:57:07.007Z",updatedAt:"2020-10-30T11:17:29.827Z"},b={unversionedId:"REST API/api-events/api-retrieve-an-event",id:"REST API/api-events/api-retrieve-an-event",isDocsHomePage:!1,title:"Retrieve an event",description:"Retrieve an event",source:"@site/docs/REST API/api-events/api-retrieve-an-event.md",slug:"/api/retrieve-an-event",permalink:"/docs/api/retrieve-an-event",version:"current",sidebar:"api",previous:{title:"List events",permalink:"/docs/api/list-events"},next:{title:"Create an event",permalink:"/docs/api/create-an-event"}},s=[{value:"Retrieve an event",id:"retrieve-an-event",children:[]}],u={toc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",{id:"retrieve-an-event"},"Retrieve an event"),Object(l.b)(c.a,{groupId:"serverside-code-samples",defaultValue:"shell",values:[{label:"Text",value:"shell"},{label:"PHP",value:"php"},{label:"C#",value:"csharp"},{label:"Java",value:"java"},{label:"Python",value:"python"},{label:"Ruby",value:"ruby"},{label:"Javascript",value:"javascript"}],mdxType:"Tabs"},Object(l.b)(i.a,{value:"shell",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"GET https://api-{region}.seatsio.net/events/{eventKey}\n"))),Object(l.b)(i.a,{value:"php",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-php"},'$seatsioClient->events->retrieve("anotherEvent");\n'))),Object(l.b)(i.a,{value:"csharp",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-csharp"},'Client.Events.Retrieve("anotherEvent");\n'))),Object(l.b)(i.a,{value:"java",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},'client.events.retrieve("anotherEvent");\n'))),Object(l.b)(i.a,{value:"python",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-python"},'client.events.retrieve("anotherEvent")\n'))),Object(l.b)(i.a,{value:"ruby",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-ruby"},'client.events.retrieve key: "anotherEvent"\n'))),Object(l.b)(i.a,{value:"javascript",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},"await client.events.retrieve('eventKey');\n")))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"curl https://api-{region}.seatsio.net/events/anEvent -u aSecretKey: \n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},'{\n    "id": 168,\n    "key": "anotherEvent",\n    "tableBookingConfig": {\n      "mode": "CUSTOM",\n      "tables": {\n        "T1": "BY_TABLE",\n        "T2": "BY_SEAT",\n        "T3": "BY_TABLE"\n      }\n    },\n    "chartKey": "4150dddc-e41f-c7cb-986a-2c5e728b8c20",\n    "supportsBestAvailable": true,\n    "forSaleConfig": {\n        "forSale": false,\n        "objects": ["section1"],\n        "categories": []\n    },\n    "channels": [\n      {\n        "name": "Channel 1",\n        "key": "8950dddc-e51f-c7cb-986a-2c5e728b8c21",\n        "color": "#aaaaaa",\n        "objects": ["A-1", "A-2"]\n      }\n    ],\n    "socialDistancingRulesetKey": "ruleset1",\n    "createdOn": "2017-03-05T10:58:44.715Z",\n    "updatedOn": "2017-04-05T10:58:44.615Z"\n}\n\n')),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"supportsBestAvailable"),": true if the chart of the event has a focal point.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"forSaleConfig"),": null, unless /mark-as-for-sale or /mark-as-not-for-sale have been called")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"tableBookingConfig"),": ",Object(l.b)("inlineCode",{parentName:"p"},"mode")," can either be"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"INHERIT"),": table booking settings are inherited from the chart"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"CUSTOM"),": for this event, some tables have a different table booking config than defined on the chart"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"ALL_BY_SEAT"),": for this event, all tables are bookable by seat"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"ALL_BY_TABLE"),":  for this event, all tables are bookable as a whole"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"tableBookingModes"),": deprecated. Use ",Object(l.b)("inlineCode",{parentName:"p"},"tableBookingConfig.tables")," instead.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"bookWholeTables"),": deprecated. Use ",Object(l.b)("inlineCode",{parentName:"p"},"tableBookingConfig.mode")," instead."))))}p.isMDXComponent=!0},358:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},359:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},v=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),u=s(n),v=a,m=u["".concat(c,".").concat(v)]||u[v]||p[v]||l;return n?r.a.createElement(m,i(i({ref:t},b),{},{components:n})):r.a.createElement(m,i({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=v;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var b=2;b<l;b++)c[b]=n[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}v.displayName="MDXCreateElement"},360:function(e,t,n){"use strict";var a=n(0),r=n(361);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},361:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},362:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(360),c=n(358),i=n(54),o=n.n(i),b=37,s=39;t.a=function(e){var t=e.lazy,n=e.block,i=e.defaultValue,u=e.values,p=e.groupId,v=e.className,m=Object(l.a)(),d=m.tabGroupChoices,f=m.setTabGroupChoices,O=Object(a.useState)(i),j=O[0],g=O[1],h=a.Children.toArray(e.children);if(null!=p){var y=d[p];null!=y&&y!==j&&u.some((function(e){return e.value===y}))&&g(y)}var N=function(e){g(e),null!=p&&f(p,e)},T=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},v)},u.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(c.a)("tabs__item",o.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(T,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},n)}))),t?Object(a.cloneElement)(h.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},363:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}}}]);