(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{135:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),l=(n(0),n(360)),o=(n(363),n(364),{title:"style",slug:"/renderer/style",hidden:!1,createdAt:"2019-07-22T20:53:58.402Z",updatedAt:"2019-07-22T22:18:21.539Z"}),i={unversionedId:"Rendering Floor Plans/style-your-floor-plan/style",id:"Rendering Floor Plans/style-your-floor-plan/style",isDocsHomePage:!1,title:"style",description:"Type: object",source:"@site/docs/Rendering Floor Plans/style-your-floor-plan/style.md",slug:"/renderer/style",permalink:"/docs/renderer/style",version:"current",sidebar:"renderer",previous:{title:"stylePreset",permalink:"/docs/renderer/stylepreset"},next:{title:"React to events",permalink:"/docs/renderer/react-to-events"}},c=[{value:"font",id:"font",children:[]},{value:"fontWeight",id:"fontweight",children:[]},{value:"borderRadius",id:"borderradius",children:[]},{value:"border",id:"border",children:[]},{value:"padding",id:"padding",children:[]},{value:"buttonFace",id:"buttonface",children:[]}],b={toc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Type"),": object  "),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Example"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},"style: {\n   border: '3d'\n}\n")),Object(l.b)("p",null,"Sets the intention for certain style properties, allowing to override the current style preset."),Object(l.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"These are not CSS properties")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"To ensure style does not break across multiple components and screen resolutions, these settings define intentions but not raw CSS values. Make sure to see the list of options below."))),Object(l.b)("h1",{id:"style-properties"},"Style properties"),Object(l.b)("h2",{id:"font"},"font"),Object(l.b)("p",null,"Defines the font for text and labels."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},"style: {\n   font: 'Roboto'\n}\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Possible values:")," "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'Roboto'")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'Montserrat'")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'WorkSans'")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'NotoSansHK'")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'Lato'")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'NunitoSans'"))),Object(l.b)("h2",{id:"fontweight"},"fontWeight"),Object(l.b)("p",null,"Defines how font weights should be balanced."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},"style: {\n   fontWeight: 'bolder'\n}\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Possible values:")," "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'bolder'")," \u2013 text will lean towards the bolder side."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'minMax'")," \u2013 text will either be very thin or very bold.")),Object(l.b)("h2",{id:"borderradius"},"borderRadius"),Object(l.b)("p",null,"Defines the border radius of tooltips, dialogs and buttons."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},"style: {\n   borderRadius: 'none'\n}\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Possible values:")," "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'none'")," \u2013 sharp corners."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'max'")," \u2013 very rounded corners."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'asymmetrical'")," \u2013 alternating rounding on opposite corners.")),Object(l.b)("h2",{id:"border"},"border"),Object(l.b)("p",null,"Defines the border thickness of tooltips, dialogs and buttons."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},"style: {\n   border: '3d'\n}\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Possible values:")," "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'thick'")," \u2013 thicker borders, usually about 2px thick."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'3d'")," \u2013 same as ",Object(l.b)("inlineCode",{parentName:"li"},"'thick'")," but with a subtle 3d bevel effect using various shades.")),Object(l.b)("h2",{id:"padding"},"padding"),Object(l.b)("p",null,"Defines the padding and white space of tooltips, dialogs and buttons."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},"style: {\n   padding: 'spacious'\n}\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Possible values:")," "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'spacious'")," \u2013 additional spacing and padding, creating a negative space on some dialogs.")),Object(l.b)("h2",{id:"buttonface"},"buttonFace"),Object(l.b)("p",null,"Defines how soft buttons (like number steppers) are colored."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},"style: {\n   buttonFace: 'fillEnabled'\n}\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Possible values:")," "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'fillEnabled'")," \u2013 fills all buttons that are enabled."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'fillHighlightedOption'")," \u2013 only fills the recommended/highlighted option.")))}s.isMDXComponent=!0},359:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},360:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,m=u["".concat(o,".").concat(d)]||u[d]||p[d]||l;return n?a.a.createElement(m,i(i({ref:t},b),{},{components:n})):a.a.createElement(m,i({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var b=2;b<l;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},361:function(e,t,n){"use strict";var r=n(0),a=n(362);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},362:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},363:function(e,t,n){"use strict";var r=n(0),a=n.n(r),l=n(361),o=n(359),i=n(54),c=n.n(i),b=37,s=39;t.a=function(e){var t=e.lazy,n=e.block,i=e.defaultValue,u=e.values,p=e.groupId,d=e.className,m=Object(l.a)(),f=m.tabGroupChoices,O=m.setTabGroupChoices,j=Object(r.useState)(i),v=j[0],g=j[1],h=r.Children.toArray(e.children);if(null!=p){var y=f[p];null!=y&&y!==v&&u.some((function(e){return e.value===y}))&&g(y)}var N=function(e){g(e),null!=p&&O(p,e)},w=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},d)},u.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},n)}))),t?Object(r.cloneElement)(h.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},364:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}}}]);