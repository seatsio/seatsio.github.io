---
title: "chart.startNewSession()"
slug: "/chartstartnewsession"
hidden: false
createdAt: "2019-05-08T12:37:59.548Z"
updatedAt: "2019-08-14T18:00:41.133Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Previously selected objects become unselected, a fresh hold token is generated, and the seating chart is re-initialized.

This method takes two optional callback parameters: one for success, one for failure. 
```javascript
let chart = new seatsio.SeatingChart({...}).render();

// Sometime after rendering or triggered elsewhere in your application...

chart.startNewSession(successCallback, failureCallback);
```

:::caution Call this method after rendering
Rendering can take a few seconds. If you want to call this method immediately after rendering, do so by passing a callback to the [onChartRendered](/docs/renderer-events-onchartrendered) config, and calling this method from there.
:::