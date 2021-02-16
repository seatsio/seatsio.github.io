---
title: "chart.selectBestAvailable()"
slug: "renderer-chart-properties-chartselectbestavailableconfig"
hidden: false
createdAt: "2018-08-24T08:46:34.631Z"
updatedAt: "2019-12-02T12:56:16.020Z"
---
**type**: function(config)

Selects best available objects (and deselects any already selected objects). 

The `config` parameter should be a JavaScript object that looks like this:
```javascript
chart.selectBestAvailable({
    'number': 2,
    'category': 1 // optional
    'clearSelection': false // optional. Defaults to `true`
});
```
Have a look at the docs for the [selectBestAvailable rendering parameter](doc:renderer-config-selectbestavailable) for more examples.
[block:callout]
{
  &quot;type&quot;: &quot;warning&quot;,
  &quot;title&quot;: &quot;Do not use this method if you expect high load on-sales&quot;,
  &quot;body&quot;: &quot;`chart.selectBestAvailable()` calculates the best available seats in the ticket buyers browser, which means it will yield the same result for concurrent users. \nUse the [server-side version ](https://docs.seats.io/docs/api-best-available) of the seats.io best available algorithm instead.&quot;
}
[/block]
