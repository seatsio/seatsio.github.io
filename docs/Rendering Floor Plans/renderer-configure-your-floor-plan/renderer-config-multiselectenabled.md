---
title: "multiSelectEnabled"
slug: "/renderer-config-multiselectenabled"
hidden: false
createdAt: "2018-08-03T12:02:34.048Z"
updatedAt: "2020-09-21T11:52:22.577Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Type**: boolean
**Default**: false

If true, users will get a button on the top left hand side they can use to switch between different selection modes: seat selection, rectangle selection or lasso selection.

multiSelectEnabled works together with [multilevel pricing](http://support.seats.io/integrating-seats-io/multilevel-pricing):

* if the user selects multiple seats with the **same price levels** (i.e. with the same categories), the price level selector is shown. When clicking on a price level, the seats become selected and onObjectSelected is triggered for all the seats. onObjectSelected receives the selected price level as second parameter.
* if the user selects multiple seats **without price levels**, the seats become selected and onObjectSelected is triggered for all the seats. onObjectSelected receives 'undefined' as second parameter (no price level selected).
* if the user selects multiple seats with **different price levels** (i.e. with different categories), the price level selector is not shown, and no seats are selected.
* if the user selects **some seats with price levels** and **some seats without price levels**, the price level selector is not shown, and no seats are selected.
