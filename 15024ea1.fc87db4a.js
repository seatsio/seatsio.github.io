(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{353:function(e,n,t){"use strict";function r(e){var n,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(o&&(o+=" "),o+=t);else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}n.a=function(){for(var e,n,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(o&&(o+=" "),o+=n);return o}},354:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return v}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),u=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=u(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},p=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),p=r,v=d["".concat(i,".").concat(p)]||d[p]||f[p]||a;return t?o.a.createElement(v,c(c({ref:n},s),{},{components:t})):o.a.createElement(v,c({ref:n},s))}));function v(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},355:function(e,n,t){"use strict";var r=t(0),o=t(356);n.a=function(){var e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},356:function(e,n,t){"use strict";var r=t(0),o=Object(r.createContext)(void 0);n.a=o},357:function(e,n,t){"use strict";var r=t(0),o=t.n(r),a=t(355),i=t(353),c=t(53),l=t.n(c),s=37,u=39;n.a=function(e){var n=e.lazy,t=e.block,c=e.defaultValue,d=e.values,f=e.groupId,p=e.className,v=Object(a.a)(),b=v.tabGroupChoices,m=v.setTabGroupChoices,y=Object(r.useState)(c),O=y[0],g=y[1],j=r.Children.toArray(e.children);if(null!=f){var h=b[f];null!=h&&h!==O&&d.some((function(e){return e.value===h}))&&g(h)}var w=function(e){g(e),null!=f&&m(f,e)},E=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t},p)},d.map((function(e){var n=e.value,t=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===n,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":O===n}),key:n,ref:function(e){return E.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case u:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case s:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(E,e.target,e)},onFocus:function(){return w(n)},onClick:function(){w(n)}},t)}))),n?Object(r.cloneElement)(j.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,n){return Object(r.cloneElement)(e,{key:n,hidden:e.props.value!==O})}))))}},358:function(e,n,t){"use strict";var r=t(0),o=t.n(r);n.a=function(e){var n=e.children,t=e.hidden,r=e.className;return o.a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},87:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(3),o=t(7),a=(t(0),t(354)),i=(t(357),t(358),{title:"onSelectionValid",slug:"/renderer-events-onselectionvalid",hidden:!1,createdAt:"2018-08-03T13:35:30.709Z",updatedAt:"2018-08-23T14:20:56.774Z"}),c={unversionedId:"Rendering Floor Plans/renderer-react-to-events/renderer-events-onselectionvalid",id:"Rendering Floor Plans/renderer-react-to-events/renderer-events-onselectionvalid",isDocsHomePage:!1,title:"onSelectionValid",description:"Type: function()",source:"@site/docs/Rendering Floor Plans/renderer-react-to-events/renderer-events-onselectionvalid.md",slug:"/renderer-events-onselectionvalid",permalink:"/docs/renderer-events-onselectionvalid",version:"current",sidebar:"docs",previous:{title:"onReleaseHoldFailed",permalink:"/docs/renderer-events-onreleaseholdfailed"},next:{title:"onSelectionInvalid",permalink:"/docs/renderer-events-onselectioninvalid"}},l=[],s={toc:l};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Type"),": function()"),Object(a.b)("p",null,"Triggered when one or more ",Object(a.b)("a",{parentName:"p",href:"renderer-config-selectionvalidators"},"selectionValidators")," are passed in, and the selection is valid."),Object(a.b)("p",null,"To be used in combination with ",Object(a.b)("a",{parentName:"p",href:"renderer-events-onselectioninvalid"},"onSelectionInvalid"),"."))}u.isMDXComponent=!0}}]);