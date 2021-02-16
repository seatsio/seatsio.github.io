---
title: "Rendered Chart Properties"
slug: "rendered-chart-properties"
hidden: false
createdAt: "2018-08-24T08:28:11.933Z"
updatedAt: "2018-08-24T08:42:22.408Z"
---
`new seatsio.SeatingChart({...}).render();` returns a seating chart object with some properties you can access for use in your application. 

```javascript
var chart = new seatsio.SeatingChart({...}).render();
console.log(chart);
```

If the property is a javascript function, you can invoke these functions in two ways:

* **directly on the seatsio.SeatingChart object you created**. This is recommended if you want to invoke one of these functions to react to a user action.
```javascript
var chart = new seatsio.SeatingChart({...}).render();
$('#myButton').on('click', function(){
   chart.selectBestAvailable({'number': 2});
});
```
* or **on the object that&#39;s passed to the `onChartRendered` callback**, which you can provide in your chart config. This is the way to go when you want to invoke one of these functions right after the floor plan was fully loaded, and without any user action.
```javascript
new seatsio.SeatingChart({
    ...,
    onChartRendered: function(chart) {
        chart.selectBestAvailable({'number': 2});
    },
    ...
}).render();
```

[block:callout]
{
  &quot;type&quot;: &quot;warning&quot;,
  &quot;title&quot;: &quot;Tip&quot;,
  &quot;body&quot;: &quot;These functions will only work **after** a chart is **fully** rendered. That means this won&#39;t work: \n\n```javascript\nvar chart = new seatsio.SeatingChart({...}).render();\nchart.selectBestAvailable({&#39;number&#39;: 2}); // WON&#39;T WORK\n```\n\nThat&#39;s because the `render()` method may still be doing a number of async operations in the background.&quot;
}
[/block]
