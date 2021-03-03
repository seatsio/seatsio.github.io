---
title: "onObjectDeselected"
slug: "/renderer/events-onobjectdeselected"
hidden: false
createdAt: "2018-08-03T13:33:38.708Z"
updatedAt: "2018-08-23T14:18:50.706Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Type**: function(object, deselectedTicketType)  

Fired when the user deselects an object. The deselected object is passed into this function as a parameter. 

deselectedTicketType is only passed when using [multi-level pricing](/docs/renderer/config-pricing). The ticketType object contains a price and a ticketType property: 

```javascript
{
    "price": 40
    "ticketType": "child"
}
```
