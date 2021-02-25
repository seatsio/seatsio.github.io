---
title: "colors"
slug: "/colors"
hidden: false
createdAt: "2019-07-22T20:53:47.490Z"
updatedAt: "2020-10-09T06:06:42.520Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Type**: object  

**Example**:
```javascript
colors: {
   colorSelected: 'hsl(214, 96%, 53%)'
}
```

![Screen Shot 2019-07-22 at 2.19.43 PM.png](/img/readme/Screen-Shot-2019-07-22-at-2.19.43-PM.png)

Replaces certain colors of the current color scheme.

Currently you can redefine:

- `colorSelected` - The color used for certain interactive, selected or highlighted user interface elements (e.g. buttons).
- `cursorTooltipBackgroundColor`- The background color for the whole tooltip.
- `colorTitle` - The color of certain tiles, such as in modal dialogs or the Category Filter.

:::caution Accessibility notice
Blue shades are the standard for links and action buttons. They have the unique properties of being easy on the eyes and colorblind safe - less prone to be confused with other colors. Bear this in mind when using other colors that might have less contrast with the background or might be uncomfortable to a percentage of your user base.
:::

