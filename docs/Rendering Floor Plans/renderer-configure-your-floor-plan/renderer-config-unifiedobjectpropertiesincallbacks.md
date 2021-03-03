---
title: "unifiedObjectPropertiesInCallbacks"
slug: "/renderer/config-unifiedobjectpropertiesincallbacks"
hidden: false
createdAt: "2019-05-15T20:55:00.486Z"
updatedAt: "2020-07-27T06:17:22.664Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Type**: boolean  
**Default**: `true` if account created after May 15th 2019, `false` otherwise.  

If set to `true`, callbacks that are executed within the seats.io iFrame (e.g. `objectColor` and `objectIcon`) receive an object that has the same properties as objects passed to callbacks that are executed outside of the iFrame (e.g. `onObjectSelected`). Check our docs for a [complete list of properties](/docs/renderer-object-properties).

If `false`, the structure of inner-iFrame objects differs slightly from outer-iFrame objects.

For accounts created after May 15th 2019, this property is set to `true` by default. You cannot set it to `false`.
