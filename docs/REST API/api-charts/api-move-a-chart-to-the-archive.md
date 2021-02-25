---
title: "Move a chart to the archive"
slug: "/api-move-a-chart-to-the-archive"
hidden: false
createdAt: "2018-08-01T13:29:48.193Z"
updatedAt: "2019-03-28T15:45:03.748Z"
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
POST https://api.seatsio.net/charts/{chartKey}/actions/move-to-archive
```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->charts->moveToArchive("749b9650-24fb-11e7-93ae-92361f002671");
```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.Charts.MoveToArchive("749b9650-24fb-11e7-93ae-92361f002671");
```

</TabItem>
<TabItem value='java'>

```java
client.charts.moveToArchive("749b9650-24fb-11e7-93ae-92361f002671");
```

</TabItem>
<TabItem value='python'>

```python
client.charts.move_to_archive("749b9650-24fb-11e7-93ae-92361f002671")
```

</TabItem>
<TabItem value='ruby'>

```ruby
client.charts.move_to_archive("749b9650-24fb-11e7-93ae-92361f002671")
```

</TabItem>
<TabItem value='javascript'>

```javascript
 await client.charts.moveToArchive('chartKey');
```

</TabItem>
</Tabs>



Returns 204 when the chart was successfully moved to the archive. 
Returns 400 (Bad Request) when the chart was already moved to the archive.

```curl
curl -X POST https://api.seatsio.net/charts/749b9650-24fb-11e7-93ae-92361f002671/actions/move-to-archive \
-u aSecretKey:

```

