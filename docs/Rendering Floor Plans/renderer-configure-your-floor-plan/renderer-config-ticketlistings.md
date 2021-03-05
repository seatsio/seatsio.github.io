---
title: "ticketListings"
slug: "/renderer/config-ticketlistings"
hidden: false
createdAt: "2019-01-04T08:13:18.331Z"
updatedAt: "2019-09-05T12:05:08.787Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The `ticketListings` parameter is useful when you're selling tickets for which you only know the section name, but not the exact row or the seat.

If you pass in `ticketListings`, the sections that have tickets available become selectable. So clicking on a section selects the section, instead of zooming in to the seats inside that section.

This parameter requires you to pass in a chart key instead of an event key.

```javascript
chart: '6451436c-24fb-11e7-93ae-92361f002671',
ticketListings: [
  {section: '108', quantity: 4, price: 25},
  {section: '108', quantity: 2, price: 35},
  {section: '109', quantity: 2, price: 20},
  {section: '110', quantity: 2, price: 35},
  {section: '111', quantity: 1, price: 35}
],
priceFormatter: function (price) {
  return price + '€';
}
```



![Screenshot 2019-01-04 at 09.15.55.png](/img/readme/Screenshot-2019-01-04-at-09.15.55.png)

