---
title: "chart.clearSelection()"
slug: "renderer-chart-properties-chartclearselection"
hidden: false
createdAt: "2018-08-24T09:30:21.160Z"
updatedAt: "2019-12-10T12:48:43.766Z"
---
**type**: function(successCallback, failedCallback)

Deselects the currently selected objects.

The optional successCallback is invoked when the selection was successfully cleared. This means that the objects are not selected anymore, and that they have been released if they were temporarily held.

failedCallback is invoked when releasing the held seats fails (e.g. due to a network issue). This callback is optional, just like successCallback.
```javascript
chart.clearSelection(
    () => console.log('ok'),
    () => console.log('not ok')
);
```
```javascript

```
