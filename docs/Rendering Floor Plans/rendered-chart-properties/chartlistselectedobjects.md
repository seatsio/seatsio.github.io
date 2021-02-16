---
title: "chart.listSelectedObjects()"
slug: "chartlistselectedobjects"
hidden: false
createdAt: "2018-10-24T11:28:22.522Z"
updatedAt: "2018-10-24T11:46:56.482Z"
---
**type**: function(selectedObjectsCallback)

```javascript
chart.listSelectedObjects(callback)
```

Asynchronously lists all selected objects with their properties. The provided callback is invoked on each selected object. 

```javascript
chart.listSelectedObjects(selectedObject =&gt; console.log(selectedObject.label));
```

The objects passed to the callback contain many useful properties, such as: 

* the object&#39;s category 
* optional extraData
* the object&#39;s label (e.g. &quot;A-1&quot;)
* a breakdown of the object&#39;s label components: `{own: &quot;1&quot;, parent: &quot;A&quot;, section: null, displayedLabel: &quot;A-1&quot;}`
* an isOrphan flag
* the objectType (e.g. &quot;Seat&quot;)
* the object&#39;s status (e.g. &quot;booked&quot;)
