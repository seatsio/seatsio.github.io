---
title: "categories"
slug: "/renderer/config-categories"
hidden: false
createdAt: "2018-08-28T11:01:58.279Z"
updatedAt: "2019-12-05T08:46:22.779Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Type**: array[object]  

The array of categories that you pass in to `categories` replaces the list of categories that were set through the designer.

This is mostly useful in combination with the [objectCategories](/docs/renderer/config-objectcategories) parameter.

```javascript
categories: [
  {key: 'red', color: 'red', label: 'Category 1', accessible: true},
  {key: 'blue', color: 'blue', label: 'Category 2'}
]
```

* **key**: the category key. Required.
* **color**: the category color. Required.
* **label**: the category label. Optional. If not specified, only pricing information is shown in the legend and in the tooltips.
* **accessible**: whether this is a wheelchair-accessible category. Optional.
