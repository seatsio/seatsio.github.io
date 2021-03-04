---
title: "3. Show the floor plan on your page"
slug: "/tutorial/show-the-floor-plan-on-your-page"
hidden: false
createdAt: "2018-08-21T09:12:10.090Z"
updatedAt: "2020-03-03T10:49:37.175Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

You have created a seating chart, and you've created an event for it. Great, you’re ready to show the seating chart to your users.

To do this, you need to: 

1. add an empty div to your page and give it an id. `chart` is an excellent choice.
2. load `chart.js` from our CDN. The URL depends on the region of your account:
   
   - `https://cdn-eu.seatsio.net/chart.js` (Europe) 
   - `https://cdn-na.seatsio.net/chart.js` (North America) 
   - `https://cdn-sa.seatsio.net/chart.js` (South America) 
   - `https://cdn-oc.seatsio.net/chart.js` (Oceania)
   
3. create a new `seatsio.SeatingChart` object, configure it and call its `render()` method

So in short: just copy & paste this code snippet and adapt it to your needs:

```html
<div id="chart"></div>
<script src="https://cdn-{region}.seatsio.net/chart.js"></script>
<script>
    new seatsio.SeatingChart({
        divId: 'chart',
        workspaceKey: 'your workspace key',
        event: 'your event key'
    }).render();
</script>
```



:::info 
If you're using React, the easiest way to show a seating chart is to use our React wrapper: https://www.npmjs.com/package/@seatsio/seatsio-react
:::

