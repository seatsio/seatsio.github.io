(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{353:function(e,t,n){"use strict";function a(e){var t,n,c="";if("string"==typeof e||"number"==typeof e)c+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(c&&(c+=" "),c+=n);else for(t in e)e[t]&&(c&&(c+=" "),c+=t);return c}t.a=function(){for(var e,t,n=0,c="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(c&&(c+=" "),c+=t);return c}},354:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),c=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var b=c.a.createContext({}),s=function(e){var t=c.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return c.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},f=c.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),u=s(n),f=a,m=u["".concat(l,".").concat(f)]||u[f]||p[f]||r;return n?c.a.createElement(m,i(i({ref:t},b),{},{components:n})):c.a.createElement(m,i({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=f;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var b=2;b<r;b++)l[b]=n[b];return c.a.createElement.apply(null,l)}return c.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},355:function(e,t,n){"use strict";var a=n(0),c=n(356);t.a=function(){var e=Object(a.useContext)(c.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},356:function(e,t,n){"use strict";var a=n(0),c=Object(a.createContext)(void 0);t.a=c},357:function(e,t,n){"use strict";var a=n(0),c=n.n(a),r=n(355),l=n(353),i=n(53),o=n.n(i),b=37,s=39;t.a=function(e){var t=e.lazy,n=e.block,i=e.defaultValue,u=e.values,p=e.groupId,f=e.className,m=Object(r.a)(),d=m.tabGroupChoices,v=m.setTabGroupChoices,O=Object(a.useState)(i),j=O[0],h=O[1],y=a.Children.toArray(e.children);if(null!=p){var g=d[p];null!=g&&g!==j&&u.some((function(e){return e.value===g}))&&h(g)}var T=function(e){h(e),null!=p&&v(p,e)},N=[];return c.a.createElement("div",null,c.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},f)},u.map((function(e){var t=e.value,n=e.label;return c.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(l.a)("tabs__item",o.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return T(t)},onClick:function(){T(t)}},n)}))),t?Object(a.cloneElement)(y.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):c.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},358:function(e,t,n){"use strict";var a=n(0),c=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return c.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),c=n(7),r=(n(0),n(354)),l=n(357),i=n(358),o={title:"Create an event",slug:"/api-create-an-event",hidden:!1,createdAt:"2018-08-02T09:57:18.036Z",updatedAt:"2021-02-23T13:16:10.999Z"},b={unversionedId:"REST API/api-events/api-create-an-event",id:"REST API/api-events/api-create-an-event",isDocsHomePage:!1,title:"Create an event",description:"<Tabs",source:"@site/docs/REST API/api-events/api-create-an-event.md",slug:"/api-create-an-event",permalink:"/docs/api-create-an-event",version:"current",sidebar:"docs",previous:{title:"Retrieve an event",permalink:"/docs/api-retrieve-an-event"},next:{title:"Create multiple events",permalink:"/docs/api-create-multiple-events"}},s=[],u={toc:s};function p(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)(l.a,{defaultValue:"text",values:[{label:"Text",value:"text"},{label:"PHP",value:"php"},{label:"C#",value:"csharp"},{label:"Java",value:"java"},{label:"Python",value:"python"},{label:"Ruby",value:"ruby"},{label:"Javascript",value:"javascript"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"text",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-text"},"POST https://api.seatsio.net/events\n"))),Object(r.b)(i.a,{value:"php",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-php"},'$seatsioClient->events->create("4250fffc-e41f-c7cb-986a-2c5e728b8c28", "event34");\n\n$seatsioClient->events->create(\n  "4250fffc-e41f-c7cb-986a-2c5e728b8c28", null,\n  TableBookingConfig::custom(["T1" => "BY_TABLE", "T2" => "BY_SEAT"])\n);\n\n$seatsioClient->events->create(\n  "4250fffc-e41f-c7cb-986a-2c5e728b8c28", null, null,\n  "9350fffc-e41f-c7cb-986a-2c5e728b8c2b" // social distancing ruleset key\n);\n'))),Object(r.b)(i.a,{value:"csharp",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-csharp"},'Client.Events.Create("4250fffc-e41f-c7cb-986a-2c5e728b8c28", "event34");\n\nClient.Events.Create(\n  "4250fffc-e41f-c7cb-986a-2c5e728b8c28", null,\n  new Dictionary<string, string> {{"T1", "BY_TABLE"}, {"T2", "BY_SEAT"}}\n);\n\nClient.Events.Create(\n  "4250fffc-e41f-c7cb-986a-2c5e728b8c28", null, null,\n  "9350fffc-e41f-c7cb-986a-2c5e728b8c2b" // social distancing ruleset key\n);\n'))),Object(r.b)(i.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'client.events.create("4250fffc-e41f-c7cb-986a-2c5e728b8c28", "event34");\n\nclient.events.create(\n  "4250fffc-e41f-c7cb-986a-2c5e728b8c28", null,\n  TableBookingConfig.custom(ImmutableMap.of("T1", BY_TABLE, "T2", BY_SEAT))\n);\n\nclient.events.create(\n  "4250fffc-e41f-c7cb-986a-2c5e728b8c28", null, null,\n  "9350fffc-e41f-c7cb-986a-2c5e728b8c2b" // social distancing ruleset key\n);\n'))),Object(r.b)(i.a,{value:"python",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},'client.events.create("749b9650-24fb-11e7-93ae-92361f002671", event_key="event34")\n\nclient.events.create("749b9650-24fb-11e7-93ae-92361f002671", table_booking_config=TableBookingConfig.custom({"T1": "BY_TABLE", "T2": "BY_SEAT"}))\n\nclient.events.create("749b9650-24fb-11e7-93ae-92361f002671", social_distancing_ruleset_key="9350fffc-e41f-c7cb-986a-2c5e728b8c2b")\n'))),Object(r.b)(i.a,{value:"ruby",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ruby"},'client.events.create key: "749b9650-24fb-11e7-93ae-92361f002671", event_key: "event34"\n\nclient.events.create key: "749b9650-24fb-11e7-93ae-92361f002671", table_booking_config: Seatsio::TableBookingConfig::custom({\'T1\' => \'BY_TABLE\', \'T2\' => \'BY_SEAT\'})\n\nclient.events.create key: "749b9650-24fb-11e7-93ae-92361f002671", social_distancing_ruleset_key: "9350fffc-e41f-c7cb-986a-2c5e728b8c2b"\n'))),Object(r.b)(i.a,{value:"javascript",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"await client.events.create('chartKey', 'eventKey');\n\nawait client.events.create(\n  'chartKey', null,\n  TableBookingConfig.custom({ T1: 'BY_TABLE', T2: 'BY_SEAT' })\n);\n\nawait client.events.create(\n  'chartKey', null, null,\n  '9350fffc-e41f-c7cb-986a-2c5e728b8c2b' // social distancing ruleset key\n);\n")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Request")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n    "chartKey": "4250fffc-e41f-c7cb-986a-2c5e728b8c28",\n    "eventKey": "event34",\n    "tableBookingConfig": {\n      "mode": "CUSTOM",\n      "tables": { "T1": "BY_TABLE", "T2": "BY_SEAT" }\n    },\n    "socialDistancingRulesetKey": "9350fffc-e41f-c7cb-986a-2c5e728b8c2b"\n}\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"chartKey"),": chart key to which the event will be linked. Required.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"eventKey"),": the key of the event. This is the unique identifier of the event in your own database. Optional, if you don't pass in your own event key, seats.io will generate one.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"tableBookingConfig"),": optional. When not passed in, the event inherits the table booking settings defined on the chart. ",Object(r.b)("inlineCode",{parentName:"p"},"mode")," can either be:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"INHERIT"),": table booking settings are inherited from the chart (which is the default behaviour)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"CUSTOM"),": when using this mode, you can pass in a ",Object(r.b)("inlineCode",{parentName:"li"},"tables")," object to override the table booking settings of the chart for some tables.  The ",Object(r.b)("inlineCode",{parentName:"li"},"tables")," object has table labels as its keys, and ",Object(r.b)("inlineCode",{parentName:"li"},"BY_TABLE")," or ",Object(r.b)("inlineCode",{parentName:"li"},"BY_SEAT")," as values."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ALL_BY_SEAT"),": for this event, all tables are bookable by seat"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ALL_BY_TABLE"),":  for this event, all tables are bookable as a whole"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"socialDistancingRulesetKey"),": optional. The UUID which identifies a social distancing ruleset. You can get that key by ",Object(r.b)("a",{parentName:"p",href:"api-retrieve-a-chart"},"retrieving the chart")," for the event.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"bookWholeTables"),": deprecated. Boolean. Whether only whole tables can be booked, or the individual seats of a table. Cannot be used in combination with ",Object(r.b)("inlineCode",{parentName:"p"},"tableBookingModes"),". Pass in ",Object(r.b)("inlineCode",{parentName:"p"},"false")," to make all tables bookable by seat, and ",Object(r.b)("inlineCode",{parentName:"p"},"true")," to make them bookable by table.\nIf both ",Object(r.b)("inlineCode",{parentName:"p"},"bookWholeTables")," and ",Object(r.b)("inlineCode",{parentName:"p"},"tableBookingModes")," are omitted, the table booking modes from the chart are inherited.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"tableBookingModes"),": deprecated. allows to indicate which tables are bookable by seat, and which by table. It's an object with table names as keys, and table booking modes as values (BY_TABLE or BY_SEAT). If a table is not specified, it defaults to BY_SEAT. Cannot be used in combination with ",Object(r.b)("inlineCode",{parentName:"p"},"bookWholeTables"),"\nIf both ",Object(r.b)("inlineCode",{parentName:"p"},"bookWholeTables")," and ",Object(r.b)("inlineCode",{parentName:"p"},"tableBookingModes")," are omitted, the table booking modes from the chart are inherited."))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Example request")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-curl"},"curl https://api.seatsio.net/events \\\n-u aSecretKey: -X POST -H 'Content-Type: application/json' -d '{\"chartKey\": \"4250fffc-e41f-c7cb-986a-2c5e728b8c28\"}'\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 169,\n    "eventKey": "event34",\n    "tableBookingConfig": {\n      "mode": "CUSTOM",\n      "tables": { "T1": "BY_TABLE", "T2": "BY_SEAT" }\n    },\n    "socialDistancingRulesetKey": "9350fffc-e41f-c7cb-986a-2c5e728b8c2b",\n    "supportsBestAvailable": true,\n    "createdOn": "2017-05-05T10:58:44.715Z"\n}\n')))}p.isMDXComponent=!0}}]);