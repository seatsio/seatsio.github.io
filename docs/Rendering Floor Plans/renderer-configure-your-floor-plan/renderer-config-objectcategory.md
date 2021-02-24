---
title: "objectCategory"
slug: "/renderer-config-objectcategory"
hidden: false
createdAt: "2018-08-03T12:04:53.051Z"
updatedAt: "2019-10-31T15:12:47.144Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Type**: function(object, categories, defaultCategory, extraConfig)
**Default**: not implemented

The objectCategory function allows the default category of an object to be overridden. It takes a number of parameters:

* `object`: the current object
* `categories`: all categories of the chart. This object has a method called `categories.get(categoryKeyOrLabel)`, which takes a category key or label as a parameter, and which returns a category object based on that input.
* `defaultCategory`: this is either the category assigned to the object, or if it's not set, the category assigned to the section of the object.
* `extraConfig`: see [extraConfig](renderer-config-extraconfig) 

objectCategory must return a category object, either one retrieved from `categories`, or the `defaultCategory`.

```javascript
objectCategory: function(object, categories, defaultCategory, extraConfig) {
    if(object.label === 'A-1') {
        return categories.get('Stalls');
    }
    return defaultCategory;
}
```
