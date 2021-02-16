---
title: "Embed a floor plan in your page"
slug: "renderer-embed-a-floor-plan"
hidden: false
createdAt: "2018-08-03T06:50:06.440Z"
updatedAt: "2020-08-31T10:50:36.479Z"
---
You have created a seating chart, and you&#39;ve created an event for it. Great, you’re ready to show the seating chart to your users.

To do this, you need to: 

1. add an empty div to your page and give it an id. `chart` is an excellent choice.
2. load [https://cdn.seatsio.net/chart.js](https://cdn.seatsio.net/chart.js)
3. create a new `seatsio.SeatingChart` object, configure it and call its `render()` method

So in short: just copy &amp; paste this code snippet and adapt it to your needs: 
```html
<div id="chart"></div>
<script src="https://cdn.seatsio.net/chart.js"></script>
<script>
    new seatsio.SeatingChart({
        divId: 'chart',
        workspaceKey: 'your workspace key',
        event: 'your event key'
    }).render();
</script>
```

[block:callout]
{
  &quot;type&quot;: &quot;info&quot;,
  &quot;body&quot;: &quot;If you&#39;re developing a *React* application, consider using our React wrapper: https://github.com/seatsio/seatsio-react\n\nFor *Android* there&#39;s https://github.com/seatsio/seatsio-android\n\nFor *iOS* https://github.com/seatsio/seatsio-ios\n\nIn *TypeScript* https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/seatsio&quot;
}
[/block]
In the rest of the documentation, code examples will be presented in interactive code editors like the one below. 

Feel free to play around! 
[block:html]
{
  &quot;html&quot;: &quot;&lt;iframe width=\&quot;100%\&quot; height=\&quot;580\&quot; src=\&quot;//jsfiddle.net/seatsio/xjmk1g36/embedded/js,html,result/\&quot; allowfullscreen=\&quot;allowfullscreen\&quot; frameborder=\&quot;0\&quot;&gt;&lt;/iframe&gt;&quot;
}
[/block]
