(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{200:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),a=(n(0),n(358)),i=(n(361),n(362),{title:"tooltipInfo",slug:"/renderer/config-tooltipinfo",hidden:!1,createdAt:"2018-08-03T09:32:26.720Z",updatedAt:"2018-09-03T09:10:21.259Z"}),c={unversionedId:"Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-tooltipinfo",id:"Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-tooltipinfo",isDocsHomePage:!1,title:"tooltipInfo",description:"Type: function(object)",source:"@site/docs/Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-tooltipinfo.md",slug:"/renderer/config-tooltipinfo",permalink:"/docs/renderer/config-tooltipinfo",version:"current",sidebar:"renderer",previous:{title:"objectTooltip",permalink:"/docs/renderer/config-objecttooltip"},next:{title:"language",permalink:"/docs/renderer/config-language"}},l=[],u={toc:l};function s(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Type"),": function(object)",Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("strong",{parentName:"p"},"Return"),": string"),Object(a.b)("p",null,Object(a.b)("img",{alt:"custom-info@2x.png",src:n(428).default})),Object(a.b)("p",null,"A function whose result will be displayed as extra information on the cursor tooltip."),Object(a.b)("p",null,"Can be formatted using a simple ",Object(a.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/BBCode"},"BBCode")," format:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"[b]bold[/b]")," - Applies a bold styling."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"[i]italic[/i]")," - Applies an italic styling."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"[pre]preformatted[/pre]")," - Applies an fixed-width styling with pre white spacing."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"[br/]")," - Inserts a break line.")),Object(a.b)("p",null,"The code for the image above would be the following:"),Object(a.b)("iframe",{width:"100%",height:"580",src:"//jsfiddle.net/seatsio/g16o4xfd/embedded/js,html,result/",allowfullscreen:"allowfullscreen",frameborder:"0"}),Object(a.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"tooltipInfo is triggered for all objects, including sections. You can use object.objectType to distinguish between object types (e.g. to implement a specific tooltip for sections)."))))}s.isMDXComponent=!0},357:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},358:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),b=r,d=p["".concat(i,".").concat(b)]||p[b]||f[b]||a;return n?o.a.createElement(d,c(c({ref:t},u),{},{components:n})):o.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},359:function(e,t,n){"use strict";var r=n(0),o=n(360);t.a=function(){var e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},360:function(e,t,n){"use strict";var r=n(0),o=Object(r.createContext)(void 0);t.a=o},361:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(359),i=n(357),c=n(54),l=n.n(c),u=37,s=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,p=e.values,f=e.groupId,b=e.className,d=Object(a.a)(),m=d.tabGroupChoices,g=d.setTabGroupChoices,v=Object(r.useState)(c),O=v[0],j=v[1],y=r.Children.toArray(e.children);if(null!=f){var h=m[f];null!=h&&h!==O&&p.some((function(e){return e.value===h}))&&j(h)}var w=function(e){j(e),null!=f&&g(f,e)},N=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},b)},p.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(r.cloneElement)(y.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},362:function(e,t,n){"use strict";var r=n(0),o=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return o.a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},428:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/custom-info@2x-c1151ea310ed4c2ad78a5f59d491b56e.png"}}]);