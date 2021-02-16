---
title: "chart.rerender()"
slug: "renderer-chart-properties-chartrerender"
hidden: false
createdAt: "2018-08-24T08:45:59.828Z"
updatedAt: "2019-12-10T12:48:03.816Z"
---
Re-initializes and redraws the chart. 
Previously selected objects become unselected. 
[block:callout]
{
  &quot;type&quot;: &quot;warning&quot;,
  &quot;title&quot;: &quot;Note&quot;,
  &quot;body&quot;: &quot;Do not use this method if your only intent is to clear the selection and get a new hold token. Use `chart.startNewSession()` instead, see [this page](https://docs.seats.io/docs/chartstartnewsession) for more.&quot;
}
[/block]
