---
title: "chart.changeConfig()"
slug: "/renderer-chart-properties-chartchangeconfig"
hidden: false
createdAt: "2018-08-24T09:34:23.174Z"
updatedAt: "2020-10-20T10:15:09.894Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Type**: function(config)  

Change the configuration of the chart. Currently supported parameters are:

- `objectColor`
- `objectLabel`
- `numberOfPlacesToSelect`
- `maxSelectedObjects`
- `ticketListings`
- `extraConfig`
- `availableCategories`
- `unavailableCategories`
- `filteredCategories`
- `pricing`
- `channels`

The chart is re-rendered after configuration changes.

```javascript
chart.changeConfig({
    objectColor: object => object.isSelectable() ? 'green' : 'red'
});
```

```javascript
chart.changeConfig({
    objectLabel: object => object.label
});
```

```javascript
chart.changeConfig({
    numberOfPlacesToSelect: 3
});
```

```javascript
chart.changeConfig({
    numberOfPlacesToSelect: null // unset numberOfPlacesToSelect
});
```

```javascript
chart.changeConfig({
    maxSelectedObjects: 3
});
```

```javascript
chart.changeConfig({
    maxSelectedObjects: null // unset maxSelectedObjects
});
```

```javascript
chart.changeConfig({
    ticketListings: [
        {section: '108', quantity: 4, price: 25},
        {section: '108', quantity: 2, price: 35}
    ]
});
```

```javascript
chart.changeConfig({
    extraConfig: {
        vipSeats: ['A-1', 'A-2', 'A-3']
    }
});
```

```javascript
chart.changeConfig({
    unavailableCategories: ['Stalls', 'Choir'] // this will deselect objects that belong to an unavailable category
});
```

```javascript
chart.changeConfig({
    availableCategories: ['Stalls', 'Choir'] // this will deselect objects that belong to an unavailable category
});
```

```javascript
chart.changeConfig({
    filteredCategories: ['Stalls', 'Choir']
});
```

```javascript
chart.changeConfig({
    channels: ['54a1649b-732f-4fb9-9403-ef52dc2f7722'] // pass in `null` instead of an array to remove all configured channels
});
```
