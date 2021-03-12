(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{260:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return b}));var a=t(3),r=t(7),l=(t(0),t(359)),c=t(362),o=t(363),s={title:"Update channels for an event",slug:"/api/update-channels-for-an-event",hidden:!1,createdAt:"2020-06-22T08:20:48.512Z",updatedAt:"2020-06-22T09:51:45.689Z"},i={unversionedId:"REST API/api-events/update-channels-for-an-event",id:"REST API/api-events/update-channels-for-an-event",isDocsHomePage:!1,title:"Update channels for an event",description:"Updates the channels for an event, without touching the assigned objects to those channels.",source:"@site/docs/REST API/api-events/update-channels-for-an-event.md",slug:"/api/update-channels-for-an-event",permalink:"/docs/api/update-channels-for-an-event",version:"current",sidebar:"api",previous:{title:"List status changes for an object",permalink:"/docs/api/list-status-changes-for-an-object"},next:{title:"Assign objects to channels",permalink:"/docs/api/assign-objects-to-channels"}},u=[],p={toc:u};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Updates the channels for an event, without touching the assigned objects to those channels."),Object(l.b)(c.a,{groupId:"serverside-code-samples",defaultValue:"shell",values:[{label:"Text",value:"shell"},{label:"PHP",value:"php"},{label:"C#",value:"csharp"},{label:"Java",value:"java"},{label:"Python",value:"python"},{label:"Ruby",value:"ruby"},{label:"Javascript",value:"javascript"}],mdxType:"Tabs"},Object(l.b)(o.a,{value:"shell",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"POST https://api-{region}.seatsio.net/events/{eventKey}/channels/update\n"))),Object(l.b)(o.a,{value:"php",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-php"},'$this->seatsioClient->events->updateChannels($event->key, [\n    "channelKey1" => new Channel("channel 1", "#FF0000", 1),\n    "channelKey2" => new Channel("channel 2", "#00FFFF", 2)\n]);\n'))),Object(l.b)(o.a,{value:"csharp",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-csharp"},'var channels = new Dictionary<string, Channel>()\n{\n  { "channelKey1", new Channel("channel 1", "#FFFF00", 1) },\n  { "channelKey2", new Channel("channel 2", "#00FFFF", 2) }\n};\n\nClient.Events.UpdateChannels(event1.Key, channels);\n'))),Object(l.b)(o.a,{value:"java",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},'client.events.updateChannels(event.key, ImmutableMap.of(\n  "channelKey1", new Channel("channel 1", "#FFFF99", 1),\n  "channelKey2", new Channel("channel 2", "#FFFF99", 2)\n));\n'))),Object(l.b)(o.a,{value:"python",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-python"},"self.client.events.update_channels(event.key, {\n  'channelKey1': Channel(name='channel 1', color='#00FF00', index=1),\n  'channelKey2': Channel(name='channel 2', color='#FF0000', index=2),\n})\n"))),Object(l.b)(o.a,{value:"ruby",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-ruby"},'@seatsio.events.update_channels key: event.key, channels: {\n  "channelKey1" => {"name" => "channel 1", "color" => "#FF0000", "index" => 1},\n  "channelKey2" => {"name" => "channel 2", "color" => "#0000FF", "index" => 2}\n}\n'))),Object(l.b)(o.a,{value:"javascript",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},'await client.events.updateChannels(event.key, {\n  "channelKey1": {\n    "name": "channel 1",\n    "color": "#FFAABB",\n    "index": 1\n  },\n  "channelKey2": {\n    "name": "channel 2",\n    "color": "#FFAACC",\n    "index": 2\n  }\n})\n')))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},'{\n    "channels": {\n        "fc34bdf0-0175-5a0a-e9af-9b0310585056": {\n            "name": "Channel Watermelon",\n            "color": "#ED303D",\n            "index": 1\n        },\n        "7a273f09-8c3a-2782-af93-6546d32abbe5": {\n            "name": "Channel Lime",\n            "color": "#97CA48",\n            "index": 2\n        },\n        "535ac74d-9c67-35da-84b9-6cdd4b99ae71": {\n            "name": "Channel Sky",\n            "color": "#2381FB",\n            "index": 3\n        }\n    }\n}\n')),Object(l.b)("p",null,"The request body should contain a json object with one property (",Object(l.b)("inlineCode",{parentName:"p"},"channels"),"), that has a property per channel: the channel key as property name, and the channel configuration as property value. "),Object(l.b)("p",null,"A channel configuration has the following properties: "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"name: this needs to be unique and is required"),Object(l.b)("li",{parentName:"ul"},"color (optional): a css color; color is used in the Event Manager, to be able to distinguish different channels. End users (ticket buyers) will not get to see the channel by color. "),Object(l.b)("li",{parentName:"ul"},"index (optional): a number that indicates the ordering of channels; index is used in the Event Manager, to keep ordering of channels consistent.  ")),Object(l.b)("p",null,"Please note that using this API endpoint replaces any previous channels configuration, and that channels are defined by their key. "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"To create a new channel, add it to the ",Object(l.b)("inlineCode",{parentName:"li"},"channels")," object using a fresh key (UUIDs are a great choice)"),Object(l.b)("li",{parentName:"ul"},"To delete a channel, simply don't define its key in the ",Object(l.b)("inlineCode",{parentName:"li"},"channels")," object"),Object(l.b)("li",{parentName:"ul"},"To update the name, color or index of a channel, change its value")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Response")),Object(l.b)("p",null,"204 - No Content"))}b.isMDXComponent=!0},358:function(e,n,t){"use strict";function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}n.a=function(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}},359:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=r.a.createContext({}),u=function(e){var n=r.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return r.a.createElement(i.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},h=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=u(t),h=a,d=p["".concat(c,".").concat(h)]||p[h]||b[h]||l;return t?r.a.createElement(d,o(o({ref:n},i),{},{components:t})):r.a.createElement(d,o({ref:n},i))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,c=new Array(l);c[0]=h;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var i=2;i<l;i++)c[i]=t[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},360:function(e,n,t){"use strict";var a=t(0),r=t(361);n.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},361:function(e,n,t){"use strict";var a=t(0),r=Object(a.createContext)(void 0);n.a=r},362:function(e,n,t){"use strict";var a=t(0),r=t.n(a),l=t(360),c=t(358),o=t(54),s=t.n(o),i=37,u=39;n.a=function(e){var n=e.lazy,t=e.block,o=e.defaultValue,p=e.values,b=e.groupId,h=e.className,d=Object(l.a)(),f=d.tabGroupChoices,m=d.setTabGroupChoices,v=Object(a.useState)(o),y=v[0],j=v[1],O=a.Children.toArray(e.children);if(null!=b){var g=f[b];null!=g&&g!==y&&p.some((function(e){return e.value===g}))&&j(g)}var C=function(e){j(e),null!=b&&m(b,e)},w=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t},h)},p.map((function(e){var n=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===n,className:Object(c.a)("tabs__item",s.a.tabItem,{"tabs__item--active":y===n}),key:n,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case u:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case i:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(w,e.target,e)},onFocus:function(){return C(n)},onClick:function(){C(n)}},t)}))),n?Object(a.cloneElement)(O.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,n){return Object(a.cloneElement)(e,{key:n,hidden:e.props.value!==y})}))))}},363:function(e,n,t){"use strict";var a=t(0),r=t.n(a);n.a=function(e){var n=e.children,t=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}}}]);