---
title: "Add a tag to a chart"
slug: "/api-add-a-tag-to-a-chart"
hidden: false
createdAt: "2018-08-02T08:56:23.986Z"
updatedAt: "2018-11-15T10:01:09.905Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

To add a tag, `POST` an empty body to this endpoint: 



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
POST https://api.seatsio.net/charts/{chartKey}/tags/{tag}
```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->charts->addTag("4250fffc-e41f-c7cb-986a-2c5e728b8c28", "tag1");
```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.Charts.AddTag("4250fffc-e41f-c7cb-986a-2c5e728b8c28", "tag1");
```

</TabItem>
<TabItem value='java'>

```java
client.charts.addTag("4250fffc-e41f-c7cb-986a-2c5e728b8c28", "tag1");
```

</TabItem>
<TabItem value='python'>

```python
client.charts.add_tag("749b9650-24fb-11e7-93ae-92361f002671", "tag1")
```

</TabItem>
<TabItem value='ruby'>

```ruby
client.charts.add_tag("749b9650-24fb-11e7-93ae-92361f002671", "tag1")
```

</TabItem>
<TabItem value='javascript'>

```javascript
await client.charts.addTag('chartKey', 'tag1');
```

</TabItem>
</Tabs>





:::info Tip
Keep in mind that your tag needs to be [URI encoded](doc:api-uri-encoding)!
:::


**Example request**

```shell
curl https://api.seatsio.net/charts/4250fffc-e41f-c7cb-986a-2c5e728b8c28/tags/tag1 \
-u aSecretKey: -X POST
```


**Response**

204 - No Content
