(window.webpackJsonp=window.webpackJsonp||[]).push([[239],{309:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),c=(n(0),n(359)),l=n(362),o=n(363),u={title:"Delete an event",slug:"/api/delete-an-event",hidden:!1,createdAt:"2018-08-02T09:57:40.460Z",updatedAt:"2018-11-15T10:17:38.037Z"},i={unversionedId:"REST API/api-events/api-delete-an-event",id:"REST API/api-events/api-delete-an-event",isDocsHomePage:!1,title:"Delete an event",description:"<Tabs",source:"@site/docs/REST API/api-events/api-delete-an-event.md",slug:"/api/delete-an-event",permalink:"/docs/api/delete-an-event",version:"current",sidebar:"api",previous:{title:"Update an event",permalink:"/docs/api/update-an-event"},next:{title:"List events for a chart",permalink:"/docs/api/list-events-for-a-chart"}},s=[],p={toc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)(l.a,{groupId:"serverside-code-samples",defaultValue:"shell",values:[{label:"Text",value:"shell"},{label:"PHP",value:"php"},{label:"C#",value:"csharp"},{label:"Java",value:"java"},{label:"Python",value:"python"},{label:"Ruby",value:"ruby"},{label:"Javascript",value:"javascript"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"shell",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"DELETE https://api.seatsio.net/events/{eventKey}\n"))),Object(c.b)(o.a,{value:"php",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-php"},'$seatsioClient->events->delete("event34");\n'))),Object(c.b)(o.a,{value:"csharp",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-csharp"},'Client.Events.Delete("event34");\n'))),Object(c.b)(o.a,{value:"java",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},'client.events.delete("event34");\n'))),Object(c.b)(o.a,{value:"python",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-python"},'client.events.delete("event34")\n'))),Object(c.b)(o.a,{value:"ruby",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ruby"},'client.events.delete key: "event34"\n\n'))),Object(c.b)(o.a,{value:"javascript",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},"await client.events.delete('eventKey');\n")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Example request")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"curl https://api.seatsio.net/events/event34 \\\n-u aSecretKey: -X DELETE -H 'Content-Type: application/json'\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Response")),Object(c.b)("p",null,"204 - No Content"))}b.isMDXComponent=!0},358:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},359:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),s=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},v=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),p=s(n),v=a,d=p["".concat(l,".").concat(v)]||p[v]||b[v]||c;return n?r.a.createElement(d,o(o({ref:t},i),{},{components:n})):r.a.createElement(d,o({ref:t},i))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,l=new Array(c);l[0]=v;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var i=2;i<c;i++)l[i]=n[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}v.displayName="MDXCreateElement"},360:function(e,t,n){"use strict";var a=n(0),r=n(361);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},361:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},362:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(360),l=n(358),o=n(54),u=n.n(o),i=37,s=39;t.a=function(e){var t=e.lazy,n=e.block,o=e.defaultValue,p=e.values,b=e.groupId,v=e.className,d=Object(c.a)(),f=d.tabGroupChoices,m=d.setTabGroupChoices,y=Object(a.useState)(o),O=y[0],j=y[1],g=a.Children.toArray(e.children);if(null!=b){var h=f[b];null!=h&&h!==O&&p.some((function(e){return e.value===h}))&&j(h)}var T=function(e){j(e),null!=b&&m(b,e)},E=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},v)},p.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(l.a)("tabs__item",u.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return E.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case i:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(E,e.target,e)},onFocus:function(){return T(t)},onClick:function(){T(t)}},n)}))),t?Object(a.cloneElement)(g.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},363:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}}}]);