---
title: "Deactivate workspace"
slug: "api-workspace-deactivate"
hidden: false
createdAt: "2020-07-03T15:59:00.375Z"
updatedAt: "2020-07-03T16:03:30.262Z"
---
Workspaces are either active or inactive. All API calls on inactive workspaces fail (except for the one that activates the workspace again). That includes creating charts, creating events and booking seats. An inactive workspace is completely disabled.

The call that lists workspaces returns both active and inactive ones. 
```text
POST https://api.seatsio.net/workspaces/{key}/actions/deactivate
```
```php
$seatsioClient->workspaces->deactivate($key);
```
```csharp
Client.Workspaces.Deactivate(key);

```
```java
client.workspaces.deactivate(key);
```
```python
client.workspaces.deactivate(key)
```
```ruby
client.workspaces.deactivate key: key
```
```javascript
await client.workspaces.deactivate(key);

```

```curl
curl -X POST https://api.seatsio.net/workspaces/18725661-36d6-4755-905a-28ce82d0c2d5/actions/deactivate \
-u anAdminKey: -X POST
```
**Response**

204 - No Content
