---
title: "chart.selectedObjects"
slug: "renderer-chart-properties-chartselectedobjects"
hidden: false
createdAt: "2018-08-24T08:33:05.662Z"
updatedAt: "2018-08-24T08:34:28.143Z"
---
**type**: array&lt;string&gt;
Array containing the labels of the objects the user has selected.
```javascript
var chart = new seatsio.SeatingChart({...}).render();
// ... user selects objects ...
console.log(chart.selectedObjects);

```
