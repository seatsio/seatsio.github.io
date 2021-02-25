---
title: "inputDevice"
slug: "/inputdevice"
hidden: false
createdAt: "2020-12-05T23:05:33.832Z"
updatedAt: "2020-12-05T23:05:33.832Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Type**: string  
**Default**: 'auto'  

Specifies the type of input device to optimize the user interface for. These can either be:

* `'auto'`: Default. Automatically detects the device main input type (I.e: desktops and laptops get `'cursor'` whereas mobiles and tables get `'touch'`.
* `'cursor'`: UI is optimized for a cursor, and touch gestures are mostly ignored.
* `'touch'`: UI is optimized for touch, with larger buttons and full gesture support.

:::caution Keep this setting on "auto" unless necessary
Avoid having to manually support and detect new devices by yourself.

You should only specify the type of input device when you purposefully want to override the default behavior. For instance, when you have a device that supports both touch and cursor, but the auto-detected setting is not the desired one.
:::

