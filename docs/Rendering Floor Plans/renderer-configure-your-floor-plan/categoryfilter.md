---
title: "categoryFilter"
slug: "/renderer/categoryfilter"
hidden: false
createdAt: "2019-04-09T00:05:52.232Z"
updatedAt: "2019-04-09T00:20:07.144Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Type**: object  
**Default**:  
```javascript
{
    enabled: false,
    multiSelect: true,
    zoomOnSelect: false
}
```

Used to enable or disable the category filter GUI, as well as configuring certain aspects of it.

The category filter allows the user to refine the search of tickets suitable for them without the need of coding any custom UI. It works for both desktop and mobile out of box.

Parameters that aren't passed will use their default values instead.

Supported parameters are:

- `enabled` - **Default: false.** If true, the category filter will be visible.
- `multiSelect` - **Default: true.** If true, multiple categories can be selected at once.
- `zoomOnSelect` - **Default: false.** If true, the chart will zoom in or out to fit in the viewport the filtered objects.

![Category filters - desktop 2.gif](/img/readme/Category-filters---desktop-2.gif)



![Category filters - mobile 2.gif](/img/readme/Category-filters---mobile-2.gif)



:::info Notice
To use the two-step layout, where the categories filter is fully displayed on the left side, the embed must be wide enough to support this. It will otherwise dock to the top of the screen.
:::

