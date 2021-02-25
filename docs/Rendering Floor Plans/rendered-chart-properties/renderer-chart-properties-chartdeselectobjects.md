---
title: "chart.deselectObjects()"
slug: "/renderer-chart-properties-chartdeselectobjects"
hidden: false
createdAt: "2018-08-24T09:31:56.731Z"
updatedAt: "2019-12-10T12:51:52.799Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**type**: function(objects, successCallback, failedCallback)

Deselects matched objects. The parameter `objects` must be an array of strings or an array of objects.

```javascript
chart.deselectObjects(['A-1', 'A-2']);
chart.deselectObjects(['A-1', 'A-2'], () => console.log('deselection succesful'));
chart.deselectObjects([{id: 'General Admission', ticketType: 'adult'}]);
chart.deselectObjects([{id: 'General Admission', amount: 2}]);
```

If an array of string is passed, the objects that match the provided IDs will be deselected.

If an array of objects is passed, these objects should have the following structure:

```javascript
{
    id: String, (required)
    ticketType: String (optional)
    amount: Number (optional)
}
```

:::info Held objects will be released
If the objects were temporarily held, `deselectObjects()` releases them again.
:::

