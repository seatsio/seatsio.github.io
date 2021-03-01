---
title: "Delete an event"
slug: "/api-delete-an-event"
hidden: false
createdAt: "2018-08-02T09:57:40.460Z"
updatedAt: "2018-11-15T10:17:38.037Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';




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
DELETE https://api.seatsio.net/events/{eventKey}
```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->events->delete("event34");
```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.Events.Delete("event34");
```

</TabItem>
<TabItem value='java'>

```java
client.events.delete("event34");
```

</TabItem>
<TabItem value='python'>

```python
client.events.delete("event34")
```

</TabItem>
<TabItem value='ruby'>

```ruby
client.events.delete key: "event34"

```

</TabItem>
<TabItem value='javascript'>

```javascript
await client.events.delete('eventKey');
```

</TabItem>
</Tabs>




**Example request**

```shell
curl https://api.seatsio.net/events/event34 \
-u aSecretKey: -X DELETE -H 'Content-Type: application/json'
```

**Response**

204 - No Content
