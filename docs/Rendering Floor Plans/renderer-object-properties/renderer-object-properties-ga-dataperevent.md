---
title: "ga.dataPerEvent"
slug: "/renderer-object-properties-ga-dataperevent"
hidden: false
createdAt: "2019-05-03T11:18:42.927Z"
updatedAt: "2019-05-03T11:22:10.380Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Type**: object  
The status for a GA area, per event. Useful when you pass in multiple events when rendering a chart.

```json
{
  dataPerEvent: {
    eventKey1: {
      status: 'booked',
      numBooked: 5,
      holds: {
        'tokenHash1': { NO_TICKET_TYPE: 4 }
      }
    },
    eventKey2: {
      status: 'free',
      numBooked: 1,
      holds: {}
    }
  }
}
```

