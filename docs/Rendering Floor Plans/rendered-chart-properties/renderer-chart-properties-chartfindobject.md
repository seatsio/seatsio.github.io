---
title: "chart.findObject()"
slug: "renderer-chart-properties-chartfindobject"
hidden: false
createdAt: "2018-08-24T09:34:58.262Z"
updatedAt: "2019-12-10T12:43:03.455Z"
---
**type**: function(label, successCallback, objectNotFoundCallback)

```javascript
chart.findObject(label, successCallback, objectNotFoundCallback)
```

Asynchronously finds an object on the chart. If the object was found, successCallback is invoked with the object as parameter. Otherwise, objectNotFoundCallback is invoked.

```javascript
chart.findObject(
    &#39;A-35&#39;,
     (object) =&gt; console.log(&quot;found&quot;),
     () =&gt; console.log(&quot;not found&quot;)
);
```
