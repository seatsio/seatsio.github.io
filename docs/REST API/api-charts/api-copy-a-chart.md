---
title: "Copy a chart"
slug: "/api-copy-a-chart"
hidden: false
createdAt: "2018-08-01T13:30:19.941Z"
updatedAt: "2018-11-15T09:57:39.023Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Use this call to create a copy of a chart, based on the published chart version. The published version of the source chart is used as the published version of the new chart.
 
The chart name and tags are copied as well. 

Note that the new chart name will have " (copy)" appended to it. E.g. if the original chart name was "My Super Chart", the copy's name will be "My Super Chart (copy)".

Events linked to the original chart and the draft version are not copied.

The response contains the chartKey of the new chart. You can store this in your database, and use it to refer to the newly created chart in the future.


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
POST https://api.seatsio.net/charts/{chartKey}/version/published/actions/copy
```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->charts->copy("749b9650-24fb-11e7-93ae-92361f002671");
```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.Charts.Copy("749b9650-24fb-11e7-93ae-92361f002671");
```

</TabItem>
<TabItem value='java'>

```java
client.charts.copy("749b9650-24fb-11e7-93ae-92361f002671");
```

</TabItem>
<TabItem value='python'>

```python
client.charts.copy("749b9650-24fb-11e7-93ae-92361f002671")
```

</TabItem>
<TabItem value='ruby'>

```ruby
client.charts.copy("749b9650-24fb-11e7-93ae-92361f002671")
```

</TabItem>
<TabItem value='javascript'>

```javascript
await client.charts.copy('chartKey')
```

</TabItem>
</Tabs>



```curl
curl -X POST https://api.seatsio.net/charts/749b9650-24fb-11e7-93ae-92361f002671/version/published/actions/copy \
-u aSecretKey:
```

```json
{
    "name":"chart2 (copy)",
    "id":"19",
    "key":"749b9650-24fb-11e7-93ae-92361f002671",
    "status":"NOT_USED",
    "tags": ["tag1", "tag2"],
    "archived": false,
    "publishedVersionThumbnailUrl": "https://cdn.seats.io/system/public/.../published/.../thumbnail"
}
```
