---
title: "sectionColor"
slug: "renderer-config-sectioncolor"
hidden: false
createdAt: "2018-08-03T11:53:43.140Z"
updatedAt: "2018-08-23T14:42:34.304Z"
---
**Type**: function(section, defaultColor, extraConfig)
**Default**: The category color of the section, or grey if no category has been assigned.

A function that determines the section color. Must return a CSS string (e.g. &#39;red&#39; or &#39;#ccc&#39;).

The parameters that are passed to sectionColor are:

* **section**: the current section
* **defaultColor**: the default section color
* **extraConfig**: see [extraConfig](doc:renderer-config-extraconfig) 

```javascript
sectionColor: function(section, defaultColor, extraConfig) {
    if(section.label === &#39;Section 1&#39;) {
        return &#39;red&#39;;
    }
    return defaultColor;
}
```
