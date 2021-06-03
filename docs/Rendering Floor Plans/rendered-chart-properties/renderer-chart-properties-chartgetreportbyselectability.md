---
title: "chart.getReportBySelectability()"
slug: "/renderer/chart-properties-chartgetreportbyselectability"
hidden: false
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Type**: function()  
**Returns**: Promise&lt;object&gt;

Creates a report with the number of selectable and unselectable places, by category.

```javascript
let report = await chart.getReportBySelectability()
console.log(report)
```

```javascript
{
  "selectable": {
    "count": 4141,
    "byCategoryLabel": {
      "Circle": 1513,
      "Stalls": 1457,
      "Arena": 731,
      "Choir": 440,
      "NO_CATEGORY": 0
    },
    "byCategoryKey": {
      "31": 1513,
      "33": 1457,
      "34": 731,
      "35": 440,
      "NO_CATEGORY": 0
    }
  },
  "not_selectable": {
    "count": 126,
    "byCategoryLabel": {
      "Circle": 2,
      "Stalls": 101,
      "Arena": 13,
      "Choir": 10,
      "NO_CATEGORY": 0
    },
    "byCategoryKey": {
      "31": 2,
      "33": 101,
      "34": 13,
      "35": 10,
      "NO_CATEGORY": 0
    }
  }
}
```
