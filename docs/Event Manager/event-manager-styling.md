---
title: "Styling the Event Manager"
slug: "/event-manager-styling"
hidden: false
createdAt: "2019-07-26T06:23:24.326Z"
updatedAt: "2020-06-19T07:55:30.552Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# colorScheme
**Type**: string
**Default**: `"light"`

Sets the color scheme for the user interface, and the contrast required when rendering the floor plan elements.

For details, see the [Renderer colorScheme documentation](colorscheme).

# colors
**Type**: object

Replaces certain colors of the current color scheme.

For details, see the [Renderer colors documentation](colors).

# stylePreset
**Type**: string
**Default**: `"balance"`

Sets the preset of styles to use for the seating chart user interface.

For details, see the [Renderer stylePreset documentation](stylepreset).

# style
**Type**: object

Sets the intention for certain style properties, allowing to override the current style preset.

For details, see the [Renderer style documentation](style).
