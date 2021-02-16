---
title: "Regenerate secret key of workspace"
slug: "api-workspaces-regenerate-secret-key"
hidden: false
createdAt: "2020-04-26T22:22:47.954Z"
updatedAt: "2020-04-27T10:28:22.904Z"
---
The secret key of a workspace should be kept secret at all times. If it does get compromised, you can generate a new one.
```text
POST https://api.seatsio.net/workspaces/{key}/actions/regenerate-secret-key
```
```php
$seatsioClient->workspaces->regenerateSecretKey($key);
```
```csharp
Client.Workspaces.RegenerateSecretKey(key);

```
```java
client.workspaces.regenerateSecretKey(key);
```
```python
client.workspaces.regenerate_secret_key(key)
```
```ruby
client.workspaces.regenerate_secret_key key: key
```
```javascript
await client.workspaces.regenerateSecretKey(key);

```
* **name**: the name of the workspace. Can be any string (including spaces or special characters)
```curl
curl -X POST https://api.seatsio.net/workspaces/18725661-36d6-4755-905a-28ce82d0c2d5/actions/regenerate-secret-key \
-u anAdminKey: -X POST
```
**Response**
```json
{
  secretKey: "79425661-36d6-4755-905a-28ce82d0c8c1"
}
```
