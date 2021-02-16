---
title: "Activate a subaccount"
slug: "api-activate-a-subaccount"
hidden: false
createdAt: "2018-08-02T10:18:12.868Z"
updatedAt: "2020-02-28T13:16:13.633Z"
---
[block:callout]
{
  &quot;type&quot;: &quot;warning&quot;,
  &quot;body&quot;: &quot;Subaccounts are deprecated. Please use [workspaces](api-workspaces) instead.&quot;
}
[/block]
### Activate a subaccount
```text
POST https://api.seatsio.net/subaccounts/{id}/actions/activate
```
```php
$seatsioClient->subaccounts->activate(169);
```
```csharp
Client.Subaccounts.Activate(169);
```
```java
client.subaccounts.activate(169);
```
```python
client.subaccounts.activate(169)
```
```ruby
client.subaccounts.activate id: 169
```
```javascript
await client.subaccounts.activate('subaccountId');
```

```curl
curl -X POST https://api.seatsio.net/subaccounts/169/actions/activate \
-u aSecretKey:
```
**Response**

204 - No Content
