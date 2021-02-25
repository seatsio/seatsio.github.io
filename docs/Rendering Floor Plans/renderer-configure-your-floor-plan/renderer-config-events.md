---
title: "events"
slug: "/renderer-config-events"
hidden: false
createdAt: "2018-08-03T07:40:42.030Z"
updatedAt: "2020-10-27T18:15:12.547Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Type**: array of strings

The key of the events for which you want to render the seating chart.

:::caution Incompatible with channels
Currently the Channels functionality is not supported when using multiple events.
:::

Useful to implement season tickets functionality. If an object is booked for one (or more) events in the list, it will show up as booked for the 'season'.


```javascript
events: ['smallTheatreEvent1', 'smallTheatreEvent2', 'smallTheatreEvent3']
```



:::info Note
Either `events` or `event` must be passed in, but not both.
:::

