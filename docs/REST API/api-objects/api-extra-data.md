---
title: "Extra data"
slug: "/api-extra-data"
hidden: false
createdAt: "2018-08-01T12:53:10.410Z"
updatedAt: "2019-08-21T09:28:02.829Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Sometimes it's necessary to pass in some custom data when changing the object status. For example, you might need to store the name of the person that booked a seat, to use in the tooltip of a rendered chart.

`/change-object-status`, `/book`, `/release` and `/hold` take an optional extraData object for each object ID in the request. `extraData` must be a JSON object with key value pairs, not a JSON primitive.

```json
// /book, /release, /hold or /change-object-status
{
    'objects': [
        { 'objectId': 'A-5', 'extraData': { 'name': 'John Doe' }},
        { 'objectId': 'A-6', 'extraData': { 'name': 'Jane Doe' }}
    ]
}
```





<Tabs 
  defaultValue="php"
  values={[
{ label: 'PHP', value: 'php', },
{ label: 'C#', value: 'csharp', },
{ label: 'Java', value: 'java', },
{ label: 'Python', value: 'python', },
{ label: 'Ruby', value: 'ruby', },
{ label: 'Javascript', value: 'javascript', },
]}>
<TabItem value='php'>

```php
$objects = [
  ["objectId" => "A-5", "extraData" => ["name" => "John Doe"]],
  ["objectId" => "A-6", "extraData" => ["name" => "Jane Doe"]]
];
$seatsioClient->events->book("event1", $objects);
```

</TabItem>
<TabItem value='csharp'>

```csharp
var objects = new [] {
    new ObjectProperties("A-5", new Dictionary<string, object> {{"name", "John Doe"}}),
    new ObjectProperties("A-6", new Dictionary<string, object> {{"name", "Jane Doe"}})
};
Client.Events.Book("event1", objects);
```

</TabItem>
<TabItem value='java'>

```java
List<ObjectProperties> objects = Arrays.asList(
    new ObjectProperties("A-5", ImmutableMap.of("name", "John Doe")),
    new ObjectProperties("A-6", ImmutableMap.of("name", "Jane Doe"))
);
client.events.book("event1", objects);
```

</TabItem>
<TabItem value='python'>

```python
objects= [
    ObjectProperties("A-5", extra_data={"name": "John Doe"}),
    ObjectProperties("A-6", extra_data={"name": "Jane Doe"})
]
client.events.book("event1", objects)
```

</TabItem>
<TabItem value='ruby'>

```ruby
objects = [
  {:objectId => 'A-5', :extraData => {"name": "John Doe"}},
  {:objectId => 'A-6', :extraData => {"name": "Jane Doe"}}
]

client.events.book('event1', objects)
```

</TabItem>
<TabItem value='javascript'>

```javascript
let objects =[
  {'objectId' : 'A-5', 'extraData' : {'name' : 'John Doe'}}, 
  {'objectId' : 'A-6', 'extraData' : {'name' : 'John Doe'}}];

await client.events.book('eventKey', objects);
```

</TabItem>
</Tabs>



- API: added `keepExtraData` flag to calls that change the object status. If set to `true`, the existing extra data doesn't get cleared

```json
// /book, /release, /hold or /change-object-status
{
    'objects': [
        { 'objectId': 'A-5'},
        { 'objectId': 'A-6'}
    ],
    'keepExtraData': true
}
```



:::caution Updating extra data
You can update extra data for objects without changing their status too. Check [https://docs.seats.io/docs/api-update-extra-data-for-an-object](https://docs.seats.io/docs/api-update-extra-data-for-an-object) and [https://docs.seats.io/docs/api-update-extra-data-for-multiple-objects](https://docs.seats.io/docs/api-update-extra-data-for-multiple-objects) for more information. 
:::

