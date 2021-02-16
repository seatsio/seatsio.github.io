---
title: "Regenerate the secret key of a subaccount"
slug: "api-regenerate-a-subaccounts-secret-key"
hidden: false
createdAt: "2018-08-02T10:18:29.569Z"
updatedAt: "2020-02-28T13:16:22.231Z"
---
[block:callout]
{
  &quot;type&quot;: &quot;warning&quot;,
  &quot;body&quot;: &quot;Subaccounts are deprecated. Please use [workspaces](api-workspaces) instead.&quot;
}
[/block]
### Regenerate the secret key

The secret key of a subaccount should be kept secret at all times. If it does get compromised, you can generate a new one.
```text
POST https://api.seatsio.net/subaccounts/{id}/secret-key/actions/regenerate
```
```php
$seatsioClient->subaccounts->regenerateSecretKey(169);
```
```csharp
Client.Subaccounts.RegenerateSecretKey(169);
```
```java
client.subaccounts.regenerateSecretKey(169);
```
```python
client.subaccounts.regenerate_secret_key(169)
```
```ruby
client.subaccounts.regenerate_secret_key id: 169
```
```javascript
await client.subaccounts.regenerateSecretKey('subaccountId');
```

```curl
curl -X POST https://api.seatsio.net/subaccounts/169/secret-key/actions/regenerate \
-u aSecretKey:
```

```json
{
    "secretKey": "7c647eed-0880-4118-9459-82757579703e"
}
```
