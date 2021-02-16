---
title: "Retrieve the status of an object"
slug: "api-retrieve-the-status-of-an-object"
hidden: false
createdAt: "2018-08-02T10:08:06.329Z"
updatedAt: "2019-08-23T12:09:13.081Z"
---
```text
GET https://api.seatsio.net/events/{eventKey}/objects/{objectLabel}
```
```php
$seatsioClient->events->retrieveObjectStatus("event34", "A-1");
```
```csharp
Client.Events.GetObjectStatus("event34", "A-1");
```
```java
client.events.getObjectStatus("event34", "A-1");
```
```python
client.events.retrieve_object_status("event34", "A-1")
```
```ruby
client.events.retrieve_object_status key: "event34", object_key: "A-1"
```
```javascript
await client.events.retrieveObjectStatus('eventKey', 'A-1');
```

[block:callout]
{
  &quot;type&quot;: &quot;info&quot;,
  &quot;title&quot;: &quot;Tip&quot;,
  &quot;body&quot;: &quot;Keep in mind that certain characters need to be [URI encoded](doc:api-uri-encoding)!&quot;
}
[/block]

[block:api-header]
{
  &quot;title&quot;: &quot;Example request&quot;
}
[/block]

```curl
curl https://api.seatsio.net/events/event34/objects/A-1 -u aSecretKey: 
```

[block:api-header]
{
  &quot;title&quot;: &quot;Example response&quot;
}
[/block]
Regular, non-GA object:
```json
{
    "status": "booked",
    "ticketType": "adult",
    "extraData": {
        "foo": "bar"
    },
    "orderId": "anOrder",
    "holdToken": "...",
    "forSale": true
}

```
When the object is held (status `reservedByToken`), there&#39;s an additional property `holdToken` which is the hold token string that was used to hold the object.

A general admission area will yield this response: 

```json
{
    "status": "free",
    "quantity": 10
}
```
GA areas remain in status &#39;free&#39; as long as they are not fully booked. `quantity` is the number of booked places.
