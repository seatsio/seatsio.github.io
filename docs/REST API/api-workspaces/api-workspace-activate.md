---
title: "Activate workspace"
slug: "api-workspace-activate"
hidden: false
createdAt: "2020-07-03T15:57:22.898Z"
updatedAt: "2020-07-03T16:03:22.100Z"
---
Workspaces are either active or inactive. All API calls on inactive workspaces fail (except for the one that activates the workspace again). That includes creating charts, creating events and booking seats. An inactive workspace is completely disabled.

The call that lists workspaces returns both active and inactive ones. 
```text
POST https://api.seatsio.net/workspaces/{key}/actions/activate
```
```php
$seatsioClient->workspaces->activate($key);
```
```csharp
Client.Workspaces.Activate(key);

```
```java
client.workspaces.activate(key);
```
```python
client.workspaces.activate(key)
```
```ruby
client.workspaces.activate key: key
```
```javascript
await client.workspaces.activate(key);

```

```curl
curl -X POST https://api.seatsio.net/workspaces/18725661-36d6-4755-905a-28ce82d0c2d5/actions/activate \
-u anAdminKey: -X POST
```
**Response**

204 - No Content
