---
title: "objectCategories"
slug: "renderer-config-objectcategories"
hidden: false
createdAt: "2018-08-28T10:55:52.153Z"
updatedAt: "2018-09-12T21:00:25.715Z"
---
**Type**: object

`objectCategories` allows you to override the categories that were assigned to objects through the designer. It&#39;s a mapping between object labels and category keys (or labels):

```javascript
// mapping from object labels to category labels
objectCategories: {
  &#39;A-1&#39;: &#39;Stalls&#39;,
  &#39;A-2&#39;: &#39;Ground Floor&#39;
  ...
}
```

```javascript
// mapping from object labels to category keys
objectCategories: {
  &#39;A-1&#39;: 1,
  &#39;A-2&#39;: 2
  ...
}
```

Objects that are missing from objectCategories are rendered without a category. That means the ticket buyer won&#39;t see the ticket price when hovering that object. If you prefer a safety net, disable the [objectWithoutCategorySelectable](doc:renderer-config-objectwithoutcategoryselectable) flag.
