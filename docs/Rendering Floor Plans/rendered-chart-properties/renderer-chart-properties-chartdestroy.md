---
title: "chart.destroy()"
slug: "/renderer/chart-properties-chartdestroy"
hidden: false
createdAt: "2018-08-24T08:45:27.791Z"
updatedAt: "2019-03-01T08:57:30.153Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Removes the chart iFrame from the DOM tree, removes DOM event listeners and removes the chart from the seatsio.charts array.

Use this method instead of removing DOM elements underneath the container div directly. If not, you introduce a memory leak.

Calling destroy() twice results in an error. The same goes for calling render() after the chart has been destroyed.
