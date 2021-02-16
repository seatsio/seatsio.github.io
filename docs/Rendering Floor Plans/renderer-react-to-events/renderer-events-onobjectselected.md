---
title: "onObjectSelected"
slug: "renderer-events-onobjectselected"
hidden: false
createdAt: "2018-08-03T13:33:32.576Z"
updatedAt: "2018-08-23T14:18:40.093Z"
---
**Type**: function(object, selectedTicketType)

Fired when the user selects an object. The selected object is passed into this function as a parameter. 

selectedTicketType is only passed when using [multi-level pricing](doc:renderer-config-pricing). The ticketType object contains a price and a ticketType property: 

```javascript
{
    &quot;price&quot;: 40
    &quot;ticketType&quot;: &quot;child&quot;
}
```
