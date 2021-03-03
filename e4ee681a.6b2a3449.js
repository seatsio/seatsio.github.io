(window.webpackJsonp=window.webpackJsonp||[]).push([[258],{330:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return l}));var r=t(3),o=t(7),a=(t(0),t(358)),i=(t(361),t(362),{title:"Chart designer functions",slug:"/embedded-designer-functions",hidden:!1,createdAt:"2018-08-21T13:04:00.134Z",updatedAt:"2018-08-21T13:55:33.346Z"}),c={unversionedId:"Embedded Designer/embedded-designer-functions",id:"Embedded Designer/embedded-designer-functions",isDocsHomePage:!1,title:"Chart designer functions",description:"These are the functions you can use to interact with an embedded floor plan designer. You can invoke these functions directly on the seatsio.SeatingChartDesigner object you created.",source:"@site/docs/Embedded Designer/embedded-designer-functions.md",slug:"/embedded-designer-functions",permalink:"/docs/embedded-designer-functions",version:"current",sidebar:"docs",previous:{title:"openLatestDrawing",permalink:"/docs/openlatestdrawing"},next:{title:"designer.destroy()",permalink:"/docs/embedded-designer-functions-destroy"}},s=[],u={toc:s};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"These are the functions you can use to interact with an embedded floor plan designer. You can invoke these functions directly on the ",Object(a.b)("inlineCode",{parentName:"p"},"seatsio.SeatingChartDesigner")," object you created.  "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"var designer = new seatsio.SeatingChartDesigner({...}).render();\n$('#myButton').on('click', function(){\n   designer.destroy();\n});\n")))}l.isMDXComponent=!0},357:function(e,n,t){"use strict";function r(e){var n,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(o&&(o+=" "),o+=t);else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}n.a=function(){for(var e,n,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(o&&(o+=" "),o+=n);return o}},358:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),l=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=l(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},p=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),p=r,b=d["".concat(i,".").concat(p)]||d[p]||f[p]||a;return t?o.a.createElement(b,c(c({ref:n},u),{},{components:t})):o.a.createElement(b,c({ref:n},u))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=p;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},359:function(e,n,t){"use strict";var r=t(0),o=t(360);n.a=function(){var e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},360:function(e,n,t){"use strict";var r=t(0),o=Object(r.createContext)(void 0);n.a=o},361:function(e,n,t){"use strict";var r=t(0),o=t.n(r),a=t(359),i=t(357),c=t(54),s=t.n(c),u=37,l=39;n.a=function(e){var n=e.lazy,t=e.block,c=e.defaultValue,d=e.values,f=e.groupId,p=e.className,b=Object(a.a)(),m=b.tabGroupChoices,y=b.setTabGroupChoices,g=Object(r.useState)(c),v=g[0],O=g[1],h=r.Children.toArray(e.children);if(null!=f){var j=m[f];null!=j&&j!==v&&d.some((function(e){return e.value===j}))&&O(j)}var w=function(e){O(e),null!=f&&y(f,e)},E=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t},p)},d.map((function(e){var n=e.value,t=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===n,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":v===n}),key:n,ref:function(e){return E.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case l:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case u:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(E,e.target,e)},onFocus:function(){return w(n)},onClick:function(){w(n)}},t)}))),n?Object(r.cloneElement)(h.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},h.map((function(e,n){return Object(r.cloneElement)(e,{key:n,hidden:e.props.value!==v})}))))}},362:function(e,n,t){"use strict";var r=t(0),o=t.n(r);n.a=function(e){var n=e.children,t=e.hidden,r=e.className;return o.a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}}}]);