---
title: "chart.setUnavailableCategories()"
slug: "chartsetunavailablecategories"
hidden: false
createdAt: "2019-03-05T17:58:49.193Z"
updatedAt: "2019-08-16T06:25:28.713Z"
---
[block:callout]
{
  &quot;type&quot;: &quot;danger&quot;,
  &quot;body&quot;: &quot;**Deprecated.** See [changeConfig](https://docs.seats.io/docs/renderer-chart-properties-chartchangeconfig) instead.&quot;
}
[/block]
**type**: function(labelsOrIds)
Makes the specified categories unavailable from selection. The parameter `labelsOrIds` must be an array of strings, which are the label or ID of the target categories to disable.

```javascript
chart.setUnavailableCategories([&#39;Stalls&#39;, &#39;Choir&#39;]);
chart.setUnavailableCategories([1, 2]);
```

The code above makes the Stalls (id: 1) and Choir (id: 2) categories unavailable for selection, while all other categories become available.
[block:callout]
{
  &quot;type&quot;: &quot;warning&quot;,
  &quot;title&quot;: &quot;Warning&quot;,
  &quot;body&quot;: &quot;Calling this method will clear the current selection.&quot;
}
[/block]
