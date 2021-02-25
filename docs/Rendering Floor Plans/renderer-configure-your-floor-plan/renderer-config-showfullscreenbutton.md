---
title: "showFullScreenButton"
slug: "/renderer-config-showfullscreenbutton"
hidden: false
createdAt: "2019-09-12T08:56:00.296Z"
updatedAt: "2019-09-12T10:09:06.177Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Type**: boolean
**Default**: true

Whether to show the full screen button or not. Defaults to true if your account was created after September 11th, 2019. False otherwise.

![Screenshot 2019-09-12 at 12.07.30.png](/img/readme/Screenshot-2019-09-12-at-12.07.30.png)



:::info 
By default, we don't show the full screen button when you're using seats.io inside an iFrame. That is because we have no control over the size of the iFrame. You can still show the button by passing in `showFullScreenButton: true`, and implementing [onFullScreenOpened()](/docs/renderer-events-onfullscreenopened) and [onFullScreenClosed()](/docs/renderer-events-onfullscreenclosed) if necessary.
:::

