---
title: "onDesignerRenderingFailed"
slug: "ondesignerrenderingfailed"
hidden: false
createdAt: "2019-04-02T12:58:55.980Z"
updatedAt: "2019-04-02T13:02:19.694Z"
---
Type: function(designer)

Callback function that&#39;s invoked when the chart designer could not be loaded for some reason, e.g. in case of an unexisting chart key. 
The designer object is passed in as a parameter, to allow you to [destroy](https://docs.seats.io/docs/embedded-designer-functions-destroy) it if needed, like so:

```
onDesignerRenderingFailed: function(designer) {
  designer.destroy();
}
```
