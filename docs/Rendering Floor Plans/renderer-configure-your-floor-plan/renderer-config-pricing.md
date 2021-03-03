---
title: "pricing"
slug: "/renderer/config-pricing"
hidden: false
createdAt: "2018-08-03T07:40:53.601Z"
updatedAt: "2020-10-20T08:44:07.465Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Type**: array of objects  
**Default**: []  

Seats supports two types of pricing: *simple pricing* and *multi-level pricing*. Both are defined using the `pricing` configuration parameter. 

* **Simple pricing** is pretty, well, simple: there's a single price point per category. 
* **Multi-level pricing** is for when you want to offer multiple price points within the same category, for example if you have a different price for student and regular tickets. Those are what we call *ticket types*. 

You can read a more in-depth descussion about pricing categories and ticket types [here](http://support.seats.io/integrating-seats-io/multilevel-pricing).


:::info Note
For information about the priceFormatter parameter used in the examples below, see [this page](/docs/renderer/config-priceformatter)
:::



## Simple pricing

For single price points per category, simply pass a `pricing` array of js objects like so: 

```
        pricing: [
            {'category': 1, 'price': 30},
            {'category': 2, 'price': 40},
            {'category': 3, 'price': 50}
        ]
```

Note that you can also use the category labels instead of their keys: 

```
        pricing: [
            {'category': "Balcony", 'price': 30},
            {'category': "Ground Floor", 'price': 40},
            {'category': "Wheelchair", 'price': 50}
        ]
```


:::caution Category labels need to be 100% correct when used as keys
They are cAsE sEnSiTiVe: a category label "Balcony" is not the same as "balcony".
:::



<iframe width="100%" height="580" src="//jsfiddle.net/seatsio/tsd62gpb/embedded/js,html,result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>



## Multi-level pricing



<iframe width="100%" height="580" src="//jsfiddle.net/seatsio/c56bw8dg/embedded/js,html,result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

You can also pass in labels for the ticket types. Ticket buyers will see the label in tooltips, instead of the technical ID:

<iframe width="100%" height="580" src="//jsfiddle.net/seatsio/u7hs9L02/embedded/js,html,result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

Longer descriptions are possible as well:

<iframe width="100%" height="580" src="//jsfiddle.net/seatsio/q38fczru/embedded/js,html,result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

