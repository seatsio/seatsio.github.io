---
title: "Update a subaccount"
slug: "api-update-a-subaccount"
hidden: false
createdAt: "2018-08-02T10:16:44.053Z"
updatedAt: "2020-02-28T13:15:42.049Z"
---
[block:callout]
{
  &quot;type&quot;: &quot;warning&quot;,
  &quot;body&quot;: &quot;Subaccounts are deprecated. Please use [workspaces](api-workspaces) instead.&quot;
}
[/block]
### Update a subaccount
```text
POST https://api.seatsio.net/subaccounts/{id}
```
```php
$seatsioClient->subaccounts->update(169, "a new subaccount name", "joe@test.com");
```
```csharp
Client.Subaccounts.Update(169, "a new subaccount name", "joe@test.com");
```
```java
client.subaccounts.update(169, "a new subaccount name", "joe@test.com");
```
```python
client.subaccounts.update(169, "a new subaccount name", "joe@test.com")
```
```ruby
client.subaccounts.update id: 169, name: "a new subaccount name", email: "joe@test.com"
```
```javascript
 await client.subaccounts.update(169, 'a new subaccount name', 'john@test.com');
```

```json
{
    "name": "a new subaccount name",
    "email": "joe@test.com"
}
```
* **name**: the new name of the subaccount. Optional. Can be any string (including spaces or special characters)
* **email**: the new name of the subaccount. Optional. If you pass in a new e-mail address (which is different from the existing one), seats.io sends a mail to that address. That mail contains a link to a page which allows the user to choose a password to log in to the [dashboard](https://app.seats.io).
```curl
curl -X POST https://api.seatsio.net/subaccounts/34 \
-u aSecretKey: -X POST -H 'Content-Type: application/json' -d '{"name": "a new subaccount name", "email": "joe@test.com"}'
```
**Response**

204 - No Content
