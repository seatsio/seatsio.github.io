(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{282:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),i=(a(0),a(358)),c=a(361),l=a(362),s={title:"Retrieve a chart thumbnail",slug:"/api/retrieve-a-chart-thumbnail",hidden:!1,createdAt:"2018-08-01T13:28:21.844Z",updatedAt:"2019-08-21T11:51:33.873Z"},o={unversionedId:"REST API/api-charts/api-retrieve-a-chart-thumbnail",id:"REST API/api-charts/api-retrieve-a-chart-thumbnail",isDocsHomePage:!1,title:"Retrieve a chart thumbnail",description:"Chart thumbnails are static PNG representations of a seating chart. This means that you cannot interact with the objects on the chart. You typically use them when showing a list of charts to a user, e.g. when integrating seats.io into your backoffice system.",source:"@site/docs/REST API/api-charts/api-retrieve-a-chart-thumbnail.md",slug:"/api/retrieve-a-chart-thumbnail",permalink:"/docs/api/retrieve-a-chart-thumbnail",version:"current",sidebar:"api",previous:{title:"Validate a chart version",permalink:"/docs/api/validate-a-chart-version"},next:{title:"Publish a draft version",permalink:"/docs/api/publish-a-draft-version"}},b=[{value:"Retrieve the published version thumbnail",id:"retrieve-the-published-version-thumbnail",children:[]}],u={toc:b};function p(e){var t=e.components,s=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,s,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Chart thumbnails are static PNG representations of a seating chart. This means that you cannot interact with the objects on the chart. You typically use them when showing a list of charts to a user, e.g. when integrating seats.io into your backoffice system."),Object(i.b)("p",null,"These thumbnails are not a completely accurate representation of the seating chart. To get a high-detail static representation of a single chart, use ",Object(i.b)("a",{parentName:"p",href:"/docs/renderer/config-mode"},"print mode"),"."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Tip")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"To use the thumbnail in an ",Object(i.b)("inlineCode",{parentName:"p"},"<img>")," tag, use the publicly accessible ",Object(i.b)("inlineCode",{parentName:"p"},"publishedVersionThumbnailUrl")," (or ",Object(i.b)("inlineCode",{parentName:"p"},"draftVersionThumbnailUrl"),") that is returned by the ",Object(i.b)("a",{parentName:"p",href:"/docs/api/list-all-charts"},"list charts")," and ",Object(i.b)("a",{parentName:"p",href:"/docs/api/retrieve-a-chart"},"retrieve chart")," calls instead of the call documented below."))),Object(i.b)("h2",{id:"retrieve-the-published-version-thumbnail"},"Retrieve the published version thumbnail"),Object(i.b)(c.a,{groupId:"serverside-code-samples",defaultValue:"shell",values:[{label:"Text",value:"shell"},{label:"PHP",value:"php"},{label:"C#",value:"csharp"},{label:"Java",value:"java"},{label:"Python",value:"python"},{label:"Ruby",value:"ruby"},{label:"Javascript",value:"javascript"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"shell",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"GET https://api.seatsio.net/charts/{chartKey}/version/published/thumbnail\n"))),Object(i.b)(l.a,{value:"php",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},'$seatsioClient->charts->retrievePublishedVersionThumbnail("4250fffc-e41f-c7cb-986a-2c5e728b8c28");\n'))),Object(i.b)(l.a,{value:"csharp",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-csharp"},'Client.Charts.RetrievePublishedVersionThumbnail("4250fffc-e41f-c7cb-986a-2c5e728b8c28");\n'))),Object(i.b)(l.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'client.charts.retrievePublishedVersionThumbnail("4250fffc-e41f-c7cb-986a-2c5e728b8c28");\n'))),Object(i.b)(l.a,{value:"python",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},'client.charts.retrieve_published_version_thumbnail("749b9650-24fb-11e7-93ae-92361f002671")\n'))),Object(i.b)(l.a,{value:"ruby",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ruby"},'client.charts.retrieve_published_version_thumbnail("749b9650-24fb-11e7-93ae-92361f002671")\n\n'))),Object(i.b)(l.a,{value:"javascript",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"await client.charts.retrievePublishedVersionThumbnail('chartKey');\n")))),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"This requires authentication by secret key.\nFor a publicly available URL, use the publishedVersionThumbnailUrl that is returned by ",Object(i.b)("a",{parentName:"p",href:"/docs/api/list-all-charts"},"list charts")," and ",Object(i.b)("a",{parentName:"p",href:"/docs/api/retrieve-a-chart"},"retrieve chart")," ."))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"curl https://api.seatsio.net/charts/4250fffc-e41f-c7cb-986a-2c5e728b8c28/version/published/thumbnail \\\n-u aSecretKey:\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Example response")),Object(i.b)("p",null,Object(i.b)("img",{alt:"thumbnail.png",src:a(439).default})))}p.isMDXComponent=!0},357:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},358:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),b=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=b(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),u=b(a),h=n,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||i;return a?r.a.createElement(m,l(l({ref:t},o),{},{components:a})):r.a.createElement(m,l({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var o=2;o<i;o++)c[o]=a[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},359:function(e,t,a){"use strict";var n=a(0),r=a(360);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},360:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},361:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(359),c=a(357),l=a(54),s=a.n(l),o=37,b=39;t.a=function(e){var t=e.lazy,a=e.block,l=e.defaultValue,u=e.values,p=e.groupId,h=e.className,m=Object(i.a)(),d=m.tabGroupChoices,f=m.setTabGroupChoices,v=Object(n.useState)(l),O=v[0],j=v[1],y=n.Children.toArray(e.children);if(null!=p){var g=d[p];null!=g&&g!==O&&u.some((function(e){return e.value===g}))&&j(g)}var N=function(e){j(e),null!=p&&f(p,e)},w=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":a},h)},u.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(c.a)("tabs__item",s.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case b:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case o:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},a)}))),t?Object(n.cloneElement)(y.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},362:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.children,a=e.hidden,n=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},439:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/thumbnail-9282d84a9f13540b022c7ef5b211db70.png"}}]);