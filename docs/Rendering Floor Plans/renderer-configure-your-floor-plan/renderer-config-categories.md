---
title: "categories"
slug: "renderer-config-categories"
hidden: false
createdAt: "2018-08-28T11:01:58.279Z"
updatedAt: "2019-12-05T08:46:22.779Z"
---
**Type**: array[object]

The array of categories that you pass in to `categories` replaces the list of categories that were set through the designer.

This is mostly useful in combination with the [objectCategories](doc:renderer-config-objectcategories) parameter.

```javascript
categories: [
  {key: &#39;red&#39;, color: &#39;red&#39;, label: &#39;Category 1&#39;, accessible: true},
  {key: &#39;blue&#39;, color: &#39;blue&#39;, label: &#39;Category 2&#39;}
]
```

* **key**: the category key. Required.
* **color**: the category color. Required.
* **label**: the category label. Optional. If not specified, only pricing information is shown in the legend and in the tooltips.
* **accessible**: whether this is a wheelchair-accessible category. Optional.
