(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{238:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return u})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),i=(a(0),a(358)),o=a(361),c=a(362),l={title:"Authentication",slug:"/api/authentication",hidden:!1,createdAt:"2018-07-30T18:27:03.091Z",updatedAt:"2020-09-29T09:39:59.250Z"},s={unversionedId:"REST API/api-overview/api-authentication",id:"REST API/api-overview/api-authentication",isDocsHomePage:!1,title:"Authentication",description:"When calling the seats.io the seats.io API, you need to authenticate yourself. To do so, you need to include a workspace secret key in each request. You can find that key at the workspace settings page.",source:"@site/docs/REST API/api-overview/api-authentication.md",slug:"/api/authentication",permalink:"/docs/api/authentication",version:"current",sidebar:"api",next:{title:"https",permalink:"/docs/api/https"}},u=[{value:"Using curl",id:"using-curl",children:[]},{value:"Using a http header",id:"using-a-http-header",children:[]},{value:"Using one of the seats.io client libs",id:"using-one-of-the-seatsio-client-libs",children:[]},{value:"Using the company admin key",id:"using-the-company-admin-key",children:[]}],p={toc:u};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"When calling the seats.io the seats.io API, you need to authenticate yourself. To do so, you need to include a workspace secret key in each request. You can find that key at the ",Object(i.b)("a",{parentName:"p",href:"https://app.seats.io/workspace-settings"},"workspace settings page"),"."),Object(i.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Your secret key carries many privileges, so it's very important to keep it to yourself!")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"Never push your secret key to public repositories on GitHub, BitBucket or the likes."),Object(i.b)("li",{parentName:"ul"},"Never call the seats.io API from the client's browser (e.g. using ",Object(i.b)("inlineCode",{parentName:"li"},"$.ajax"),"), as this will require you to publicly expose your secret key.")))),Object(i.b)("p",null,"Authentication to the API is performed via ",Object(i.b)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Basic_access_authentication"},"HTTP Basic Auth"),". "),Object(i.b)("p",null,"Provide the workspace secret key as the username value. You do not need to provide a password.\nAPI requests without authentication will fail."),Object(i.b)("h2",{id:"using-curl"},"Using curl"),Object(i.b)("p",null,"curl uses the -u flag to pass basic auth credentials.\nAdding a colon (:) after your API key prevents cURL from asking for a password."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"curl https://api.seatsio.net/charts -u 550e8400-e29b-41d4-a716-446655440000:\n")),Object(i.b)("h2",{id:"using-a-http-header"},"Using a http header"),Object(i.b)("p",null,"In general, you need to set a header called Authorization with value \u201cBasic x\u201d, where x is your secret key with a colon, base64 encoded. "),Object(i.b)("p",null,"So: "),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Steps"),Object(i.b)("th",{parentName:"tr",align:null},"Example"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"1. Take your workspace secret key"),Object(i.b)("td",{parentName:"tr",align:null},"550e8400-e29b-41d4-a716-446655440000")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"2. append a colon (:)"),Object(i.b)("td",{parentName:"tr",align:null},"550e8400-e29b-41d4-a716-446655440000:")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"3. base64-encode it"),Object(i.b)("td",{parentName:"tr",align:null},"NTUwZTg0MDAtZTI5Yi00MWQ0LWE3MTYtNDQ2NjU1NDQwMDAwOg==")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"4. put it in an Authorization header"),Object(i.b)("td",{parentName:"tr",align:null},"Authorization: Basic NTUwZTg0MDAtZTI5Yi00MWQ0LWE3MTYtNDQ2NjU1NDQwMDAwOg==")))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},'curl https://api.seatsio.net/charts -H "Authorization: Basic NTUwZTg0MDAtZTI5Yi00MWQ0LWE3MTYtNDQ2NjU1NDQwMDAwOg=="\n')),Object(i.b)("h2",{id:"using-one-of-the-seatsio-client-libs"},"Using one of the seats.io client libs"),Object(i.b)("p",null,"All of the seats.io ",Object(i.b)("a",{parentName:"p",href:"/docs/api/client-libraries"},"client libraries")," support authentication with the API, so you don't have to fiddle with authorization headers and base64 encoding.  "),Object(i.b)(o.a,{groupId:"serverside-code-samples",defaultValue:"php",values:[{label:"PHP",value:"php"},{label:"C#",value:"csharp"},{label:"Java",value:"java"},{label:"Python",value:"python"},{label:"Ruby",value:"ruby"},{label:"Javascript",value:"javascript"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"php",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},'$seatsio = new \\Seatsio\\SeatsioClient("myWorkspaceSecretKey");\n'))),Object(i.b)(c.a,{value:"csharp",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-csharp"},'var client = new SeatsioClient("mySecretKey"); \n'))),Object(i.b)(c.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'SeatsioClient client = new SeatsioClient("mySecretKey"); \n'))),Object(i.b)(c.a,{value:"python",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},'import seatsio\nclient = seatsio.Client(secret_key="mySecretKey")\n'))),Object(i.b)(c.a,{value:"ruby",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ruby"},"require 'seatsio'\nclient = Seatsio::Client.new('mySecretKey')\n"))),Object(i.b)(c.a,{value:"javascript",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"let client = new SeatsioClient('mySecretKey');\n")))),Object(i.b)("h2",{id:"using-the-company-admin-key"},"Using the company admin key"),Object(i.b)("p",null,"Instead of the workspace secret key, you can pass in your company admin key for authentication. The admin keys has privileges to access and modify data in all workspaces. You can find it at your ",Object(i.b)("a",{parentName:"p",href:"https://app.seats.io/company-settings"},"company settings page"),"."),Object(i.b)("p",null,"To specify the workspace, pass in the ",Object(i.b)("inlineCode",{parentName:"p"},"X-Workspace-Key")," header. That header should contain the public workspace key."),Object(i.b)("p",null,"If you don't provide the ",Object(i.b)("inlineCode",{parentName:"p"},"X-Workspace-Key")," header, API calls with the company admin key operate on the default workspace for your company."),Object(i.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"The company admin key should never leave your server!")),Object(i.b)("div",{parentName:"div",className:"admonition-content"})))}b.isMDXComponent=!0},357:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},358:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(a),d=n,m=p["".concat(o,".").concat(d)]||p[d]||b[d]||i;return a?r.a.createElement(m,c(c({ref:t},s),{},{components:a})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},359:function(e,t,a){"use strict";var n=a(0),r=a(360);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},360:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},361:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(359),o=a(357),c=a(54),l=a.n(c),s=37,u=39;t.a=function(e){var t=e.lazy,a=e.block,c=e.defaultValue,p=e.values,b=e.groupId,d=e.className,m=Object(i.a)(),h=m.tabGroupChoices,y=m.setTabGroupChoices,f=Object(n.useState)(c),v=f[0],O=f[1],j=n.Children.toArray(e.children);if(null!=b){var g=h[b];null!=g&&g!==v&&p.some((function(e){return e.value===g}))&&O(g)}var N=function(e){O(e),null!=b&&y(b,e)},w=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":a},d)},p.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case u:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},a)}))),t?Object(n.cloneElement)(j.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},362:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.children,a=e.hidden,n=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}}}]);