---
title: "pricing"
slug: "renderer-config-pricing"
hidden: false
createdAt: "2018-08-03T07:40:53.601Z"
updatedAt: "2020-10-20T08:44:07.465Z"
---
**Type**: array of objects
**Default**: []

Seats supports two types of pricing: *simple pricing* and *multi-level pricing*. Both are defined using the `pricing` configuration parameter. 

* **Simple pricing** is pretty, well, simple: there&#39;s a single price point per category. 
* **Multi-level pricing** is for when you want to offer multiple price points within the same category, for example if you have a different price for student and regular tickets. Those are what we call *ticket types*. 

You can read a more in-depth descussion about pricing categories and ticket types [here](http://support.seats.io/integrating-seats-io/multilevel-pricing).

[block:callout]
{
  &quot;type&quot;: &quot;info&quot;,
  &quot;title&quot;: &quot;Note&quot;,
  &quot;body&quot;: &quot;For information about the priceFormatter parameter used in the examples below, see [this page](doc:renderer-config-priceformatter)&quot;
}
[/block]

[block:api-header]
{
  &quot;title&quot;: &quot;Simple pricing&quot;
}
[/block]
For single price points per category, simply pass a `pricing` array of js objects like so: 

```
        pricing: [
            {&#39;category&#39;: 1, &#39;price&#39;: 30},
            {&#39;category&#39;: 2, &#39;price&#39;: 40},
            {&#39;category&#39;: 3, &#39;price&#39;: 50}
        ]
```

Note that you can also use the category labels instead of their keys: 

```
        pricing: [
            {&#39;category&#39;: &quot;Balcony&quot;, &#39;price&#39;: 30},
            {&#39;category&#39;: &quot;Ground Floor&quot;, &#39;price&#39;: 40},
            {&#39;category&#39;: &quot;Wheelchair&quot;, &#39;price&#39;: 50}
        ]
```

[block:callout]
{
  &quot;type&quot;: &quot;warning&quot;,
  &quot;title&quot;: &quot;Category labels need to be 100% correct when used as keys&quot;,
  &quot;body&quot;: &quot;They are cAsE sEnSiTiVe: a category label \&quot;Balcony\&quot; is not the same as \&quot;balcony\&quot;.&quot;
}
[/block]

[block:html]
{
  &quot;html&quot;: &quot;&lt;iframe width=\&quot;100%\&quot; height=\&quot;580\&quot; src=\&quot;//jsfiddle.net/seatsio/tsd62gpb/embedded/js,html,result/\&quot; allowfullscreen=\&quot;allowfullscreen\&quot; frameborder=\&quot;0\&quot;&gt;&lt;/iframe&gt;&quot;
}
[/block]

[block:api-header]
{
  &quot;title&quot;: &quot;Multi-level pricing&quot;
}
[/block]

[block:html]
{
  &quot;html&quot;: &quot;&lt;iframe width=\&quot;100%\&quot; height=\&quot;580\&quot; src=\&quot;//jsfiddle.net/seatsio/c56bw8dg/embedded/js,html,result/\&quot; allowfullscreen=\&quot;allowfullscreen\&quot; frameborder=\&quot;0\&quot;&gt;&lt;/iframe&gt;&quot;
}
[/block]
You can also pass in labels for the ticket types. Ticket buyers will see the label in tooltips, instead of the technical ID:
[block:html]
{
  &quot;html&quot;: &quot;&lt;iframe width=\&quot;100%\&quot; height=\&quot;580\&quot; src=\&quot;//jsfiddle.net/seatsio/u7hs9L02/embedded/js,html,result/\&quot; allowfullscreen=\&quot;allowfullscreen\&quot; frameborder=\&quot;0\&quot;&gt;&lt;/iframe&gt;&quot;
}
[/block]
Longer descriptions are possible as well:
[block:html]
{
  &quot;html&quot;: &quot;&lt;iframe width=\&quot;100%\&quot; height=\&quot;580\&quot; src=\&quot;//jsfiddle.net/seatsio/q38fczru/embedded/js,html,result/\&quot; allowfullscreen=\&quot;allowfullscreen\&quot; frameborder=\&quot;0\&quot;&gt;&lt;/iframe&gt;&quot;
}
[/block]
