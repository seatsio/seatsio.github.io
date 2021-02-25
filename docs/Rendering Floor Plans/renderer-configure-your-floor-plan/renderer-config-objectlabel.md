---
title: "objectLabel"
slug: "/renderer-config-objectlabel"
hidden: false
createdAt: "2018-08-03T11:53:58.437Z"
updatedAt: "2021-02-25T08:02:12.065Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Type**: function(object, defaultLabel, extraConfig)
**Default**: no label

A function that determines the label that's rendered inside an object on the chart. Can be based on `object.status`, `object.category`, `object.isSelectable()` or on other criteria. 
By default, no label is shown.

The size of an object label is calculated automatically, based on the size of the object. For tables and booths, there usually is more than enough space. For seats, however, you'll probably want to limit the label to 3 characters maximum, or else the label will become too small to read without zooming in.

Multi-line labels are not supported.

The parameters that are passed to objectLabel are:

* **object**: the current object
* **defaultLabel**: the default object label (i.e. an empty string)
* **extraConfig**: see [extraConfig](renderer-config-extraconfig) 

:::caution Warning
this function is called for each object on the chart; make sure it's fast, or chart rendering times will suffer. Avoid using slow methods such as Array.indexOf. Read more [here](http://support.seats.io/integrating-seats-io/performance-tips-for-renderer-callbacks).
:::



:::info 
To show seat labels, pass in

```
objectLabel: object => object.labels.own
```
:::



<iframe width="100%" height="580" src="//jsfiddle.net/seatsio/q6w0t3va/embedded/js,html,result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

