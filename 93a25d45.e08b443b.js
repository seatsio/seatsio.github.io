(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{239:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(3),i=n(7),a=(n(0),n(358)),o=(n(361),n(362),{title:"fitTo",slug:"/renderer/config-fitto",hidden:!1,createdAt:"2018-08-03T12:06:04.968Z",updatedAt:"2021-02-08T13:06:21.959Z"}),c={unversionedId:"Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-fitto",id:"Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-fitto",isDocsHomePage:!1,title:"fitTo",description:"Type: string",source:"@site/docs/Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-fitto.md",slug:"/renderer/config-fitto",permalink:"/docs/renderer/config-fitto",version:"current",sidebar:"renderer",previous:{title:"loading",permalink:"/docs/renderer/config-loading"},next:{title:"cursorTooltip",permalink:"/docs/renderer/config-cursortooltip"}},s=[{value:"How Seats.io determines rendering size",id:"how-seatsio-determines-rendering-size",children:[]},{value:"Overriding the default behaviour",id:"overriding-the-default-behaviour",children:[]}],l={toc:s};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Type"),": string",Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("strong",{parentName:"p"},"Default"),": default depends on width and height of the container ",Object(a.b)("inlineCode",{parentName:"p"},"<div>"),"  "),Object(a.b)("h3",{id:"how-seatsio-determines-rendering-size"},"How Seats.io determines rendering size"),Object(a.b)("p",null,"The Seats.io renderer does its best to know if a seating chart should fit to just the width of the container div, or to both the width and height. It does so by looking at the width and height of the container ",Object(a.b)("inlineCode",{parentName:"p"},"<div>"),". "),Object(a.b)("p",null,"If the container has a width but no height, the chart will be rendered a wide as the container ",Object(a.b)("inlineCode",{parentName:"p"},"<div>"),", and as high as needed for the drawing to fit (with a minimum height of 300px). "),Object(a.b)("p",null,"Suppose you're rendering a chart in a ",Object(a.b)("inlineCode",{parentName:"p"},"<div>")," on which you did not explicitly set a width or height. In that case, the ",Object(a.b)("inlineCode",{parentName:"p"},"<div>")," will be 100% the width of the parent element. Also, the height of the ",Object(a.b)("inlineCode",{parentName:"p"},"<div>")," is 0 by default. "),Object(a.b)("p",null,"Seats.io will then render the chart exactly as wide as the container div, and as high as needed for the particular drawing. A chart that's 1000px pixels high will require more vertical space than a 500px high chart."),Object(a.b)("p",null,"On the other hand, suppose you specified an explicit height on the container div. If the div is 100% wide (the default) and 500px high, seats.io will render the chart to make maximal use of the available space. The rendered chart will be exactly 500px high and as wide as the container. If needed, whitespace is used to fill up the remaining space."),Object(a.b)("p",null,"Seats.io continuously checks for changes in container width and height, and re-renders the seating chart if needed."),Object(a.b)("h3",{id:"overriding-the-default-behaviour"},"Overriding the default behaviour"),Object(a.b)("p",null,"With fitTo, you can override the default guess of seats.io. If your container div has no defined height at the time the chart is rendered, but you do want the chart to resize when the container height changes, you have to pass in fitTo: 'widthAndHeight'. On the other hand, if you want the chart to only take the container width into account, pass in fitTo: 'width'."),Object(a.b)("p",null,"A good example is when the container of the chart is invisible at first. Invisible divs do not have a width or a height. When the div is made visible, seats.io assumes the chart should fit to the width of the container, and not to the width and height - even if you set an explicit height on the div. To fix that behaviour, pass in fitTo: 'widthAndHeight'."))}d.isMDXComponent=!0},357:function(e,t,n){"use strict";function r(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}},358:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return p}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),d=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=d(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),f=r,p=u["".concat(o,".").concat(f)]||u[f]||h[f]||a;return n?i.a.createElement(p,c(c({ref:t},l),{},{components:n})):i.a.createElement(p,c({ref:t},l))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},359:function(e,t,n){"use strict";var r=n(0),i=n(360);t.a=function(){var e=Object(r.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},360:function(e,t,n){"use strict";var r=n(0),i=Object(r.createContext)(void 0);t.a=i},361:function(e,t,n){"use strict";var r=n(0),i=n.n(r),a=n(359),o=n(357),c=n(54),s=n.n(c),l=37,d=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,u=e.values,h=e.groupId,f=e.className,p=Object(a.a)(),b=p.tabGroupChoices,g=p.setTabGroupChoices,m=Object(r.useState)(c),v=m[0],y=m[1],O=r.Children.toArray(e.children);if(null!=h){var w=b[h];null!=w&&w!==v&&u.some((function(e){return e.value===w}))&&y(w)}var j=function(e){y(e),null!=h&&g(h,e)},x=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},f)},u.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(o.a)("tabs__item",s.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case d:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e)},onFocus:function(){return j(t)},onClick:function(){j(t)}},n)}))),t?Object(r.cloneElement)(O.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},362:function(e,t,n){"use strict";var r=n(0),i=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return i.a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}}}]);