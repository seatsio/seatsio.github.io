---
title: "loading"
slug: "renderer-config-loading"
hidden: false
createdAt: "2018-08-03T12:05:49.078Z"
updatedAt: "2018-08-03T13:25:55.582Z"
---
**Type**: string, containing valid html

This parameter allows you to override the default seats.io spinner that is shown while the floor plan is being loaded. The value can contain (valid) html, like so: 

```javascript
var chart = new seatsio.SeatingChart({
        divId: &quot;chart&quot;,
        ...
        loading: &quot;&lt;div class=&#39;loader&#39;&gt;Loading...&lt;/div&gt;&quot;
});
```


[block:callout]
{
  &quot;type&quot;: &quot;info&quot;,
  &quot;body&quot;: &quot;Note that the `loader` css class in the above example can be defined in the styling of your own page.&quot;,
  &quot;title&quot;: &quot;Note&quot;
}
[/block]
