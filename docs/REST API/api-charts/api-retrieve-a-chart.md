---
title: "Retrieve a chart"
slug: "api-retrieve-a-chart"
hidden: false
createdAt: "2018-08-01T13:26:15.595Z"
updatedAt: "2020-07-01T07:43:44.474Z"
---
This endpoint retrieves the metadata that is shared between the published and draft versions of a chart (id, key, status, archived etc).

To fetch the actual contents of the chart (including categories), use the endpoint to [retrieve a chart version](https://docs.seats.io/docs/api-retrieve-a-chart-version)
```text
GET https://api.seatsio.net/charts/{key}

GET https://api.seatsio.net/charts/{key}?expand=events
```
```php
$seatsioClient->charts->retrieve("749b9650-24fb-11e7-93ae-92361f002671");

$seatsioClient->charts->retrieveWithEvents("749b9650-24fb-11e7-93ae-92361f002671");
```
```csharp
Client.Charts.Retrieve("749b9650-24fb-11e7-93ae-92361f002671"));

Client.Charts.Retrieve("749b9650-24fb-11e7-93ae-92361f002671", expandEvents: true));
```
```java
client.charts.retrieve("749b9650-24fb-11e7-93ae-92361f002671");

client.charts.retrieveWithEvents("749b9650-24fb-11e7-93ae-92361f002671");
```
```python
client.charts.retrieve("749b9650-24fb-11e7-93ae-92361f002671")

client.charts.retrieve_with_events("749b9650-24fb-11e7-93ae-92361f002671")
```
```ruby
client.charts.retrieve('749b9650-24fb-11e7-93ae-92361f002671')

client.charts.retrieve_with_events('749b9650-24fb-11e7-93ae-92361f002671')
```
```javascript
await client.charts.retrieve('749b9650-24fb-11e7-93ae-92361f002671');

await client.charts.retrieveWithEvents('749b9650-24fb-11e7-93ae-92361f002671');
```

[block:api-header]
{
  &quot;title&quot;: &quot;Query parameters&quot;
}
[/block]
* **expand** *(optional)*
A chart can have events linked to it. By adding `expand=events`, the events are returned in the &#39;events&#39; field in the response. 
[block:api-header]
{
  &quot;title&quot;: &quot;Example&quot;
}
[/block]

```curl
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
- NOT_USED: there&#39;s no event yet for the chart
- PUBLISHED: there&#39;s an event for the chart, and there&#39;s no draft version
- PUBLISHED_WITH_DRAFT: there&#39;s an event for the chart, and there&#39;s a draft version

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
