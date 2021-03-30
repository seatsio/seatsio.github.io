---
title: "chart.findObject()"
slug: "/renderer/chart-properties-chartfindobject"
hidden: false
createdAt: "2018-08-24T09:34:58.262Z"
updatedAt: "2019-12-10T12:43:03.455Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Type**: function(label)  
**Returns**: Promise&lt;Object&gt;

Asynchronously finds an object on the chart. If the object was found, the promise resolves to the object. Otherwise, the promise gets rejected.

```javascript
const object = await chart.findObject(label)
console.log(object.label)
```
