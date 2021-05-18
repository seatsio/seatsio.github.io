---
title: "6. Submit hold token"
slug: "/tutorial/submit-hold-token"
hidden: false
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

If you passed in the `session` parameter when rendering the chart, the seats the ticket buyer selected became temporarily held. To convert this into
a definitive booking, you need to pass in the hold token (i.e. the session token) when booking the seats. So your need to submit
the hold token to your server.

You have 2 options to do so:
1. by passing in [holdTokenInputName](/docs/renderer/config-holdtokeninputname) as configuration to the chart
1. by accessing the [chart.holdToken](/docs/renderer/chart-properties-chartholdtoken) property
