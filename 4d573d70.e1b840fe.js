(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{161:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return u})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),c=a(7),s=(a(0),a(354)),r=a(357),i=a(358),o={title:"List your active subaccounts",slug:"/api-list-your-active-subaccounts",hidden:!1,createdAt:"2018-08-02T10:15:26.988Z",updatedAt:"2020-02-28T13:14:57.976Z"},u={unversionedId:"REST API/api-subaccounts/api-list-your-active-subaccounts",id:"REST API/api-subaccounts/api-list-your-active-subaccounts",isDocsHomePage:!1,title:"List your active subaccounts",description:"Subaccounts are deprecated. Please use workspaces instead.",source:"@site/docs/REST API/api-subaccounts/api-list-your-active-subaccounts.md",slug:"/api-list-your-active-subaccounts",permalink:"/docs/api-list-your-active-subaccounts",version:"current"},l=[],b={toc:l};function p(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(s.b)("div",{parentName:"div",className:"admonition-heading"},Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",{parentName:"h5",className:"admonition-icon"},Object(s.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(s.b)("div",{parentName:"div",className:"admonition-content"},Object(s.b)("p",{parentName:"div"},"Subaccounts are deprecated. Please use ",Object(s.b)("a",{parentName:"p",href:"api-workspaces"},"workspaces")," instead."))),Object(s.b)("p",null,"Returns a paginated list of active subaccounts."),Object(s.b)(r.a,{defaultValue:"text",values:[{label:"Text",value:"text"},{label:"PHP",value:"php"},{label:"C#",value:"csharp"},{label:"Java",value:"java"},{label:"Python",value:"python"},{label:"Ruby",value:"ruby"},{label:"Javascript",value:"javascript"}],mdxType:"Tabs"},Object(s.b)(i.a,{value:"text",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-text"},"GET https://api.seatsio.net/subaccounts/active\n\nMore info: https://docs.seats.io/docs/api-pagination\n\n"))),Object(s.b)(i.a,{value:"php",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-php"},"$seatsioClient->subaccounts->active->firstPage(pageSize?)\n$seatsioClient->subaccounts->active->pageAfter(afterId, pageSize?)\n$seatsioClient->subaccounts->active->pageBefore(beforeId, pageSize?)\n\n$seatsioClient->subaccounts->active->all();\n\n/*\nSome examples (for charts, but listing active subaccounts works similarly):\n\nhttps://github.com/seatsio/seatsio-php/blob/master/README.md#listing-charts-page-by-page\nhttps://github.com/seatsio/seatsio-php/blob/master/README.md#listing-all-charts\n*/\n"))),Object(s.b)(i.a,{value:"csharp",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-csharp"},"client.Subaccounts.Active.FirstPage(pageSize?)\nclient.Subaccounts.Active.PageAfter(afterId, pageSize?)\nclient.Subaccounts.Active.PageBefore(beforeId, pageSize?)\n\nclient.Subaccounts.Active.All();\n\n/*\nSome examples (for charts, but listing active subaccounts works similarly):\n\nhttps://github.com/seatsio/seatsio-dotnet/blob/master/README.md#listing-charts-page-by-page\nhttps://github.com/seatsio/seatsio-dotnet/blob/master/README.md#listing-all-charts\n*/\n"))),Object(s.b)(i.a,{value:"java",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-java"},"client.subaccounts.active.firstPage(pageSize?)\nclient.subaccounts.active.pageAfter(afterId, pageSize?)\nclient.subaccounts.active.pageBefore(beforeId, pageSize?)\n\nclient.subaccounts.active.all();\n\n/*\nSome examples (for charts, but listing active subaccounts works similarly):\n\nhttps://github.com/seatsio/seatsio-java/blob/master/README.md#listing-charts-page-by-page\nhttps://github.com/seatsio/seatsio-java/blob/master/README.md#listing-all-charts\n*/\n"))),Object(s.b)(i.a,{value:"python",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},'client.subaccounts.active.first_page(page_size?, filter?)\nclient.subaccounts.active.page_after(after_id, page_size?, filter?)\nclient.subaccounts.active.page_before(before_id, page_size?, filter?)\n\nclient.subaccounts.active.list();\n\n"""\nSome examples (for charts, but listing active subaccounts works similarly):\n\nhttps://github.com/seatsio/seatsio-python/blob/master/README.md#listing-charts-page-by-page\nhttps://github.com/seatsio/seatsio-python/blob/master/README.md#listing-all-charts\n"""\n'))),Object(s.b)(i.a,{value:"ruby",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ruby"},"client.subaccounts.active.first_page(page_size?)\nclient.subaccounts.active.page_after(after_id, page_size?)\nclient.subaccounts.active.page_before(before_id, page_size?)\n\nclient.subaccounts.active\n\n# Some examples (for charts, but listing active subaccounts works similarly):\n\n# https://github.com/seatsio/seatsio-ruby/blob/master/README.md#listing-charts-page-by-page\n# https://github.com/seatsio/seatsio-ruby/blob/master/README.md#listing-all-charts\n"))),Object(s.b)(i.a,{value:"javascript",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-javascript"},"for await(let subaccount of client.subaccounts.active.all(parameters?)) {\n    //Do something with the subaccount\n}\n\n client.subaccounts.active.firstPage(parameters?, pageSize?)\n client.subaccounts.active.pageAfter(afterId, parameters?, pageSize?)\n client.subaccounts.active.pageBefore(beforeId, parameters?, pageSize?)\n                                     \n/*\nSome examples (for charts, but listing active subaccounts works similarly):\n\nhttps://github.com/seatsio/seatsio-java/blob/master/README.md#listing-charts-page-by-page\nhttps://github.com/seatsio/seatsio-java/blob/master/README.md#listing-all-charts\n*/\n")))),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-curl"},"curl https://api.seatsio.net/subaccounts/active?limit=100&start_after_id=34 \\\n-u aSecretKey:\n")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n    "next_page_starts_after": 122,\n    "items": [\n        {\n            "id": 169,\n            "secretKey": "7c647eed-0880-4118-9459-82757579703e",\n            "publicKey": "18725661-36d6-4755-905a-28ce82d0c2d5",\n            "active": true\n        },\n        {\n            "id": 170,\n            "secretKey": "2d59a6ce-cd43-406a-b49d-fcb0a88416ad",\n            "publicKey": "81c32887-c014-43ac-90cb-f8db613d5643",\n            "active": true\n        }\n        ...\n    ]\n}\n')))}p.isMDXComponent=!0},353:function(e,t,a){"use strict";function n(e){var t,a,c="";if("string"==typeof e||"number"==typeof e)c+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(c&&(c+=" "),c+=a);else for(t in e)e[t]&&(c&&(c+=" "),c+=t);return c}t.a=function(){for(var e,t,a=0,c="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(c&&(c+=" "),c+=t);return c}},354:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),c=a.n(n);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var u=c.a.createContext({}),l=function(e){var t=c.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},b=function(e){var t=l(e.components);return c.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},m=c.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,r=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),b=l(a),m=n,d=b["".concat(r,".").concat(m)]||b[m]||p[m]||s;return a?c.a.createElement(d,i(i({ref:t},u),{},{components:a})):c.a.createElement(d,i({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,r=new Array(s);r[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,r[1]=i;for(var u=2;u<s;u++)r[u]=a[u];return c.a.createElement.apply(null,r)}return c.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},355:function(e,t,a){"use strict";var n=a(0),c=a(356);t.a=function(){var e=Object(n.useContext)(c.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},356:function(e,t,a){"use strict";var n=a(0),c=Object(n.createContext)(void 0);t.a=c},357:function(e,t,a){"use strict";var n=a(0),c=a.n(n),s=a(355),r=a(353),i=a(53),o=a.n(i),u=37,l=39;t.a=function(e){var t=e.lazy,a=e.block,i=e.defaultValue,b=e.values,p=e.groupId,m=e.className,d=Object(s.a)(),f=d.tabGroupChoices,g=d.setTabGroupChoices,v=Object(n.useState)(i),h=v[0],y=v[1],O=n.Children.toArray(e.children);if(null!=p){var j=f[p];null!=j&&j!==h&&b.some((function(e){return e.value===j}))&&y(j)}var E=function(e){y(e),null!=p&&g(p,e)},w=[];return c.a.createElement("div",null,c.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":a},m)},b.map((function(e){var t=e.value,a=e.label;return c.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(r.a)("tabs__item",o.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case l:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return E(t)},onClick:function(){E(t)}},a)}))),t?Object(n.cloneElement)(O.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):c.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},358:function(e,t,a){"use strict";var n=a(0),c=a.n(n);t.a=function(e){var t=e.children,a=e.hidden,n=e.className;return c.a.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}}}]);