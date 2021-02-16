---
title: "chart.setAvailableCategories()"
slug: "chartsetavailablecategories"
hidden: false
createdAt: "2019-03-05T18:00:08.078Z"
updatedAt: "2020-03-19T09:54:36.776Z"
---
[block:callout]
{
  &quot;type&quot;: &quot;danger&quot;,
  &quot;body&quot;: &quot;**Deprecated.** See [changeConfig](https://docs.seats.io/docs/renderer-chart-properties-chartchangeconfig) instead.&quot;
}
[/block]
**type**: function(labelsOrIds)
Makes the specified categories available for selection, while making all others unavailable from selection. The parameter `labelsOrIds` must be an array of strings, which are the label or ID of the target categories to disable.

```javascript
chart.setAvailableCategories([&#39;Stalls&#39;, &#39;Choir&#39;]);
chart.setAvailableCategories([1, 2]);
```

The code above makes the Stalls (id: 1) and Choir (id: 2) categories available for selection, while making all others unavailable.


[block:callout]
{
  &quot;type&quot;: &quot;warning&quot;,
  &quot;title&quot;: &quot;Warning&quot;,
  &quot;body&quot;: &quot;Calling this method will deselect any object whose category was made unavailable.&quot;
}
[/block]
