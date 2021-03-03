(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{150:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),c=(a(0),a(358)),o=a(361),s=a(362),i={title:"Copy a chart to a workspace",slug:"/api/charts-copy-chart-to-workspace",hidden:!1,createdAt:"2018-08-01T13:30:54.934Z",updatedAt:"2020-10-28T09:21:28.178Z"},l={unversionedId:"REST API/api-charts/api-charts-copy-chart-to-workspace",id:"REST API/api-charts/api-charts-copy-chart-to-workspace",isDocsHomePage:!1,title:"Copy a chart to a workspace",description:"Use this call to copy a published chart version from its workspace to another workspace. Events and tags linked to the original chart are not copied.",source:"@site/docs/REST API/api-charts/api-charts-copy-chart-to-workspace.md",slug:"/api/charts-copy-chart-to-workspace",permalink:"/docs/api/charts-copy-chart-to-workspace",version:"current",sidebar:"api",previous:{title:"Copy a chart",permalink:"/docs/api/copy-a-chart"},next:{title:"Copy draft version",permalink:"/docs/api/charts-copy-draft-version"}},p=[],u={toc:p};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Use this call to copy a published chart version from its workspace to another workspace. Events and tags linked to the original chart are not copied."),Object(c.b)("p",null,"The response contains the chartKey of the new chart. You can store this in your database, and use it to refer to the newly created chart in the future."),Object(c.b)(o.a,{groupId:"serverside-code-samples",defaultValue:"shell",values:[{label:"Text",value:"shell"},{label:"PHP",value:"php"},{label:"C#",value:"csharp"},{label:"Java",value:"java"},{label:"Python",value:"python"},{label:"Ruby",value:"ruby"},{label:"Javascript",value:"javascript"}],mdxType:"Tabs"},Object(c.b)(s.a,{value:"shell",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"POST https://api.seatsio.net/charts/{chartKey}/version/published/actions/copy-to-workspace/{workspaceKey}\n"))),Object(c.b)(s.a,{value:"php",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-php"},'$seatsioClient->charts->copyToWorkspace("749b9650-24fb-11e7-93ae-92361f002671", "18725661-36d6-4755-905a-28ce82d0c2d5");\n'))),Object(c.b)(s.a,{value:"csharp",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-csharp"},'Client.Charts.CopyToWorkspace("749b9650-24fb-11e7-93ae-92361f002671", "18725661-36d6-4755-905a-28ce82d0c2d5");\n'))),Object(c.b)(s.a,{value:"java",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},'client.charts.copyToWorkspace("749b9650-24fb-11e7-93ae-92361f002671", "18725661-36d6-4755-905a-28ce82d0c2d5");\n'))),Object(c.b)(s.a,{value:"python",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-python"},'client.charts.copy_to_workspace("749b9650-24fb-11e7-93ae-92361f002671", "18725661-36d6-4755-905a-28ce82d0c2d5")\n'))),Object(c.b)(s.a,{value:"ruby",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ruby"},'client.charts.copy_to_workspace("749b9650-24fb-11e7-93ae-92361f002671", "18725661-36d6-4755-905a-28ce82d0c2d5")\n'))),Object(c.b)(s.a,{value:"javascript",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},"await client.charts.copyToWorkspace('chartKey', '18725661-36d6-4755-905a-28ce82d0c2d5');\n")))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"curl -X POST https://api.seatsio.net/charts/749b9650-24fb-11e7-93ae-92361f002671/version/published/actions/copy-to-workspace/18725661-36d6-4755-905a-28ce82d0c2d5 \\\n-u anAdminKey:\n")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json"},'{\n    "name":"chart2",\n    "id":"19",\n    "key":"749b9650-24fb-11e7-93ae-92361f002671",\n    "status":"NOT_USED",\n    "tags": [],\n    "archived": false,\n    "publishedVersionThumbnailUrl": "https://cdn.seats.io/system/public/.../published/.../thumbnail"\n}\n')),Object(c.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"A note about authentication")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"Because copying a chart between workspaces is an operation that requires privileges on both workspaces, you'll need to use your ",Object(c.b)("a",{parentName:"p",href:"/docs/api/authentication#using-the-company-admin-key"},"company admin")," key as a secret key. You can find the admin key at your ",Object(c.b)("a",{parentName:"p",href:"https://app.seats.io/company-settings"},"company settings page"),"."))))}b.isMDXComponent=!0},357:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},358:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(a),d=n,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||c;return a?r.a.createElement(m,s(s({ref:t},l),{},{components:a})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<c;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},359:function(e,t,a){"use strict";var n=a(0),r=a(360);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},360:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},361:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(359),o=a(357),s=a(54),i=a.n(s),l=37,p=39;t.a=function(e){var t=e.lazy,a=e.block,s=e.defaultValue,u=e.values,b=e.groupId,d=e.className,m=Object(c.a)(),f=m.tabGroupChoices,h=m.setTabGroupChoices,y=Object(n.useState)(s),v=y[0],O=y[1],j=n.Children.toArray(e.children);if(null!=b){var g=f[b];null!=g&&g!==v&&u.some((function(e){return e.value===g}))&&O(g)}var w=function(e){O(e),null!=b&&h(b,e)},k=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":a},d)},u.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(o.a)("tabs__item",i.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case p:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},a)}))),t?Object(n.cloneElement)(j.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},362:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.children,a=e.hidden,n=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}}}]);