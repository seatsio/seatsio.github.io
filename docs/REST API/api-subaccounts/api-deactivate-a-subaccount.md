---
title: "Deactivate a subaccount"
slug: "api-deactivate-a-subaccount"
hidden: false
createdAt: "2018-08-02T10:17:59.933Z"
updatedAt: "2020-02-28T13:16:03.882Z"
---
[block:callout]
{
  &quot;type&quot;: &quot;warning&quot;,
  &quot;body&quot;: &quot;Subaccounts are deprecated. Please use [workspaces](api-workspaces) instead.&quot;
}
[/block]
### Deactivate a subaccount

Subaccounts are either active or inactive. Inactive subaccounts do not have the permission to create charts, create events, book seats, in short: to do anything meaningful.
```text
POST https://api.seatsio.net/subaccounts/{id}/actions/deactivate
```
```php
$seatsioClient->subaccounts->deactivate(169);
```
```csharp
Client.Subaccounts.Deactivate(169);
```
```java
client.subaccounts.deactivate(169);
```
```python
client.subaccounts.deactivate(169)
```
```ruby
client.subaccounts.deactivate id: 169
```
```javascript
await client.subaccounts.deactivate(169);
```

```curl
curl -X POST https://api.seatsio.net/subaccounts/169/actions/deactivate \
-u aSecretKey:

```
**Response**

204 - No Content
