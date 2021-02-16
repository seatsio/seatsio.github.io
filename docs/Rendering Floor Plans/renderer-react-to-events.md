---
title: "React to events"
slug: "renderer-react-to-events"
hidden: false
createdAt: "2018-08-03T06:50:25.148Z"
updatedAt: "2020-03-03T10:51:29.328Z"
---
When integrating an objecting chart in your page, you can react to certain events that get fired by chart.js, e.g. when a user clicks on an object. 

This is useful when you want to do things like update a shopping cart or do custom validation.

To react to these events, just implement a js function and pass it as an option to `seatsio.SeatingChart()`, like so: 

```javascript
new seatsio.SeatingChart({
    divId: &#39;chart&#39;,
    workspaceKey: &#39;[your workspace key]&#39;,
    event: &#39;[your event key]&#39;,
    onObjectSelected: function(object){
        console.dir(object);
    }
}).render();
```
