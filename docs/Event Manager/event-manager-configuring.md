---
title: "Configuring the Event Manager"
slug: "event-manager-configuring"
hidden: false
createdAt: "2018-07-27T11:38:28.723Z"
updatedAt: "2021-01-29T08:37:40.827Z"
---
# divId
**Type**: string

The id of the div on your page in which you want seats.io to render the event manager. This is a required config option.

```javascript
divId: &#39;event-manager&#39;
```

# secretKey
**Type**: string
The secret key of a workspace, or the company admin key.
[block:callout]
{
  &quot;type&quot;: &quot;danger&quot;,
  &quot;title&quot;: &quot;Important&quot;,
  &quot;body&quot;: &quot;Never expose this secret key on a public web page! Only use the event manager behind a login wall.&quot;
}
[/block]
```javascript
secretKey: &#39;my secret key&#39;
```

# event
**Type**: string

The key of the event for which you want to render the event manager.

```javascript
event: &#39;smallTheatreEvent1&#39;
```

# events
**Type**: string[]

The keys of the events for which you want to render the event manager. Only `manageObjectStatuses` mode supports `events`.

# mode
**Type**: string

Can be either:

- `&#39;manageObjectStatuses&#39;`: to book and release seats
- `&#39;manageForSaleConfig&#39;`: to mark seats as [for sale and not for sale](api-v2#core-resources-objects-for-sale-not-for-sale).
- `&#39;manageTableBooking&#39;`: to indicate which tables are bookable as a whole, and which ones are bookable by seat
- `&#39;manageChannels&#39;`: to manage the list of channels for the event, and to assign objects to channels. 

# language
**Type**: string

Currently supported languages are:
- `&#39;nl&#39;` – Dutch
- `&#39;en&#39;` – English
- `&#39;de&#39;` – German
- `&#39;pt&#39;` – Portuguese
- `&#39;es&#39;` – Spanish
- `&#39;fr&#39;` – French

# messages
**Type**: object

The messages parameter allows you to change all kinds of texts that are displayed on the chart: section labels, tooltip texts, static text objects ... you name it.
Just pass in an object with the original texts as keys, and the translations as values.
For a more detailed explanation, check [this page](http://support.seats.io/integrating-seats-io/multi-language-i18n-support).

# tooltipInfo
**Type**: function(object)
**Return**: string

A function whose result will be displayed as extra information on the cursor tooltip.
See [https://docs.seats.io/docs/renderer-config-tooltipinfo](https://docs.seats.io/docs/renderer-config-tooltipinfo) for more info.

# showFullScreenButton
**Type**: boolean

Whether to show the full screen button or not. Defaults to true.

# fitTo
**Type**: string

Whether to adapt to the container div width, or to its width and height.

See [https://docs.seats.io/docs/renderer-config-fitto](https://docs.seats.io/docs/renderer-config-fitto)
