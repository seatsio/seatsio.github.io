---
title: "Remove a tag from a chart"
slug: "/api-remove-a-tag-from-a-chart"
hidden: false
createdAt: "2018-08-02T08:56:35.720Z"
updatedAt: "2018-11-15T10:02:40.391Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



<Tabs 
  defaultValue="text"
  values={[
{ label: 'Text', value: 'text', },
{ label: 'PHP', value: 'php', },
{ label: 'C#', value: 'csharp', },
{ label: 'Java', value: 'java', },
{ label: 'Python', value: 'python', },
{ label: 'Ruby', value: 'ruby', },
{ label: 'Javascript', value: 'javascript', },
]}>
<TabItem value='text'>

```text
DELETE https://api.seatsio.net/charts/{chartKey}/tags/{chartName}
```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->charts->removeTag("4250fffc-e41f-c7cb-986a-2c5e728b8c28", "tag1");
```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.Charts.RemoveTag("4250fffc-e41f-c7cb-986a-2c5e728b8c28", "tag1");
```

</TabItem>
<TabItem value='java'>

```java
client.charts.removeTag("4250fffc-e41f-c7cb-986a-2c5e728b8c28", "tag1");
```

</TabItem>
<TabItem value='python'>

```python
client.charts.remove_tag("749b9650-24fb-11e7-93ae-92361f002671", "tag1")
```

</TabItem>
<TabItem value='ruby'>

```ruby
client.charts.remove_tag("749b9650-24fb-11e7-93ae-92361f002671", "tag1")
```

</TabItem>
<TabItem value='javascript'>

```javascript
await client.charts.removeTag('chartKey', 'tag1');
```

</TabItem>
</Tabs>



:::info Tip
Keep in mind that your tag needs to be [URI encoded](doc:api-uri-encoding)!
:::
**Example request**
```curl
curl https://api.seatsio.net/charts/4250fffc-e41f-c7cb-986a-2c5e728b8c28/tags/tag1 \
-u aSecretKey: -X DELETE
```
**Response**

204 - No Content

404 - Not Found: when the chart did not contain the tag you specified.
