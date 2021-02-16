---
title: "onObjectClicked"
slug: "renderer-events-onobjectclicked"
hidden: false
createdAt: "2018-08-03T13:33:25.172Z"
updatedAt: "2018-08-23T14:18:25.409Z"
---
**Type**: function(object)

Fired when the user clicks on an object. The clicked object is passed in as a parameter. 
[block:callout]
{
  &quot;type&quot;: &quot;warning&quot;,
  &quot;title&quot;: &quot;Note&quot;,
  &quot;body&quot;: &quot;This event is fired even if the object in question was not selectable. \nTo handle only valid object selections, use  [onObjectSelected](doc:renderer-events-onobjectselected) instead.&quot;
}
[/block]
