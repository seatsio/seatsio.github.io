---
title: "channels"
slug: "/renderer-config-channels"
hidden: false
createdAt: "2020-06-17T12:18:26.392Z"
updatedAt: "2020-10-13T07:30:09.628Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Type**: array of strings  
**Default**: undefined  

The *keys* of the channels you wish to make selectable. Objects that have no channel assigned, or that have a channel assigned whose key is not in this list, will not be selectable. However, by passing in `NO_CHANNEL` as channel key, objects without channel become selectable.

You cannot supply an empty array: the channels array needs to be either undefined, or an array of at least one element.

```javascript
channels: ['0ef73fd9-693c-5073-98ac-d1dd8cd86536', 'd3dffb97-c797-f2c3-280b-0c89e996ec19']

channels: ['0ef73fd9-693c-5073-98ac-d1dd8cd86536', 'NO_CHANNEL']
```

