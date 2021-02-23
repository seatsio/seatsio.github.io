---
title: "Objects"
slug: "/api-objects"
hidden: false
createdAt: "2018-07-31T08:44:07.224Z"
updatedAt: "2019-12-10T12:52:35.458Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

In this section, *object* is short for *bookable object*: these can be seats that are part of a row, seats at a table, booths or general admission areas.  

In Seats.io, objects can have one of three statuses for an event: `free`, `reservedByToken`and `booked`.
Initially, all objects start in status `free`.
 
Suppose then that you've enabled `session` when rendering a chart. In that case, as soon as the ticket buyer clicks on a seat, it goes to status `reservedByToken`. Note that this is a legacy status name: in the past, holding an object was known as reserving an object. We kept the status `reservedByToken` to not break existing integrations.

`reservedByToken` means that the object is temporarily 'locked' so that only the person that originally held it can confirm the booking through a secret hold token. If no booking arrives within 15 minutes (by default) of holding the objects, seats.io automatically releases the held objects again.
 
The exact meaning of a `booked` seat depends on your sales process, but this would typically be right before the payment gets processed. An object can go from `free` to `booked` directly, or from `free` to `reservedByToken` to `booked`. That's up to you.

There are API calls to `/book` and `/release` seats`, and also to `hold them if you prefer to do that yourself instead of relying on the chart renderer parameter `session`. You can also assign other, custom statuses. Say you want to create a separate status 'VIP', which indicates that a seat can only be booked by people that are logged in on your site as VIP. That's where /changeStatus comes into place.
