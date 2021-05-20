---
title: "chart.zoomToFilteredCategories()"
slug: "/renderer/chart-properties-chartzoomtofilteredcategories"
hidden: false
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Type**: function()  
**Returns**: Promise&lt;Object&gt;

Zooms to the currently filtered (i.e. selected) categories. You can filter categories

- by selecting them in the [category filter](/docs/renderer/categoryfilter)
- by passing in `filteredCategories` to [`chart.changeConfig`](/docs/renderer/chart-properties-chartchangeconfig)

```javascript
chart.zoomToFilteredCategories();
```
