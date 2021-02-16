---
title: "tooltipInfo"
slug: "renderer-config-tooltipinfo"
hidden: false
createdAt: "2018-08-03T09:32:26.720Z"
updatedAt: "2018-09-03T09:10:21.259Z"
---
**Type**: function(object)
**Return**: string
[block:image]
{
  &quot;images&quot;: [
    {
      &quot;image&quot;: [
        &quot;https://files.readme.io/16acea5-custom-info2x.png&quot;,
        &quot;custom-info@2x.png&quot;,
        1400,
        360,
        &quot;#ecd3c7&quot;
      ]
    }
  ]
}
[/block]
A function whose result will be displayed as extra information on the cursor tooltip.

Can be formatted using a simple [BBCode](https://en.wikipedia.org/wiki/BBCode) format:

- `[b]bold[/b]` - Applies a bold styling.
- `[i]italic[/i]` - Applies an italic styling.
- `[pre]preformatted[/pre]` - Applies an fixed-width styling with pre white spacing.
- `[br/]` - Inserts a break line.

The code for the image above would be the following:
[block:html]
{
  &quot;html&quot;: &quot;&lt;iframe width=\&quot;100%\&quot; height=\&quot;580\&quot; src=\&quot;//jsfiddle.net/seatsio/g16o4xfd/embedded/js,html,result/\&quot; allowfullscreen=\&quot;allowfullscreen\&quot; frameborder=\&quot;0\&quot;&gt;&lt;/iframe&gt;&quot;
}
[/block]

[block:callout]
{
  &quot;type&quot;: &quot;warning&quot;,
  &quot;body&quot;: &quot;tooltipInfo is triggered for all objects, including sections. You can use object.objectType to distinguish between object types (e.g. to implement a specific tooltip for sections).&quot;
}
[/block]
