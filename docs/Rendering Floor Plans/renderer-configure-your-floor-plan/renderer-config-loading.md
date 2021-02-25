---
title: "loading"
slug: "/renderer-config-loading"
hidden: false
createdAt: "2018-08-03T12:05:49.078Z"
updatedAt: "2018-08-03T13:25:55.582Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Type**: string, containing valid html

This parameter allows you to override the default seats.io spinner that is shown while the floor plan is being loaded. The value can contain (valid) html, like so: 

```javascript
var chart = new seatsio.SeatingChart({
        divId: "chart",
        ...
        loading: "<div class='loader'>Loading...</div>"
});
```



:::info Note
Note that the `loader` css class in the above example can be defined in the styling of your own page.
:::

