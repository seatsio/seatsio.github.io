---
title: "onChartRenderingFailed"
slug: "renderer-events-onchartrenderingfailed"
hidden: false
createdAt: "2018-08-03T13:33:19.814Z"
updatedAt: "2018-08-03T13:43:59.856Z"
---
**Type**: function(chart)

Fired when there&#39;s an error when rendering the chart.

The chart object is passed in as a parameter, to allow you to destroy the chart if needed, like so: 

```javascript
onChartRenderingFailed: function(chart) {
  chart.destroy();
}
```
