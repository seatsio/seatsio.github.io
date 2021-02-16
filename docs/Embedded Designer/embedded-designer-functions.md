---
title: "Chart designer functions"
slug: "embedded-designer-functions"
hidden: false
createdAt: "2018-08-21T13:04:00.134Z"
updatedAt: "2018-08-21T13:55:33.346Z"
---
These are the functions you can use to interact with an embedded floor plan designer. You can invoke these functions directly on the `seatsio.SeatingChartDesigner` object you created.  



```javascript
var designer = new seatsio.SeatingChartDesigner({...}).render();
$('#myButton').on('click', function(){
   designer.destroy();
});
```
