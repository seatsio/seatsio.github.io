---
title: "showFullScreenButton"
slug: "renderer-config-showfullscreenbutton"
hidden: false
createdAt: "2019-09-12T08:56:00.296Z"
updatedAt: "2019-09-12T10:09:06.177Z"
---
**Type**: boolean
**Default**: true

Whether to show the full screen button or not. Defaults to true if your account was created after September 11th, 2019. False otherwise.
[block:image]
{
  &quot;images&quot;: [
    {
      &quot;image&quot;: [
        &quot;https://files.readme.io/4bab5ca-Screenshot_2019-09-12_at_12.07.30.png&quot;,
        &quot;Screenshot 2019-09-12 at 12.07.30.png&quot;,
        370,
        278,
        &quot;#fafafb&quot;
      ]
    }
  ]
}
[/block]

[block:callout]
{
  &quot;type&quot;: &quot;info&quot;,
  &quot;body&quot;: &quot;By default, we don&#39;t show the full screen button when you&#39;re using seats.io inside an iFrame. That is because we have no control over the size of the iFrame. You can still show the button by passing in `showFullScreenButton: true`, and implementing [onFullScreenOpened()](/docs/renderer-events-onfullscreenopened) and [onFullScreenClosed()](/docs/renderer-events-onfullscreenclosed) if necessary.&quot;
}
[/block]
