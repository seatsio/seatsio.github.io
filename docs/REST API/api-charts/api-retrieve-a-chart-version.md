---
title: "Retrieve a chart version"
slug: "/api-retrieve-a-chart-version"
hidden: false
createdAt: "2018-08-01T13:26:25.264Z"
updatedAt: "2019-01-19T12:39:00.262Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Each chart has a published version and an optional draft version. Those versions contain the actual contents of the chart: categories, rows, seats etc. The endpoints below allow you to fetch exactly that data.

To retrieve properties that are shared between the draft and published version, call the endpoint to [retrieve a chart](doc:api-retrieve-a-chart).
## Retrieve the published version of a chart



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
GET https://api.seatsio.net/charts/{chartKey}/version/published
```

</TabItem>
<TabItem value='php'>

```php
$drawing = $seatsioClient->charts->retrievePublishedVersion("749b9650-24fb-11e7-93ae-92361f002671");
echo $drawing["venueType"];
```

</TabItem>
<TabItem value='csharp'>

```csharp
var drawing = Client.Charts.RetrievePublishedVersion("749b9650-24fb-11e7-93ae-92361f002671"));
Console.WriteLine(chart.VenueType);
```

</TabItem>
<TabItem value='java'>

```java
Map<?, ?> drawing = client.charts.retrievePublishedVersion("749b9650-24fb-11e7-93ae-92361f002671");
System.out.println(drawing.get("venueType"));
```

</TabItem>
<TabItem value='python'>

```python
drawing = client.charts.retrieve_published_version("749b9650-24fb-11e7-93ae-92361f002671")
```

</TabItem>
<TabItem value='ruby'>

```ruby
drawing = client.charts.retrieve_published_version('749b9650-24fb-11e7-93ae-92361f002671')
```

</TabItem>
<TabItem value='javascript'>

```javascript
let drawing = await client.charts.retrievePublishedVersion('749b9650-24fb-11e7-93ae-92361f002671');
```

</TabItem>
</Tabs>



```curl
curl https://api.seatsio.net/charts/aChartKey/version/published \
-u aSecretKey:
```

```json
{
    "name": "A demo chart",
    "categories": {
      "list": [
        { label: "Upper level", "key": 54, "color": "#cccccc", "accessible": false },
        { label: "Lower level", "key": 67, "color": "#eeeeff", "accessible": true }
      ]
    },
    "subChart": {
        "rows": [ ... ]
    }
    ...
}
```

## Retrieve the draft version of a chart



<Tabs 
  defaultValue="text"
  values={[
{ label: 'Text', value: 'text', },
{ label: 'PHP', value: 'php', },
{ label: 'C#', value: 'csharp', },
{ label: 'Java', value: 'java', },
{ label: 'Python', value: 'python', },
]}>
<TabItem value='text'>

```text
GET https://api.seatsio.net/charts/{chartKey}/version/draft
```

</TabItem>
<TabItem value='php'>

```php
$drawing = $seatsioClient->charts->retrieveDraftVersion("749b9650-24fb-11e7-93ae-92361f002671");
echo $drawing["venueType"];
```

</TabItem>
<TabItem value='csharp'>

```csharp
var drawing = Client.Charts.RetrieveDraftVersion("749b9650-24fb-11e7-93ae-92361f002671"));
Console.WriteLine(chart.VenueType);
```

</TabItem>
<TabItem value='java'>

```java
Map<?, ?> drawing = client.charts.retrieveDraftVersion("749b9650-24fb-11e7-93ae-92361f002671");
System.out.println(drawing.get("venueType"));

```

</TabItem>
<TabItem value='python'>

```python
drawing = client.charts.retrieve_draft_version("749b9650-24fb-11e7-93ae-92361f002671")
```

</TabItem>
</Tabs>



```curl
curl https://api.seatsio.net/charts/aChartKey/version/draft \
-u aSecretKey:
```

```json
{
    "name": "A draft chart",
    "categories": {
      "list": [
        { label: "Upper level", "key": 54, "color": "#cccccc", "accessible": false },
        { label: "Lower level", "key": 67, "color": "#eeeeff", "accessible": true }
      ]
    },
    "subChart": {
        "rows": [ ... ]
    }
    ...
}
```
Error 404 (Not Found) is returned when the chart does not have a draft version.
