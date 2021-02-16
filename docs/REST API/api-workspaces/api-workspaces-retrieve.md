---
title: "Retrieve a workspace"
slug: "api-workspaces-retrieve"
hidden: false
createdAt: "2020-02-27T22:00:24.127Z"
updatedAt: "2020-07-03T16:00:51.844Z"
---
### Retrieve a workspace
```text
GET https://api.seatsio.net/workspace/{key}
```
```php
$seatsioClient->workspaces->retrieve($key);
```
```csharp
Client.Workspaces.Retrieve(Key);
```
```java
client.workspaces.retrieve(key);
```
```python
client.workspaces.retrieve(key)
```
```ruby
client.workspaces.retrieve key: key

```
```javascript
await client.workspaces.retrieve(key);
```

```curl
curl https://api.seatsio.net/workspaces/18725661-36d6-4755-905a-28ce82d0c2d5 \
-u anAdminKey:
```

```json
{
    "id": 169,
    "name": "a workspace",
    "key": "18725661-36d6-4755-905a-28ce82d0c2d5",
    "secretKey": "7c647eed-0880-4118-9459-82757579703e",
    "isDefault": true,
    "isTest": false,
    "isActive": true
}

```
Error 404 (Not Found) is returned when the workspace does not exist (or the passed in secret key doesn&#39;t give access to the workspace).
