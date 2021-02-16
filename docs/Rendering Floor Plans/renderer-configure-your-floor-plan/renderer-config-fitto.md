---
title: "fitTo"
slug: "renderer-config-fitto"
hidden: false
createdAt: "2018-08-03T12:06:04.968Z"
updatedAt: "2021-02-08T13:06:21.959Z"
---
**Type**: string
**Default**: default depends on width and height of the container `&lt;div&gt;`


### How Seats.io determines rendering size
The Seats.io renderer does its best to know if a seating chart should fit to just the width of the container div, or to both the width and height. It does so by looking at the width and height of the container `&lt;div&gt;`. 
 
If the container has a width but no height, the chart will be rendered a wide as the container `&lt;div&gt;`, and as high as needed for the drawing to fit (with a minimum height of 300px). 

Suppose you&#39;re rendering a chart in a `&lt;div&gt;` on which you did not explicitly set a width or height. In that case, the `&lt;div&gt;` will be 100% the width of the parent element. Also, the height of the `&lt;div&gt;` is 0 by default. 

Seats.io will then render the chart exactly as wide as the container div, and as high as needed for the particular drawing. A chart that&#39;s 1000px pixels high will require more vertical space than a 500px high chart.

On the other hand, suppose you specified an explicit height on the container div. If the div is 100% wide (the default) and 500px high, seats.io will render the chart to make maximal use of the available space. The rendered chart will be exactly 500px high and as wide as the container. If needed, whitespace is used to fill up the remaining space.

Seats.io continuously checks for changes in container width and height, and re-renders the seating chart if needed.

### Overriding the default behaviour

With fitTo, you can override the default guess of seats.io. If your container div has no defined height at the time the chart is rendered, but you do want the chart to resize when the container height changes, you have to pass in fitTo: &#39;widthAndHeight&#39;. On the other hand, if you want the chart to only take the container width into account, pass in fitTo: &#39;width&#39;.

A good example is when the container of the chart is invisible at first. Invisible divs do not have a width or a height. When the div is made visible, seats.io assumes the chart should fit to the width of the container, and not to the width and height - even if you set an explicit height on the div. To fix that behaviour, pass in fitTo: &#39;widthAndHeight&#39;.
