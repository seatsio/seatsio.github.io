(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{227:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return o})),t.d(a,"metadata",(function(){return s})),t.d(a,"toc",(function(){return u})),t.d(a,"default",(function(){return p}));var n=t(3),r=t(7),i=(t(0),t(354)),c=t(357),l=t(358),o={title:"Validate a chart version",slug:"/api-validate-a-chart-version",hidden:!1,createdAt:"2019-04-09T10:44:01.774Z",updatedAt:"2020-01-27T21:57:12.141Z"},s={unversionedId:"REST API/api-charts/api-validate-a-chart-version",id:"REST API/api-charts/api-validate-a-chart-version",isDocsHomePage:!1,title:"Validate a chart version",description:"Seats.io does not allow creating events for invalid charts. You can configure what 'invalid' means through the settings page at https://app.seats.io/company-settings.",source:"@site/docs/REST API/api-charts/api-validate-a-chart-version.md",slug:"/api-validate-a-chart-version",permalink:"/docs/api-validate-a-chart-version",version:"current",sidebar:"docs",previous:{title:"Update a chart",permalink:"/docs/api-update-a-chart"},next:{title:"Retrieve a chart thumbnail",permalink:"/docs/api-retrieve-a-chart-thumbnail"}},u=[{value:"Validate a chart version",id:"validate-a-chart-version",children:[]}],b={toc:u};function p(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Seats.io does not allow creating events for invalid charts. You can configure what 'invalid' means through the settings page at ",Object(i.b)("a",{parentName:"p",href:"https://app.seats.io/company-settings"},"https://app.seats.io/company-settings"),"."),Object(i.b)("p",null,"The API call documented below returns the list of validation errors and warnings for a draft or published chart. "),Object(i.b)("h2",{id:"validate-a-chart-version"},"Validate a chart version"),Object(i.b)(c.a,{defaultValue:"shell",values:[{label:"Text",value:"shell"},{label:"PHP",value:"php"},{label:"C#",value:"csharp"},{label:"Java",value:"java"},{label:"Python",value:"python"},{label:"Ruby",value:"ruby"},{label:"Javascript",value:"javascript"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"shell",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"POST https://api.seatsio.net/charts/{chartKey}/version/published/actions/validate\nPOST https://api.seatsio.net/charts/{chartKey}/version/draft/actions/validate\n"))),Object(i.b)(l.a,{value:"php",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"$seatsioClient->charts->validateDraftVersion('749b9650-24fb-11e7-93ae-92361f002671');\n$seatsioClient->charts->validatePublishedVersion('749b9650-24fb-11e7-93ae-92361f002671');\n"))),Object(i.b)(l.a,{value:"csharp",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-csharp"},'Client.Charts.ValidateDraftVersion("749b9650-24fb-11e7-93ae-92361f002671");\nClient.Charts.ValidatePublishedVersion("749b9650-24fb-11e7-93ae-92361f002671");\n'))),Object(i.b)(l.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'client.charts.validateDraftVersion("749b9650-24fb-11e7-93ae-92361f002671");\nclient.charts.validatePublishedVersion("749b9650-24fb-11e7-93ae-92361f002671");\n\n'))),Object(i.b)(l.a,{value:"python",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},'client.charts.validate_draft_version("749b9650-24fb-11e7-93ae-92361f002671")\nclient.charts.validate_published_version("749b9650-24fb-11e7-93ae-92361f002671")\n'))),Object(i.b)(l.a,{value:"ruby",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ruby"},'client.charts.validate_draft_version("749b9650-24fb-11e7-93ae-92361f002671")\nclient.charts.validate_published_version("749b9650-24fb-11e7-93ae-92361f002671")\n'))),Object(i.b)(l.a,{value:"javascript",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"await client.charts.validateDraftVersion('749b9650-24fb-11e7-93ae-92361f002671');\nawait client.charts.validatePublishedVersion('749b9650-24fb-11e7-93ae-92361f002671');\n")))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"curl https://api.seatsio.net/charts/4250fffc-e41f-c7cb-986a-2c5e728b8c28/version/draft/actions/validate \\\n-X POST -u aSecretKey:\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Example response")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'// valid drawing\n{\n  "errors": [],\n  "warnings": []\n}\n\n// invalid drawing\n{\n  "errors": ["VALIDATE_OBJECTS_WITHOUT_CATEGORIES"],\n  "warnings": ["VALIDATE_DUPLICATE_LABELS"]\n}\n')))}p.isMDXComponent=!0},353:function(e,a,t){"use strict";function n(e){var a,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=n(e[a]))&&(r&&(r+=" "),r+=t);else for(a in e)e[a]&&(r&&(r+=" "),r+=a);return r}a.a=function(){for(var e,a,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(a=n(e))&&(r&&(r+=" "),r+=a);return r}},354:function(e,a,t){"use strict";t.d(a,"a",(function(){return b})),t.d(a,"b",(function(){return f}));var n=t(0),r=t.n(n);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),u=function(e){var a=r.a.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},b=function(e){var a=u(e.components);return r.a.createElement(s.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},d=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),b=u(t),d=n,f=b["".concat(c,".").concat(d)]||b[d]||p[d]||i;return t?r.a.createElement(f,l(l({ref:a},s),{},{components:t})):r.a.createElement(f,l({ref:a},s))}));function f(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,c=new Array(i);c[0]=d;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var s=2;s<i;s++)c[s]=t[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},355:function(e,a,t){"use strict";var n=t(0),r=t(356);a.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},356:function(e,a,t){"use strict";var n=t(0),r=Object(n.createContext)(void 0);a.a=r},357:function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=t(355),c=t(353),l=t(54),o=t.n(l),s=37,u=39;a.a=function(e){var a=e.lazy,t=e.block,l=e.defaultValue,b=e.values,p=e.groupId,d=e.className,f=Object(i.a)(),v=f.tabGroupChoices,h=f.setTabGroupChoices,m=Object(n.useState)(l),O=m[0],y=m[1],g=n.Children.toArray(e.children);if(null!=p){var j=v[p];null!=j&&j!==O&&b.some((function(e){return e.value===j}))&&y(j)}var T=function(e){y(e),null!=p&&h(p,e)},w=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t},d)},b.map((function(e){var a=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===a,className:Object(c.a)("tabs__item",o.a.tabItem,{"tabs__item--active":O===a}),key:a,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,a,t){switch(t.keyCode){case u:!function(e,a){var t=e.indexOf(a)+1;e[t]?e[t].focus():e[0].focus()}(e,a);break;case s:!function(e,a){var t=e.indexOf(a)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,a)}}(w,e.target,e)},onFocus:function(){return T(a)},onClick:function(){T(a)}},t)}))),a?Object(n.cloneElement)(g.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,a){return Object(n.cloneElement)(e,{key:a,hidden:e.props.value!==O})}))))}},358:function(e,a,t){"use strict";var n=t(0),r=t.n(n);a.a=function(e){var a=e.children,t=e.hidden,n=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:t,className:n},a)}}}]);