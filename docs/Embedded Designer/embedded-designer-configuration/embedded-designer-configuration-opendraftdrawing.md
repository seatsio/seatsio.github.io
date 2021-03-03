---
title: "openDraftDrawing"
slug: "/embedded-designer/configuration-opendraftdrawing"
hidden: false
createdAt: "2018-08-21T13:03:17.714Z"
updatedAt: "2018-12-30T21:55:59.036Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Type**: boolean  
**Default**: false  

By default, the chart designer opens the published version of a chart. If you want to open the draft version, you need to explicitly tell the chart designer so by passing in `openDraftDrawing: true`.   
 
Note that this requires the chart to have a draft version. You can check whether that's the case by using [this API call](api-retrieve-a-chart).
