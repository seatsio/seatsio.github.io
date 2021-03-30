---
title: "chart.selectCategories()"
slug: "/renderer/chart-properties-chartselectcategories"
hidden: false
createdAt: "2018-08-24T09:32:53.024Z"
updatedAt: "2019-11-19T08:53:34.386Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Type**: function(categoryIds)  
**Returns**: Promise&lt;void&gt;

Selects all the objects in the categories. The parameter must be an array of strings, and the strings must be valid category IDs.

```javascript
chart.selectCategories(['1', '2']);
```

Note that the promise does not resolve to an array of selected objects. Use [onObjectSelected](/docs/renderer/events-onobjectselected) for that.
