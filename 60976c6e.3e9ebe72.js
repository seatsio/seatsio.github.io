(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{186:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a(3),s=a(7),r=(a(0),a(354)),o=a(357),i=a(358),c={title:"List status changes for an object",slug:"/api-list-status-changes-for-an-object",hidden:!1,createdAt:"2018-08-02T10:09:04.228Z",updatedAt:"2019-06-25T18:24:21.711Z"},l={unversionedId:"REST API/api-events/api-list-status-changes-for-an-object",id:"REST API/api-events/api-list-status-changes-for-an-object",isDocsHomePage:!1,title:"List status changes for an object",description:"Lists status changes for an object in the event, with the most recent ones first.",source:"@site/docs/REST API/api-events/api-list-status-changes-for-an-object.md",slug:"/api-list-status-changes-for-an-object",permalink:"/docs/api-list-status-changes-for-an-object",version:"current",sidebar:"docs",previous:{title:"List status changes",permalink:"/docs/api-list-status-changes"},next:{title:"Update channels for an event",permalink:"/docs/update-channels-for-an-event"}},b=[],u={toc:b};function p(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Lists status changes for an object in the event, with the most recent ones first."),Object(r.b)(o.a,{defaultValue:"shell",values:[{label:"Text",value:"shell"},{label:"PHP",value:"php"},{label:"C#",value:"csharp"},{label:"Java",value:"java"},{label:"Python",value:"python"},{label:"Ruby",value:"ruby"},{label:"Javascript",value:"javascript"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"shell",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"GET https://api.seatsio.net/events/{eventKey}/objects/{objectLabel}/status-changes\n\nMore info: More info: https://docs.seats.io/docs/api-pagination\n\n"))),Object(r.b)(i.a,{value:"php",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-php"},"$seatsioClient->events->statusChangesForObject(eventKey, objectLabel)->firstPage(pageSize?)\n$seatsioClient->events->statusChangesForObject(eventKey, objectLabel)->pageAfter(afterId, pageSize?)\n$seatsioClient->events->statusChangesForObject(eventKey, objectLabel)->pageBefore(beforeId, pageSize?)\n\n$seatsioClient->events->statusChangesForObject(eventKey, objectLabel)->all()\n\n/*\nSome examples (for charts, but listing status changes works similarly):\n\nhttps://github.com/seatsio/seatsio-php/blob/master/README.md#listing-charts-page-by-page\nhttps://github.com/seatsio/seatsio-php/blob/master/README.md#listing-all-charts\n*/\n"))),Object(r.b)(i.a,{value:"csharp",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-csharp"},"client.Events.StatusChangesForObject(eventKey, objectLabel).FirstPage(pageSize?)\nclient.Events.StatusChangesForObject(eventKey, objectLabel).PageAfter(afterId, filter?, pageSize?)\nclient.Events.StatusChangesForObject(eventKey, objectLabel).PageBefore(beforeId, filter?, pageSize?)\n\nclient.Events.StatusChangesForObject(eventKey, objectLabel).All(filter?);\n\n/*\nSome examples (for charts, but listing status changes works similarly):\n\nhttps://github.com/seatsio/seatsio-dotnet/blob/master/README.md#listing-charts-page-by-page\nhttps://github.com/seatsio/seatsio-dotnet/blob/master/README.md#listing-all-charts\n*/\n"))),Object(r.b)(i.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"client.events.statusChangesForObject(eventKey, objectLabel).firstPage(pageSize?)\nclient.events.statusChanges(eventKey, objectLabel).pageAfter(afterId, pageSize?)\nclient.events.statusChanges(eventKey, objectLabel).pageBefore(beforeId, pageSize?)\n\nclient.events.statusChanges(eventKey, objectLabel).all();\n\n/*\nSome examples (for charts, but listing status changes works similarly):\n\nhttps://github.com/seatsio/seatsio-java/blob/master/README.md#listing-charts-page-by-page\nhttps://github.com/seatsio/seatsio-java/blob/master/README.md#listing-all-charts\n*/\n"))),Object(r.b)(i.a,{value:"python",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},'client.events.status_changes_for_object(event_key, object_label).first_page(page_size?)\nclient.events.status_changes_for_object(event_key, object_label).page_after(after_id, page_size?)\nclient.events.status_changes_for_object(event_key, object_label).page_before(before_id, page_size?)\n\nclient.events.status_changes_for_object(event_key, object_label).list()\n\n"""\nSome examples (for charts, but listing status changes for an object works similarly):\n\nhttps://github.com/seatsio/seatsio-python/blob/master/README.md#listing-charts-page-by-page\nhttps://github.com/seatsio/seatsio-python/blob/master/README.md#listing-all-charts\n"""\n'))),Object(r.b)(i.a,{value:"ruby",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ruby"},"client.events.list_status_changes_for_object(event_key, object_label).first_page(page_size?)\nclient.events.list_status_changes_for_object(event_key, object_label).page_after(after_id, page_size?)\nclient.events.list_status_changes_for_object(event_key, object_label).page_before(before_id, page_size?)\n\nclient.events.list_status_changes_for_object(event_key, object_label)\n  \n# Some examples (for charts, but listing status changes for an object works similarly):\n\n# https://github.com/seatsio/seatsio-ruby/blob/master/README.md#listing-charts-page-by-page\n# https://github.com/seatsio/seatsio-ruby/blob/master/README.md#listing-all-charts\n"))),Object(r.b)(i.a,{value:"javascript",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"for await (let statusChange of client.events.statusChangesForObject(eventKey, objectLabel).all()) {\n    //Do something with the status changes\n}\n\nclient.events.statusChangesForObject(eventKey, objectLabel).firstPage(pageSize?)\nclient.events.statusChangesForObject(eventKey, objectLabel).pageAfter(afterId, pageSize?)\nclient.events.statusChangesForObject(eventKey, objectLabel).pagBefore(beforeId, pageSize?)\n\n/*\nSome examples (for charts, but listing status changes for an object works similarly):\n\nhttps://github.com/seatsio/seatsio-java/blob/master/README.md#listing-charts-page-by-page\nhttps://github.com/seatsio/seatsio-java/blob/master/README.md#listing-all-charts\n*/\n")))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"curl https://api.seatsio.net/events/event34/objects/A-1/status-changes?limit=100&start_after_id=34 \\\n-u aSecretKey:\n\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n    "next_page_starts_after": 122,\n    "items": [\n        {\n            "id": 169,\n            "eventId": 12,\n            "status": "booked",\n            "quantity": 1,\n            "objectLabel": "A-1",\n            "date": "2017-05-05T10:58:44.715Z",\n            "orderId": "anOrder",\n            "extraData": {\n                "name": "John Doe"\n            },\n            "origin": {\n              "type": "API_CALL",\n              "ip": "10.4.32.67"\n            }\n        },\n        {\n            "id": 168,\n            "eventId": 12,\n            "status": "free",\n            "quantity": 1,\n            "objectLabel": "A-1",\n            "date": "2017-05-05T09:58:44.715Z",\n            "orderId": "anotherOrder",\n            "extraData": {\n                "name": "Jane Doe"\n            },\n            "origin": {\n              "type": "HELD_BY_USER"\n            }\n        }\n        ...\n    ]\n}\n')),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"origin")," can be either ",Object(r.b)("inlineCode",{parentName:"p"},"API_CALL"),", ",Object(r.b)("inlineCode",{parentName:"p"},"HELD_BY_USER"),", ",Object(r.b)("inlineCode",{parentName:"p"},"HOLD_RELEASED_BY_USER")," or ",Object(r.b)("inlineCode",{parentName:"p"},"HOLD_EXPIRED"),". An ",Object(r.b)("inlineCode",{parentName:"p"},"ip")," property is present when the type equals ",Object(r.b)("inlineCode",{parentName:"p"},"API_CALL"),"."))}p.isMDXComponent=!0},353:function(e,t,a){"use strict";function n(e){var t,a,s="";if("string"==typeof e||"number"==typeof e)s+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(s&&(s+=" "),s+=a);else for(t in e)e[t]&&(s&&(s+=" "),s+=t);return s}t.a=function(){for(var e,t,a=0,s="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(s&&(s+=" "),s+=t);return s}},354:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return f}));var n=a(0),s=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=s.a.createContext({}),b=function(e){var t=s.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=b(e.components);return s.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},g=s.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=b(a),g=n,f=u["".concat(o,".").concat(g)]||u[g]||p[g]||r;return a?s.a.createElement(f,i(i({ref:t},l),{},{components:a})):s.a.createElement(f,i({ref:t},l))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var l=2;l<r;l++)o[l]=a[l];return s.a.createElement.apply(null,o)}return s.a.createElement.apply(null,a)}g.displayName="MDXCreateElement"},355:function(e,t,a){"use strict";var n=a(0),s=a(356);t.a=function(){var e=Object(n.useContext)(s.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},356:function(e,t,a){"use strict";var n=a(0),s=Object(n.createContext)(void 0);t.a=s},357:function(e,t,a){"use strict";var n=a(0),s=a.n(n),r=a(355),o=a(353),i=a(54),c=a.n(i),l=37,b=39;t.a=function(e){var t=e.lazy,a=e.block,i=e.defaultValue,u=e.values,p=e.groupId,g=e.className,f=Object(r.a)(),m=f.tabGroupChoices,h=f.setTabGroupChoices,v=Object(n.useState)(i),j=v[0],d=v[1],y=n.Children.toArray(e.children);if(null!=p){var O=m[p];null!=O&&O!==j&&u.some((function(e){return e.value===O}))&&d(O)}var _=function(e){d(e),null!=p&&h(p,e)},E=[];return s.a.createElement("div",null,s.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":a},g)},u.map((function(e){var t=e.value,a=e.label;return s.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return E.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case b:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(E,e.target,e)},onFocus:function(){return _(t)},onClick:function(){_(t)}},a)}))),t?Object(n.cloneElement)(y.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):s.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},358:function(e,t,a){"use strict";var n=a(0),s=a.n(n);t.a=function(e){var t=e.children,a=e.hidden,n=e.className;return s.a.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}}}]);