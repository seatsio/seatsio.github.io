---
title: "chart.setFilteredCategories()"
slug: "chartsetfilteredcategories"
hidden: false
createdAt: "2019-04-08T23:45:13.309Z"
updatedAt: "2019-08-16T06:25:57.524Z"
---
[block:callout]
{
  &quot;type&quot;: &quot;danger&quot;,
  &quot;body&quot;: &quot;**Deprecated.** See [changeConfig](https://docs.seats.io/docs/renderer-chart-properties-chartchangeconfig) instead.&quot;
}
[/block]
**type**: function(labelsOrIds)
Leaves the specified categories normally visible, while making all others dimmed out. The parameter `labelsOrIds` must be an array of strings, which are the label or ID of the target categories to leave fully visible.

```javascript
chart.setFilteredCategories([&#39;Stalls&#39;, &#39;Choir&#39;]);
chart.setFilteredCategories([1, 2]);
```

The code above makes the Stalls (id: 1) and Choir (id: 2) categories fully visible, while dimming out all others.
[block:callout]
{
  &quot;type&quot;: &quot;info&quot;,
  &quot;title&quot;: &quot;Notice&quot;,
  &quot;body&quot;: &quot;This does not make any categories available or unavailable from selection, and it&#39;s meant to be used as a visual filter/aid only.&quot;
}
[/block]
