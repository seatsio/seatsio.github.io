---
title: "priceFormatter"
slug: "/renderer/config-priceformatter"
hidden: false
createdAt: "2018-08-03T09:05:21.924Z"
updatedAt: "2020-10-02T12:55:00.332Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Type**: function(price)  
**Default**: implementation**: return the raw price, as provided by the [pricing](/docs/renderer/config-pricing) configuration parameter (i.e. a number or a string).   

A function that formats a price when it's shown to an end user. This is notably used in the tooltip you see when you hover over a seat. 

This function is executed in the context of your page, meaning you can use a library like [accounting.js](https://github.com/openexchangerates/accounting.js) in your implementation.


:::caution A word on encoding
The result of this function will be escaped. This means you can't use html entities or codes (respectively `&dollar;`and `&#36;` for $). 

This might now work if you're not encoding your page as UTF-8. In that case, you should be able to use the unicode value (e.g. `\u0024` for $)
:::

Note that the result of this function will be escaped, meaning you can't use html entities such as `&#36;`

<iframe width="100%" height="580" src="//jsfiddle.net/seatsio/tsd62gpb/embedded/js,html,result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

