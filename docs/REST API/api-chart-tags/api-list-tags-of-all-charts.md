---
title: "List tags of all charts"
slug: "/api-list-tags-of-all-charts"
hidden: false
createdAt: "2018-08-02T08:56:16.875Z"
updatedAt: "2018-11-15T09:59:40.652Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

List all tags of all active (i.e. non-archived) charts.


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
GET https://api.seatsio.net/charts/tags
```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->charts->listAllTags();
```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.Charts.ListAllTags();
```

</TabItem>
<TabItem value='java'>

```java
client.charts.listAllTags();
```

</TabItem>
<TabItem value='python'>

```python
client.charts.list_all_tags()
```

</TabItem>
<TabItem value='ruby'>

```ruby
client.charts.list_all_tags
```

</TabItem>
<TabItem value='javascript'>

```javascript
await client.charts.listAllTags();
```

</TabItem>
</Tabs>



```curl
curl https://api.seatsio.net/charts/tags -u aSecretKey: 
```

```json
{
    "tags": ["tag1", "tag2", "tag3"]
}
```
