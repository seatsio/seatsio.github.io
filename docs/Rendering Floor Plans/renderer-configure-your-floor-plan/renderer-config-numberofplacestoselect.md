---
title: "numberOfPlacesToSelect"
slug: "renderer-config-numberofplacestoselect"
hidden: false
createdAt: "2019-07-05T09:09:48.989Z"
updatedAt: "2020-10-27T18:14:14.532Z"
---
**Type**: integer
**Default**: not set

Activates one-click selection mode.
[block:callout]
{
  &quot;type&quot;: &quot;warning&quot;,
  &quot;title&quot;: &quot;Unavailable on some ruleset configurations&quot;,
  &quot;body&quot;: &quot;This feature is unavailable on events using either:\n- a social distancing ruleset on Fixed mode\n- a social distancing ruleset with the \&quot;Disable seats to the sides\&quot; rule turned on&quot;
}
[/block]
If you pass in `numberOfPlacesToSelect: 3`, the ticket buyer only needs to click once to select 3 places. Previously selected places are deselected automatically.

The ticket buyer is not allowed to leave orphan seats, unless it&#39;s not possible to select seats in that row without leaving orphans. At that point, a warning is triggered if you activated the [`noOrphanSeats` selection validator](/docs/renderer-config-selectionvalidators).

`numberOfPlacesToSelect` works for seats (both row and table seats) and general admission areas. It has no effect when selecting booths or entirely selectable tables.
```javascript
numberOfPlacesToSelect: 3
```

[block:html]
{
  &quot;html&quot;: &quot;&lt;iframe width=\&quot;100%\&quot; height=\&quot;580\&quot; src=\&quot;//jsfiddle.net/seatsio/d1x39o4a/embedded/result,js,html/\&quot; allowfullscreen=\&quot;allowfullscreen\&quot; frameborder=\&quot;0\&quot;&gt;&lt;/iframe&gt;&quot;
}
[/block]
