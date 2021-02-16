---
title: "isObjectVisible"
slug: "renderer-config-isobjectvisible"
hidden: false
createdAt: "2018-08-03T11:54:35.867Z"
updatedAt: "2018-08-23T14:39:53.794Z"
---
**Type**: function(object, extraConfig)

A function that should return true if an object is visible, and false otherwise. When an object is invisible, it can&#39;t be selected or interacted with. Can be based on `object.type`, `object.status`, `object.category`, or on other criteria.

The object types that can be made invisible are: &quot;seat&quot;, &quot;table&quot;, &quot;booth&quot;, &quot;generalAdmission&quot; and &quot;section&quot;. 

By default, all objects are visible.

The parameters that are passed to isObjectVisible are:

* **object**: the current object
* **extraConfig**: see [extraConfig](doc:renderer-config-extraconfig) 

```javascript
isObjectVisible: function(object, extraConfig) {
    if(object.category.label === &#39;Ground Floor&#39;) {
        return true;
    }
    return false;
}
```
[block:callout]
{
  &quot;type&quot;: &quot;warning&quot;,
  &quot;body&quot;: &quot;this function is called for each object on the chart; make sure it&#39;s fast, or chart rendering times will suffer. Avoid using slow methods such as Array.indexOf. Read more [here](http://support.seats.io/integrating-seats-io/performance-tips-for-renderer-callbacks).&quot;,
  &quot;title&quot;: &quot;Warning&quot;
}
[/block]
