---
title: "numberOfPlacesToSelect"
slug: "/renderer-config-numberofplacestoselect"
hidden: false
createdAt: "2019-07-05T09:09:48.989Z"
updatedAt: "2020-10-27T18:14:14.532Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Type**: integer
**Default**: not set

Activates one-click selection mode.
:::caution Unavailable on some ruleset configurations
This feature is unavailable on events using either:
- a social distancing ruleset on Fixed mode
- a social distancing ruleset with the "Disable seats to the sides" rule turned on
:::
If you pass in `numberOfPlacesToSelect: 3`, the ticket buyer only needs to click once to select 3 places. Previously selected places are deselected automatically.

The ticket buyer is not allowed to leave orphan seats, unless it's not possible to select seats in that row without leaving orphans. At that point, a warning is triggered if you activated the [`noOrphanSeats` selection validator](/docs/renderer-config-selectionvalidators).

`numberOfPlacesToSelect` works for seats (both row and table seats) and general admission areas. It has no effect when selecting booths or entirely selectable tables.
```javascript
numberOfPlacesToSelect: 3
```

<iframe width="100%" height="580" src="//jsfiddle.net/seatsio/d1x39o4a/embedded/result,js,html/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
