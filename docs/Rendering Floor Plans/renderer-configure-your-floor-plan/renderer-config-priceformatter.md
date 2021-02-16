---
title: "priceFormatter"
slug: "renderer-config-priceformatter"
hidden: false
createdAt: "2018-08-03T09:05:21.924Z"
updatedAt: "2020-10-02T12:55:00.332Z"
---
**Type**: function(price)
**Default implementation**: return the raw price, as provided by the [pricing](doc:renderer-config-pricing) configuration parameter (i.e. a number or a string). 

A function that formats a price when it&#39;s shown to an end user. This is notably used in the tooltip you see when you hover over a seat. 

This function is executed in the context of your page, meaning you can use a library like [accounting.js](https://github.com/openexchangerates/accounting.js) in your implementation.

[block:callout]
{
  &quot;type&quot;: &quot;warning&quot;,
  &quot;title&quot;: &quot;A word on encoding&quot;,
  &quot;body&quot;: &quot;The result of this function will be escaped. This means you can&#39;t use html entities or codes (respectively `&amp;dollar;`and `&amp;#36;` for $). \n\nThis might now work if you&#39;re not encoding your page as UTF-8. In that case, you should be able to use the unicode value (e.g. `\\u0024` for $)&quot;
}
[/block]
Note that the result of this function will be escaped, meaning you can&#39;t use html entities such as `&amp;#36;`
[block:html]
{
  &quot;html&quot;: &quot;&lt;iframe width=\&quot;100%\&quot; height=\&quot;580\&quot; src=\&quot;//jsfiddle.net/seatsio/tsd62gpb/embedded/js,html,result/\&quot; allowfullscreen=\&quot;allowfullscreen\&quot; frameborder=\&quot;0\&quot;&gt;&lt;/iframe&gt;&quot;
}
[/block]
