(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{196:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(358)),i=(n(361),n(362),{title:"Configuring the Chart Manager",slug:"/chart-manager/configuring",hidden:!1,createdAt:"2020-06-19T07:59:54.831Z",updatedAt:"2021-02-26T13:34:10.920Z"}),c={unversionedId:"Chart manager/chart-manager-configuring",id:"Chart manager/chart-manager-configuring",isDocsHomePage:!1,title:"Configuring the Chart Manager",description:"divId",source:"@site/docs/Chart manager/chart-manager-configuring.md",slug:"/chart-manager/configuring",permalink:"/docs/chart-manager/configuring",version:"current",sidebar:"chartManager",previous:{title:"How to embed the Chart Manager",permalink:"/docs/chart-manager/how-to-embed"},next:{title:"Styling the Chart Manager",permalink:"/docs/chart-manager/styling"}},l=[{value:"divId",id:"divid",children:[]},{value:"secretKey",id:"secretkey",children:[]},{value:"chart",id:"chart",children:[]},{value:"mode",id:"mode",children:[]},{value:"language",id:"language",children:[]},{value:"messages",id:"messages",children:[]},{value:"tooltipInfo",id:"tooltipinfo",children:[]},{value:"showFullScreenButton",id:"showfullscreenbutton",children:[]},{value:"fitTo",id:"fitto",children:[]}],s={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"divid"},"divId"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Type"),": string  "),Object(o.b)("p",null,"The id of the div on your page in which you want seats.io to render the chart manager. This is a required config option."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"divId: 'chart-manager'\n")),Object(o.b)("h2",{id:"secretkey"},"secretKey"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Type"),": string",Object(o.b)("br",{parentName:"p"}),"\n","The secret key of a workspace, or the company admin key."),Object(o.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Important")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Never expose this secret key on a public web page! Only use the chart manager behind a login wall."))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"secretKey: 'my secret key'\n")),Object(o.b)("h2",{id:"chart"},"chart"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Type"),": string  "),Object(o.b)("p",null,"The key of the chart you wish to manage"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"chart: 'e1d13871-d228-1861-9dd3-bbe32ec05e36'\n")),Object(o.b)("h2",{id:"mode"},"mode"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Type"),": string  "),Object(o.b)("p",null,"Only 'manageRulesets' is currently supported, to manage social distancing rulesets."),Object(o.b)("h2",{id:"language"},"language"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Type"),": string  "),Object(o.b)("p",null,"Currently supported languages are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'nl'")," \u2013 Dutch"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'en'")," \u2013 English"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'de'")," \u2013 German"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'pt'")," \u2013 Portuguese"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'es'")," \u2013 Spanish"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'fr'")," \u2013 French")),Object(o.b)("h2",{id:"messages"},"messages"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Type"),": object  "),Object(o.b)("p",null,"The messages parameter allows you to change all kinds of texts that are displayed on the chart: section labels, tooltip texts, static text objects ... you name it.\nJust pass in an object with the original texts as keys, and the translations as values.\nFor a more detailed explanation, check ",Object(o.b)("a",{parentName:"p",href:"http://support.seats.io/integrating-seats-io/multi-language-i18n-support"},"this page"),"."),Object(o.b)("h2",{id:"tooltipinfo"},"tooltipInfo"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Type"),": function(object)",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("strong",{parentName:"p"},"Return"),": string"),Object(o.b)("p",null,"A function whose result will be displayed as extra information on the cursor tooltip.\nSee ",Object(o.b)("a",{parentName:"p",href:"/docs/renderer/config-tooltipinfo"},"https://docs.seats.io/docs/renderer-config-tooltipinfo")," for more info."),Object(o.b)("h2",{id:"showfullscreenbutton"},"showFullScreenButton"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Type"),": boolean  "),Object(o.b)("p",null,"Whether to show the full screen button or not. Defaults to true."),Object(o.b)("h2",{id:"fitto"},"fitTo"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Type"),": string  "),Object(o.b)("p",null,"Whether to adapt to the container div width, or to its width and height."),Object(o.b)("p",null,"See ",Object(o.b)("a",{parentName:"p",href:"/docs/renderer/config-fitto"},"https://docs.seats.io/docs/renderer-config-fitto")))}u.isMDXComponent=!0},357:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},358:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,m=b["".concat(i,".").concat(d)]||b[d]||p[d]||o;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},359:function(e,t,n){"use strict";var r=n(0),a=n(360);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},360:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},361:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(359),i=n(357),c=n(54),l=n.n(c),s=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,b=e.values,p=e.groupId,d=e.className,m=Object(o.a)(),f=m.tabGroupChoices,g=m.setTabGroupChoices,h=Object(r.useState)(c),O=h[0],j=h[1],v=r.Children.toArray(e.children);if(null!=p){var y=f[p];null!=y&&y!==O&&b.some((function(e){return e.value===y}))&&j(y)}var N=function(e){j(e),null!=p&&g(p,e)},w=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},d)},b.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},n)}))),t?Object(r.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},362:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}}}]);