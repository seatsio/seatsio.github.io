---
title: "chart.deselectCategories()"
slug: "/renderer/chart-properties-chartdeselectcategories"
hidden: false
createdAt: "2018-08-24T09:33:31.944Z"
updatedAt: "2019-11-19T08:53:42.158Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Type**: function(categoryIds)  
**Returns**: Promise&lt;void&gt;

Deselects all the objects in the categories. The parameter must be an array of strings, and the strings must be valid category IDs.

```javascript
chart.deselectCategories(['1', '2']);
```

Note that the promise does not resolve to an array of deselected objects. Use [onObjectDeselected](/docs/renderer/events-onobjectdeselected) for that.
