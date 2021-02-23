---
title: "Usage details for event in month"
slug: "api-usage-report-event-month"
hidden: false
createdAt: "2019-05-28T14:02:20.780Z"
updatedAt: "2019-06-04T14:17:41.026Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Report with used seats for an event in a month.

```
GET /reports/usage/month/{month}/event/{eventId}
```

E.g. `/reports/usage/month/2018-09/event/32429`
```json
[
  {
    "object": "A-1",
    "numFirstBookings": 1,
    "firstBookingDate": "2018-09-13T00:16:43.176Z",
    "numFirstSelections": 0,
    "numFirstBookingsOrSelections": 1
  },
  {
    "object": "A-2",
    "numFirstBookings": 0,
    "firstBookingDate": "2018-09-13T00:16:43.176Z",
    "numFirstSelections": 1,
    "numFirstBookingsOrSelections": 1
  },
  {
    "object": "Standing",
    "numFirstBookings": 34,
    "numFirstSelections": 56,
    "numFirstBookingsOrSelections": 56
  }
]
```
