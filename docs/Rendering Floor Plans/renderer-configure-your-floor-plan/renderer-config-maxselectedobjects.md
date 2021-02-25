---
title: "maxSelectedObjects"
slug: "/renderer-config-maxselectedobjects"
hidden: false
createdAt: "2018-08-03T10:08:12.717Z"
updatedAt: "2021-02-12T09:02:00.160Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Type**: number or array of objects  
**Default**: not set  

Limit the number of objects a user can select.

:::caution Unavailable on Fixed-mode rulesets
This feature is unavailable on events using a social distancing ruleset on Fixed mode.
:::

When using a **number** X, the user will be able to select a max of X objects overall.

```javascript
maxSelectedObjects: 5
```

You can also provide an array of objects, to limit the number of selectable objects **per ticket type**. For an explanation about ticket types and multilevel pricing, please refer to [here](http://support.seats.io/integrating-seats-io/multilevel-pricing).

```javascript
maxSelectedObjects: [
    { ticketType: 'adult', quantity: 2 },
    { ticketType: 'child', quantity: 3 }
]
```

A combination of a limit per ticket type and a total maximum also works:

```javascript
maxSelectedObjects: [
    { ticketType: 'adult', quantity: 5 },
    { ticketType: 'child', quantity: 5 },
    { total: 7 }
]
```

:::caution Only passed ticket types will be selectable
If you don't pass in all ticket types, the ticket buyer will not be able to select tickets in the missing ticket types. E.g. if the max number of adult tickets is set to 2, and no max is set for child tickets, the ticket buyer will only be able to select adult tickets.
:::

And you can also limit the selection **per category**.

```javascript
maxSelectedObjects: [
    { category: 'balcony', quantity: 4 },
    { category: 'stalls', quantity: 5 }
]
```

A combination of a limit per category and a total maximum also works:

```javascript
maxSelectedObjects: [
    { category: 'balcony', quantity: 5 },
    { category: 'stalls', quantity: 5 },
    { total: 7 }
]
```

:::caution Only passed categories will be selectable
If you don't pass in all categories, the ticket buyer will not be able to select tickets in the missing categories. E.g. if the max number of balcony tickets is set to 2, and no max is set for stalls tickets, the ticket buyer will only be able to select balcony tickets.
:::



<iframe width="100%" height="580" src="//jsfiddle.net/seatsio/q47ozwj0/embedded/js,html,result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>



:::caution Security notice
You should also validate this server side; a somewhat clever user can change this value right from the browser to bypass the validation.
:::

