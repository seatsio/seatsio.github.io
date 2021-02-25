---
title: "isObjectVisible"
slug: "/renderer-config-isobjectvisible"
hidden: false
createdAt: "2018-08-03T11:54:35.867Z"
updatedAt: "2018-08-23T14:39:53.794Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Type**: function(object, extraConfig)

A function that should return true if an object is visible, and false otherwise. When an object is invisible, it can't be selected or interacted with. Can be based on `object.type`, `object.status`, `object.category`, or on other criteria.

The object types that can be made invisible are: "seat", "table", "booth", "generalAdmission" and "section". 

By default, all objects are visible.

The parameters that are passed to isObjectVisible are:

* **object**: the current object
* **extraConfig**: see [extraConfig](renderer-config-extraconfig) 

```javascript
isObjectVisible: function(object, extraConfig) {
    if(object.category.label === 'Ground Floor') {
        return true;
    }
    return false;
}
```

:::caution Warning
this function is called for each object on the chart; make sure it's fast, or chart rendering times will suffer. Avoid using slow methods such as Array.indexOf. Read more [here](http://support.seats.io/integrating-seats-io/performance-tips-for-renderer-callbacks).
:::

