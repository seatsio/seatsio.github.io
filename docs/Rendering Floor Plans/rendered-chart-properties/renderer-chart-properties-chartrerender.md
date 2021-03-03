---
title: "chart.rerender()"
slug: "/renderer/chart-properties-chartrerender"
hidden: false
createdAt: "2018-08-24T08:45:59.828Z"
updatedAt: "2019-12-10T12:48:03.816Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Re-initializes and redraws the chart. 
Previously selected objects become unselected. 

:::caution Note
Do not use this method if your only intent is to clear the selection and get a new hold token. Use `chart.startNewSession()` instead, see [this page](chartstartnewsession) for more.
:::

