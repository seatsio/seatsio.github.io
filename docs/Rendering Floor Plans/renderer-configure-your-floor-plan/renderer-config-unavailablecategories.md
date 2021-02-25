---
title: "unavailableCategories"
slug: "/renderer-config-unavailablecategories"
hidden: false
createdAt: "2018-08-03T11:49:03.282Z"
updatedAt: "2019-03-05T17:51:43.499Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Type**: array&lt;string&gt;  
**Default**: []  

Makes the specified categories unavailable from selection. The array can be a list of category IDs or labels.

:::caution Important note
Important note: you should also validate this server side; a somewhat clever user can change this value right from the browser to bypass the validation.
:::



<iframe width="100%" height="580" src="//jsfiddle.net/seatsio/hvojq3a8/embedded/js,html,result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

