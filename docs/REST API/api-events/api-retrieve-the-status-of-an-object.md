---
title: "Retrieve the status of an object"
slug: "/api-retrieve-the-status-of-an-object"
hidden: false
createdAt: "2018-08-02T10:08:06.329Z"
updatedAt: "2019-08-23T12:09:13.081Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';




<Tabs 
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
GET https://api.seatsio.net/events/{eventKey}/objects/{objectLabel}
```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->events->retrieveObjectStatus("event34", "A-1");
```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.Events.GetObjectStatus("event34", "A-1");
```

</TabItem>
<TabItem value='java'>

```java
client.events.getObjectStatus("event34", "A-1");
```

</TabItem>
<TabItem value='python'>

```python
client.events.retrieve_object_status("event34", "A-1")
```

</TabItem>
<TabItem value='ruby'>

```ruby
client.events.retrieve_object_status key: "event34", object_key: "A-1"
```

</TabItem>
<TabItem value='javascript'>

```javascript
await client.events.retrieveObjectStatus('eventKey', 'A-1');
```

</TabItem>
</Tabs>





:::info Tip
Keep in mind that certain characters need to be [URI encoded](doc:api-uri-encoding)!
:::



## Example request



```shell
curl https://api.seatsio.net/events/event34/objects/A-1 -u aSecretKey: 
```



## Example response

Regular, non-GA object:

```json
{
    "status": "booked",
    "ticketType": "adult",
    "extraData": {
        "foo": "bar"
    },
    "orderId": "anOrder",
    "holdToken": "...",
    "forSale": true
}

```

When the object is held (status `reservedByToken`), there's an additional property `holdToken` which is the hold token string that was used to hold the object.

A general admission area will yield this response: 


```json
{
    "status": "free",
    "quantity": 10
}
```

GA areas remain in status 'free' as long as they are not fully booked. `quantity` is the number of booked places.
