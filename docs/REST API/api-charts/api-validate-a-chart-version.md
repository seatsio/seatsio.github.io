---
title: "Validate a chart version"
slug: "api-validate-a-chart-version"
hidden: false
createdAt: "2019-04-09T10:44:01.774Z"
updatedAt: "2020-01-27T21:57:12.141Z"
---
Seats.io does not allow creating events for invalid charts. You can configure what &#39;invalid&#39; means through the settings page at https://app.seats.io/company-settings.

The API call documented below returns the list of validation errors and warnings for a draft or published chart. 
[block:api-header]
{
  &quot;title&quot;: &quot;Validate a chart version&quot;
}
[/block]

```text
POST https://api.seatsio.net/charts/{chartKey}/version/published/actions/validate
POST https://api.seatsio.net/charts/{chartKey}/version/draft/actions/validate
```
```php
$seatsioClient->charts->validateDraftVersion('749b9650-24fb-11e7-93ae-92361f002671');
$seatsioClient->charts->validatePublishedVersion('749b9650-24fb-11e7-93ae-92361f002671');
```
```csharp
Client.Charts.ValidateDraftVersion("749b9650-24fb-11e7-93ae-92361f002671");
Client.Charts.ValidatePublishedVersion("749b9650-24fb-11e7-93ae-92361f002671");
```
```java
client.charts.validateDraftVersion("749b9650-24fb-11e7-93ae-92361f002671");
client.charts.validatePublishedVersion("749b9650-24fb-11e7-93ae-92361f002671");

```
```python
client.charts.validate_draft_version("749b9650-24fb-11e7-93ae-92361f002671")
client.charts.validate_published_version("749b9650-24fb-11e7-93ae-92361f002671")
```
```ruby
client.charts.validate_draft_version("749b9650-24fb-11e7-93ae-92361f002671")
client.charts.validate_published_version("749b9650-24fb-11e7-93ae-92361f002671")
```
```javascript
await client.charts.validateDraftVersion('749b9650-24fb-11e7-93ae-92361f002671');
await client.charts.validatePublishedVersion('749b9650-24fb-11e7-93ae-92361f002671');
```

```curl
curl https://api.seatsio.net/charts/4250fffc-e41f-c7cb-986a-2c5e728b8c28/version/draft/actions/validate \
-X POST -u aSecretKey:
```
**Example response**
```json
// valid drawing
{
  "errors": [],
  "warnings": []
}

// invalid drawing
{
  "errors": ["VALIDATE_OBJECTS_WITHOUT_CATEGORIES"],
  "warnings": ["VALIDATE_DUPLICATE_LABELS"]
}
```
