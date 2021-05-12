(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{121:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(362)),c=(r(365),r(366),{title:"Styling the Chart Manager",slug:"/chart-manager/styling",hidden:!1,createdAt:"2020-06-19T08:02:10.316Z",updatedAt:"2021-02-26T13:34:32.626Z"}),l={unversionedId:"Chart manager/chart-manager-styling",id:"Chart manager/chart-manager-styling",isDocsHomePage:!1,title:"Styling the Chart Manager",description:"colorScheme",source:"@site/docs/Chart manager/chart-manager-styling.md",slug:"/chart-manager/styling",permalink:"/docs/chart-manager/styling",version:"current",sidebar:"chartManager",previous:{title:"Configuring the Chart Manager",permalink:"/docs/chart-manager/configuring"},next:{title:"Reacting to events",permalink:"/docs/chart-manager/reacting-to-events"}},i=[{value:"colorScheme",id:"colorscheme",children:[]},{value:"colors",id:"colors",children:[]},{value:"stylePreset",id:"stylepreset",children:[]},{value:"style",id:"style",children:[]}],s={toc:i};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"colorscheme"},"colorScheme"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Type"),": string",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("strong",{parentName:"p"},"Default"),": ",Object(o.b)("inlineCode",{parentName:"p"},'"light"'),"  "),Object(o.b)("p",null,"Sets the color scheme for the user interface, and the contrast required when rendering the floor plan elements."),Object(o.b)("p",null,"For details, see the ",Object(o.b)("a",{parentName:"p",href:"/docs/renderer/colorscheme"},"Renderer colorScheme documentation"),"."),Object(o.b)("h2",{id:"colors"},"colors"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Type"),": object  "),Object(o.b)("p",null,"Replaces certain colors of the current color scheme."),Object(o.b)("p",null,"For details, see the ",Object(o.b)("a",{parentName:"p",href:"/docs/renderer/colors"},"Renderer colors documentation"),"."),Object(o.b)("h2",{id:"stylepreset"},"stylePreset"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Type"),": string",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("strong",{parentName:"p"},"Default"),": ",Object(o.b)("inlineCode",{parentName:"p"},'"balance"'),"  "),Object(o.b)("p",null,"Sets the preset of styles to use for the seating chart user interface."),Object(o.b)("p",null,"For details, see the ",Object(o.b)("a",{parentName:"p",href:"/docs/renderer/stylepreset"},"Renderer stylePreset documentation"),"."),Object(o.b)("h2",{id:"style"},"style"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Type"),": object  "),Object(o.b)("p",null,"Sets the intention for certain style properties, allowing to override the current style preset."),Object(o.b)("p",null,"For details, see the ",Object(o.b)("a",{parentName:"p",href:"/docs/renderer/style"},"Renderer style documentation"),"."))}u.isMDXComponent=!0},361:function(e,t,r){"use strict";function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}},362:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(r),f=n,d=p["".concat(c,".").concat(f)]||p[f]||b[f]||o;return r?a.a.createElement(d,l(l({ref:t},s),{},{components:r})):a.a.createElement(d,l({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var s=2;s<o;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},363:function(e,t,r){"use strict";var n=r(0),a=r(364);t.a=function(){var e=Object(n.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},364:function(e,t,r){"use strict";var n=r(0),a=Object(n.createContext)(void 0);t.a=a},365:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(363),c=r(361),l=r(54),i=r.n(l),s=37,u=39;t.a=function(e){var t=e.lazy,r=e.block,l=e.defaultValue,p=e.values,b=e.groupId,f=e.className,d=Object(o.a)(),m=d.tabGroupChoices,h=d.setTabGroupChoices,y=Object(n.useState)(l),g=y[0],O=y[1],j=n.Children.toArray(e.children);if(null!=b){var v=m[b];null!=v&&v!==g&&p.some((function(e){return e.value===v}))&&O(v)}var w=function(e){O(e),null!=b&&h(b,e)},N=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":r},f)},p.map((function(e){var t=e.value,r=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(c.a)("tabs__item",i.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,r){switch(r.keyCode){case u:!function(e,t){var r=e.indexOf(t)+1;e[r]?e[r].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var r=e.indexOf(t)-1;e[r]?e[r].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},r)}))),t?Object(n.cloneElement)(j.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},366:function(e,t,r){"use strict";var n=r(0),a=r.n(n);t.a=function(e){var t=e.children,r=e.hidden,n=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:r,className:n},t)}}}]);