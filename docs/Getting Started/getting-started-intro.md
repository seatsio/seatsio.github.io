---
title: "Introduction"
slug: "getting-started-intro"
hidden: false
createdAt: "2018-07-27T08:27:25.875Z"
updatedAt: "2019-01-17T12:42:29.773Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Welcome to the Seats.io Developer Hub!
This is where you'll find all information you need to integrate Seats into your ticketing platform.  

:::info Important note
Seats.io cannot be used just by itself, it is not a standalone tool. Instead, it needs to be integrated into a host ticketing system, which requires some coding, both on the front- and the backend. 

So, if you're a developer: great, welcome! This website contains all information you need to get cracking. 

If you're not a developer, that's awesome too, and you're just as welcome! But please be aware that this website can contain traces of technical terms 😉
:::

## Overview
Integrating seats.io floor plans is a 2-step process. 

1. on the **frontend**: embedding a interactive floor plan for an event in your html page
2. on the **backend**: book seats through the Seats API to make them unavailable for the next ticket buyer. 

Optionally, you can also
* Embed the floor plan designer in your backoffice application, so that your users can design their own floor plans
* Embed the Event Manager in your backoffice application for specific users (e.g. box office managers) for event management purposes (e.g. change seat statuses on the fly). 
## A word of advice: start small & keep it simple!
Seats.io is packed with a lot of features. How long you'll need to integrate depends greatly on the features you require, and on what type of ticket flow your app needs. 

To get started, we suggest you don't worry too much about the advanced features. Things like season tickets, temporarily holding seats, best available seat booking and embedding the floor plan designer are all supported, but require extra integration work. 

Instead, we typically advise you to start small: draw a simple seating chart, manually create a single event, and then start booking some seats. That way you will get you up to speed more quickly.
