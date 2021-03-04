---
title: "Introduction"
slug: "/embedded-designer/introduction"
hidden: false
createdAt: "2018-08-21T12:48:15.319Z"
updatedAt: "2020-02-28T21:33:37.473Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

If you're building a full self-service platform, you'll want your users to be able to draw their own floor plans without intervention from your own team.

Seats supports this by a combination of two features: an embeddable Designer, and workspaces.   

* The Seats Designer is embeddable: you can embed the designer tool in your web page in much the same fashion as you can embed an interactive floor plan. 

* Workspaces: you can create a workspace for each of your users, so that they have their own secret key, and a separate set of floor plans, so that they can't see or edit each other's floor plans. 
Check the [Workspaces API documentation](/docs/api/workspaces) for more information on how to create, update and retrieve workspaces. 

## Embedding the designer

You can embed the floor plan designer in your backoffice with a piece of javascript, in much the same fashion as you would embed an interactive floor plan for your ticket buyers, but with some different configuration options:

```html
<div id="chartDesigner"></div>
<script src="https://cdn-{region}.seatsio.net/chart.js"></script>

<script>
    new seatsio.SeatingChartDesigner({
        divId: 'chartDesigner',
        secretKey: 'workspace secret key',
        chartKey: 'your chart key'
    }).render();
</script>
```

The `chart.js` URL depends on the region of your account:

- `https://cdn-eu.seatsio.net/chart.js` (Europe)
- `https://cdn-na.seatsio.net/chart.js` (North America)
- `https://cdn-sa.seatsio.net/chart.js` (South America)
- `https://cdn-oc.seatsio.net/chart.js` (Oceania)

## Secret Key
You need to provide the secret key (of your [workspace](/docs/api/workspaces)). Be sure to keep this key a secret: anyone who has access to this key can edit seating charts and can book seats. So please don't push it to code repositories and only use it in pages served over https.

You can find the secret key on the [workspace settings page](https://app.seats.io/workspace-settings).   

## Chart Key
This is an optional parameter. If you provide it, the designer will load the specified chart in edit mode. If you don’t, a new chart will be created automatically.

You can further configure the embedded Designer with extra configuration parameters and callbacks.
