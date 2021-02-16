---
title: "onReleaseHoldFailed"
slug: "renderer-events-onreleaseholdfailed"
hidden: false
createdAt: "2018-08-03T13:35:12.995Z"
updatedAt: "2020-10-21T08:35:22.230Z"
---
**Type**: function(objects, ticketTypes)

If a user deselects a held seat, a release request is sent to the seats.io server. 

If that call fails, onReleaseHoldFailed is invoked.


[block:callout]
{
  &quot;type&quot;: &quot;info&quot;,
  &quot;title&quot;: &quot;Note&quot;,
  &quot;body&quot;: &quot;If you signed up after 21 Oct 2020, selected objects will also be automatically re-selected again if the call to release the hold fails, and a message will be displayed to the user to make them aware their de-selection was unsuccessful. \n\nThis automatic re-selection in case of a failed hold release is not enabled by default, to not break existing integrations. If you do want it enabled on your account, feel free to reach out to us on [support@seats.io](mailto:support@seats.io), and we&#39;ll make that happen.&quot;
}
[/block]
