---
title: "chart.listSelectedObjects()"
slug: "/renderer/chartlistselectedobjects"
hidden: false
createdAt: "2018-10-24T11:28:22.522Z"
updatedAt: "2018-10-24T11:46:56.482Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Type**: function()  
**Returns**: Promise&lt;Object[]&gt;

Asynchronously lists all selected objects with their properties. The promise gets resolved to an array of selected objects. 

```javascript
const selectedObjects = await chart.listSelectedObjects()
```

The objects contain many useful properties, such as: 

* the object's category 
* optional extraData
* the object's label (e.g. "A-1")
* a breakdown of the object's label components: `{own: "1", parent: "A", section: null, displayedLabel: "A-1"}`
* an isOrphan flag
* the objectType (e.g. "Seat")
* the object's status (e.g. "booked")
