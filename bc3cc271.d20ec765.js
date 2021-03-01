(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{281:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),o=(a(0),a(358)),c=a(361),s=a(362),i={title:"Extra data",slug:"/api-extra-data",hidden:!1,createdAt:"2018-08-01T12:53:10.410Z",updatedAt:"2019-08-21T09:28:02.829Z"},l={unversionedId:"REST API/api-objects/api-extra-data",id:"REST API/api-objects/api-extra-data",isDocsHomePage:!1,title:"Extra data",description:"Sometimes it's necessary to pass in some custom data when changing the object status. For example, you might need to store the name of the person that booked a seat, to use in the tooltip of a rendered chart.",source:"@site/docs/REST API/api-objects/api-extra-data.md",slug:"/api-extra-data",permalink:"/docs/api-extra-data",version:"current",sidebar:"docs",previous:{title:"Season tickets",permalink:"/docs/api-season-tickets"},next:{title:"For sale / not for sale",permalink:"/docs/api-for-sale-not-for-sale"}},b=[],p={toc:b};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Sometimes it's necessary to pass in some custom data when changing the object status. For example, you might need to store the name of the person that booked a seat, to use in the tooltip of a rendered chart."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"/change-object-status"),", ",Object(o.b)("inlineCode",{parentName:"p"},"/book"),", ",Object(o.b)("inlineCode",{parentName:"p"},"/release")," and ",Object(o.b)("inlineCode",{parentName:"p"},"/hold")," take an optional extraData object for each object ID in the request. ",Object(o.b)("inlineCode",{parentName:"p"},"extraData")," must be a JSON object with key value pairs, not a JSON primitive."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},"// /book, /release, /hold or /change-object-status\n{\n    'objects': [\n        { 'objectId': 'A-5', 'extraData': { 'name': 'John Doe' }},\n        { 'objectId': 'A-6', 'extraData': { 'name': 'Jane Doe' }}\n    ]\n}\n")),Object(o.b)(c.a,{groupId:"serverside-code-samples",defaultValue:"php",values:[{label:"PHP",value:"php"},{label:"C#",value:"csharp"},{label:"Java",value:"java"},{label:"Python",value:"python"},{label:"Ruby",value:"ruby"},{label:"Javascript",value:"javascript"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"php",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},'$objects = [\n  ["objectId" => "A-5", "extraData" => ["name" => "John Doe"]],\n  ["objectId" => "A-6", "extraData" => ["name" => "Jane Doe"]]\n];\n$seatsioClient->events->book("event1", $objects);\n'))),Object(o.b)(s.a,{value:"csharp",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-csharp"},'var objects = new [] {\n    new ObjectProperties("A-5", new Dictionary<string, object> {{"name", "John Doe"}}),\n    new ObjectProperties("A-6", new Dictionary<string, object> {{"name", "Jane Doe"}})\n};\nClient.Events.Book("event1", objects);\n'))),Object(o.b)(s.a,{value:"java",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'List<ObjectProperties> objects = Arrays.asList(\n    new ObjectProperties("A-5", ImmutableMap.of("name", "John Doe")),\n    new ObjectProperties("A-6", ImmutableMap.of("name", "Jane Doe"))\n);\nclient.events.book("event1", objects);\n'))),Object(o.b)(s.a,{value:"python",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},'objects= [\n    ObjectProperties("A-5", extra_data={"name": "John Doe"}),\n    ObjectProperties("A-6", extra_data={"name": "Jane Doe"})\n]\nclient.events.book("event1", objects)\n'))),Object(o.b)(s.a,{value:"ruby",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ruby"},'objects = [\n  {:objectId => \'A-5\', :extraData => {"name": "John Doe"}},\n  {:objectId => \'A-6\', :extraData => {"name": "Jane Doe"}}\n]\n\nclient.events.book(\'event1\', objects)\n'))),Object(o.b)(s.a,{value:"javascript",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"let objects =[\n  {'objectId' : 'A-5', 'extraData' : {'name' : 'John Doe'}}, \n  {'objectId' : 'A-6', 'extraData' : {'name' : 'John Doe'}}];\n\nawait client.events.book('eventKey', objects);\n")))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"API: added ",Object(o.b)("inlineCode",{parentName:"li"},"keepExtraData")," flag to calls that change the object status. If set to ",Object(o.b)("inlineCode",{parentName:"li"},"true"),", the existing extra data doesn't get cleared")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},"// /book, /release, /hold or /change-object-status\n{\n    'objects': [\n        { 'objectId': 'A-5'},\n        { 'objectId': 'A-6'}\n    ],\n    'keepExtraData': true\n}\n")),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Updating extra data")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"You can update extra data for objects without changing their status too. Check ",Object(o.b)("a",{parentName:"p",href:"https://docs.seats.io/docs/api-update-extra-data-for-an-object"},"https://docs.seats.io/docs/api-update-extra-data-for-an-object")," and ",Object(o.b)("a",{parentName:"p",href:"https://docs.seats.io/docs/api-update-extra-data-for-multiple-objects"},"https://docs.seats.io/docs/api-update-extra-data-for-multiple-objects")," for more information. "))))}u.isMDXComponent=!0},357:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},358:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=b(a),d=n,m=p["".concat(c,".").concat(d)]||p[d]||u[d]||o;return a?r.a.createElement(m,s(s({ref:t},l),{},{components:a})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var l=2;l<o;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},359:function(e,t,a){"use strict";var n=a(0),r=a(360);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},360:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},361:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(359),c=a(357),s=a(54),i=a.n(s),l=37,b=39;t.a=function(e){var t=e.lazy,a=e.block,s=e.defaultValue,p=e.values,u=e.groupId,d=e.className,m=Object(o.a)(),j=m.tabGroupChoices,f=m.setTabGroupChoices,v=Object(n.useState)(s),h=v[0],O=v[1],g=n.Children.toArray(e.children);if(null!=u){var y=j[u];null!=y&&y!==h&&p.some((function(e){return e.value===y}))&&O(y)}var x=function(e){O(e),null!=u&&f(u,e)},N=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":a},d)},p.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(c.a)("tabs__item",i.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case b:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return x(t)},onClick:function(){x(t)}},a)}))),t?Object(n.cloneElement)(g.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},362:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.children,a=e.hidden,n=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}}}]);