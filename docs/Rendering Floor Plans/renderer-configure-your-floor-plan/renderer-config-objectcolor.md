---
title: "objectColor"
slug: "renderer-config-objectcolor"
hidden: false
createdAt: "2018-08-03T11:50:07.159Z"
updatedAt: "2018-08-23T14:42:44.611Z"
---
**Type**: function(object, defaultColor, extraConfig)
**Default**: Grey if the object is not available for selection, the category color otherwise.

A function that determines the object color. Can be based on `object.status`, `object.category`, `object.isSelectable()` or on other criteria. 

By default, selectable objects are shown in their category color, and other objects are rendered grey. 

Your implementation of `objectColor` must return a CSS string (e.g. &#39;red&#39; or &#39;#ccc&#39;).

The parameters that are passed to objectColor are:

* **object**: the current object
* **defaultColor**: the default object color
* **extraConfig**: see [extraConfig](doc:renderer-config-extraconfig) 
[block:callout]
{
  &quot;type&quot;: &quot;warning&quot;,
  &quot;title&quot;: &quot;Warning&quot;,
  &quot;body&quot;: &quot;this function is called for each object on the chart; make sure it&#39;s fast, or chart rendering times will suffer. Avoid using slow methods such as Array.indexOf. Read more [here](http://support.seats.io/integrating-seats-io/performance-tips-for-renderer-callbacks).&quot;
}
[/block]

[block:html]
{
  &quot;html&quot;: &quot;&lt;iframe width=\&quot;100%\&quot; height=\&quot;580\&quot; src=\&quot;//jsfiddle.net/seatsio/w73h60yg/embedded/js,html,result/\&quot; allowfullscreen=\&quot;allowfullscreen\&quot; frameborder=\&quot;0\&quot;&gt;&lt;/iframe&gt;&quot;
}
[/block]
