---
title: "Add a tag to a chart"
slug: "api-add-a-tag-to-a-chart"
hidden: false
createdAt: "2018-08-02T08:56:23.986Z"
updatedAt: "2018-11-15T10:01:09.905Z"
---
To add a tag, `POST` an empty body to this endpoint: 
```text
POST https://api.seatsio.net/charts/{chartKey}/tags/{tag}
```
```php
$seatsioClient->charts->addTag("4250fffc-e41f-c7cb-986a-2c5e728b8c28", "tag1");
```
```csharp
Client.Charts.AddTag("4250fffc-e41f-c7cb-986a-2c5e728b8c28", "tag1");
```
```java
client.charts.addTag("4250fffc-e41f-c7cb-986a-2c5e728b8c28", "tag1");
```
```python
client.charts.add_tag("749b9650-24fb-11e7-93ae-92361f002671", "tag1")
```
```ruby
client.charts.add_tag("749b9650-24fb-11e7-93ae-92361f002671", "tag1")
```
```javascript
await client.charts.addTag('chartKey', 'tag1');
```

[block:callout]
{
  &quot;type&quot;: &quot;info&quot;,
  &quot;title&quot;: &quot;Tip&quot;,
  &quot;body&quot;: &quot;Keep in mind that your tag needs to be [URI encoded](doc:api-uri-encoding)!&quot;
}
[/block]

**Example request**
```curl
curl https://api.seatsio.net/charts/4250fffc-e41f-c7cb-986a-2c5e728b8c28/tags/tag1 \
-u aSecretKey: -X POST
```

**Response**

204 - No Content
