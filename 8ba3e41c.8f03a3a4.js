(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{234:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),c=a(7),r=(a(0),a(365)),o=a(368),u=a(369),i={title:"Activate a subaccount",slug:"/api/activate-a-subaccount",hidden:!1,createdAt:"2018-08-02T10:18:12.868Z",updatedAt:"2020-02-28T13:16:13.633Z"},s={unversionedId:"REST API/api-subaccounts/api-activate-a-subaccount",id:"REST API/api-subaccounts/api-activate-a-subaccount",isDocsHomePage:!1,title:"Activate a subaccount",description:"Subaccounts are deprecated. Please use workspaces instead.",source:"@site/docs/REST API/api-subaccounts/api-activate-a-subaccount.md",slug:"/api/activate-a-subaccount",permalink:"/docs/api/activate-a-subaccount",version:"current"},l=[{value:"Activate a subaccount",id:"activate-a-subaccount",children:[]}],b={toc:l};function p(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Subaccounts are deprecated. Please use ",Object(r.b)("a",{parentName:"p",href:"/docs/api/workspaces"},"workspaces")," instead."))),Object(r.b)("h3",{id:"activate-a-subaccount"},"Activate a subaccount"),Object(r.b)(o.a,{groupId:"serverside-code-samples",defaultValue:"shell",values:[{label:"Text",value:"shell"},{label:"PHP",value:"php"},{label:"C#",value:"csharp"},{label:"Java",value:"java"},{label:"Python",value:"python"},{label:"Ruby",value:"ruby"},{label:"Javascript",value:"javascript"}],mdxType:"Tabs"},Object(r.b)(u.a,{value:"shell",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"POST https://api-{region}.seatsio.net/subaccounts/{id}/actions/activate\n"))),Object(r.b)(u.a,{value:"php",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-php"},"$seatsioClient->subaccounts->activate(169);\n"))),Object(r.b)(u.a,{value:"csharp",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-csharp"},"Client.Subaccounts.Activate(169);\n"))),Object(r.b)(u.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"client.subaccounts.activate(169);\n"))),Object(r.b)(u.a,{value:"python",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"client.subaccounts.activate(169)\n"))),Object(r.b)(u.a,{value:"ruby",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ruby"},"client.subaccounts.activate id: 169\n"))),Object(r.b)(u.a,{value:"javascript",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"await client.subaccounts.activate('subaccountId');\n")))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"curl -X POST https://api-{region}.seatsio.net/subaccounts/169/actions/activate \\\n-u aSecretKey:\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Response")),Object(r.b)("p",null,"204 - No Content"))}p.isMDXComponent=!0},364:function(e,t,a){"use strict";function n(e){var t,a,c="";if("string"==typeof e||"number"==typeof e)c+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(c&&(c+=" "),c+=a);else for(t in e)e[t]&&(c&&(c+=" "),c+=t);return c}t.a=function(){for(var e,t,a=0,c="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(c&&(c+=" "),c+=t);return c}},365:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),c=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var s=c.a.createContext({}),l=function(e){var t=c.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):u(u({},t),e)),a},b=function(e){var t=l(e.components);return c.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},m=c.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=l(a),m=n,d=b["".concat(o,".").concat(m)]||b[m]||p[m]||r;return a?c.a.createElement(d,u(u({ref:t},s),{},{components:a})):c.a.createElement(d,u({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:n,o[1]=u;for(var s=2;s<r;s++)o[s]=a[s];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},366:function(e,t,a){"use strict";var n=a(0),c=a(367);t.a=function(){var e=Object(n.useContext)(c.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},367:function(e,t,a){"use strict";var n=a(0),c=Object(n.createContext)(void 0);t.a=c},368:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(366),o=a(364),u=a(54),i=a.n(u),s=37,l=39;t.a=function(e){var t=e.lazy,a=e.block,u=e.defaultValue,b=e.values,p=e.groupId,m=e.className,d=Object(r.a)(),v=d.tabGroupChoices,f=d.setTabGroupChoices,O=Object(n.useState)(u),j=O[0],y=O[1],h=n.Children.toArray(e.children);if(null!=p){var g=v[p];null!=g&&g!==j&&b.some((function(e){return e.value===g}))&&y(g)}var N=function(e){y(e),null!=p&&f(p,e)},w=[];return c.a.createElement("div",null,c.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":a},m)},b.map((function(e){var t=e.value,a=e.label;return c.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(o.a)("tabs__item",i.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case l:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},a)}))),t?Object(n.cloneElement)(h.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):c.a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},369:function(e,t,a){"use strict";var n=a(0),c=a.n(n);t.a=function(e){var t=e.children,a=e.hidden,n=e.className;return c.a.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}}}]);