---
title: "objectLabel"
slug: "renderer-config-objectlabel"
hidden: false
createdAt: "2018-08-03T11:53:58.437Z"
updatedAt: "2019-06-12T20:57:09.147Z"
---
**Type**: function(object, defaultLabel, extraConfig)
**Default**: no label

A function that determines the label that&#39;s rendered inside an object on the chart. Can be based on `object.status`, `object.category`, `object.isSelectable()` or on other criteria. 
By default, no label is shown.

The size of an object label is calculated automatically, based on the size of the object. For tables and booths, there usually is more than enough space. For seats, however, you&#39;ll probably want to limit the label to 3 characters maximum, or else the label will become too small to read without zooming in.

Multi-line labels are not supported.

The parameters that are passed to objectLabel are:

* **object**: the current object
* **defaultLabel**: the default object label (i.e. an empty string)
* **extraConfig**: see [extraConfig](doc:renderer-config-extraconfig) 
[block:callout]
{
  &quot;type&quot;: &quot;warning&quot;,
  &quot;title&quot;: &quot;Warning&quot;,
  &quot;body&quot;: &quot;this function is called for each object on the chart; make sure it&#39;s fast, or chart rendering times will suffer. Avoid using slow methods such as Array.indexOf. Read more [here](http://support.seats.io/integrating-seats-io/performance-tips-for-renderer-callbacks).&quot;
}
[/block]

[block:callout]
{
  &quot;type&quot;: &quot;info&quot;,
  &quot;body&quot;: &quot;To show seat labels, pass in\n\n```\nobjectLabel: object =&gt; object.labels.own\n```&quot;
}
[/block]

[block:html]
{
  &quot;html&quot;: &quot;&lt;iframe width=\&quot;100%\&quot; height=\&quot;580\&quot; src=\&quot;//jsfiddle.net/seatsio/q6w0t3va/embedded/js,html,result/\&quot; allowfullscreen=\&quot;allowfullscreen\&quot; frameborder=\&quot;0\&quot;&gt;&lt;/iframe&gt;&quot;
}
[/block]
```javascript

```
