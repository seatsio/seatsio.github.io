---
title: "Introduction"
slug: "/api/introduction"
hidden: false
createdAt: "2018-07-31T08:10:32.165Z"
updatedAt: "2018-07-31T08:12:15.803Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The seats.io REST API allows you to

- [book and release objects](/docs/api/objects)
- [retrieve, copy and archive charts](/docs/api/list-all-charts)
- [retrieve, create and update events](/docs/api/list-events)
- [create hold tokens](/docs/api/hold-tokens)
- [generate event reports](/docs/api/event-reports)
- [manage workspaces](/docs/api/workspaces)

## URL 

The base URL for all API calls is `https://api-{region}.seatsio.net`

Where {region} corresponds to the the region of your account:

- `https://api-eu.seatsio.net` (Europe)
- `https://api-na.seatsio.net` (North America)
- `https://api-sa.seatsio.net` (South America)
- `https://api-oc.seatsio.net` (Oceania)

All requests must be made over [HTTPS](https://en.wikipedia.org/wiki/HTTPS). If you try to access the seats.io API over HTTP, you’ll receive a 404 (Not Found). 
