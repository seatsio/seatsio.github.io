---
title: "Update extra data for multiple objects"
slug: "/api-update-extra-data-for-multiple-objects"
hidden: false
createdAt: "2018-08-29T14:29:26.715Z"
updatedAt: "2018-11-15T11:11:51.960Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Updates the [extra data](api-extra-data) for a bunch of objects in an event, without changing the object status.




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
POST https://api.seatsio.net/events/{eventKey}/actions/update-extra-data
```

</TabItem>
<TabItem value='php'>

```php
$extraDatas = [
  "A-1" => ["name" => "John Doe"],
  "A-2" => ["name" => "Jane Doe"]
];
$seatsioClient->events->updateExtraDatas("event34", $extraDatas);
```

</TabItem>
<TabItem value='csharp'>

```csharp
var extraData1 = new Dictionary<string, object> {{ "name", "John Doe" }};
var extraData2 = new Dictionary<string, object> {{ "name", "Jane Doe" }};
var extraDatas = new Dictionary<string, object> {{ "A-1", extraData1 }, { "A-2", extraData2 }};

Client.Events.UpdateExtraDatas("event34", extraDatas);
```

</TabItem>
<TabItem value='java'>

```java
Map<String, Object> extraData1 = new HashMap<>();
extraData1.put("name", "John Doe");
Map<String, Object> extraData2 = new HashMap<>();
extraData1.put("name", "Jane Doe");

Map<String, Map<String, Object>> extraDatas = new HashMap<>();
extraDatas.put("A-1", extraData1);
extraDatas.put("A-2", extraData2);

client.events.updateExtraDatas("event34", extraDatas);
```

</TabItem>
<TabItem value='python'>

```python
extra_data1 = {"name": "John Doe"}
extra_data2 = {"name": "Jane Doe"}

client.events.update_extra_datas("event34", { "A-1": extra_data1, "A-2": extra_data2})

```

</TabItem>
<TabItem value='ruby'>

```ruby
extra_data1 = {"name": "John Doe"}
extra_data2 = {"name": "Jane Doe"}

client.events.update_extra_datas key: "event34", extra_data: { "A-1": extra_data1, "A-2": extra_data2}
```

</TabItem>
<TabItem value='javascript'>

```javascript
let extraData1 = {"name": "John Doe"}, extraData2 = {"name": "Jane Doe"};

await client.events.updateExtraDatas('eventKey', {'A-1': extraData1, 'A-2': extraData2});
```

</TabItem>
</Tabs>





```json
{
    "extraData": {
        "A-1": {
            "name": "John Doe"
        },
        "A-2": {
            "name": "Jane Doe"
        }  
    }
}
```


extraData is a mapping between object labels and extra data objects. The extra data objects must be valid JSON objects.

**Example request**

```shell
curl https://api.seatsio.net/events/event34/actions/update-extra-data \
-u aSecretKey: -X POST -H 'Content-Type: application/json' -d '{"extraData": {"A-1": {"name": "John Doe"}, "A-2": {"name": "Jane Doe"}}}'

```

**Response**

204 - No Content, or 404 when one or more objects don't exist on the chart.
