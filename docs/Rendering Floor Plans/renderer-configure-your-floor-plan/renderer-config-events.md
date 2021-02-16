---
title: "events"
slug: "renderer-config-events"
hidden: false
createdAt: "2018-08-03T07:40:42.030Z"
updatedAt: "2020-10-27T18:15:12.547Z"
---
**Type**: array of strings

The key of the events for which you want to render the seating chart.
[block:callout]
{
  &quot;type&quot;: &quot;warning&quot;,
  &quot;title&quot;: &quot;Incompatible with channels&quot;,
  &quot;body&quot;: &quot;Currently the Channels functionality is not supported when using multiple events.&quot;
}
[/block]
Useful to implement season tickets functionality. If an object is booked for one (or more) events in the list, it will show up as booked for the &#39;season&#39;.

```javascript
events: ['smallTheatreEvent1', 'smallTheatreEvent2', 'smallTheatreEvent3']
```

[block:callout]
{
  &quot;type&quot;: &quot;info&quot;,
  &quot;title&quot;: &quot;Note&quot;,
  &quot;body&quot;: &quot;Either `events` or `event` must be passed in, but not both.&quot;
}
[/block]
