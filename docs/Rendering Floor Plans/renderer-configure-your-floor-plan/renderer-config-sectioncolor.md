---
title: "sectionColor"
slug: "/renderer-config-sectioncolor"
hidden: false
createdAt: "2018-08-03T11:53:43.140Z"
updatedAt: "2018-08-23T14:42:34.304Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Type**: function(section, defaultColor, extraConfig)
**Default**: The category color of the section, or grey if no category has been assigned.

A function that determines the section color. Must return a CSS string (e.g. 'red' or '#ccc').

The parameters that are passed to sectionColor are:

* **section**: the current section
* **defaultColor**: the default section color
* **extraConfig**: see [extraConfig](renderer-config-extraconfig) 

```javascript
sectionColor: function(section, defaultColor, extraConfig) {
    if(section.label === 'Section 1') {
        return 'red';
    }
    return defaultColor;
}
```
