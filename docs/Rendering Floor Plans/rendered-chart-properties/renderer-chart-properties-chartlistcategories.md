---
title: "chart.listCategories()"
slug: "/renderer-chart-properties-chartlistcategories"
hidden: false
createdAt: "2018-08-24T09:35:48.476Z"
updatedAt: "2019-12-10T12:43:03.456Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**type**: function(callback)

```javascript
chart.listCategories(categories => { ... })
```

Asynchronously fetches the chart categories. Useful to build a custom chart legend.

listCategories takes a callback function, which receives an array of categories. For example:

```javascript
[
  {'accessible': false, 'color': '#E9B64D', 'key': 2, 'label': 'Ground Floor', 'pricing': {'price': 30, 'formattedPrice': '30€'}},
  {'accessible': true, 'color': '#E8B64E', 'key': 3, 'label': 'Balcony', 'pricing': {'price': 40, 'formattedPrice': '40€'}}
]
```
