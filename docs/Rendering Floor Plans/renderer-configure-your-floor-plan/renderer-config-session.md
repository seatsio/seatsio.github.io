---
title: "session"
slug: "/renderer-config-session"
hidden: false
createdAt: "2019-12-10T12:29:10.105Z"
updatedAt: "2019-12-10T13:00:59.831Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Type**: string
**Possible values**: `'continue'`, `'start'`, `'manual'`, `'none'` 
**Default**: `'none'`

Start a session to temporarily hold objects upon selection.

A session lasts for 15 minutes (or whatever you set on your settings page). When the ticket buyer clicks on a place within that period, it gets held. Other users won't be able to book the same place within that period. If the place is not booked (e.g. payment has never been received) before the end of the session, it's automatically released again.

A session is identified by a hold token. Consider this the session ID. When starting a session, we store the hold token in session storage, so it's still available after a page refresh.

- `'continue'`: continue a previously started session by using the hold token in session storage, or start a new session if there's no hold token.
- `'start'`: start a new session (and generate a new hold token).
- `'manual'`: continue the session identified by [`holdToken`](renderer-config-holdtoken). Use this when you generated a hold token through our backend API.
- `'none'`: session is disabled. Objects don't get held on click.

[This article](http://support.seats.io/integrating-seats-io/holding-seats) gives a more in-depth overview of the holding seats functionality.
