---
title: "objectTooltip"
slug: "renderer-config-objecttooltip"
hidden: false
createdAt: "2018-08-03T09:26:15.684Z"
updatedAt: "2020-07-09T20:31:29.385Z"
---
**Type**: object
**Default**:
```javascript
{
    showActionHint: true,
    showAvailability: false,
    showCategory: true,
    showLabel: true,
    showPricing: true,
    showUnavailableNotice: true,
    stylizedLabel: true,
    confirmSelectionOnMobile: &quot;auto&quot;
}
```

[block:image]
{
  &quot;images&quot;: [
    {
      &quot;image&quot;: [
        &quot;https://files.readme.io/2ca72b9-tooltip-configurations.gif&quot;,
        &quot;tooltip-configurations.gif&quot;,
        344,
        218,
        &quot;#f7f8f9&quot;
      ]
    }
  ]
}
[/block]
Allows to toggle on or off some features of the cursor tooltip, displayed when hovering objects on mouse-input devices like laptops and desktop computers.

Parameters that aren&#39;t passed will use their default values instead.

The supported parameters are:

- `showActionHint` - **Default: true.** If true, a &quot;Click to select&quot; or &quot;Click to deselect&quot; message will be displayed on bookable objects when selection is allowed.
- `showAvailability` - **Default: false.** If true, the amount of available seats of the section or general admission will be displayed.
- `showCategory` - **Default: true.** If true, the object&#39;s category color and name will be displayed.
- `showLabel` - **Default: true.** If true, the section name, row number and/or seat number of the object will be visible. If false, no labeling will be shown.
- `showPricing` - **Default: true.** If true, the price range of the object&#39;s category will be visible.
- `showUnavailableNotice` - **Default: true.** If true, a notice will be displayed on the tooltip if the object is unavailable.
- `stylizedLabel` - **Default: true.** If true, a labels will be displayed in a hierarchy-based styling, improving readability. If false, labels will be displayed as flat text.
- `confirmSelectionOnMobile` - **Boolean. Default: auto.** If `true`, a popup will show up when selecting an object on mobile containing the same information as the desktop tooltip, seen on hover. A button must be pressed to confirm the selection. If `false`, selection is done instantly but no information regarding the object is shown to the user. If unset, it will automatically attempt to show it as long `tooltipText` and `onObjectClicked` parameters are not passed in.
[block:html]
{
  &quot;html&quot;: &quot;&lt;iframe width=\&quot;100%\&quot; height=\&quot;580\&quot; src=\&quot;//jsfiddle.net/seatsio/kt2xuf5m/embedded/js,html,result/\&quot; allowfullscreen=\&quot;allowfullscreen\&quot; frameborder=\&quot;0\&quot;&gt;&lt;/iframe&gt;&quot;
}
[/block]

[block:image]
{
  &quot;images&quot;: [
    {
      &quot;image&quot;: [
        &quot;https://files.readme.io/280863d-Screen_Shot_2018-11-28_at_11.05.41_AM.png&quot;,
        &quot;Screen Shot 2018-11-28 at 11.05.41 AM.png&quot;,
        1318,
        784,
        &quot;#4d3f38&quot;
      ],
      &quot;caption&quot;: &quot;A view of the mobile tooltip, which can be disabled by setting `confirmSelectionOnMobile` to false.&quot;
    }
  ]
}
[/block]
