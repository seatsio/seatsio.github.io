---
title: "General admission areas"
slug: "api-general-admission-areas"
hidden: false
createdAt: "2018-08-01T12:38:00.288Z"
updatedAt: "2020-10-01T08:26:37.415Z"
---
To book general admission places (let&#39;s say 5), you can either:

- pass in the label of the general admission area 5 times 
- or pass in the label of the general admission area and a quantity (e.g. 5)
[block:callout]
{
  &quot;type&quot;: &quot;info&quot;,
  &quot;title&quot;: &quot;Note&quot;,
  &quot;body&quot;: &quot;All GA places passed in to this API will be considered as \&quot;used seats\&quot; for [pricing purposes](https://www.seats.io/pricing).&quot;
}
[/block]

```text
POST https://api.seatsio.net/events/{eventKey}/actions/change-object-status
POST https://api.seatsio.net/events/{eventKey}/actions/book
POST https://api.seatsio.net/events/{eventKey}/actions/hold
POST https://api.seatsio.net/events/{eventKey}/actions/release
```
```php
$seatsioClient->events->changeObjectStatus("event1", [["objectId" => "GeneralAdmission1", "quantity" => 3]], "myCustomStatus");
```
```csharp
Client.Events.ChangeObjectStatus("event1", new [] { new ObjectProperties("GeneralAdmission1", 3")  }, "myCustomStatus");
```
```java
client.events.changeObjectStatus("event1", Arrays.asList(new ObjectProperties("GeneralAdmission1", 3)), "myCustomStatus");

```
```python
client.events.change_object_status("event1", [ObjectProperties("GeneralAdmission1", quantity=3)], status="myCustomStatus")
```
```ruby
props = {:objectId => 'A-1', :quantity => 3}

client.events.change_object_status('event1', [props], 'myCustomStatus')
```
```javascript
await client.events.changeObjectStatus('eventKey', {'objectId' : 'GeneralAdmission1', 'quantity' : 3} , 'myCustomStatus');
```

[block:api-header]
{
  &quot;title&quot;: &quot;Request without quantity&quot;
}
[/block]

```json
{
    'objects': ['GA1', 'GA1', 'GA1', 'GA1', 'GA1'],
    'status': 'myCustomStatus'
}
```

[block:api-header]
{
  &quot;title&quot;: &quot;Request with quantity&quot;
}
[/block]

```json
{
    'objects': [{'objectId': 'GA1', 'quantity': 5}],
    'status': 'myCustomStatus'
}
```

[block:api-header]
{
  &quot;title&quot;: &quot;Temporarily holding places in a GA area&quot;
}
[/block]
Holds for GA areas work in the same way as regular objects. Have a look at our [documentation](/docs/api-temporarily-hold-objects) for more details.
