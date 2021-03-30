---
title: "chart.selectBestAvailable()"
slug: "/renderer/chart-properties-chartselectbestavailableconfig"
hidden: false
createdAt: "2018-08-24T08:46:34.631Z"
updatedAt: "2019-12-02T12:56:16.020Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Type**: function(config)  
**Returns**: Promise&lt;void&gt;

Selects best available objects (and deselects any already selected objects). 

The `config` parameter should be a JavaScript object that looks like this:

```javascript
chart.selectBestAvailable({
    'number': 2,
    'category': 1 // optional
    'clearSelection': false // optional. Defaults to `true`
});
```

Have a look at the docs for the [selectBestAvailable rendering parameter](/docs/renderer/config-selectbestavailable) for more examples.

:::caution Do not use this method if you expect high load on-sales
`chart.selectBestAvailable()` calculates the best available seats in the ticket buyers browser, which means it will yield the same result for concurrent users. 
Use the [server-side version ](/docs/api/best-available) of the seats.io best available algorithm instead.
:::

Note that the promise does not resolve to an array of selected objects. Use [onObjectSelected](/docs/renderer/events-onobjectselected) for that.
