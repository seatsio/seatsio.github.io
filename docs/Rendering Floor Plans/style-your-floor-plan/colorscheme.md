---
title: "colorScheme"
slug: "/colorscheme"
hidden: false
createdAt: "2019-07-22T20:53:35.661Z"
updatedAt: "2019-10-03T16:40:03.957Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Type**: string
**Default**: `"light"`

![Screen Shot 2019-07-22 at 2.24.34 PM.png](/img/readme/Screen-Shot-2019-07-22-at-2.24.34-PM.png)

Sets the color scheme for the user interface. The colors of certain floor plan elements, such as zoomed-in sections, will also be adjusted accordingly.

You can pick between:

- `light` - **Default.** Ideal for applications with light backdrops.
- `dark` - Ideal for applications with dark backdrops.

<iframe width="100%" height="580" src="//jsfiddle.net/seatsio/j63n5Loc/21/embedded/js,html,result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

:::info Notice about dark background
When using the `dark` setting, notice that the background remains transparent. Make sure that the color of chart container is also a dark shade.
:::
