(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{155:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return u})),a.d(t,"default",(function(){return p}));var n=a(3),o=a(7),r=(a(0),a(354)),s=a(357),l=a(358),i={title:"5. Book selected seats",slug:"/tutorial-book-selected-seats",hidden:!1,createdAt:"2018-08-21T09:35:42.604Z",updatedAt:"2018-11-19T06:35:27.895Z"},c={unversionedId:"Getting Started/getting-started-quick-tutorial/tutorial-book-selected-seats",id:"Getting Started/getting-started-quick-tutorial/tutorial-book-selected-seats",isDocsHomePage:!1,title:"5. Book selected seats",description:"So you've shown your ticket buyer a floor plan, they selected the seats they wish. Now it's time to actually book them, so that they become unavailable for selection for the next ticket buyer that comes along.",source:"@site/docs/Getting Started/getting-started-quick-tutorial/tutorial-book-selected-seats.md",slug:"/tutorial-book-selected-seats",permalink:"/docs/tutorial-book-selected-seats",version:"current",sidebar:"docs",previous:{title:"4. Collect selected seats",permalink:"/docs/tutorial-collect-selected-seats"},next:{title:"6. Further reading",permalink:"/docs/tutorial-further-reading"}},u=[{value:"When should I book?",id:"when-should-i-book",children:[]},{value:"Live updates",id:"live-updates",children:[]},{value:"Custom statuses",id:"custom-statuses",children:[]},{value:"Temporarily holding seats",id:"temporarily-holding-seats",children:[]}],b={toc:u};function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"So you've shown your ticket buyer a floor plan, they selected the seats they wish. Now it's time to actually book them, so that they become unavailable for selection for the next ticket buyer that comes along. "),Object(r.b)("p",null,"You do this by calling the ",Object(r.b)("a",{parentName:"p",href:"api-book-objects"},"Book objects endpoint")," of the Seats API.\nHere are some examples using the respective ",Object(r.b)("a",{parentName:"p",href:"api-client-libraries"},"API Client libraries")," you can use: "),Object(r.b)(s.a,{defaultValue:"php",values:[{label:"PHP",value:"php"},{label:"C#",value:"csharp"},{label:"Java",value:"java"},{label:"Python",value:"python"},{label:"Javascript",value:"javascript"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"php",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-php"},'$seatsioClient->events->book("event1", ["A-3", "A-5", "A-7"]);\n'))),Object(r.b)(l.a,{value:"csharp",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-csharp"},'Client.Events.Book("event1", new [] { "A-3", "A-5", "A-7" });\n'))),Object(r.b)(l.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'client.events.book("event1", Arrays.asList("A-3", "A-5", "A-7"));\n'))),Object(r.b)(l.a,{value:"python",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},'client.events.book("event1", ["A-3", "A-5", "A-7"])\n'))),Object(r.b)(l.a,{value:"javascript",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"await client.events.book('eventKey', ['A-3', 'A-5', 'A-7']);\n")))),Object(r.b)("h2",{id:"when-should-i-book"},"When should I book?"),Object(r.b)("p",null,'The answer is simple and complex at the same time: "whenever is appropriate in your sales flow". '),Object(r.b)("p",null,"For example, you could call the seats.io API to book seats right before you collect their payment. Or you could pre-book some seats for VIPs before you even open up ticket sales."),Object(r.b)("p",null,"For a more in-depth discussion on this topic, check ",Object(r.b)("a",{parentName:"p",href:"http://support.seats.io/integrating-seats-io/when-should-i-book-my-seats"},"this page"),". "),Object(r.b)("h2",{id:"live-updates"},"Live updates"),Object(r.b)("p",null,"Whenever you change availability for a seat, we will push out this change to everyone who has the floor plan for your event open in their browser, in near real-time."),Object(r.b)("p",null,"In other words: you can look at the seats on a floor plan as a collection of on/off switches, controllable via the REST API. You decide when you switch seats on and off, and by doing so, everyone who is looking at the floor plan will see the availability changes happening live."),Object(r.b)("h2",{id:"custom-statuses"},"Custom statuses"),Object(r.b)("p",null,"There's more than just 'booking' a seat. You can use your own statuses (i.e. other than ",Object(r.b)("em",{parentName:"p"},"BOOKED"),") as well, read more ",Object(r.b)("a",{parentName:"p",href:"api-custom-object-status"},"here"),"."),Object(r.b)("h2",{id:"temporarily-holding-seats"},"Temporarily holding seats"),Object(r.b)("p",null,"It's possible to hold seats for a little while, until the ticket buyer finishes up their purchase. Check ",Object(r.b)("a",{parentName:"p",href:"api-temporarily-hold-objects"},"this page")," for more information on how to do this."))}p.isMDXComponent=!0},353:function(e,t,a){"use strict";function n(e){var t,a,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(o&&(o+=" "),o+=a);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,a=0,o="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}},354:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return h}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),b=u(a),d=n,h=b["".concat(s,".").concat(d)]||b[d]||p[d]||r;return a?o.a.createElement(h,l(l({ref:t},c),{},{components:a})):o.a.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var c=2;c<r;c++)s[c]=a[c];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},355:function(e,t,a){"use strict";var n=a(0),o=a(356);t.a=function(){var e=Object(n.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},356:function(e,t,a){"use strict";var n=a(0),o=Object(n.createContext)(void 0);t.a=o},357:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(355),s=a(353),l=a(53),i=a.n(l),c=37,u=39;t.a=function(e){var t=e.lazy,a=e.block,l=e.defaultValue,b=e.values,p=e.groupId,d=e.className,h=Object(r.a)(),f=h.tabGroupChoices,m=h.setTabGroupChoices,v=Object(n.useState)(l),y=v[0],O=v[1],j=n.Children.toArray(e.children);if(null!=p){var g=f[p];null!=g&&g!==y&&b.some((function(e){return e.value===g}))&&O(g)}var k=function(e){O(e),null!=p&&m(p,e)},w=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":a},d)},b.map((function(e){var t=e.value,a=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(s.a)("tabs__item",i.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case u:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return k(t)},onClick:function(){k(t)}},a)}))),t?Object(n.cloneElement)(j.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},358:function(e,t,a){"use strict";var n=a(0),o=a.n(n);t.a=function(e){var t=e.children,a=e.hidden,n=e.className;return o.a.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}}}]);