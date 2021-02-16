---
title: "ticketListings"
slug: "renderer-config-ticketlistings"
hidden: false
createdAt: "2019-01-04T08:13:18.331Z"
updatedAt: "2019-09-05T12:05:08.787Z"
---
The `ticketListings` parameter is useful when you&#39;re selling tickets for which you only know the section name, but not the exact row or the seat.

If you pass in `ticketListings`, the sections that have tickets available become selectable. So clicking on a section selects the section, instead of zooming in to the seats inside that section.

This parameter requires you to pass in a chart key instead of an event key.
```json
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

[block:image]
{
  &quot;images&quot;: [
    {
      &quot;image&quot;: [
        &quot;https://files.readme.io/f63c7ba-Screenshot_2019-01-04_at_09.15.55.png&quot;,
        &quot;Screenshot 2019-01-04 at 09.15.55.png&quot;,
        539,
        303,
        &quot;#d8d9b7&quot;
      ],
      &quot;border&quot;: true
    }
  ]
}
[/block]
