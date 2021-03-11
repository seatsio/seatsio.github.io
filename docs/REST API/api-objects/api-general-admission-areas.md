---
title: "General admission areas"
slug: "/api/general-admission-areas"
hidden: false
createdAt: "2018-08-01T12:38:00.288Z"
updatedAt: "2020-10-01T08:26:37.415Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

To book general admission places (let's say 5), you can either:

- pass in the label of the general admission area 5 times 
- or pass in the label of the general admission area and a quantity (e.g. 5)

:::info Note
All GA places passed in to this API will be considered as "used seats" for [pricing purposes](https://www.seats.io/pricing).
:::





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
POST https://api-{region}.seatsio.net/events/{eventKey}/actions/change-object-status
POST https://api-{region}.seatsio.net/events/{eventKey}/actions/book
POST https://api-{region}.seatsio.net/events/{eventKey}/actions/hold
POST https://api-{region}.seatsio.net/events/{eventKey}/actions/release
```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->events->changeObjectStatus("event1", [["objectId" => "GeneralAdmission1", "quantity" => 3]], "myCustomStatus");
```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.Events.ChangeObjectStatus("event1", new [] { new ObjectProperties("GeneralAdmission1", 3")  }, "myCustomStatus");
```

</TabItem>
<TabItem value='java'>

```java
client.events.changeObjectStatus("event1", Arrays.asList(new ObjectProperties("GeneralAdmission1", 3)), "myCustomStatus");

```

</TabItem>
<TabItem value='python'>

```python
client.events.change_object_status("event1", [ObjectProperties("GeneralAdmission1", quantity=3)], status="myCustomStatus")
```

</TabItem>
<TabItem value='ruby'>

```ruby
props = {:objectId => 'A-1', :quantity => 3}

client.events.change_object_status('event1', [props], 'myCustomStatus')
```

</TabItem>
<TabItem value='javascript'>

```javascript
await client.events.changeObjectStatus('eventKey', {'objectId' : 'GeneralAdmission1', 'quantity' : 3} , 'myCustomStatus');
```

</TabItem>
</Tabs>





## Request without quantity



```javascript
{
    'objects': ['GA1', 'GA1', 'GA1', 'GA1', 'GA1'],
    'status': 'myCustomStatus'
}
```



## Request with quantity



```javascript
{
    'objects': [{'objectId': 'GA1', 'quantity': 5}],
    'status': 'myCustomStatus'
}
```



## Temporarily holding places in a GA area

Holds for GA areas work in the same way as regular objects. Have a look at our [documentation](/docs/api/temporarily-hold-objects) for more details.
