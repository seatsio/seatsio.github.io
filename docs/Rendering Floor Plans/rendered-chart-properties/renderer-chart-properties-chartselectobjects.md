---
title: "chart.selectObjects()"
slug: "renderer-chart-properties-chartselectobjects"
hidden: false
createdAt: "2018-08-24T09:31:33.192Z"
updatedAt: "2021-01-06T14:09:33.649Z"
---
**type**: function(objects, successCallback, failedCallback)
Selects matched objects. The parameter `objects` must be an array of strings or an array of objects.

```javascript
chart.selectObjects([&#39;A-1&#39;, &#39;A-2&#39;]);
chart.selectObjects([&#39;A-1&#39;, &#39;A-2&#39;], () =&gt; console.log(&#39;selection successful&#39;));
chart.selectObjects([{id: &#39;A-1&#39;, ticketType: &#39;adult&#39;}]);
chart.selectObjects([&#39;General Admission 1&#39;, &#39;General Admission 1&#39;]);
chart.selectObjects([{id: &#39;General Admission 1&#39;, ticketType: &#39;adult&#39;, amount: 3}]);
```

If a String is provided, the objects that match the provided IDs will be selected.

If an array of objects is passed, these objects should have the following structure:

```javascript
{
    id: String, (required)
    ticketType: String (optional)
    amount: Number (optional)
}
```
