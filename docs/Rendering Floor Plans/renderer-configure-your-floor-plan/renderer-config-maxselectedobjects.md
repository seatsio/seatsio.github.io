---
title: "maxSelectedObjects"
slug: "renderer-config-maxselectedobjects"
hidden: false
createdAt: "2018-08-03T10:08:12.717Z"
updatedAt: "2021-02-12T09:02:00.160Z"
---
**Type**: number or array of objects
**Default**: not set

Limit the number of objects a user can select.
[block:callout]
{
  &quot;type&quot;: &quot;warning&quot;,
  &quot;title&quot;: &quot;Unavailable on Fixed-mode rulesets&quot;,
  &quot;body&quot;: &quot;This feature is unavailable on events using a social distancing ruleset on Fixed mode.&quot;
}
[/block]
When using a **number** X, the user will be able to select a max of X objects overall.

```javascript
maxSelectedObjects: 5
```

You can also provide an array of objects, to limit the number of selectable objects **per ticket type**. For an explanation about ticket types and multilevel pricing, please refer to [here](http://support.seats.io/integrating-seats-io/multilevel-pricing).

```javascript
maxSelectedObjects: [
    { ticketType: &#39;adult&#39;, quantity: 2 },
    { ticketType: &#39;child&#39;, quantity: 3 }
]
```

A combination of a limit per ticket type and a total maximum also works:

```javascript
maxSelectedObjects: [
    { ticketType: &#39;adult&#39;, quantity: 5 },
    { ticketType: &#39;child&#39;, quantity: 5 },
    { total: 7 }
]
```
[block:callout]
{
  &quot;type&quot;: &quot;warning&quot;,
  &quot;title&quot;: &quot;Only passed ticket types will be selectable&quot;,
  &quot;body&quot;: &quot;If you don&#39;t pass in all ticket types, the ticket buyer will not be able to select tickets in the missing ticket types. E.g. if the max number of adult tickets is set to 2, and no max is set for child tickets, the ticket buyer will only be able to select adult tickets.&quot;
}
[/block]
And you can also limit the selection **per category**.

```javascript
maxSelectedObjects: [
    { category: &#39;balcony&#39;, quantity: 4 },
    { category: &#39;stalls&#39;, quantity: 5 }
]
```

A combination of a limit per category and a total maximum also works:

```javascript
maxSelectedObjects: [
    { category: &#39;balcony&#39;, quantity: 5 },
    { category: &#39;stalls&#39;, quantity: 5 },
    { total: 7 }
]
```
[block:callout]
{
  &quot;type&quot;: &quot;warning&quot;,
  &quot;title&quot;: &quot;Only passed categories will be selectable&quot;,
  &quot;body&quot;: &quot;If you don&#39;t pass in all categories, the ticket buyer will not be able to select tickets in the missing categories. E.g. if the max number of balcony tickets is set to 2, and no max is set for stalls tickets, the ticket buyer will only be able to select balcony tickets.&quot;
}
[/block]

[block:html]
{
  &quot;html&quot;: &quot;&lt;iframe width=\&quot;100%\&quot; height=\&quot;580\&quot; src=\&quot;//jsfiddle.net/seatsio/q47ozwj0/embedded/js,html,result/\&quot; allowfullscreen=\&quot;allowfullscreen\&quot; frameborder=\&quot;0\&quot;&gt;&lt;/iframe&gt;&quot;
}
[/block]

[block:callout]
{
  &quot;type&quot;: &quot;warning&quot;,
  &quot;title&quot;: &quot;Security notice&quot;,
  &quot;body&quot;: &quot;You should also validate this server side; a somewhat clever user can change this value right from the browser to bypass the validation.&quot;
}
[/block]
