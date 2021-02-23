---
title: "https"
slug: "/api-https"
hidden: false
createdAt: "2018-07-31T08:10:32.165Z"
updatedAt: "2018-07-31T08:12:15.803Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

All requests must be made over [HTTPS](https://en.wikipedia.org/wiki/HTTPS). 

If you try to access the seats.io API over HTTP, you’ll receive a 301 “Moved Permanently”. 
The location header in the response will point to the requested URL, but over HTTPS.

The base URL for all API calls is `https://api.seatsio.net`
