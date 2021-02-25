(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{176:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return o})),t.d(a,"metadata",(function(){return s})),t.d(a,"toc",(function(){return p})),t.d(a,"default",(function(){return y}));var n=t(3),r=t(7),l=(t(0),t(354)),b=t(357),c=t(358),o={title:"Chart Reports",slug:"/chart-reports",hidden:!1,createdAt:"2018-10-02T14:51:28.856Z",updatedAt:"2020-12-11T12:27:53.494Z"},s={unversionedId:"REST API/chart-reports",id:"REST API/chart-reports",isDocsHomePage:!1,title:"Chart Reports",description:"The chart report endpoints all give you access to the data about a seating chart.",source:"@site/docs/REST API/chart-reports.md",slug:"/chart-reports",permalink:"/docs/chart-reports",version:"current",sidebar:"docs",previous:{title:"Assign objects to channels",permalink:"/docs/assign-objects-to-channels"},next:{title:"Event Reports",permalink:"/docs/api-event-reports"}},p=[{value:"byLabel",id:"bylabel",children:[]},{value:"A note on tables",id:"a-note-on-tables",children:[]},{value:"byCategoryKey",id:"bycategorykey",children:[]},{value:"byCategoryLabel",id:"bycategorylabel",children:[]}],i={toc:p};function y(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},i,t,{components:a,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The ",Object(l.b)("em",{parentName:"p"},"chart report")," endpoints all give you access to the data about a seating chart. "),Object(l.b)("p",null,"You can retrieve each of these reports in different representations, called report types.\nFor example, the ",Object(l.b)("inlineCode",{parentName:"p"},"byLabel")," report will give you an overview of all seats per seat label, whereas the ",Object(l.b)("inlineCode",{parentName:"p"},"byCategoryKey")," report will give you an overview of all different categories present on the seating chart, together with a list of the seats that belong to that category. "),Object(l.b)("p",null,"The following report types are available: ",Object(l.b)("inlineCode",{parentName:"p"},"byLabel"),", ",Object(l.b)("inlineCode",{parentName:"p"},"byCategoryKey")," and ",Object(l.b)("inlineCode",{parentName:"p"},"byCategoryLabel"),". "),Object(l.b)("h2",{id:"bylabel"},"byLabel"),Object(l.b)(b.a,{defaultValue:"shell",values:[{label:"Text",value:"shell"},{label:"PHP",value:"php"},{label:"C#",value:"csharp"},{label:"Java",value:"java"},{label:"Python",value:"python"},{label:"Ruby",value:"ruby"},{label:"Javascript",value:"javascript"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"shell",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"GET https://api.seatsio.net/reports/charts/{chartKey}/byLabel?bookWholeTables=chart\nGET https://api.seatsio.net/reports/charts/{chartKey}/byLabel\nGET https://api.seatsio.net/reports/charts/{chartKey}/byLabel?bookWholeTables=true\nGET https://api.seatsio.net/reports/charts/{chartKey}/byLabel?bookWholeTables=false\n"))),Object(l.b)(c.a,{value:"php",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-php"},'$seatsioClient->chartReports->byLabel("d2aaasb4-e192-454a-9752-e5f1cb479421", "chart");\n$seatsioClient->chartReports->byLabel("d2aaasb4-e192-454a-9752-e5f1cb479421", null);\n$seatsioClient->chartReports->byLabel("d2aaasb4-e192-454a-9752-e5f1cb479421", "true");\n$seatsioClient->chartReports->byLabel("d2aaasb4-e192-454a-9752-e5f1cb479421", "false");\n'))),Object(l.b)(c.a,{value:"csharp",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-csharp"},'Client.ChartReports.ByLabel("d2aaasb4-e192-454a-9752-e5f1cb479421", "chart");\nClient.ChartReports.ByLabel("d2aaasb4-e192-454a-9752-e5f1cb479421", null);\nClient.ChartReports.ByLabel("d2aaasb4-e192-454a-9752-e5f1cb479421", "true");\nClient.ChartReports.ByLabel("d2aaasb4-e192-454a-9752-e5f1cb479421", "false");\n'))),Object(l.b)(c.a,{value:"java",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},'client.chartReports.byLabel("d2aaasb4-e192-454a-9752-e5f1cb479421", "chart");\nclient.chartReports.byLabel("d2aaasb4-e192-454a-9752-e5f1cb479421", null);\nclient.chartReports.byLabel("d2aaasb4-e192-454a-9752-e5f1cb479421", "true");\nclient.chartReports.byLabel("d2aaasb4-e192-454a-9752-e5f1cb479421", "false");\n'))),Object(l.b)(c.a,{value:"python",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-python"},'client.charts.reports.by_label("d2aaasb4-e192-454a-9752-e5f1cb479421", "chart")\nclient.charts.reports.by_label("d2aaasb4-e192-454a-9752-e5f1cb479421", None)\nclient.charts.reports.by_label("d2aaasb4-e192-454a-9752-e5f1cb479421", "true")\nclient.charts.reports.by_label("d2aaasb4-e192-454a-9752-e5f1cb479421", "false")\n\n'))),Object(l.b)(c.a,{value:"ruby",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-ruby"},'client.chart_reports.by_label("d2aaasb4-e192-454a-9752-e5f1cb479421", "chart")\nclient.chart_reports.by_label("d2aaasb4-e192-454a-9752-e5f1cb479421", nil)\nclient.chart_reports.by_label("d2aaasb4-e192-454a-9752-e5f1cb479421", "true")\nclient.chart_reports.by_label("d2aaasb4-e192-454a-9752-e5f1cb479421", "false")\n'))),Object(l.b)(c.a,{value:"javascript",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},"await client.chartReports.byLabel('chartKey', 'chart');\nawait client.chartReports.byLabel('chartKey', undefined);\nawait client.chartReports.byLabel('chartKey', 'true');\nawait client.chartReports.byLabel('chartKey', 'false');\n")))),Object(l.b)("p",null,"Multiple objects could have the same label, that's why they're returned as an array."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"curl https://api.seatsio.net/reports/charts/d2aaasb4-e192-454a-9752-e5f1cb479421/byLabel -u aSecretKey: \n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n    "C-11": [\n        {\n            "label": "Section A-C-11",\n            "labels": {\n                "own": { "label": "11", "type": "seat" },\n                "parent": { "label": "C", "type": "row" },\n                "section: "Section A"\n            },\n            "categoryLabel": "Ground Floor",\n            "categoryKey": "1",\n            "entrance": "Main entrance",\n            "section": "Floor",\n            "objectType": "seat",\n            "leftNeighbour": "Section A-C-10",\n            "rightNeighbour": "Section A-C-12"\n        }\n    ],\n    "C-35": [\n        {\n            "label": "Section A-C-35",\n            "labels": {\n                "own": { "label": "35", "type": "seat" },\n                "parent": { "label": "C", "type": "row" },\n                "section": "Section A"\n            },\n            "categoryLabel": "Balcony",\n            "categoryKey": "5",\n            "objectType": "seat",\n            "leftNeighbour": "Section A-C-34",\n            "rightNeighbour": "Section A-C-36"\n        }\n    ],\n    "C-45": [\n        {\n            "label": "Section A-C-45",\n            "labels": {\n                "own": { "label": "45", "type": "seat" },\n                "parent": { "label": "C", "type": "row" },\n                "section: "Section A"\n            },\n            "categoryLabel": "Balcony",\n            "categoryKey": "2",\n            "objectType": "seat",\n            "leftNeighbour": "Section A-C-46",\n            "rightNeighbour": "Section A-C-44"\n        }\n    ],\n    "GA": [\n        {\n            "label": "GA",\n            "labels": {\n                "own": { "label": "GA", "type": "generalAdmission" }\n            },\n            "categoryLabel": "Standing",\n            "categoryKey": 6,\n            "capacity": 100,\n            "objectType": "generalAdmission"\n        }\n    ]\n}\n')),Object(l.b)("h2",{id:"a-note-on-tables"},"A note on tables"),Object(l.b)("p",null,"If your floor plan contains tables, those are returned as separate objects. You can control this behaviour by passing in an optional ",Object(l.b)("em",{parentName:"p"},"bookWholeTables")," query parameter: "),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"GET https://api.seatsio.net/reports/charts/{chartKey}/byLabel?bookWholeTables=chart\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"with ",Object(l.b)("inlineCode",{parentName:"li"},"bookWholeTables=chart"),", the report respects the table booking settings defined on the chart. If a table is bookable as a whole, the report contains the table (and not the seats). If a table is not bookable as a whole, the report contains the seats (and not the table)."),Object(l.b)("li",{parentName:"ul"},"without the ",Object(l.b)("inlineCode",{parentName:"li"},"bookWholeTables")," query param, both seats at tables, and the tables themselves will be returned in the response"),Object(l.b)("li",{parentName:"ul"},"with ",Object(l.b)("inlineCode",{parentName:"li"},"bookWholeTables=true"),", the response will only contain the tables, and not the seats. "),Object(l.b)("li",{parentName:"ul"},"with ",Object(l.b)("inlineCode",{parentName:"li"},"bookWholeTables=false"),", the response will only contain the seats at the tables, and not the tables.")),Object(l.b)("h2",{id:"bycategorykey"},"byCategoryKey"),Object(l.b)(b.a,{defaultValue:"shell",values:[{label:"Text",value:"shell"},{label:"PHP",value:"php"},{label:"C#",value:"csharp"},{label:"Java",value:"java"},{label:"Python",value:"python"},{label:"Ruby",value:"ruby"},{label:"Javascript",value:"javascript"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"shell",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"GET https://api.seatsio.net/reports/charts/{chartKey}/byCategoryKey?bookWholeTables=chart\nGET https://api.seatsio.net/reports/charts/{chartKey}/byCategoryKey\nGET https://api.seatsio.net/reports/charts/{chartKey}/byCategoryKey?bookWholeTables=true\nGET https://api.seatsio.net/reports/charts/{chartKey}/byCategoryKey?bookWholeTables=false\n"))),Object(l.b)(c.a,{value:"php",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-php"},'$seatsioClient->chartReports->byCategoryKey("d2aaasb4-e192-454a-9752-e5f1cb479421", "chart");\n$seatsioClient->chartReports->byCategoryKey("d2aaasb4-e192-454a-9752-e5f1cb479421", null);\n$seatsioClient->chartReports->byCategoryKey("d2aaasb4-e192-454a-9752-e5f1cb479421", "true");\n$seatsioClient->chartReports->byCategoryKey("d2aaasb4-e192-454a-9752-e5f1cb479421", "false");\n'))),Object(l.b)(c.a,{value:"csharp",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-csharp"},'Client.ChartReports.ByCategoryKey("d2aaasb4-e192-454a-9752-e5f1cb479421", "chart");\nClient.ChartReports.ByCategoryKey("d2aaasb4-e192-454a-9752-e5f1cb479421", null);\nClient.ChartReports.ByCategoryKey("d2aaasb4-e192-454a-9752-e5f1cb479421", "true");\nClient.ChartReports.ByCategoryKey("d2aaasb4-e192-454a-9752-e5f1cb479421", "false");\n'))),Object(l.b)(c.a,{value:"java",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},'client.chartReports.byCategoryKey("d2aaasb4-e192-454a-9752-e5f1cb479421", "chart");\nclient.chartReports.byCategoryKey("d2aaasb4-e192-454a-9752-e5f1cb479421", null);\nclient.chartReports.byCategoryKey("d2aaasb4-e192-454a-9752-e5f1cb479421", "true");\nclient.chartReports.byCategoryKey("d2aaasb4-e192-454a-9752-e5f1cb479421", "false");\n'))),Object(l.b)(c.a,{value:"python",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-python"},'client.charts.reports.by_category_key("d2aaasb4-e192-454a-9752-e5f1cb479421", "chart")\nclient.charts.reports.by_category_key("d2aaasb4-e192-454a-9752-e5f1cb479421", None)\nclient.charts.reports.by_category_key("d2aaasb4-e192-454a-9752-e5f1cb479421", "true")\nclient.charts.reports.by_category_key("d2aaasb4-e192-454a-9752-e5f1cb479421", "false")\n\n'))),Object(l.b)(c.a,{value:"ruby",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-ruby"},'client.chart_reports.by_category_key("d2aaasb4-e192-454a-9752-e5f1cb479421", "chart")\nclient.chart_reports.by_category_key("d2aaasb4-e192-454a-9752-e5f1cb479421", nil)\nclient.chart_reports.by_category_key("d2aaasb4-e192-454a-9752-e5f1cb479421", "true")\nclient.chart_reports.by_category_key("d2aaasb4-e192-454a-9752-e5f1cb479421", "false")\n'))),Object(l.b)(c.a,{value:"javascript",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},"await client.chartReports.byCategoryKey('chartKey', 'chart');\nawait client.chartReports.byCategoryKey('chartKey', undefined);\nawait client.chartReports.byCategoryKey('chartKey', 'true');\nawait client.chartReports.byCategoryKey('chartKey', 'false');\n")))),Object(l.b)("p",null,"The response is a JSON object where all the keys are category keys, and the values an array of objects that represent the seats belonging to that category. "),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "8": [\n    {\n      "label": "3-A-1",\n      "labels": {\n        "parent": {\n          "label": "A",\n          "type": "row"\n        },\n        "own": {\n          "label": "1",\n          "type": "seat"\n        },\n        "section": "3"\n      },\n      "objectType": "seat",\n      "categoryKey": "8",\n      "categoryLabel": "VIP",\n      "section": "3"\n    },\n    {\n      "label": "3-A-2",\n      "labels": {\n        "parent": {\n          "label": "A",\n          "type": "row"\n        },\n        "own": {\n          "label": "2",\n          "type": "seat"\n        },\n        "section": "3"\n      },\n      "objectType": "seat",\n      "categoryKey": "8",\n      "categoryLabel": "VIP",\n      "section": "3"\n    }\n  ],\n  "9": [\n    {\n      "label": "201-A-1",\n      "labels": {\n        "parent": {\n          "label": "A",\n          "type": "row"\n        },\n        "own": {\n          "label": "1",\n          "type": "seat"\n        },\n        "section": "201"\n      },\n      "objectType": "seat",\n      "categoryKey": "9",\n      "categoryLabel": "regular",\n      "section": "201"\n    },\n    ...\n  ]\n}\n\n')),Object(l.b)("h2",{id:"bycategorylabel"},"byCategoryLabel"),Object(l.b)(b.a,{defaultValue:"shell",values:[{label:"Text",value:"shell"},{label:"PHP",value:"php"},{label:"C#",value:"csharp"},{label:"Java",value:"java"},{label:"Python",value:"python"},{label:"Ruby",value:"ruby"},{label:"Javascript",value:"javascript"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"shell",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"GET https://api.seatsio.net/reports/charts/{chartKey}/byCategoryLabel?bookWholeTables=chart\nGET https://api.seatsio.net/reports/charts/{chartKey}/byCategoryLabel\nGET https://api.seatsio.net/reports/charts/{chartKey}/byCategoryLabel?bookWholeTables=true\nGET https://api.seatsio.net/reports/charts/{chartKey}/byCategoryLabel?bookWholeTables=false\n"))),Object(l.b)(c.a,{value:"php",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-php"},'$seatsioClient->chartReports->byCategoryLabel("d2aaasb4-e192-454a-9752-e5f1cb479421", "chart");\n$seatsioClient->chartReports->byCategoryLabel("d2aaasb4-e192-454a-9752-e5f1cb479421", null);\n$seatsioClient->chartReports->byCategoryLabel("d2aaasb4-e192-454a-9752-e5f1cb479421", "true");\n$seatsioClient->chartReports->byCategoryLabel("d2aaasb4-e192-454a-9752-e5f1cb479421", "false");\n'))),Object(l.b)(c.a,{value:"csharp",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-csharp"},'Client.ChartReports.ByCategoryLabel("d2aaasb4-e192-454a-9752-e5f1cb479421", "chart");\nClient.ChartReports.ByCategoryLabel("d2aaasb4-e192-454a-9752-e5f1cb479421", null);\nClient.ChartReports.ByCategoryLabel("d2aaasb4-e192-454a-9752-e5f1cb479421", "true");\nClient.ChartReports.ByCategoryLabel("d2aaasb4-e192-454a-9752-e5f1cb479421", "false");\n'))),Object(l.b)(c.a,{value:"java",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},'client.chartReports.byCategoryLabel("d2aaasb4-e192-454a-9752-e5f1cb479421", "chart");\nclient.chartReports.byCategoryLabel("d2aaasb4-e192-454a-9752-e5f1cb479421", null);\nclient.chartReports.byCategoryLabel("d2aaasb4-e192-454a-9752-e5f1cb479421", "true");\nclient.chartReports.byCategoryLabel("d2aaasb4-e192-454a-9752-e5f1cb479421", "false");\n'))),Object(l.b)(c.a,{value:"python",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-python"},'client.charts.reports.by_category_label("d2aaasb4-e192-454a-9752-e5f1cb479421", "chart")\nclient.charts.reports.by_category_label("d2aaasb4-e192-454a-9752-e5f1cb479421", None)\nclient.charts.reports.by_category_label("d2aaasb4-e192-454a-9752-e5f1cb479421", "true")\nclient.charts.reports.by_category_label("d2aaasb4-e192-454a-9752-e5f1cb479421", "false")\n\n'))),Object(l.b)(c.a,{value:"ruby",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-ruby"},'client.chart_reports.by_category_label("d2aaasb4-e192-454a-9752-e5f1cb479421", "chart")\nclient.chart_reports.by_category_label("d2aaasb4-e192-454a-9752-e5f1cb479421", nil)\nclient.chart_reports.by_category_label("d2aaasb4-e192-454a-9752-e5f1cb479421", "true")\nclient.chart_reports.by_category_label("d2aaasb4-e192-454a-9752-e5f1cb479421", "false")\n'))),Object(l.b)(c.a,{value:"javascript",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},"await client.chartReports.byCategoryLabel('chartKey', 'chart');\nawait client.chartReports.byCategoryLabel('chartKey', undefined);\nawait client.chartReports.byCategoryLabel('chartKey', 'true');\nawait client.chartReports.byCategoryLabel('chartKey', 'false');\n")))),Object(l.b)("p",null,"The response has the same structure as the ",Object(l.b)("inlineCode",{parentName:"p"},"byCategoryKey")," endpoint, but JSON object's keys are category labels in this case: "),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "Golden Circle": [\n    {\n      "label": "3-A-1",\n      "labels": {\n        "parent": {\n          "label": "A",\n          "type": "row"\n        },\n        "own": {\n          "label": "1",\n          "type": "seat"\n        },\n        "section": "3"\n      },\n      "objectType": "seat",\n      "categoryKey": "8",\n      "categoryLabel": "VIP",\n      "section": "3"\n    },\n    {\n      "label": "3-A-2",\n      "labels": {\n        "parent": {\n          "label": "A",\n          "type": "row"\n        },\n        "own": {\n          "label": "2",\n          "type": "seat"\n        },\n        "section": "3"\n      },\n      "objectType": "seat",\n      "categoryKey": "8",\n      "categoryLabel": "VIP",\n      "section": "3"\n    }\n  ],\n  "Balcony": [\n    {\n      "label": "201-A-1",\n      "labels": {\n        "parent": {\n          "label": "A",\n          "type": "row"\n        },\n        "own": {\n          "label": "1",\n          "type": "seat"\n        },\n        "section": "201"\n      },\n      "objectType": "seat",\n      "categoryKey": "9",\n      "categoryLabel": "regular",\n      "section": "201"\n    },\n    ...\n  ]\n}\n\n')))}y.isMDXComponent=!0},353:function(e,a,t){"use strict";function n(e){var a,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=n(e[a]))&&(r&&(r+=" "),r+=t);else for(a in e)e[a]&&(r&&(r+=" "),r+=a);return r}a.a=function(){for(var e,a,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(a=n(e))&&(r&&(r+=" "),r+=a);return r}},354:function(e,a,t){"use strict";t.d(a,"a",(function(){return i})),t.d(a,"b",(function(){return h}));var n=t(0),r=t.n(n);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function b(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?b(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),p=function(e){var a=r.a.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},i=function(e){var a=p(e.components);return r.a.createElement(s.Provider,{value:a},e.children)},y={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},u=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),i=p(t),u=n,h=i["".concat(b,".").concat(u)]||i[u]||y[u]||l;return t?r.a.createElement(h,c(c({ref:a},s),{},{components:t})):r.a.createElement(h,c({ref:a},s))}));function h(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,b=new Array(l);b[0]=u;var c={};for(var o in a)hasOwnProperty.call(a,o)&&(c[o]=a[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var s=2;s<l;s++)b[s]=t[s];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},355:function(e,a,t){"use strict";var n=t(0),r=t(356);a.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},356:function(e,a,t){"use strict";var n=t(0),r=Object(n.createContext)(void 0);a.a=r},357:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(355),b=t(353),c=t(54),o=t.n(c),s=37,p=39;a.a=function(e){var a=e.lazy,t=e.block,c=e.defaultValue,i=e.values,y=e.groupId,u=e.className,h=Object(l.a)(),d=h.tabGroupChoices,g=h.setTabGroupChoices,f=Object(n.useState)(c),m=f[0],j=f[1],O=n.Children.toArray(e.children);if(null!=y){var v=d[y];null!=v&&v!==m&&i.some((function(e){return e.value===v}))&&j(v)}var C=function(e){j(e),null!=y&&g(y,e)},T=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(b.a)("tabs",{"tabs--block":t},u)},i.map((function(e){var a=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":m===a,className:Object(b.a)("tabs__item",o.a.tabItem,{"tabs__item--active":m===a}),key:a,ref:function(e){return T.push(e)},onKeyDown:function(e){!function(e,a,t){switch(t.keyCode){case p:!function(e,a){var t=e.indexOf(a)+1;e[t]?e[t].focus():e[0].focus()}(e,a);break;case s:!function(e,a){var t=e.indexOf(a)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,a)}}(T,e.target,e)},onFocus:function(){return C(a)},onClick:function(){C(a)}},t)}))),a?Object(n.cloneElement)(O.filter((function(e){return e.props.value===m}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,a){return Object(n.cloneElement)(e,{key:a,hidden:e.props.value!==m})}))))}},358:function(e,a,t){"use strict";var n=t(0),r=t.n(n);a.a=function(e){var a=e.children,t=e.hidden,n=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:t,className:n},a)}}}]);