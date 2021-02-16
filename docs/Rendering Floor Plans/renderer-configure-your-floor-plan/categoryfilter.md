---
title: "categoryFilter"
slug: "categoryfilter"
hidden: false
createdAt: "2019-04-09T00:05:52.232Z"
updatedAt: "2019-04-09T00:20:07.144Z"
---
**Type**: object
**Default**:
```javascript
{
    enabled: false,
    multiSelect: true,
    zoomOnSelect: false
}
```

Used to enable or disable the category filter GUI, as well as configuring certain aspects of it.

The category filter allows the user to refine the search of tickets suitable for them without the need of coding any custom UI. It works for both desktop and mobile out of box.

Parameters that aren&#39;t passed will use their default values instead.

Supported parameters are:

- `enabled` - **Default: false.** If true, the category filter will be visible.
- `multiSelect` - **Default: true.** If true, multiple categories can be selected at once.
- `zoomOnSelect` - **Default: false.** If true, the chart will zoom in or out to fit in the viewport the filtered objects.
[block:image]
{
  &quot;images&quot;: [
    {
      &quot;image&quot;: [
        &quot;https://files.readme.io/c03c699-Category_filters_-_desktop_2.gif&quot;,
        &quot;Category filters - desktop 2.gif&quot;,
        2212,
        946,
        &quot;#e1dfd9&quot;
      ],
      &quot;caption&quot;: &quot;Two-step layout, visible when the embed is wide enough.&quot;
    }
  ]
}
[/block]

[block:image]
{
  &quot;images&quot;: [
    {
      &quot;image&quot;: [
        &quot;https://files.readme.io/728aef7-Category_filters_-_mobile_2.gif&quot;,
        &quot;Category filters - mobile 2.gif&quot;,
        898,
        896,
        &quot;#cac5bb&quot;
      ],
      &quot;caption&quot;: &quot;When there isn&#39;t enough space, the category filter will dock itself to the top of the viewport.&quot;
    }
  ]
}
[/block]

[block:callout]
{
  &quot;type&quot;: &quot;info&quot;,
  &quot;title&quot;: &quot;Notice&quot;,
  &quot;body&quot;: &quot;To use the two-step layout, where the categories filter is fully displayed on the left side, the embed must be wide enough to support this. It will otherwise dock to the top of the screen.&quot;
}
[/block]
