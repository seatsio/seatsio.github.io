---
title: "object.dataPerEvent"
slug: "/renderer/object-properties-object-dataperevent"
hidden: false
createdAt: "2019-05-03T11:20:23.549Z"
updatedAt: "2019-08-08T08:55:10.467Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Type**: object  
The status and extra data for an object, per event. Useful when you pass in multiple events when rendering a chart.

For GA areas, have a look at [this page](/docs/renderer/object-properties-ga-dataperevent).

```json
{
  dataPerEvent: {
    eventKey1: {
      status: 'booked',
      extraData: { name: 'John Doe' }
    },
    eventKey2: {
      status: 'free'
    }
  }
}
```

