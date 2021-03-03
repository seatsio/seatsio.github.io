---
title: "chart.setFilteredCategories()"
slug: "/renderer/chartsetfilteredcategories"
hidden: false
createdAt: "2019-04-08T23:45:13.309Z"
updatedAt: "2019-08-16T06:25:57.524Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


:::danger 
**Deprecated.** See [changeConfig](/docs/renderer/chart-properties-chartchangeconfig) instead.
:::

**Type**: function(labelsOrIds)  
Leaves the specified categories normally visible, while making all others dimmed out. The parameter `labelsOrIds` must be an array of strings, which are the label or ID of the target categories to leave fully visible.

```javascript
chart.setFilteredCategories(['Stalls', 'Choir']);
chart.setFilteredCategories([1, 2]);
```

The code above makes the Stalls (id: 1) and Choir (id: 2) categories fully visible, while dimming out all others.

:::info Notice
This does not make any categories available or unavailable from selection, and it's meant to be used as a visual filter/aid only.
:::

