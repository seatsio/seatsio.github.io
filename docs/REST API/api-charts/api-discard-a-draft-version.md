---
title: "Discard a draft version"
slug: "api-discard-a-draft-version"
hidden: false
createdAt: "2018-08-01T13:29:08.502Z"
updatedAt: "2018-11-15T09:50:17.218Z"
---
If you&#39;re not happy with a draft version, you can choose to discard it. Discarding means deleting the draft version. This cannot be undone!
```text
POST https://api.seatsio.net/charts/{chartKey}/version/draft/actions/discard
```
```php
$seatsioClient->charts->discardDraftVersion("4250fffc-e41f-c7cb-986a-2c5e728b8c28");
```
```csharp
Client.Charts.DiscardDraftVersion("4250fffc-e41f-c7cb-986a-2c5e728b8c28");
```
```java
client.charts.discardDraftVersion("4250fffc-e41f-c7cb-986a-2c5e728b8c28");
```
```python
client.charts.discard_draft_version("4250fffc-e41f-c7cb-986a-2c5e728b8c28")
```
```ruby
client.charts.discard_draft_version("4250fffc-e41f-c7cb-986a-2c5e728b8c28")

```
```javascript
await client.charts.discardDraftVersion('chartKey');
```

```curl
curl -X POST https://api.seatsio.net/charts/749b9650-24fb-11e7-93ae-92361f002671/version/draft/actions/discard \
-u aSecretKey:
```
