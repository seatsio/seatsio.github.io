(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{202:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return h})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(7),i=(a(0),a(354)),s=a(357),c=a(358),o={title:"List charts in the archive",slug:"/api-list-charts-in-the-archive",hidden:!1,createdAt:"2018-08-01T13:29:26.334Z",updatedAt:"2019-03-21T11:00:45.152Z"},l={unversionedId:"REST API/api-charts/api-list-charts-in-the-archive",id:"REST API/api-charts/api-list-charts-in-the-archive",isDocsHomePage:!1,title:"List charts in the archive",description:"When you don't want a chart to show up on your dashboard, you have to move it to the archive. It will stay there forever, unless you decide to move it out of the archive again. Charts cannot be hard deleted.",source:"@site/docs/REST API/api-charts/api-list-charts-in-the-archive.md",slug:"/api-list-charts-in-the-archive",permalink:"/docs/api-list-charts-in-the-archive",version:"current",sidebar:"docs",previous:{title:"Discard a draft version",permalink:"/docs/api-discard-a-draft-version"},next:{title:"Move a chart to the archive",permalink:"/docs/api-move-a-chart-to-the-archive"}},h=[],u={toc:h};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"When you don't want a chart to show up on your dashboard, you have to move it to the archive. It will stay there forever, unless you decide to move it out of the archive again. Charts cannot be hard deleted. "),Object(i.b)(s.a,{defaultValue:"shell",values:[{label:"Text",value:"shell"},{label:"PHP",value:"php"},{label:"C#",value:"csharp"},{label:"Java",value:"java"},{label:"Python",value:"python"},{label:"Ruby",value:"ruby"},{label:"Javascript",value:"javascript"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"shell",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"GET https://api.seatsio.net/charts/archive\n\nMore info: https://docs.seats.io/docs/api-pagination\n\n"))),Object(i.b)(c.a,{value:"php",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"$seatsioClient->charts->archive->firstPage(pageSize?)\n$seatsioClient->charts->archive->pageAfter(afterId, pageSize?)\n$seatsioClient->charts->archive->pageBefore(beforeId, pageSize?)\n\n$seatsioClient->charts->archive->all();\n\n/*\nSome examples (for non-archived charts, but listing archived charts works similarly):\n\nhttps://github.com/seatsio/seatsio-php/blob/master/README.md#listing-charts-page-by-page\nhttps://github.com/seatsio/seatsio-php/blob/master/README.md#listing-all-charts\n*/\n"))),Object(i.b)(c.a,{value:"csharp",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-csharp"},"client.Charts.Archive.ListFirstPage(pageSize?)\nclient.Charts.Archive.ListPageAfter(afterId, pageSize?)\nclient.Charts.Archive.ListPageBefore(beforeId, pageSize?)\n\nclient.Charts.Archive.ListAll();\n\n/*\nSome examples (for non-archived charts, but listing archived charts works similarly):\n\nhttps://github.com/seatsio/seatsio-dotnet/blob/master/README.md#listing-charts-page-by-page\nhttps://github.com/seatsio/seatsio-dotnet/blob/master/README.md#listing-all-charts\n*/\n"))),Object(i.b)(c.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"client.charts.archive.firstPage(pageSize?)\nclient.charts.archive.pageAfter(afterId, pageSize?)\nclient.charts.archive.pageBefore(beforeId, pageSize?)\n\nclient.charts.archive.all();\n\n/*\nSome examples (for unarchived charts, but listing archived charts works similarly):\n\nhttps://github.com/seatsio/seatsio-java/blob/master/README.md#listing-charts-page-by-page\nhttps://github.com/seatsio/seatsio-java/blob/master/README.md#listing-all-charts\n*/\n"))),Object(i.b)(c.a,{value:"python",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},'client.charts.archive.first_page(page_size?)\nclient.charts.archive.page_after(after_id, page_size?)\nclient.charts.archive.page_before(before_id, page_size?)\n\nclient.charts.archive.list()\n\n"""\nSome examples (for unarchived charts, but listing archived charts works similarly):\n\nhttps://github.com/seatsio/seatsio-python/blob/master/README.md#listing-charts-page-by-page\nhttps://github.com/seatsio/seatsio-python/blob/master/README.md#listing-all-charts\n"""\n'))),Object(i.b)(c.a,{value:"ruby",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ruby"},"client.charts.archive.first_page(page_size?)\nclient.charts.archive.page_after(after_id, page_size?)\nclient.charts.archive.page_before(before_id, page_size?)\n\nclient.charts.archive\n\n# Some examples (for unarchived charts, but listing archived charts works similarly):\n\n# https://github.com/seatsio/seatsio-ruby/blob/master/README.md#listing-charts-page-by-page\n# https://github.com/seatsio/seatsio-ruby/blob/master/README.md#listing-all-charts\n"))),Object(i.b)(c.a,{value:"javascript",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"for await(let chart of client.charts.archive.all()) {\n    //Do something with the archived chart\n}\n\nclient.charts.archive.firstPage(parameters?, pageSize?)\nclient.charts.archive.pageAfter(afterId, parameters?, pageSize?)\nclient.charts.archive.pageBefore(beforeId, parameters?, pageSize?)\n")))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"curl https://api.seatsio.net/charts/archive -u aSecretKey: \n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},' {\n    "next_page_starts_after": 12,\n    "items":[\n        {\n            "name":"chart1",\n            "id":"20",\n            "key":"6451436c-24fb-11e7-93ae-92361f002671",\n            "status":"PUBLISHED",\n            "tags": [],\n            "archived": true,\n            "publishedVersionThumbnailUrl": "https://cdn.seats.io/system/public/.../published/.../thumbnail"\n        },\n        {\n            "name":"chart2",\n            "id":"19",\n            "key":"749b9650-24fb-11e7-93ae-92361f002671",\n            "status":"NOT_USED",\n            "tags": ["tag1", "tag2"],\n            "archived": true,\n            "publishedVersionThumbnailUrl": "https://cdn.seats.io/system/public/.../published/.../thumbnail"\n        }\n    ]\n}\n')))}p.isMDXComponent=!0},353:function(e,t,a){"use strict";function r(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}t.a=function(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},354:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),h=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=h(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=h(a),b=r,m=u["".concat(s,".").concat(b)]||u[b]||p[b]||i;return a?n.a.createElement(m,c(c({ref:t},l),{},{components:a})):n.a.createElement(m,c({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=b;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var l=2;l<i;l++)s[l]=a[l];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},355:function(e,t,a){"use strict";var r=a(0),n=a(356);t.a=function(){var e=Object(r.useContext)(n.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},356:function(e,t,a){"use strict";var r=a(0),n=Object(r.createContext)(void 0);t.a=n},357:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(355),s=a(353),c=a(54),o=a.n(c),l=37,h=39;t.a=function(e){var t=e.lazy,a=e.block,c=e.defaultValue,u=e.values,p=e.groupId,b=e.className,m=Object(i.a)(),d=m.tabGroupChoices,f=m.setTabGroupChoices,v=Object(r.useState)(c),g=v[0],y=v[1],O=r.Children.toArray(e.children);if(null!=p){var j=d[p];null!=j&&j!==g&&u.some((function(e){return e.value===j}))&&y(j)}var E=function(e){y(e),null!=p&&f(p,e)},w=[];return n.a.createElement("div",null,n.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":a},b)},u.map((function(e){var t=e.value,a=e.label;return n.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(s.a)("tabs__item",o.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case h:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return E(t)},onClick:function(){E(t)}},a)}))),t?Object(r.cloneElement)(O.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):n.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},358:function(e,t,a){"use strict";var r=a(0),n=a.n(r);t.a=function(e){var t=e.children,a=e.hidden,r=e.className;return n.a.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}}}]);