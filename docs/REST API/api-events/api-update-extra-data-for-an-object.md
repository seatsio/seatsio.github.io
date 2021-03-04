---
title: "Update extra data for an object"
slug: "/api/update-extra-data-for-an-object"
hidden: false
createdAt: "2018-08-02T10:03:43.443Z"
updatedAt: "2018-11-15T10:21:33.072Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Updates the [extra data](/docs/api/extra-data) for an object in an event, without changing the object status.




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
POST https://api-{region}.seatsio.net/events/{eventKey}/objects/{objectLabel}/actions/update-extra-data
```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->events->updateExtraData("event34", "A-1", ["name" => "John Doe"]);
```

</TabItem>
<TabItem value='csharp'>

```csharp
var extraData = new Dictionary<string, object> {{ "name", "John Doe" }};
Client.Events.UpdateExtraData("event34", "A-1", extraData);
```

</TabItem>
<TabItem value='java'>

```java
Map<?, ?> extraData = new HashMap<>();
extraData.put("name", "John Doe");
client.events.updateExtraData("event34", "A-1", extraData);

```

</TabItem>
<TabItem value='python'>

```python
extra_data = {"name": "John Doe"}
client.events.update_extra_data("event34", "A-1", extra_data)

```

</TabItem>
<TabItem value='ruby'>

```ruby
extra_data = {"name": "John Doe"}
client.events.update_extra_data key: "event34", object: "A-1", extra_data: extra_data
```

</TabItem>
<TabItem value='javascript'>

```javascript
let extraData = {'name': 'John Doe'};
await client.events.updateExtraData('eventKey', 'A-1', extraData);
```

</TabItem>
</Tabs>





:::info Tip
Keep in mind that certain characters need to be [URI encoded](/docs/api/uri-encoding)!
:::



```json
{
    "extraData": {
        "name": "John Doe"
    }
}
```


extraData must be a valid JSON object.

**Example request**

```shell
curl https://api-{region}.seatsio.net/events/event34/objects/A-1/actions/update-extra-data \
-u aSecretKey: -X POST -H 'Content-Type: application/json' -d '{"extraData": {"name": "John Doe"}}'

```

**Response**

204 - No Content
