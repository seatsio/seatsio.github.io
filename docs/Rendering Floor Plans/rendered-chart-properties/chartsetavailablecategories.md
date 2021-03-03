---
title: "chart.setAvailableCategories()"
slug: "/renderer/chartsetavailablecategories"
hidden: false
createdAt: "2019-03-05T18:00:08.078Z"
updatedAt: "2020-03-19T09:54:36.776Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


:::danger 
**Deprecated.** See [changeConfig](/docs/renderer/chart-properties-chartchangeconfig) instead.
:::

**Type**: function(labelsOrIds)  
Makes the specified categories available for selection, while making all others unavailable from selection. The parameter `labelsOrIds` must be an array of strings, which are the label or ID of the target categories to disable.

```javascript
chart.setAvailableCategories(['Stalls', 'Choir']);
chart.setAvailableCategories([1, 2]);
```

The code above makes the Stalls (id: 1) and Choir (id: 2) categories available for selection, while making all others unavailable.



:::caution Warning
Calling this method will deselect any object whose category was made unavailable.
:::

