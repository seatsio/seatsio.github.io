---
title: "object.accessible"
slug: "/objectaccessible"
hidden: false
createdAt: "2020-03-24T23:36:07.998Z"
updatedAt: "2020-03-25T09:23:44.683Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**type**: boolean
**default**: `false`

`true` if either the object or its category is marked as accessible in the designer.

:::caution 
If your account was created before May 15th 2019, and `unifiedObjectPropertiesInCallbacks` property is not set to true (by default, this property is set to false for backwards compability), you may notice slight differences between callbacks executed inside the seats.io iFrame and outside the iFrame. For instance, for callbacks executed inside the iframe, if a seat is made accessible through its category, object.accessible would be set to false. 

Old accounts can override this behavior using [`unifiedObjectPropertiesInCallbacks` ](https://docs.seats.io/docs/renderer-config-unifiedobjectpropertiesincallbacks) flag.
:::

