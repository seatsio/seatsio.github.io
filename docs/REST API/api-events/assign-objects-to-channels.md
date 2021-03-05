---
title: "Assign objects to channels"
slug: "/api/assign-objects-to-channels"
hidden: false
createdAt: "2020-06-22T08:21:09.332Z"
updatedAt: "2020-06-22T09:59:52.975Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

You can assign objects to a channel by associating a channel key with a list of object labels. 
Each object can only be assigned to a single channel. 



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
POST https://api.seatsio.net/events/{eventKey}/channels/assign-objects
```

</TabItem>
<TabItem value='php'>

```php
$this->seatsioClient->events->assignObjectsToChannels($event->key, [
	"channelKey1" => ["A-1", "A-2"],
	"channelKey2" => ["A-3"]
]);
```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.Events.AssignObjectsToChannel(event1.Key, new
{
	channelKey1 = new [] {"A-1", "A-2"},
	channelKey2 = new [] {"A-3"},
});

```

</TabItem>
<TabItem value='java'>

```java
client.events.assignObjectsToChannel(event.key, ImmutableMap.of(
  "channelKey1", newHashSet("A-1", "A-2"),
  "channelKey2", newHashSet("A-3")
));
```

</TabItem>
<TabItem value='python'>

```python
self.client.events.assign_objects_to_channels(event.key, {
  "channelKey1": ["A-1", "A-2"],
  "channelKey2": ["A-3"]
})
```

</TabItem>
<TabItem value='ruby'>

```ruby
@seatsio.events.assign_objects_to_channels key: event.key, channelConfig: {
  "channelKey1" => ["A-1", "A-2"],
  "channelKey2" => ["A-3"]
}
```

</TabItem>
<TabItem value='javascript'>

```javascript
await client.events.assignObjectsToChannel(event.key, {
  "channelKey1": ["A-1", "A-2"],
  "channelKey2": ["A-3"]
})
```

</TabItem>
</Tabs>





```javascript
{
    "channelConfig": {
        "fc34bdf0-0175-5a0a-e9af-9b0310585056": [
            "Stalls H-11-32",
            "Stalls H-11-33"
        ],
        "7a273f09-8c3a-2782-af93-6546d32abbe5": [
            "Stalls H-11-36",
            "Stalls H-11-37",
            "Stalls H-11-38"
        ]
    }
}
```

The request body should contain a json object with one property (`channelConfig`), that has a property per channel: the channel key as property name, and an array of object labels as property value.

**Response**

204 - No Content
