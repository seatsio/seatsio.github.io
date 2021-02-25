---
title: "selectBestAvailable"
slug: "/renderer-config-selectbestavailable"
hidden: false
createdAt: "2018-08-03T11:55:23.746Z"
updatedAt: "2019-12-02T12:57:29.735Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Type**: object

Automatically pre-select the best available objects (and deselect already selected objects).

The object you pass in must contain the number of objects to select, either by specifying a plain number, or a number per ticket type. It can have an optional category key or label, to auto select only objects in that category.

This works for seats in rows, seats at tables, whole tables (if the table is bookable by table), booths and general admission (GA) areas. 

:::caution Do not use this config param if you expect high load on-sales
If you use this config parameter, the best available seats are calculated within the ticket buyers browser, which means it will yield the same result for concurrent users. 
Use the [server-side version ](https://docs.seats.io/docs/api-best-available) of the seats.io best available algorithm instead.
:::

To select 2 objects (or places, in the case of a GA) in any category:

```javascript
selectBestAvailable: {
    number: 2
}
```

To select 2 objects in category 'Stalls':

```javascript
selectBestAvailable: {
    number: 2,
    category: 'Stalls'
}
```

You can also pass in an array of categories. Suppose you want to select seats in the Stalls or Balcony categories:

```javascript
selectBestAvailable: {
    number: 2,
    category: ['Stalls', 'Balcony']
}
```

Ticket types are supported as well. E.g. 2 adult tickets and 3 child tickets in either category ‘Stalls’ or ‘Balcony’:

```javascript
selectBestAvailable: {
  category: ['Stalls', 'Balcony'],
  ticketTypes: {
    'adult': 2,
    'child': 3
  }
}
```

Or 2 adult tickets and 3 child tickets in any category:

```javascript
selectBestAvailable: {
  ticketTypes: {
    'adult': 2,
    'child': 3
  }
}
```

By default, selecting best available objects clears the current selection. If you want to prevent that, pass in `clearSelection: false`

```javascript
selectedObjects: ['A-1', 'A-2'],
selectBestAvailable: {
    number: 5,
    clearSelection: false // select the 5 best available seats in addition to A-1 and A-2
}
```
