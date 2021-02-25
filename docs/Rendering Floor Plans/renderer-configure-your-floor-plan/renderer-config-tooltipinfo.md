---
title: "tooltipInfo"
slug: "/renderer-config-tooltipinfo"
hidden: false
createdAt: "2018-08-03T09:32:26.720Z"
updatedAt: "2018-09-03T09:10:21.259Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Type**: function(object)  
**Return**: string

![custom-info@2x.png](/img/readme/custom-info@2x.png)

A function whose result will be displayed as extra information on the cursor tooltip.

Can be formatted using a simple [BBCode](https://en.wikipedia.org/wiki/BBCode) format:

- `[b]bold[/b]` - Applies a bold styling.
- `[i]italic[/i]` - Applies an italic styling.
- `[pre]preformatted[/pre]` - Applies an fixed-width styling with pre white spacing.
- `[br/]` - Inserts a break line.

The code for the image above would be the following:

<iframe width="100%" height="580" src="//jsfiddle.net/seatsio/g16o4xfd/embedded/js,html,result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>



:::caution 
tooltipInfo is triggered for all objects, including sections. You can use object.objectType to distinguish between object types (e.g. to implement a specific tooltip for sections).
:::

