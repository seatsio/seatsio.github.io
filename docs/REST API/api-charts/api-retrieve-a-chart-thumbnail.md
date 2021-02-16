---
title: "Retrieve a chart thumbnail"
slug: "api-retrieve-a-chart-thumbnail"
hidden: false
createdAt: "2018-08-01T13:28:21.844Z"
updatedAt: "2019-08-21T11:51:33.873Z"
---
Chart thumbnails are static PNG representations of a seating chart. This means that you cannot interact with the objects on the chart. You typically use them when showing a list of charts to a user, e.g. when integrating seats.io into your backoffice system.

These thumbnails are not a completely accurate representation of the seating chart. To get a high-detail static representation of a single chart, use [print mode](doc:renderer-config-mode).
[block:callout]
{
  &quot;type&quot;: &quot;info&quot;,
  &quot;body&quot;: &quot;To use the thumbnail in an `&lt;img&gt;` tag, use the publicly accessible `publishedVersionThumbnailUrl` (or `draftVersionThumbnailUrl`) that is returned by the [list charts](doc:api-list-all-charts) and [retrieve chart](doc:api-retrieve-a-chart) calls instead of the call documented below.&quot;,
  &quot;title&quot;: &quot;Tip&quot;
}
[/block]

[block:api-header]
{
  &quot;title&quot;: &quot;Retrieve the published version thumbnail&quot;
}
[/block]

```text
GET https://api.seatsio.net/charts/{chartKey}/version/published/thumbnail
```
```php
$seatsioClient->charts->retrievePublishedVersionThumbnail("4250fffc-e41f-c7cb-986a-2c5e728b8c28");
```
```csharp
Client.Charts.RetrievePublishedVersionThumbnail("4250fffc-e41f-c7cb-986a-2c5e728b8c28");
```
```java
client.charts.retrievePublishedVersionThumbnail("4250fffc-e41f-c7cb-986a-2c5e728b8c28");
```
```python
client.charts.retrieve_published_version_thumbnail("749b9650-24fb-11e7-93ae-92361f002671")
```
```ruby
client.charts.retrieve_published_version_thumbnail("749b9650-24fb-11e7-93ae-92361f002671")

```
```javascript
await client.charts.retrievePublishedVersionThumbnail('chartKey');
```

[block:callout]
{
  &quot;type&quot;: &quot;info&quot;,
  &quot;title&quot;: &quot;Note&quot;,
  &quot;body&quot;: &quot;This requires authentication by secret key. \nFor a publicly available URL, use the publishedVersionThumbnailUrl that is returned by [list charts](doc:api-list-all-charts) and [retrieve chart](doc:api-retrieve-a-chart) .&quot;
}
[/block]

```curl
curl https://api.seatsio.net/charts/4250fffc-e41f-c7cb-986a-2c5e728b8c28/version/published/thumbnail \
-u aSecretKey:
```
**Example response**
[block:image]
{
  &quot;images&quot;: [
    {
      &quot;image&quot;: [
        &quot;https://files.readme.io/17682d4-thumbnail.png&quot;,
        &quot;thumbnail.png&quot;,
        500,
        500,
        &quot;#d8e4c2&quot;
      ]
    }
  ]
}
[/block]
