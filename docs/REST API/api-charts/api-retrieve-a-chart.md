---
title: "Retrieve a chart"
slug: "/api-retrieve-a-chart"
hidden: false
createdAt: "2018-08-01T13:26:15.595Z"
updatedAt: "2020-07-01T07:43:44.474Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This endpoint retrieves the metadata that is shared between the published and draft versions of a chart (id, key, status, archived etc).

To fetch the actual contents of the chart (including categories), use the endpoint to [retrieve a chart version](api-retrieve-a-chart-version)



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
GET https://api.seatsio.net/charts/{key}

GET https://api.seatsio.net/charts/{key}?expand=events
```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->charts->retrieve("749b9650-24fb-11e7-93ae-92361f002671");

$seatsioClient->charts->retrieveWithEvents("749b9650-24fb-11e7-93ae-92361f002671");
```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.Charts.Retrieve("749b9650-24fb-11e7-93ae-92361f002671"));

Client.Charts.Retrieve("749b9650-24fb-11e7-93ae-92361f002671", expandEvents: true));
```

</TabItem>
<TabItem value='java'>

```java
client.charts.retrieve("749b9650-24fb-11e7-93ae-92361f002671");

client.charts.retrieveWithEvents("749b9650-24fb-11e7-93ae-92361f002671");
```

</TabItem>
<TabItem value='python'>

```python
client.charts.retrieve("749b9650-24fb-11e7-93ae-92361f002671")

client.charts.retrieve_with_events("749b9650-24fb-11e7-93ae-92361f002671")
```

</TabItem>
<TabItem value='ruby'>

```ruby
client.charts.retrieve('749b9650-24fb-11e7-93ae-92361f002671')

client.charts.retrieve_with_events('749b9650-24fb-11e7-93ae-92361f002671')
```

</TabItem>
<TabItem value='javascript'>

```javascript
await client.charts.retrieve('749b9650-24fb-11e7-93ae-92361f002671');

await client.charts.retrieveWithEvents('749b9650-24fb-11e7-93ae-92361f002671');
```

</TabItem>
</Tabs>





## Query parameters

* **expand** *(optional)*
A chart can have events linked to it. By adding `expand=events`, the events are returned in the 'events' field in the response. 

## Example



```shell
curl https://api.seatsio.net/charts/749b9650-24fb-11e7-93ae-92361f002671 \
-u aSecretKey:
```

The response is a JSON object that represents the chart:

```json
{
    "name":"chart2",
    "id":"19",
    "key":"749b9650-24fb-11e7-93ae-92361f002671",
    "status":"NOT_USED",
    "archived": false,
    "tags": ['tag1', 'tag2'],
    "publishedVersionThumbnailUrl": "https://thumbnails.seats.io/workspaceKey/.../published/.../thumbnail",
    "socialDistancingRulesets": {
      "959b9650-24fb-11e7-93ae-92361f0026b4": {
        "name": "My first ruleset",
        ...
    }
  }
}
```

`status` can take the following values:
- NOT_USED: there's no event yet for the chart
- PUBLISHED: there's an event for the chart, and there's no draft version
- PUBLISHED_WITH_DRAFT: there's an event for the chart, and there's a draft version

And with `expand=events`, it includes the events:

```json
{
    "name":"chart2",
    "id":"19",
    "key":"749b9650-24fb-11e7-93ae-92361f002671",
    "status":"NOT_USED",
    "archived": false,
    "tags": ['tag1', 'tag2'],
    "publishedVersionThumbnailUrl": "https://thumbnails.seats.io/workspaceKey/.../published/.../thumbnail",
    "socialDistancingRulesets": {
      "959b9650-24fb-11e7-93ae-92361f0026b4": {
        "name": "My first ruleset",
        ...
    },
    "events": [
        {
            "id": "50",
            "bookWholeTables": false,
            "key": "eventKey2"
        },
        {
            "id": "49",
            "bookWholeTables": false,
            "key": "event34"
        }
    ]
}
```

Error 404 (Not Found) is returned when the chart does not exist.
