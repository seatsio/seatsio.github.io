(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{178:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),c=a(7),r=(a(0),a(354)),o=a(357),u=a(358),s={title:"Update a subaccount",slug:"/api-update-a-subaccount",hidden:!1,createdAt:"2018-08-02T10:16:44.053Z",updatedAt:"2020-02-28T13:15:42.049Z"},i={unversionedId:"REST API/api-subaccounts/api-update-a-subaccount",id:"REST API/api-subaccounts/api-update-a-subaccount",isDocsHomePage:!1,title:"Update a subaccount",description:"Subaccounts are deprecated. Please use workspaces instead.",source:"@site/docs/REST API/api-subaccounts/api-update-a-subaccount.md",slug:"/api-update-a-subaccount",permalink:"/docs/api-update-a-subaccount",version:"current"},l=[{value:"Update a subaccount",id:"update-a-subaccount",children:[]}],b={toc:l};function p(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Subaccounts are deprecated. Please use ",Object(r.b)("a",{parentName:"p",href:"api-workspaces"},"workspaces")," instead."))),Object(r.b)("h3",{id:"update-a-subaccount"},"Update a subaccount"),Object(r.b)(o.a,{defaultValue:"text",values:[{label:"Text",value:"text"},{label:"PHP",value:"php"},{label:"C#",value:"csharp"},{label:"Java",value:"java"},{label:"Python",value:"python"},{label:"Ruby",value:"ruby"},{label:"Javascript",value:"javascript"}],mdxType:"Tabs"},Object(r.b)(u.a,{value:"text",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-text"},"POST https://api.seatsio.net/subaccounts/{id}\n"))),Object(r.b)(u.a,{value:"php",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-php"},'$seatsioClient->subaccounts->update(169, "a new subaccount name", "joe@test.com");\n'))),Object(r.b)(u.a,{value:"csharp",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-csharp"},'Client.Subaccounts.Update(169, "a new subaccount name", "joe@test.com");\n'))),Object(r.b)(u.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'client.subaccounts.update(169, "a new subaccount name", "joe@test.com");\n'))),Object(r.b)(u.a,{value:"python",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},'client.subaccounts.update(169, "a new subaccount name", "joe@test.com")\n'))),Object(r.b)(u.a,{value:"ruby",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ruby"},'client.subaccounts.update id: 169, name: "a new subaccount name", email: "joe@test.com"\n'))),Object(r.b)(u.a,{value:"javascript",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"}," await client.subaccounts.update(169, 'a new subaccount name', 'john@test.com');\n")))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "a new subaccount name",\n    "email": "joe@test.com"\n}\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"name"),": the new name of the subaccount. Optional. Can be any string (including spaces or special characters)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"email"),": the new name of the subaccount. Optional. If you pass in a new e-mail address (which is different from the existing one), seats.io sends a mail to that address. That mail contains a link to a page which allows the user to choose a password to log in to the ",Object(r.b)("a",{parentName:"li",href:"https://app.seats.io"},"dashboard"),".")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-curl"},'curl -X POST https://api.seatsio.net/subaccounts/34 \\\n-u aSecretKey: -X POST -H \'Content-Type: application/json\' -d \'{"name": "a new subaccount name", "email": "joe@test.com"}\'\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Response")),Object(r.b)("p",null,"204 - No Content"))}p.isMDXComponent=!0},353:function(e,t,a){"use strict";function n(e){var t,a,c="";if("string"==typeof e||"number"==typeof e)c+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(c&&(c+=" "),c+=a);else for(t in e)e[t]&&(c&&(c+=" "),c+=t);return c}t.a=function(){for(var e,t,a=0,c="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(c&&(c+=" "),c+=t);return c}},354:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),c=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var i=c.a.createContext({}),l=function(e){var t=c.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):u(u({},t),e)),a},b=function(e){var t=l(e.components);return c.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},m=c.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),b=l(a),m=n,d=b["".concat(o,".").concat(m)]||b[m]||p[m]||r;return a?c.a.createElement(d,u(u({ref:t},i),{},{components:a})):c.a.createElement(d,u({ref:t},i))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:n,o[1]=u;for(var i=2;i<r;i++)o[i]=a[i];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},355:function(e,t,a){"use strict";var n=a(0),c=a(356);t.a=function(){var e=Object(n.useContext)(c.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},356:function(e,t,a){"use strict";var n=a(0),c=Object(n.createContext)(void 0);t.a=c},357:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(355),o=a(353),u=a(53),s=a.n(u),i=37,l=39;t.a=function(e){var t=e.lazy,a=e.block,u=e.defaultValue,b=e.values,p=e.groupId,m=e.className,d=Object(r.a)(),f=d.tabGroupChoices,v=d.setTabGroupChoices,O=Object(n.useState)(u),j=O[0],h=O[1],y=n.Children.toArray(e.children);if(null!=p){var g=f[p];null!=g&&g!==j&&b.some((function(e){return e.value===g}))&&h(g)}var w=function(e){h(e),null!=p&&v(p,e)},N=[];return c.a.createElement("div",null,c.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":a},m)},b.map((function(e){var t=e.value,a=e.label;return c.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(o.a)("tabs__item",s.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case l:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case i:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},a)}))),t?Object(n.cloneElement)(y.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):c.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},358:function(e,t,a){"use strict";var n=a(0),c=a.n(n);t.a=function(e){var t=e.children,a=e.hidden,n=e.className;return c.a.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}}}]);