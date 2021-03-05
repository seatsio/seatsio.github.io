(window.webpackJsonp=window.webpackJsonp||[]).push([[281],{353:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return o})),t.d(a,"metadata",(function(){return s})),t.d(a,"toc",(function(){return u})),t.d(a,"default",(function(){return p}));var r=t(3),n=t(7),c=(t(0),t(359)),l=t(362),i=t(363),o={title:"Retrieve a chart version",slug:"/api/retrieve-a-chart-version",hidden:!1,createdAt:"2018-08-01T13:26:25.264Z",updatedAt:"2019-01-19T12:39:00.262Z"},s={unversionedId:"REST API/api-charts/api-retrieve-a-chart-version",id:"REST API/api-charts/api-retrieve-a-chart-version",isDocsHomePage:!1,title:"Retrieve a chart version",description:"Each chart has a published version and an optional draft version. Those versions contain the actual contents of the chart: categories, rows, seats etc. The endpoints below allow you to fetch exactly that data.",source:"@site/docs/REST API/api-charts/api-retrieve-a-chart-version.md",slug:"/api/retrieve-a-chart-version",permalink:"/docs/api/retrieve-a-chart-version",version:"current",sidebar:"api",previous:{title:"Retrieve a chart",permalink:"/docs/api/retrieve-a-chart"},next:{title:"Create a chart",permalink:"/docs/api/create-a-chart"}},u=[{value:"Retrieve the published version of a chart",id:"retrieve-the-published-version-of-a-chart",children:[]},{value:"Retrieve the draft version of a chart",id:"retrieve-the-draft-version-of-a-chart",children:[]}],b={toc:u};function p(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,t,{components:a,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Each chart has a published version and an optional draft version. Those versions contain the actual contents of the chart: categories, rows, seats etc. The endpoints below allow you to fetch exactly that data."),Object(c.b)("p",null,"To retrieve properties that are shared between the draft and published version, call the endpoint to ",Object(c.b)("a",{parentName:"p",href:"/docs/api/retrieve-a-chart"},"retrieve a chart"),"."),Object(c.b)("h2",{id:"retrieve-the-published-version-of-a-chart"},"Retrieve the published version of a chart"),Object(c.b)(l.a,{groupId:"serverside-code-samples",defaultValue:"shell",values:[{label:"Text",value:"shell"},{label:"PHP",value:"php"},{label:"C#",value:"csharp"},{label:"Java",value:"java"},{label:"Python",value:"python"},{label:"Ruby",value:"ruby"},{label:"Javascript",value:"javascript"}],mdxType:"Tabs"},Object(c.b)(i.a,{value:"shell",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"GET https://api.seatsio.net/charts/{chartKey}/version/published\n"))),Object(c.b)(i.a,{value:"php",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-php"},'$drawing = $seatsioClient->charts->retrievePublishedVersion("749b9650-24fb-11e7-93ae-92361f002671");\necho $drawing["venueType"];\n'))),Object(c.b)(i.a,{value:"csharp",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-csharp"},'var drawing = Client.Charts.RetrievePublishedVersion("749b9650-24fb-11e7-93ae-92361f002671"));\nConsole.WriteLine(chart.VenueType);\n'))),Object(c.b)(i.a,{value:"java",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},'Map<?, ?> drawing = client.charts.retrievePublishedVersion("749b9650-24fb-11e7-93ae-92361f002671");\nSystem.out.println(drawing.get("venueType"));\n'))),Object(c.b)(i.a,{value:"python",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-python"},'drawing = client.charts.retrieve_published_version("749b9650-24fb-11e7-93ae-92361f002671")\n'))),Object(c.b)(i.a,{value:"ruby",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ruby"},"drawing = client.charts.retrieve_published_version('749b9650-24fb-11e7-93ae-92361f002671')\n"))),Object(c.b)(i.a,{value:"javascript",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},"let drawing = await client.charts.retrievePublishedVersion('749b9650-24fb-11e7-93ae-92361f002671');\n")))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"curl https://api.seatsio.net/charts/aChartKey/version/published \\\n-u aSecretKey:\n")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},'{\n    "name": "A demo chart",\n    "categories": {\n      "list": [\n        { label: "Upper level", "key": 54, "color": "#cccccc", "accessible": false },\n        { label: "Lower level", "key": 67, "color": "#eeeeff", "accessible": true }\n      ]\n    },\n    "subChart": {\n        "rows": [ ... ]\n    }\n    ...\n}\n')),Object(c.b)("h2",{id:"retrieve-the-draft-version-of-a-chart"},"Retrieve the draft version of a chart"),Object(c.b)(l.a,{groupId:"serverside-code-samples",defaultValue:"shell",values:[{label:"Text",value:"shell"},{label:"PHP",value:"php"},{label:"C#",value:"csharp"},{label:"Java",value:"java"},{label:"Python",value:"python"}],mdxType:"Tabs"},Object(c.b)(i.a,{value:"shell",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"GET https://api.seatsio.net/charts/{chartKey}/version/draft\n"))),Object(c.b)(i.a,{value:"php",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-php"},'$drawing = $seatsioClient->charts->retrieveDraftVersion("749b9650-24fb-11e7-93ae-92361f002671");\necho $drawing["venueType"];\n'))),Object(c.b)(i.a,{value:"csharp",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-csharp"},'var drawing = Client.Charts.RetrieveDraftVersion("749b9650-24fb-11e7-93ae-92361f002671"));\nConsole.WriteLine(chart.VenueType);\n'))),Object(c.b)(i.a,{value:"java",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},'Map<?, ?> drawing = client.charts.retrieveDraftVersion("749b9650-24fb-11e7-93ae-92361f002671");\nSystem.out.println(drawing.get("venueType"));\n\n'))),Object(c.b)(i.a,{value:"python",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-python"},'drawing = client.charts.retrieve_draft_version("749b9650-24fb-11e7-93ae-92361f002671")\n')))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"curl https://api.seatsio.net/charts/aChartKey/version/draft \\\n-u aSecretKey:\n")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},'{\n    "name": "A draft chart",\n    "categories": {\n      "list": [\n        { label: "Upper level", "key": 54, "color": "#cccccc", "accessible": false },\n        { label: "Lower level", "key": 67, "color": "#eeeeff", "accessible": true }\n      ]\n    },\n    "subChart": {\n        "rows": [ ... ]\n    }\n    ...\n}\n')),Object(c.b)("p",null,"Error 404 (Not Found) is returned when the chart does not have a draft version."))}p.isMDXComponent=!0},358:function(e,a,t){"use strict";function r(e){var a,t,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=r(e[a]))&&(n&&(n+=" "),n+=t);else for(a in e)e[a]&&(n&&(n+=" "),n+=a);return n}a.a=function(){for(var e,a,t=0,n="";t<arguments.length;)(e=arguments[t++])&&(a=r(e))&&(n&&(n+=" "),n+=a);return n}},359:function(e,a,t){"use strict";t.d(a,"a",(function(){return b})),t.d(a,"b",(function(){return h}));var r=t(0),n=t.n(r);function c(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){c(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=n.a.createContext({}),u=function(e){var a=n.a.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},b=function(e){var a=u(e.components);return n.a.createElement(s.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},v=n.a.forwardRef((function(e,a){var t=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),b=u(t),v=r,h=b["".concat(l,".").concat(v)]||b[v]||p[v]||c;return t?n.a.createElement(h,i(i({ref:a},s),{},{components:t})):n.a.createElement(h,i({ref:a},s))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var c=t.length,l=new Array(c);l[0]=v;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<c;s++)l[s]=t[s];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,t)}v.displayName="MDXCreateElement"},360:function(e,a,t){"use strict";var r=t(0),n=t(361);a.a=function(){var e=Object(r.useContext)(n.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},361:function(e,a,t){"use strict";var r=t(0),n=Object(r.createContext)(void 0);a.a=n},362:function(e,a,t){"use strict";var r=t(0),n=t.n(r),c=t(360),l=t(358),i=t(54),o=t.n(i),s=37,u=39;a.a=function(e){var a=e.lazy,t=e.block,i=e.defaultValue,b=e.values,p=e.groupId,v=e.className,h=Object(c.a)(),d=h.tabGroupChoices,f=h.setTabGroupChoices,m=Object(r.useState)(i),y=m[0],O=m[1],j=r.Children.toArray(e.children);if(null!=p){var g=d[p];null!=g&&g!==y&&b.some((function(e){return e.value===g}))&&O(g)}var T=function(e){O(e),null!=p&&f(p,e)},w=[];return n.a.createElement("div",null,n.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":t},v)},b.map((function(e){var a=e.value,t=e.label;return n.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===a,className:Object(l.a)("tabs__item",o.a.tabItem,{"tabs__item--active":y===a}),key:a,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,a,t){switch(t.keyCode){case u:!function(e,a){var t=e.indexOf(a)+1;e[t]?e[t].focus():e[0].focus()}(e,a);break;case s:!function(e,a){var t=e.indexOf(a)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,a)}}(w,e.target,e)},onFocus:function(){return T(a)},onClick:function(){T(a)}},t)}))),a?Object(r.cloneElement)(j.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):n.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,a){return Object(r.cloneElement)(e,{key:a,hidden:e.props.value!==y})}))))}},363:function(e,a,t){"use strict";var r=t(0),n=t.n(r);a.a=function(e){var a=e.children,t=e.hidden,r=e.className;return n.a.createElement("div",{role:"tabpanel",hidden:t,className:r},a)}}}]);