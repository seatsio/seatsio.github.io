---
title: "Subaccounts"
slug: "/api/subaccounts"
hidden: false
createdAt: "2018-08-02T10:12:51.493Z"
updatedAt: "2020-02-28T13:13:56.342Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


:::caution 
Subaccounts are deprecated. Please use [workspaces](/docs/api/workspaces) instead.
:::

A subaccount is a special type of Seats.io user account. Its usage is billed to the *parent account* (i.e. your account). You can create it from within the seats.io webapp. 

Other than that, subaccounts are normal and fully functional Seats accounts. Just like normal accounts, they:
* can log in to the dashboard (https://app.seats.io)
* have their own set of API keys
* have their own set of floor plans

If you want your users to do their own floor plan design, you should create a subaccount for each of them, to prevent them from accessing and editing each other floor plans, and to prevent them from booking seats on other than their own events.
