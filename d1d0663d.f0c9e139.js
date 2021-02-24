(window.webpackJsonp=window.webpackJsonp||[]).push([[241],{309:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),c=(n(0),n(354)),l=n(357),o=n(358),i={title:"Create multiple events",slug:"/api-create-multiple-events",hidden:!1,createdAt:"2019-01-15T11:40:46.026Z",updatedAt:"2020-11-05T10:11:57.290Z"},s={unversionedId:"REST API/api-events/api-create-multiple-events",id:"REST API/api-events/api-create-multiple-events",isDocsHomePage:!1,title:"Create multiple events",description:"Use this API call to create multiple events at once for a chart. The maximum number of events that can be created with a single API call is 100.",source:"@site/docs/REST API/api-events/api-create-multiple-events.md",slug:"/api-create-multiple-events",permalink:"/docs/api-create-multiple-events",version:"current",sidebar:"docs",previous:{title:"Create an event",permalink:"/docs/api-create-an-event"},next:{title:"Update an event",permalink:"/docs/api-update-an-event"}},u=[],b={toc:u};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Use this API call to create multiple events at once for a chart. The maximum number of events that can be created with a single API call is 100.  "),Object(c.b)(l.a,{defaultValue:"text",values:[{label:"Text",value:"text"},{label:"PHP",value:"php"},{label:"C#",value:"csharp"},{label:"Java",value:"java"},{label:"Python",value:"python"},{label:"Ruby",value:"ruby"},{label:"Javascript",value:"javascript"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"text",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-text"},"POST https://api.seatsio.net/events/actions/create-multiple\n"))),Object(c.b)(o.a,{value:"php",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-php"},'$params = [\n    (new EventCreationParams())\n    ->setEventKey("event34")\n    ->setTableBookingConfig(TableBookingConfig::allByTable())\n    ->setSocialDistancingRulesetKey("ruleset1"),\n    (new EventCreationParams())\n    ->setEventKey("event35")\n    ->setTableBookingConfig(TableBookingConfig::allBySeat())\n    ->setSocialDistancingRulesetKey("ruleset2")\n];\n\n$events = $seatsioClient->events->createMultiple("4250fffc-e41f-c7cb-986a-2c5e728b8c28", $params);\n'))),Object(c.b)(o.a,{value:"csharp",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-csharp"},'var eventCreationParams = new[] {\n  new EventCreationParams("event34", TableBookingConfig.AllByTable(), "ruleset1"),\n  new EventCreationParams("event35", TableBookingConfig.AllBySeat(), "ruleset2")\n};\n\nClient.Events.Create("4250fffc-e41f-c7cb-986a-2c5e728b8c28", eventCreationParams);\n'))),Object(c.b)(o.a,{value:"java",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},'List<EventCreationParams> events = new ArrayList<>();\nevents.add(new EventCreationParams("event34", TableBookingConfig.allByTable(), "ruleset1"));\nevents.add(new EventCreationParams("event35", TableBookingConfig.allBySeat(), "ruleset2"));\n\nclient.events.create("4250fffc-e41f-c7cb-986a-2c5e728b8c28", events);\n'))),Object(c.b)(o.a,{value:"python",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-python"},'eventProps = [\n  EventProperties(event_key="event34", table_booking_config=TableBookingConfig.all_by_table(), social_distancing_ruleset_key="ruleset1"),\n  EventProperties(event_key="event35", table_booking_config=TableBookingConfig.all_by_seat(), social_distancing_ruleset_key="ruleset2")\n]\n\nevents = client.events.create_multiple("4250fffc-e41f-c7cb-986a-2c5e728b8c28", eventProps);\n'))),Object(c.b)(o.a,{value:"ruby",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ruby"},"params = [\n  { event_key: 'event34', table_booking_config: Seatsio::TableBookingConfig::all_by_table(), social_distancing_ruleset_key: 'ruleset1' },\n    { event_key: 'event35', table_booking_config: Seatsio::TableBookingConfig::all_by_seat(), social_distancing_ruleset_key: 'ruleset2' }\n]\n\nclient.events.create_multiple chart_key: '4250fffc-e41f-c7cb-986a-2c5e728b8c28' event_creation_params: params\n"))),Object(c.b)(o.a,{value:"javascript",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},"Creating multiple events is currently not supported in the JS client\n")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Request")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json"},'{\n    "chartKey": "4250fffc-e41f-c7cb-986a-2c5e728b8c28",\n    "events": [\n      { \n        "eventKey": "event34",\n        "tableBookingConfig": { "mode": "ALL_BY_TABLE" },\n        "socialDistancingRulesetKey": "ruleset1"\n      },\n      {\n        "eventKey": "event35",\n        "tableBookingConfig": { "mode": "ALL_BY_SEAT" },\n        "socialDistancingRulesetKey": "ruleset2"\n      }\n    ]\n}\n')),Object(c.b)("p",null,"The docs for the call to ",Object(c.b)("a",{parentName:"p",href:"/docs/api-create-an-event"},"create a single event")," explain these request parameters."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Example request")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-curl"},'curl https://api.seatsio.net/events/actions/create-multiple \\\n-u aSecretKey: -X POST -H \'Content-Type: application/json\' -d \'{"chartKey": "4250fffc-e41f-c7cb-986a-2c5e728b8c28", "events": [{}, {}]}\'\n')),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json"},'{\n  "events": [\n    {\n      "id": 169,\n      "key": "event34",\n      "chartKey": "4250fffc-e41f-c7cb-986a-2c5e728b8c28",\n      "tableBookingConfig": { "mode": "ALL_BY_TABLE" },\n      "createdOn": "2017-05-05T10:58:44.715Z"\n    },\n    {\n      "id": 170,\n      "key": "event35",\n      "chartKey": "4250fffc-e41f-c7cb-986a-2c5e728b8c28",\n      "tableBookingConfig": { "mode": "ALL_BY_SEAT" },\n      "createdOn": "2017-05-05T10:58:44.815Z"\n     }\n  ]\n}\n')))}p.isMDXComponent=!0},353:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},354:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return v}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=u(n),f=a,v=b["".concat(l,".").concat(f)]||b[f]||p[f]||c;return n?r.a.createElement(v,o(o({ref:t},s),{},{components:n})):r.a.createElement(v,o({ref:t},s))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,l=new Array(c);l[0]=f;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<c;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},355:function(e,t,n){"use strict";var a=n(0),r=n(356);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},356:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},357:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(355),l=n(353),o=n(53),i=n.n(o),s=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,o=e.defaultValue,b=e.values,p=e.groupId,f=e.className,v=Object(c.a)(),m=v.tabGroupChoices,d=v.setTabGroupChoices,g=Object(a.useState)(o),y=g[0],O=g[1],j=a.Children.toArray(e.children);if(null!=p){var h=m[p];null!=h&&h!==y&&b.some((function(e){return e.value===h}))&&O(h)}var T=function(e){O(e),null!=p&&d(p,e)},_=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},f)},b.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(l.a)("tabs__item",i.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return _.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(_,e.target,e)},onFocus:function(){return T(t)},onClick:function(){T(t)}},n)}))),t?Object(a.cloneElement)(j.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},358:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}}}]);