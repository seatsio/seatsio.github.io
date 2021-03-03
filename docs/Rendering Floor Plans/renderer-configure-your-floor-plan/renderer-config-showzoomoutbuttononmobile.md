---
title: "showZoomOutButtonOnMobile"
slug: "/renderer/config-showzoomoutbuttononmobile"
hidden: false
createdAt: "2019-01-18T08:29:34.840Z"
updatedAt: "2019-12-10T12:43:03.408Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Type**: boolean  
**Default**: true  

When you zoom in on a seating chart, a button to reset the zoom level appears on the bottom left. 
On desktop, this is the only way to zoom out again. But on mobile, users can use pinch-to-zoom, and so in that case this button is just a handy shortcut. 

We recommend to keep it visible, but if need be, you can hide this button on mobile by passing `showZoomOutButtonOnMobile: false`.
