---
title: "Copy a chart to a workspace"
slug: "api-charts-copy-chart-to-workspace"
hidden: false
createdAt: "2018-08-01T13:30:54.934Z"
updatedAt: "2020-10-28T09:21:28.178Z"
---
Use this call to copy a published chart version from its workspace to another workspace. Events and tags linked to the original chart are not copied.

The response contains the chartKey of the new chart. You can store this in your database, and use it to refer to the newly created chart in the future.
```text
POST https://api.seatsio.net/charts/{chartKey}/version/published/actions/copy-to-workspace/{workspaceKey}
```
```php
$seatsioClient->charts->copyToWorkspace("749b9650-24fb-11e7-93ae-92361f002671", "18725661-36d6-4755-905a-28ce82d0c2d5");
```
```csharp
Client.Charts.CopyToWorkspace("749b9650-24fb-11e7-93ae-92361f002671", "18725661-36d6-4755-905a-28ce82d0c2d5");
```
```java
client.charts.copyToWorkspace("749b9650-24fb-11e7-93ae-92361f002671", "18725661-36d6-4755-905a-28ce82d0c2d5");
```
```python
client.charts.copy_to_workspace("749b9650-24fb-11e7-93ae-92361f002671", "18725661-36d6-4755-905a-28ce82d0c2d5")
```
```ruby
client.charts.copy_to_workspace("749b9650-24fb-11e7-93ae-92361f002671", "18725661-36d6-4755-905a-28ce82d0c2d5")
```
```javascript
await client.charts.copyToWorkspace('chartKey', '18725661-36d6-4755-905a-28ce82d0c2d5');
```

```curl
curl -X POST https://api.seatsio.net/charts/749b9650-24fb-11e7-93ae-92361f002671/version/published/actions/copy-to-workspace/18725661-36d6-4755-905a-28ce82d0c2d5 \
-u anAdminKey:
```

```json
{
    "name":"chart2",
    "id":"19",
    "key":"749b9650-24fb-11e7-93ae-92361f002671",
    "status":"NOT_USED",
    "tags": [],
    "archived": false,
    "publishedVersionThumbnailUrl": "https://cdn.seats.io/system/public/.../published/.../thumbnail"
}
```

[block:callout]
{
  &quot;type&quot;: &quot;danger&quot;,
  &quot;body&quot;: &quot;Because copying a chart between workspaces is an operation that requires privileges on both workspaces, you&#39;ll need to use your [company admin](https://docs.seats.io/docs/api-authentication#using-the-company-admin-key) key as a secret key. You can find the admin key at your [company settings page](https://app.seats.io/company-settings).&quot;,
  &quot;title&quot;: &quot;A note about authentication&quot;
}
[/block]
