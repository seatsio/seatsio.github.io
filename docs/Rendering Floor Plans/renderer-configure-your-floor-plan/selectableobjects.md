---
title: "selectableObjects"
slug: "selectableobjects"
hidden: false
createdAt: "2020-10-26T08:23:23.224Z"
updatedAt: "2020-10-26T08:24:12.259Z"
---
**Type:** array&lt;string&gt;
**Default**: []

Render the chart with the specified objects selectable. This allows you to make objects selectable, even if they are not because they have a non-free status (e.g. booked, or a custom status). 


You can pass object labels inside the array, like this:

```javascript
selectableObjects: [&#39;A-1&#39;, &#39;A-2&#39;]
```
[block:callout]
{
  &quot;type&quot;: &quot;warning&quot;,
  &quot;title&quot;: &quot;Note&quot;,
  &quot;body&quot;: &quot;`selectableObjects` has no effect on objects that are not-for-sale, nor on objects that are blocked by social distancing rules.&quot;
}
[/block]
