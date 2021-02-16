---
title: "Update extra data for an object"
slug: "api-update-extra-data-for-an-object"
hidden: false
createdAt: "2018-08-02T10:03:43.443Z"
updatedAt: "2018-11-15T10:21:33.072Z"
---
Updates the [extra data](doc:api-extra-data) for an object in an event, without changing the object status.

```text
POST https://api.seatsio.net/events/{eventKey}/objects/{objectLabel}/actions/update-extra-data
```
```php
$seatsioClient->events->updateExtraData("event34", "A-1", ["name" => "John Doe"]);
```
```csharp
var extraData = new Dictionary<string, object> {{ "name", "John Doe" }};
Client.Events.UpdateExtraData("event34", "A-1", extraData);
```
```java
Map<?, ?> extraData = new HashMap<>();
extraData.put("name", "John Doe");
client.events.updateExtraData("event34", "A-1", extraData);

```
```python
extra_data = {"name": "John Doe"}
client.events.update_extra_data("event34", "A-1", extra_data)

```
```ruby
extra_data = {"name": "John Doe"}
client.events.update_extra_data key: "event34", object: "A-1", extra_data: extra_data
```
```javascript
let extraData = {'name': 'John Doe'};
await client.events.updateExtraData('eventKey', 'A-1', extraData);
```

[block:callout]
{
  &quot;type&quot;: &quot;info&quot;,
  &quot;title&quot;: &quot;Tip&quot;,
  &quot;body&quot;: &quot;Keep in mind that certain characters need to be [URI encoded](doc:api-uri-encoding)!&quot;
}
[/block]

```json
{
    "extraData": {
        "name": "John Doe"
    }
}
```

extraData must be a valid JSON object.

**Example request**
```curl
curl https://api.seatsio.net/events/event34/objects/A-1/actions/update-extra-data \
-u aSecretKey: -X POST -H 'Content-Type: application/json' -d '{"extraData": {"name": "John Doe"}}'

```
**Response**

204 - No Content
