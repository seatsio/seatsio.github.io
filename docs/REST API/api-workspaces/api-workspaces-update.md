---
title: "Update a workspace"
slug: "api-workspaces-update"
hidden: false
createdAt: "2020-02-27T22:00:24.807Z"
updatedAt: "2020-02-28T12:51:41.416Z"
---
Creates a workspace. Only the name is required.
```text
POST https://api.seatsio.net/workspaces/{key}
```
```php
$seatsioClient->workspaces->update($key, "a workspace");
```
```csharp
Client.Workspaces.Update(key, "a workspace);

```
```java
client.workspaces.update(key, "a workspace");
```
```python
client.workspaces.update(key, "a workspace")
```
```ruby
client.workspaces.update key: key, name: "a workspace"
```
```javascript
await client.workspaces.update(key, 'a workspace');

```

```json
{
    "name": "a workspace",
}
```
* **name**: the name of the workspace. Can be any string (including spaces or special characters)
```curl
curl -X POST https://api.seatsio.net/workspaces/18725661-36d6-4755-905a-28ce82d0c2d5 \
-u anAdminKey: -X POST -H 'Content-Type: application/json' -d '{"name": "a workspace"}'
```
**Response**

204 - No Content
