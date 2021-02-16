---
title: "Season tickets"
slug: "api-season-tickets"
hidden: false
createdAt: "2018-08-01T12:52:04.225Z"
updatedAt: "2020-10-05T10:15:17.605Z"
---
Sometimes you need to change the status of objects for a whole bunch of events at once. A good example is when selling season tickets: the season ticket holder books a seat for all the events of the season.

Seats.io takes care of the all-or-nothing aspect of season tickets: either booking succeeds for all events, or it doesn&#39;t succeed for any of them. So prefer doing a single change status call with a number of events as parameter, instead of changing the object status for each event individually.
[block:callout]
{
  &quot;type&quot;: &quot;info&quot;,
  &quot;title&quot;: &quot;Note&quot;,
  &quot;body&quot;: &quot;calling this API will be considered as a \&quot;booking\&quot; for each event in the season for [pricing purposes](https://www.seats.io/pricing).&quot;
}
[/block]

```text
POST https://api.seatsio.net/seasons/actions/change-object-status
POST https://api.seatsio.net/seasons/actions/book
POST https://api.seatsio.net/seasons/actions/release
POST https://api.seatsio.net/seasons/actions/hold
```
```php
$seatsioClient->events->changeObjectStatus(["event1", "event2", "event3"], ["A-3", "A-5", "A-7"], "myCustomStatus");
```
```csharp
Client.Events.ChangeObjectStatus(new [] { "event1", "event2", "event3" }, new [] { "A-3", "A-5", "A-7"  }, "myCustomStatus");
```
```java
client.events.changeObjectStatus(Arrays.asList("event1", "event2", "event3"), Arrays.asList("A-3", "A-5", "A-7"), "myCustomStatus");
```
```python
client.events.change_object_status(
    ["event1", "event2", "event3"], 
    ["A-3", "A-5", "A-7"],
    status="myCustomStatus")
```
```ruby
client.events.change_object_status(['event1', 'event2', 'event3'], ['A-3', 'A-5', 'A-7'], 'myCustomStatus')
```
```javascript
await client.events.changeObjectStatus(['event1Key', 'event2Key', 'event3Key'], ['A-3', 'A-5', 'A-7'], 'myCustomStatus');
```

[block:api-header]
{
  &quot;title&quot;: &quot;Request&quot;
}
[/block]

```json
{
    'objects': ['A-3', 'A-5', 'A-7'],
    'events': ['event1', 'event2', 'event3'],
    'status': 'myCustomStatus'
}
```
* **objects**: an array of object ids to release
* **events**: an array of event keys
* **status**: the status you want to assign to an object
* **holdToken** &lt;i&gt;(optional)&lt;/i&gt;: the hold token must be supplied when you want to make sure that the same person that made the hold confirms his booking.
* **orderId** *(optional)*: an order id, defined by yourself, to be able to [retrieve the objects IDs per order](/docs/api-detailed-reports#detailed-report-by-order-id) later on.
[block:api-header]
{
  &quot;title&quot;: &quot;Response&quot;
}
[/block]
204 - No Content
