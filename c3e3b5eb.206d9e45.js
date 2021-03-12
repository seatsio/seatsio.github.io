(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{290:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return b}));var r=a(3),n=a(7),s=(a(0),a(359)),i=a(362),l=a(363),o={title:"List all workspaces",slug:"/api/workspaces-list",hidden:!1,createdAt:"2020-02-27T22:00:24.814Z",updatedAt:"2020-07-03T16:01:19.321Z"},c={unversionedId:"REST API/api-workspaces/api-workspaces-list",id:"REST API/api-workspaces/api-workspaces-list",isDocsHomePage:!1,title:"List all workspaces",description:"Returns a paginated list of workspaces you\u2019ve previously created. The workspaces are returned in reverse chronological order: the most recently created workspace will appear first in the list.",source:"@site/docs/REST API/api-workspaces/api-workspaces-list.md",slug:"/api/workspaces-list",permalink:"/docs/api/workspaces-list",version:"current",sidebar:"api",previous:{title:"Retrieve a workspace",permalink:"/docs/api/workspaces-retrieve"},next:{title:"Regenerate secret key of workspace",permalink:"/docs/api/workspaces-regenerate-secret-key"}},p=[],u={toc:p};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Returns a paginated list of workspaces you\u2019ve previously created. The workspaces are returned in reverse chronological order: the most recently created workspace will appear first in the list."),Object(s.b)("p",null,"Pass in a filter to only find the workspaces that have a matching name."),Object(s.b)(i.a,{groupId:"serverside-code-samples",defaultValue:"shell",values:[{label:"Text",value:"shell"},{label:"PHP",value:"php"},{label:"C#",value:"csharp"},{label:"Java",value:"java"},{label:"Python",value:"python"},{label:"Ruby",value:"ruby"},{label:"Javascript",value:"javascript"}],mdxType:"Tabs"},Object(s.b)(l.a,{value:"shell",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-shell"},"GET https://api-{region}.seatsio.net/workspaces\n\nMore info: https://docs.seats.io/docs/api-pagination\n"))),Object(s.b)(l.a,{value:"php",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-php"},"$client->workspaces->listFirstPage(pageSize?, filter?)\n$client->workspaces->listPageAfter(afterId, pageSize?, filter?)\n$client->workspaces->listPageBefore(beforeId, pageSize?, filter?)\n\n$client->workspaces->listAll(filter?);\n\n/*\nSome examples (for charts, but listing workspaces works similarly):\n\nhttps://github.com/seatsio/seatsio-php/blob/master/README.md#listing-charts-page-by-page\nhttps://github.com/seatsio/seatsio-php/blob/master/README.md#listing-all-charts\n*/\n"))),Object(s.b)(l.a,{value:"csharp",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-csharp"},"client.Workspaces.ListFirstPage(pageSize?, filter?)\nclient.Workspaces.ListPageAfter(afterId, pageSize?, filter?)\nclient.Workspaces.ListPageBefore(beforeId, pageSize?, filter?)\n\nclient.Workspaces.ListAll(filter?);\n\n/*\nSome examples (for charts, but listing workspaces works similarly):\n\nhttps://github.com/seatsio/seatsio-dotnet/blob/master/README.md#listing-charts-page-by-page\nhttps://github.com/seatsio/seatsio-dotnet/blob/master/README.md#listing-all-charts\n*/\n"))),Object(s.b)(l.a,{value:"java",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-java"},"client.workspaces.listFirstPage(pageSize?, filter?)\nclient.workspaces.listPageAfter(afterId, pageSize?, filter?)\nclient.workspaces.listPageBefore(beforeId, pageSize?, filter?)\n\nclient.workspaces.listAll(filter?);\n\n/*\nSome examples (for charts, but listing workspaces works similarly):\n\nhttps://github.com/seatsio/seatsio-java/blob/master/README.md#listing-charts-page-by-page\nhttps://github.com/seatsio/seatsio-java/blob/master/README.md#listing-all-charts\n*/\n"))),Object(s.b)(l.a,{value:"python",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},'client.workspaces.list_first_page(page_size?, filter?)\nclient.workspaces.list_page_after(after_id, page_size?, filter?)\nclient.workspaces.list_page_before(before_id, page_size?, filter?)\n\nclient.workspaces.list(filter?)\n\n"""\nSome examples (for charts, but listing workspaces works similarly):\n\nhttps://github.com/seatsio/seatsio-python/blob/master/README.md#listing-charts-page-by-page\nhttps://github.com/seatsio/seatsio-python/blob/master/README.md#listing-all-charts\n"""\n'))),Object(s.b)(l.a,{value:"ruby",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ruby"},"client.workspaces.list(filter?).first_page(page_size?)\nclient.workspaces.list(filter?).page_after(after_id, page_size?)\nclient.workspaces.list(filter?).page_before(before_id, page_size?)\n\nclient.workspaces.list(filter?)\n\n# Some examples (for charts, but listing workspaces works similarly):\n\n# https://github.com/seatsio/seatsio-ruby/blob/master/README.md#listing-charts-page-by-page\n# https://github.com/seatsio/seatsio-ruby/blob/master/README.md#listing-all-charts\n"))),Object(s.b)(l.a,{value:"javascript",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-javascript"},"client.workspaces.listFirstPage(filter?, pageSize?)\nclient.workspaces.listPageAfter(afterId, filter?, pageSize?)\nclient.workspaces.listPageBefore(beforeId, filter?, pageSize?)\n\nclient.workspaces.listAll(filter?);\n\n/*\nSome examples (for charts, but listing workspaces works similarly):\n\nhttps://github.com/seatsio/seatsio-js/blob/master/README.md#listing-charts-page-by-page\nhttps://github.com/seatsio/seatsio-js/blob/master/README.md#listing-all-charts\n*/\n")))),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-shell"},"curl https://api-{region}.seatsio.net/workspaces?limit=100&start_after_id=34 \\\n-u anAdminKey:\n")),Object(s.b)("p",null,"The response will be a paginated JSON object that contains all workspaces for the authenticated company:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-javascript"},'{\n    "next_page_starts_after": 122,\n    "items": [\n        {\n            "id": 169,\n            "name": "a workspace",\n            "key": "18725661-36d6-4755-905a-28ce82d0c2d5",\n            "secretKey": "7c647eed-0880-4118-9459-82757579703e",\n            "isDefault": true,\n            "isTest": false,\n            "isActive": true\n        }\n        {\n            "id": 170,\n            "name": "another workspace",\n            "key": "34725661-36d6-4755-905a-28ce82d0c2d5",\n            "secretKey": "56647eed-0880-4118-9459-82757579703e",\n            "isDefault": false,\n            "isTest": true,\n            "isActive": false\n        }\n        ...\n    ]\n}\n\n')))}b.isMDXComponent=!0},358:function(e,t,a){"use strict";function r(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}t.a=function(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},359:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),p=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},f=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(a),f=r,m=u["".concat(i,".").concat(f)]||u[f]||b[f]||s;return a?n.a.createElement(m,l(l({ref:t},c),{},{components:a})):n.a.createElement(m,l({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=f;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<s;c++)i[c]=a[c];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}f.displayName="MDXCreateElement"},360:function(e,t,a){"use strict";var r=a(0),n=a(361);t.a=function(){var e=Object(r.useContext)(n.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},361:function(e,t,a){"use strict";var r=a(0),n=Object(r.createContext)(void 0);t.a=n},362:function(e,t,a){"use strict";var r=a(0),n=a.n(r),s=a(360),i=a(358),l=a(54),o=a.n(l),c=37,p=39;t.a=function(e){var t=e.lazy,a=e.block,l=e.defaultValue,u=e.values,b=e.groupId,f=e.className,m=Object(s.a)(),d=m.tabGroupChoices,g=m.setTabGroupChoices,h=Object(r.useState)(l),y=h[0],v=h[1],w=r.Children.toArray(e.children);if(null!=b){var k=d[b];null!=k&&k!==y&&u.some((function(e){return e.value===k}))&&v(k)}var O=function(e){v(e),null!=b&&g(b,e)},j=[];return n.a.createElement("div",null,n.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":a},f)},u.map((function(e){var t=e.value,a=e.label;return n.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(i.a)("tabs__item",o.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return j.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case p:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(j,e.target,e)},onFocus:function(){return O(t)},onClick:function(){O(t)}},a)}))),t?Object(r.cloneElement)(w.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):n.a.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},363:function(e,t,a){"use strict";var r=a(0),n=a.n(r);t.a=function(e){var t=e.children,a=e.hidden,r=e.className;return n.a.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}}}]);