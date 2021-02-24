---
title: "onHoldFailed"
slug: "/renderer-events-onholdfailed"
hidden: false
createdAt: "2018-08-03T13:34:53.659Z"
updatedAt: "2020-10-21T08:35:44.303Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Type**: function(objects, ticketTypes)

When in a [`session`](renderer-config-session), the user's browser will automatically hold selected places for a period of time, by issuing a direct API call to the Seats.io server.  

In case this API call fails, e.g. because of a network error, the `onHoldFailed()` callback is fired. 

This allows you to notify your user using your own error messaging style.


:::info Note
If you signed up after 21 Oct 2020, selected objects will also be automatically deselected again if the hold call fails, and a message will be displayed to the user to make them aware their selection was unsuccessful. 

This automatic deselection in case of a failed hold is not enabled by default, to not break existing integrations. If you do want it enabled on your account, feel free to reach out to us on [support@seats.io](mailto:support@seats.io), and we'll make that happen.
:::
