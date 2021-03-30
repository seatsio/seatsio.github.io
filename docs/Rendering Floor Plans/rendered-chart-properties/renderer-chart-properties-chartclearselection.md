---
title: "chart.clearSelection()"
slug: "/renderer/chart-properties-chartclearselection"
hidden: false
createdAt: "2018-08-24T09:30:21.160Z"
updatedAt: "2019-12-10T12:48:43.766Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Type**: function()  
**Returns**: Promise&lt;void&gt;

Deselects the currently selected objects.

The promise resolves when the selection was successfully cleared. This means that the objects are not selected anymore, and that they have been released if they were temporarily held.

It gets rejected when releasing the held seats fails (e.g. due to a network issue).

```javascript
try {
  await chart.clearSelection();
} catch {
    // whoops ... something went wrong
}
```
