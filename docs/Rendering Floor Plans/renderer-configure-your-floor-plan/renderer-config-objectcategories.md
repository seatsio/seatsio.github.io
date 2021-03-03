---
title: "objectCategories"
slug: "/renderer/config-objectcategories"
hidden: false
createdAt: "2018-08-28T10:55:52.153Z"
updatedAt: "2018-09-12T21:00:25.715Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Type**: object  

`objectCategories` allows you to override the categories that were assigned to objects through the designer. It's a mapping between object labels and category keys (or labels):

```javascript
// mapping from object labels to category labels
objectCategories: {
  'A-1': 'Stalls',
  'A-2': 'Ground Floor'
  ...
}
```

```javascript
// mapping from object labels to category keys
objectCategories: {
  'A-1': 1,
  'A-2': 2
  ...
}
```

Objects that are missing from objectCategories are rendered without a category. That means the ticket buyer won't see the ticket price when hovering that object. If you prefer a safety net, disable the [objectWithoutCategorySelectable](renderer-config-objectwithoutcategoryselectable) flag.
