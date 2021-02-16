---
title: "Delete an event"
slug: "api-delete-an-event"
hidden: false
createdAt: "2018-08-02T09:57:40.460Z"
updatedAt: "2018-11-15T10:17:38.037Z"
---
```text
DELETE https://api.seatsio.net/events/{eventKey}
```
```php
$seatsioClient->events->delete("event34");
```
```csharp
Client.Events.Delete("event34");
```
```java
client.events.delete("event34");
```
```python
client.events.delete("event34")
```
```ruby
client.events.delete key: "event34"

```
```javascript
await client.events.delete('eventKey');
```

**Example request**
```curl
curl https://api.seatsio.net/events/event34 \
-u aSecretKey: -X DELETE -H 'Content-Type: application/json'
```
**Response**

204 - No Content
