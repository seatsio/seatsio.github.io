(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(87)),i={title:"3. Show the floor plan on your page",slug:"tutorial-show-the-floor-plan-on-your-page",hidden:!1,createdAt:"2018-08-21T09:12:10.090Z",updatedAt:"2020-03-03T10:49:37.175Z"},c={unversionedId:"Getting Started/getting-started-quick-tutorial/tutorial-show-the-floor-plan-on-your-page",id:"Getting Started/getting-started-quick-tutorial/tutorial-show-the-floor-plan-on-your-page",isDocsHomePage:!1,title:"3. Show the floor plan on your page",description:"You have created a seating chart, and you've created an event for it. Great, you\u2019re ready to show the seating chart to your users.",source:"@site/docs/Getting Started/getting-started-quick-tutorial/tutorial-show-the-floor-plan-on-your-page.md",slug:"/Getting Started/getting-started-quick-tutorial/tutorial-show-the-floor-plan-on-your-page",permalink:"/docs/Getting Started/getting-started-quick-tutorial/tutorial-show-the-floor-plan-on-your-page",version:"current",sidebar:"docs",previous:{title:"2. Create an event",permalink:"/docs/Getting Started/getting-started-quick-tutorial/tutorial-create-an-event"},next:{title:"4. Collect selected seats",permalink:"/docs/Getting Started/getting-started-quick-tutorial/tutorial-collect-selected-seats"}},s=[],l={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You have created a seating chart, and you've created an event for it. Great, you\u2019re ready to show the seating chart to your users."),Object(o.b)("p",null,"To do this, you need to: "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"add an empty div to your page and give it an id. ",Object(o.b)("inlineCode",{parentName:"li"},"chart")," is an excellent choice."),Object(o.b)("li",{parentName:"ol"},"load ",Object(o.b)("a",{parentName:"li",href:"https://cdn.seatsio.net/chart.js"},"https://cdn.seatsio.net/chart.js")),Object(o.b)("li",{parentName:"ol"},"create a new ",Object(o.b)("inlineCode",{parentName:"li"},"seatsio.SeatingChart")," object, configure it and call its ",Object(o.b)("inlineCode",{parentName:"li"},"render()")," method")),Object(o.b)("p",null,"So in short: just copy ","&"," paste this code snippet and adapt it to your needs:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},"<div id=\"chart\"></div>\n<script src=\"https://cdn.seatsio.net/chart.js\"><\/script>\n<script>\n    new seatsio.SeatingChart({\n        divId: 'chart',\n        workspaceKey: 'your workspace key',\n        event: 'your event key'\n    }).render();\n<\/script>\n")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"If you're using React, the easiest way to show a seating chart is to use our React wrapper: ",Object(o.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/@seatsio/seatsio-react"},"https://www.npmjs.com/package/@seatsio/seatsio-react")))))}p.isMDXComponent=!0},87:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);