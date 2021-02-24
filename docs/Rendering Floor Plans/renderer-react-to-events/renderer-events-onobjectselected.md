---
title: "onObjectSelected"
slug: "/renderer-events-onobjectselected"
hidden: false
createdAt: "2018-08-03T13:33:32.576Z"
updatedAt: "2018-08-23T14:18:40.093Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Type**: function(object, selectedTicketType)

Fired when the user selects an object. The selected object is passed into this function as a parameter. 

selectedTicketType is only passed when using [multi-level pricing](renderer-config-pricing). The ticketType object contains a price and a ticketType property: 

```javascript
{
    "price": 40
    "ticketType": "child"
}
```
