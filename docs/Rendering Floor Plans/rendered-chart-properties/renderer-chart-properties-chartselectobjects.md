---
title: "chart.selectObjects()"
slug: "/renderer-chart-properties-chartselectobjects"
hidden: false
createdAt: "2018-08-24T09:31:33.192Z"
updatedAt: "2021-01-06T14:09:33.649Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**type**: function(objects, successCallback, failedCallback)
Selects matched objects. The parameter `objects` must be an array of strings or an array of objects.

```javascript
chart.selectObjects(['A-1', 'A-2']);
chart.selectObjects(['A-1', 'A-2'], () => console.log('selection successful'));
chart.selectObjects([{id: 'A-1', ticketType: 'adult'}]);
chart.selectObjects(['General Admission 1', 'General Admission 1']);
chart.selectObjects([{id: 'General Admission 1', ticketType: 'adult', amount: 3}]);
```

If a String is provided, the objects that match the provided IDs will be selected.

If an array of objects is passed, these objects should have the following structure:

```javascript
{
    id: String, (required)
    ticketType: String (optional)
    amount: Number (optional)
}
```
