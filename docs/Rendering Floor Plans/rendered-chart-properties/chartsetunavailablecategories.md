---
title: "chart.setUnavailableCategories()"
slug: "/renderer/chartsetunavailablecategories"
hidden: false
createdAt: "2019-03-05T17:58:49.193Z"
updatedAt: "2019-08-16T06:25:28.713Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


:::danger 
**Deprecated.** See [changeConfig](/docs/renderer/chart-properties-chartchangeconfig) instead.
:::

**Type**: function(labelsOrIds)  
Makes the specified categories unavailable from selection. The parameter `labelsOrIds` must be an array of strings, which are the label or ID of the target categories to disable.

```javascript
chart.setUnavailableCategories(['Stalls', 'Choir']);
chart.setUnavailableCategories([1, 2]);
```

The code above makes the Stalls (id: 1) and Choir (id: 2) categories unavailable for selection, while all other categories become available.

:::caution Warning
Calling this method will clear the current selection.
:::

