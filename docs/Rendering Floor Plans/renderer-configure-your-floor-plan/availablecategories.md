---
title: "availableCategories"
slug: "/availablecategories"
hidden: false
createdAt: "2019-03-05T17:52:26.893Z"
updatedAt: "2019-12-10T12:43:03.386Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Type:** array&lt;string&gt;
**Default**: []

Makes the specified categories available from selection, while making all others unavailable from selection. The array can be a list of category IDs or labels.

:::caution Important note
Important note: you should also validate this server side; a somewhat clever user can change this value right from the browser to bypass the validation.
:::

