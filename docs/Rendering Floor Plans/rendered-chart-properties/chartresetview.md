---
title: "chart.resetView()"
slug: "chartresetview"
hidden: false
createdAt: "2019-04-04T12:15:47.383Z"
updatedAt: "2019-04-04T12:39:12.496Z"
---
Resets the chart &#39;view&#39;:  
* any visible modal windows (e.g. a ticket type selector) are closed
* the chart is zoomed out to its initial zoom level

Unlike [chart.rerender()](https://docs.seats.io/docs/renderer-chart-properties-chartrerender), the chart data is not fetched again, and the current selection and hold token are left untouched.

`chart.resetView()` cannot be invoked after the hold token is expired.
