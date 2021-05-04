---
title: "URL"
slug: "/api/url"
hidden: false
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The base URL for all API calls is `https://api-{region}.seatsio.net`

Where {region} corresponds to the the region of your account:

- `https://api-eu.seatsio.net` (Europe)
- `https://api-na.seatsio.net` (North America)
- `https://api-sa.seatsio.net` (South America)
- `https://api-oc.seatsio.net` (Oceania)

All requests must be made over [HTTPS](https://en.wikipedia.org/wiki/HTTPS). If you try to access the seats.io API over HTTP, you’ll receive a 404 (Not Found). 
