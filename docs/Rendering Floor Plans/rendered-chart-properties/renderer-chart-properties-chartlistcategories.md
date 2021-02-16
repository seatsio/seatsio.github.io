---
title: "chart.listCategories()"
slug: "renderer-chart-properties-chartlistcategories"
hidden: false
createdAt: "2018-08-24T09:35:48.476Z"
updatedAt: "2019-12-10T12:43:03.456Z"
---
**type**: function(callback)

```javascript
chart.listCategories(categories =&gt; { ... })
```

Asynchronously fetches the chart categories. Useful to build a custom chart legend.

listCategories takes a callback function, which receives an array of categories. For example:

```javascript
[
  {&#39;accessible&#39;: false, &#39;color&#39;: &#39;#E9B64D&#39;, &#39;key&#39;: 2, &#39;label&#39;: &#39;Ground Floor&#39;, &#39;pricing&#39;: {&#39;price&#39;: 30, &#39;formattedPrice&#39;: &#39;30€&#39;}},
  {&#39;accessible&#39;: true, &#39;color&#39;: &#39;#E8B64E&#39;, &#39;key&#39;: 3, &#39;label&#39;: &#39;Balcony&#39;, &#39;pricing&#39;: {&#39;price&#39;: 40, &#39;formattedPrice&#39;: &#39;40€&#39;}}
]
```
