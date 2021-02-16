---
title: "inputDevice"
slug: "inputdevice"
hidden: false
createdAt: "2020-12-05T23:05:33.832Z"
updatedAt: "2020-12-05T23:05:33.832Z"
---
**Type**: string
**Default**: &#39;auto&#39;

Specifies the type of input device to optimize the user interface for. These can either be:

* `&#39;auto&#39;`: Default. Automatically detects the device main input type (I.e: desktops and laptops get `&#39;cursor&#39;` whereas mobiles and tables get `&#39;touch&#39;`.
* `&#39;cursor&#39;`: UI is optimized for a cursor, and touch gestures are mostly ignored.
* `&#39;touch&#39;`: UI is optimized for touch, with larger buttons and full gesture support.
[block:callout]
{
  &quot;type&quot;: &quot;warning&quot;,
  &quot;title&quot;: &quot;Keep this setting on \&quot;auto\&quot; unless necessary&quot;,
  &quot;body&quot;: &quot;Avoid having to manually support and detect new devices by yourself.\n\nYou should only specify the type of input device when you purposefully want to override the default behavior. For instance, when you have a device that supports both touch and cursor, but the auto-detected setting is not the desired one.&quot;
}
[/block]
