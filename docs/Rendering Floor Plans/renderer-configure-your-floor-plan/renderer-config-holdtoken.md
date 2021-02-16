---
title: "holdToken"
slug: "renderer-config-holdtoken"
hidden: false
createdAt: "2018-08-03T12:00:46.621Z"
updatedAt: "2020-08-26T10:24:07.993Z"
---
**Type**: string

When starting a [session](https://docs.seats.io/docs/renderer-config-session), a hold token is generated and stored in the browser&#39;s session storage. That way, the hold token will still available after a page refresh, allowing the renderer to re-select the previously selected and held seats.

But you can also [create a hold token](api-create-a-hold-token) through our API. If you do so, set `session` to `manual` when rendering the chart, and pass in the `holdToken` parameter.
