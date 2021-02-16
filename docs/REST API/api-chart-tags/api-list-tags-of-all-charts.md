---
title: "List tags of all charts"
slug: "api-list-tags-of-all-charts"
hidden: false
createdAt: "2018-08-02T08:56:16.875Z"
updatedAt: "2018-11-15T09:59:40.652Z"
---
List all tags of all active (i.e. non-archived) charts.
```text
GET https://api.seatsio.net/charts/tags
```
```php
$seatsioClient->charts->listAllTags();
```
```csharp
Client.Charts.ListAllTags();
```
```java
client.charts.listAllTags();
```
```python
client.charts.list_all_tags()
```
```ruby
client.charts.list_all_tags
```
```javascript
await client.charts.listAllTags();
```

```curl
curl https://api.seatsio.net/charts/tags -u aSecretKey: 
```

```json
{
    "tags": ["tag1", "tag2", "tag3"]
}
```
