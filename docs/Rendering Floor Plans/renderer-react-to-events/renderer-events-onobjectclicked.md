---
title: "onObjectClicked"
slug: "/renderer/events-onobjectclicked"
hidden: false
createdAt: "2018-08-03T13:33:25.172Z"
updatedAt: "2018-08-23T14:18:25.409Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Type**: function(object)  

Fired when the user clicks on an object. The clicked object is passed in as a parameter. 

:::caution Note
This event is fired even if the object in question was not selectable. 
To handle only valid object selections, use  [onObjectSelected](doc:renderer-events-onobjectselected) instead.
:::

