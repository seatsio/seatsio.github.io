---
title: "onHoldSucceeded"
slug: "/renderer-events-onholdsucceeded"
hidden: false
createdAt: "2018-08-03T13:34:42.314Z"
updatedAt: "2019-12-10T12:47:09.816Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Type**: function(objects, ticketTypes)  

When in a [`session`](renderer-config-session), the user's browser will automatically hold selected places for a period of time.  

If everything goes well, i.e. when the seats.io server indicates that a hold was successful, onHoldSucceeded is called.

The held objects are passed into this callback as a parameter, as well as the selected ticket types.
