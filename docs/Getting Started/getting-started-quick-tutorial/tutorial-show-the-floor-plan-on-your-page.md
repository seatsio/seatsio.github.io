---
title: "4. Show the floor plan on your page"
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
        event: 'your event key',
        session: 'continue',
        pricing: [
           {'category': 1, 'price': 30}, 
           {'category': 2, 'price': 40}, 
           {'category': 3, 'price': 50}
        ],
        priceFormatter: function(price) {
            return '$' + price;
        }
    }).render();
</script>
```

[`workspaceKey`](/docs/renderer/config-workspacekey) is the public workspace key, which you can find at https://app.seats.io/workspace-settings

[`event`](/docs/renderer/config-event) is the key of the event you created

The [`session`](/docs/renderer/config-session) parameter is optional, but most likely you'll want to pass it in. It enables
'hold-on-select': when a user clicks on a seat, that seat immediately becomes unavailable to other users.

This is only temporary: if you don't book the seat within 15 minutes, it gets released again.

Seats.io doesn't store pricing information. So you need to pass in prices when you show the chart to the ticket buyer.
Use a combination of the [`pricing`](/docs/renderer/config-pricing) and [`priceFormatter`](/docs/renderer/config-priceformatter) parameters for that.

:::info 
If you're using React, the easiest way to show a seating chart is to use our React wrapper: https://github.com/seatsio/seatsio-react

There's an AngularJS wrapper as well: https://github.com/seatsio/seatsio-angular
:::

