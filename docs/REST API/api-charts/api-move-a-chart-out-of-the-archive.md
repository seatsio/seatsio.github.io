---
title: "Move a chart out of the archive"
slug: "/api-move-a-chart-out-of-the-archive"
hidden: false
createdAt: "2018-08-01T13:30:04.894Z"
updatedAt: "2019-03-28T15:44:42.320Z"
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
POST https://api.seatsio.net/charts/{chartKey}/actions/move-out-of-archive
```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->charts->moveOutOfArchive("749b9650-24fb-11e7-93ae-92361f002671");
```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.Charts.MoveOutOfArchive("749b9650-24fb-11e7-93ae-92361f002671");
```

</TabItem>
<TabItem value='java'>

```java
client.charts.moveOutOfArchive("749b9650-24fb-11e7-93ae-92361f002671");
```

</TabItem>
<TabItem value='python'>

```python
client.charts.move_out_of_archive("749b9650-24fb-11e7-93ae-92361f002671")
```

</TabItem>
<TabItem value='ruby'>

```ruby
client.charts.move_out_of_archive("749b9650-24fb-11e7-93ae-92361f002671")
```

</TabItem>
<TabItem value='javascript'>

```javascript
await client.charts.moveOutOfArchive('chartKey');
```

</TabItem>
</Tabs>


Returns 204 when the chart was successfully moved out of the archive, back to the active chart list. 
Returns 400 (Bad Request) when the chart was not in the archive.
```text
curl -X POST https://api.seatsio.net/charts/749b9650-24fb-11e7-93ae-92361f002671/actions/move-out-of-archive \
-u aSecretKey:
```
