---
title: "Copy chart from a subaccount to another subaccount or to its parent"
slug: "api-copy-chart-from-a-subaccount-to-another-subaccount-or-to-its-parent"
hidden: false
createdAt: "2018-08-02T10:17:12.687Z"
updatedAt: "2020-02-28T21:27:24.232Z"
---
[block:callout]
{
  &quot;type&quot;: &quot;warning&quot;,
  &quot;body&quot;: &quot;Subaccounts are deprecated. Please use [workspaces](api-workspaces) instead.&quot;
}
[/block]
Use this call to copy a published chart version from a subaccount to another subaccount or to your parent account.

subaccountIdOrParent is either the ID of the subaccount to copy to, or the string &quot;parent&quot;.

Events and tags linked to the original chart are not copied.

The response contains the chartKey of the new chart. You can store this in your database, and use it to refer to the newly created chart in the future.

To authenticate, you need to use the secret key of the **parent account**, not one of the subaccounts. 
```text
// Copy a chart to parent: 
POST https://api.seatsio.net/subaccounts/{id}/charts/{chartKey}/actions/copy-to/parent

// Copy a chart from subaccount A to subaccount B
POST https://api.seatsio.net/subaccounts/{id_of_subaccount_A}/charts/{chartKey}/actions/copy-to/{id_of_subaccount_B}
```
```php
$seatsioClient->subaccounts->copyChartToParent(312, "749b9650-24fb-11e7-93ae-92361f002671");
$seatsioClient->subaccounts->copyChartToSubaccount(312, 324, "749b9650-24fb-11e7-93ae-92361f002671");
```
```csharp
Client.Subaccounts.CopyChartToParent(312, "749b9650-24fb-11e7-93ae-92361f002671");
Client.Subaccounts.CopyChartToSubaccount(312, 324, "749b9650-24fb-11e7-93ae-92361f002671");
```
```java
client.subaccounts.copyChartToParent(312, "749b9650-24fb-11e7-93ae-92361f002671");
client.subaccounts.copyChartToSubaccount(312, 324, "749b9650-24fb-11e7-93ae-92361f002671");
```
```python
client.subaccounts.copy_chart_to_parent(312, "749b9650-24fb-11e7-93ae-92361f002671")
client.subaccounts.copy_chart_to_subaccount(312, 324, "749b9650-24fb-11e7-93ae-92361f002671")
```
```ruby
client.subaccounts.copy_chart_to_parent id: 312, chart_key: "749b9650-24fb-11e7-93ae-92361f002671"
client.subaccounts.copy_chart_to_subaccount from_id: 312, to_id: 324, chart_key: "749b9650-24fb-11e7-93ae-92361f002671"
```
```javascript
await client.subaccounts.copyChartToParent('parentId', 'chartKey');

await client.subaccounts.copyChartToSubaccount('fromSubaccountId', 'toSubaccountId', 'chartKey');
```

```curl
curl -X POST https://api.seatsio.net/subaccounts/312/charts/749b9650-24fb-11e7-93ae-92361f002671/actions/copy-to/324 \
-u aSecretKey:
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
