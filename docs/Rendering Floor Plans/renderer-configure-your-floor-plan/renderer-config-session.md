---
title: "session"
slug: "renderer-config-session"
hidden: false
createdAt: "2019-12-10T12:29:10.105Z"
updatedAt: "2019-12-10T13:00:59.831Z"
---
**Type**: string
**Possible values**: `&#39;continue&#39;`, `&#39;start&#39;`, `&#39;manual&#39;`, `&#39;none&#39;` 
**Default**: `&#39;none&#39;`

Start a session to temporarily hold objects upon selection.

A session lasts for 15 minutes (or whatever you set on your settings page). When the ticket buyer clicks on a place within that period, it gets held. Other users won&#39;t be able to book the same place within that period. If the place is not booked (e.g. payment has never been received) before the end of the session, it&#39;s automatically released again.

A session is identified by a hold token. Consider this the session ID. When starting a session, we store the hold token in session storage, so it&#39;s still available after a page refresh.

- `&#39;continue&#39;`: continue a previously started session by using the hold token in session storage, or start a new session if there&#39;s no hold token.
- `&#39;start&#39;`: start a new session (and generate a new hold token).
- `&#39;manual&#39;`: continue the session identified by [`holdToken`](renderer-config-holdtoken). Use this when you generated a hold token through our backend API.
- `&#39;none&#39;`: session is disabled. Objects don&#39;t get held on click.

[This article](http://support.seats.io/integrating-seats-io/holding-seats) gives a more in-depth overview of the holding seats functionality.
