---
title: "Update channels for an event"
slug: "/api/update-channels-for-an-event"
hidden: false
createdAt: "2020-06-22T08:20:48.512Z"
updatedAt: "2020-06-22T09:51:45.689Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Updates the channels for an event, without touching the assigned objects to those channels.



<Tabs 
  groupId="serverside-code-samples"
  defaultValue="shell"
  values={[
{ label: 'Text', value: 'shell', },
{ label: 'PHP', value: 'php', },
{ label: 'C#', value: 'csharp', },
{ label: 'Java', value: 'java', },
{ label: 'Python', value: 'python', },
{ label: 'Ruby', value: 'ruby', },
{ label: 'Javascript', value: 'javascript', },
]}>
<TabItem value='shell'>

```shell
POST https://api.seatsio.net/events/{eventKey}/channels/update
```

</TabItem>
<TabItem value='php'>

```php
$this->seatsioClient->events->updateChannels($event->key, [
	"channelKey1" => new Channel("channel 1", "#FF0000", 1),
	"channelKey2" => new Channel("channel 2", "#00FFFF", 2)
]);
```

</TabItem>
<TabItem value='csharp'>

```csharp
var channels = new Dictionary<string, Channel>()
{
  { "channelKey1", new Channel("channel 1", "#FFFF00", 1) },
  { "channelKey2", new Channel("channel 2", "#00FFFF", 2) }
};

Client.Events.UpdateChannels(event1.Key, channels);
```

</TabItem>
<TabItem value='java'>

```java
client.events.updateChannels(event.key, ImmutableMap.of(
  "channelKey1", new Channel("channel 1", "#FFFF99", 1),
  "channelKey2", new Channel("channel 2", "#FFFF99", 2)
));
```

</TabItem>
<TabItem value='python'>

```python
self.client.events.update_channels(event.key, {
  'channelKey1': Channel(name='channel 1', color='#00FF00', index=1),
  'channelKey2': Channel(name='channel 2', color='#FF0000', index=2),
})
```

</TabItem>
<TabItem value='ruby'>

```ruby
@seatsio.events.update_channels key: event.key, channels: {
  "channelKey1" => {"name" => "channel 1", "color" => "#FF0000", "index" => 1},
  "channelKey2" => {"name" => "channel 2", "color" => "#0000FF", "index" => 2}
}
```

</TabItem>
<TabItem value='javascript'>

```javascript
await client.events.updateChannels(event.key, {
  "channelKey1": {
    "name": "channel 1",
    "color": "#FFAABB",
    "index": 1
  },
  "channelKey2": {
    "name": "channel 2",
    "color": "#FFAACC",
    "index": 2
  }
})
```

</TabItem>
</Tabs>





```json
{
    "channels": {
        "fc34bdf0-0175-5a0a-e9af-9b0310585056": {
            "name": "Channel Watermelon",
            "color": "#ED303D",
            "index": 1
        },
        "7a273f09-8c3a-2782-af93-6546d32abbe5": {
            "name": "Channel Lime",
            "color": "#97CA48",
            "index": 2
        },
        "535ac74d-9c67-35da-84b9-6cdd4b99ae71": {
            "name": "Channel Sky",
            "color": "#2381FB",
            "index": 3
        }
    }
}
```

The request body should contain a json object with one property (`channels`), that has a property per channel: the channel key as property name, and the channel configuration as property value. 

A channel configuration has the following properties: 
* name: this needs to be unique and is required
* color (optional): a css color; color is used in the Event Manager, to be able to distinguish different channels. End users (ticket buyers) will not get to see the channel by color. 
* index (optional): a number that indicates the ordering of channels; index is used in the Event Manager, to keep ordering of channels consistent.  

Please note that using this API endpoint replaces any previous channels configuration, and that channels are defined by their key. 
* To create a new channel, add it to the `channels` object using a fresh key (UUIDs are a great choice)
* To delete a channel, simply don't define its key in the `channels` object
* To update the name, color or index of a channel, change its value

**Response**

204 - No Content
