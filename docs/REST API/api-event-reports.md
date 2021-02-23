---
title: "Event Reports"
slug: "/api-event-reports"
hidden: false
createdAt: "2018-08-02T10:09:25.475Z"
updatedAt: "2018-08-23T14:15:26.617Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The *Event Report* endpoints all give you access to the data about an event. 

The Seats API provides 2 types of reports: 

1. [Detailed reports](doc:api-detailed-reports): these contain details on each and every bookable object
2. [Summary reports](doc:api-summary-reports): these don't contain the individual bookable objects, but give you an aggregated view (e.g. the total number of seats with status "BOOKED"). 

You can retrieve each of these reports in different representations, which we call report types. For example, the *byLabel* report will give you an overview of all seats per seat label, whereas the "byStatus" report will give you an overview of all different seat statuses present on the event, together with a list of the seats that have that status. 

:::danger Important: Do not use these endpoints to check whether a seat is free before trying to book it!
Not only is it unnecessary to pre-check the seat status, it is actually harmful: **you will get double bookings** if you do so. 

Read more on the topic [here](http://support.seats.io/integrating-seats-io/faq/why-am-i-seeing-double-bookings-in-my-system).
:::
