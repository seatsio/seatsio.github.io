---
title: "designer.destroy()"
slug: "embedded-designer-functions-destroy"
hidden: false
createdAt: "2018-08-21T13:04:10.312Z"
updatedAt: "2018-08-21T13:56:09.561Z"
---
Removes the chart designer iFrame from the DOM tree, removes DOM event listeners and removes the designer from the seatsio.charts array.

Use this method instead of removing DOM elements underneath the container div directly.
[block:callout]
{
  &quot;type&quot;: &quot;warning&quot;,
  &quot;title&quot;: &quot;Note&quot;,
  &quot;body&quot;: &quot;Calling destroy() twice results in an error. The same goes for calling render() after the chart designer has been destroyed.&quot;
}
[/block]
