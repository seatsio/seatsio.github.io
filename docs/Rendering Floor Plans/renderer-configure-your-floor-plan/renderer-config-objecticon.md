---
title: "objectIcon"
slug: "/renderer-config-objecticon"
hidden: false
createdAt: "2018-08-03T11:54:13.794Z"
updatedAt: "2020-12-10T20:49:00.218Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### objectIcon
**Type**: function(object, defaultIcon, extraConfig)

By default, no icon is shown on rendered floor plans, except for: 

* a wheelchair icon on objects that have an accessible category.   
* a checkmark icon on selected objects.

The `objectIcon` callback allows you to show other icons within a seat or other object, and to override that default behaviour.
 
`objectIcon` should be a function that returns the name of a FontAwesome v4.7.0 icon. [See the full list of available icons.](https://fontawesome.com/v4.7.0/icons/)

The icon will be sized automatically, based on the size of the object in question.

The parameters that are passed to `objectIcon` are:

* **object**: the current object
* **defaultIcon**: the default icon (e.g. 'check' in case of a selected object)
* **extraConfig**: see [extraConfig](renderer-config-extraconfig) 

:::caution Warning
this function is called for each object on the chart; make sure it's fast, or chart rendering times will suffer. Read more [here](http://support.seats.io/integrating-seats-io/performance-tips-for-renderer-callbacks).
:::

