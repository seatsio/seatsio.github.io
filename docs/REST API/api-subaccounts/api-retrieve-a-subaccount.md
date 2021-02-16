---
title: "Retrieve a subaccount"
slug: "api-retrieve-a-subaccount"
hidden: false
createdAt: "2018-08-02T10:16:08.374Z"
updatedAt: "2020-02-28T13:15:18.522Z"
---
[block:callout]
{
  &quot;type&quot;: &quot;warning&quot;,
  &quot;body&quot;: &quot;Subaccounts are deprecated. Please use [workspaces](api-workspaces) instead.&quot;
}
[/block]
### Retrieve a subaccount
```text
GET https://api.seatsio.net/subaccounts/{id}
```
```php
$seatsioClient->subaccounts->retrieve(169);
```
```csharp
Client.Subaccounts.Retrieve(169);
```
```java
client.subaccounts.retrieve(169);
```
```python
client.subaccounts.retrieve(169)
```
```ruby
client.subaccounts.retrieve id: 169

```
```javascript
await client.subaccounts.retrieve('subaccountId');
```

```curl
curl https://api.seatsio.net/subaccounts/169 \
-u aSecretKey:
```

```json
{
    "id": 169,
    "secretKey": "7c647eed-0880-4118-9459-82757579703e",
    "publicKey": "18725661-36d6-4755-905a-28ce82d0c2d5",
    "name": "a subaccount",
    "email": "joe@test.com",
    "active": true
}
```
Error 404 (Not Found) is returned when the subaccount does not exist (or when it belongs to another parent user)
