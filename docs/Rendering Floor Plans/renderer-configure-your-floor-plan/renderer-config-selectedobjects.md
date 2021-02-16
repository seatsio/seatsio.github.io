---
title: "selectedObjects"
slug: "renderer-config-selectedobjects"
hidden: false
createdAt: "2018-08-03T09:21:56.568Z"
updatedAt: "2019-04-26T14:42:37.873Z"
---
**Type**: array&lt;string | object&gt;
**Default**:[]

Render the chart with the specified objects selected (if they are still free). 

You can pass object labels inside the array, like this: 

```javascript
selectedObjects: [&#39;A-1&#39;, &#39;A-2&#39;]
```

It&#39;s also possible to pass in ticket types:

```javascript
selectedObjects: [{label: &#39;A-1&#39;, ticketType: &#39;adult&#39;}, {label: &#39;A-2&#39;, ticketType: &#39;child&#39;}]
```

For general admission areas, you need to specify not only the object label, but also the amount, like so: 
 
```javascript
selectedObjects: [{label: &#39;MyGA&#39;, amount: 4}]
``` 

Note that you can mix and match the two, so this will select both the seats and the GA as expected:
 
 ```javascript
 selectedObjects: [&#39;A-1&#39;, &#39;A-2&#39;, {label: &#39;MyGA&#39;, amount: 4}]
 ```
[block:html]
{
  &quot;html&quot;: &quot;&lt;iframe width=\&quot;100%\&quot; height=\&quot;580\&quot; src=\&quot;//jsfiddle.net/seatsio/o4u3gzb2/embedded/js,html,result/\&quot; allowfullscreen=\&quot;allowfullscreen\&quot; frameborder=\&quot;0\&quot;&gt;&lt;/iframe&gt;&quot;
}
[/block]
