---
title: "Copy draft version"
slug: "/api-charts-copy-draft-version"
hidden: false
createdAt: "2018-08-01T13:31:50.078Z"
updatedAt: "2018-11-15T09:59:07.130Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Use this call to create a copy of a chart, based on the draft chart version. The draft version of the source chart is used as the published version of the new chart.
 
The chart name and tags are copied as well. 

Note that the new chart name will have " (copy)" appended to it. E.g. if the original chart name was "My Super Chart", the copy's name will be "My Super Chart (copy)".

Events linked to the original chart and the published version are not copied.

The response contains the chartKey of the new chart. You can store this in your database, and use it to refer to the newly created chart in the future.



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
POST https://api.seatsio.net/charts/{chartKey}/version/draft/actions/copy
```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->charts->copyDraftVersion("749b9650-24fb-11e7-93ae-92361f002671");
```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.Charts.CopyDraftVersion("749b9650-24fb-11e7-93ae-92361f002671");
```

</TabItem>
<TabItem value='java'>

```java
client.charts.copyDraftVersion("749b9650-24fb-11e7-93ae-92361f002671");
```

</TabItem>
<TabItem value='python'>

```python
client.charts.copy_draft_version("749b9650-24fb-11e7-93ae-92361f002671")
```

</TabItem>
<TabItem value='ruby'>

```ruby
client.charts.copy_draft_version("749b9650-24fb-11e7-93ae-92361f002671")
```

</TabItem>
<TabItem value='javascript'>

```javascript
await client.charts.copyDraftVersion('chartKey');
```

</TabItem>
</Tabs>





```shell
curl -X POST https://api.seatsio.net/charts/749b9650-24fb-11e7-93ae-92361f002671/version/draft/actions/copy \
-u aSecretKey:
```



```json
{
    "name":"chart2",
    "id":"19",
    "key":"749b9650-24fb-11e7-93ae-92361f002671",
    "status":"NOT_USED",
    "tags": ["tag1", "tag2"],
    "archived": false,    
    "publishedVersionThumbnailUrl": "https://cdn.seats.io/system/public/.../published/.../thumbnail"
}
```

