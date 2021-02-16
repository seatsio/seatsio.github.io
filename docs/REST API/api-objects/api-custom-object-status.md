---
title: "Custom object status"
slug: "api-custom-object-status"
hidden: false
createdAt: "2018-07-31T10:13:43.779Z"
updatedAt: "2020-12-11T15:24:20.399Z"
---
If you need more statuses than just booked and free, you can use this API call to change the status of a seat, table or booth to your own custom status.
```text
POST https://api.seatsio.net/events/{eventKey}/actions/change-object-status

POST https://api.seatsio.net/events/{eventKey}/actions/change-object-status?expand=objects

```
```php
// No ticket types
$seatsioClient->events->changeObjectStatus("event1", ["A-3", "A-5"], "myCustomStatus");

// Ticket types
$seatsioClient->events->changeObjectStatus(
  "event1",
  [
    ["objectId" => "A-3", "ticketType" => "adult"],
    ["objectId" => "A-5", "ticketType" => "child"]
  ],
  "myCustomStatus"
);
```
```csharp
// No ticket types
Client.Events.ChangeObjectStatus("event1", new [] { "A-3", "A-5" }, "myCustomStatus");

// Ticket types
ObjectProperties object1 = new ObjectProperties("A-3", "adult");
ObjectProperties object2 = new ObjectProperties("A-5", "child");
Client.Events.ChangeObjectStatus("event1", new [] { object1, object2 }, "myCustomStatus");
```
```java
// No ticket types
client.events.changeObjectStatus("event1", Arrays.asList("A-3", "A-5"), "myCustomStatus");

// Ticket types
ObjectProperties object1 = new ObjectProperties("A-3", "adult");
ObjectProperties object2 = new ObjectProperties("A-5", "child");
client.events.changeObjectStatus("event1", Arrays.asList(object1, object2), "myCustomStatus");
```
```python
# No ticket types
client.events.change_object_status("event1", ["A-3", "A-5"], status="myCustomStatus")

# Ticket types
object1 = ObjectProperties("A-3", ticket_type="adult")
object2 = ObjectProperties("A-5", ticket_type="child")
client.events.change_object_status("event1", [object1, object2], status="myCustomStatus")

```
```ruby
# No ticket types
client.events.change_object_status('event1', ['A-3', 'A-5'], 'myCustomStatus')

# Ticket types
object1 = {:objectId => 'A-3', :ticketType => 'adult'}
object2 = {:objectId => 'A-5', :ticketType => 'child'}
client.events.change_object_status('event1', [object1, object2], 'myCustomStatus')

```
```javascript
// No ticket types
await client.events.changeObjectStatus('eventKey', ['A-3', 'A-5'], 'myCustomStatus');

// Ticket types
let object1 = {objectId: 'A-3', ticketType: 'adult'};
let object2 = {objectId: 'A-5', ticketType: 'child'};
await client.events.changeObjectStatus('eventKey', [object1, object2], 'myCustomStatus');

```

[block:callout]
{
  &quot;type&quot;: &quot;info&quot;,
  &quot;title&quot;: &quot;Note&quot;,
  &quot;body&quot;: &quot;All seats (or tables, booths or GA places) passed in to this API will be considered as \&quot;used seats\&quot; for [pricing purposes](https://www.seats.io/pricing).&quot;
}
[/block]

[block:api-header]
{
  &quot;title&quot;: &quot;Request&quot;
}
[/block]

```json
// No ticket types
{
    'objects': ['A-3', 'A-5'],
    'status': 'myCustomStatus'
}

// Ticket types
{
    'objects': [
        {'objectId': 'A-1', 'ticketType': 'adult'},
        {'objectId': 'A-2', 'ticketType': 'child'}
    ],
    'status': 'myCustomStatus'
}
```

* **objects**: an array of object ids to release
* **status**: the status you want to assign to an object
* **holdToken** *(optional)*: the hold token must be supplied when you want to make sure that the same person that made the hold confirms his booking.
* **orderId** *(optional)*: an order id, defined by yourself, to be able to [retrieve the objects IDs per order](/docs/api-detailed-reports#detailed-report-by-order-id) later on.
* **channelKeys** &lt;i&gt;(optional)&lt;/i&gt;: an array of strings, i.e. the channel keys of the channel(s) to which the objects belong. If omitted, and the objects are assigned to a channel, the request will fail with 400 Bad request. Pass in `NO_CHANNEL` as channel key to allow objects without a channel.
* **ignoreChannels** &lt;i&gt;(optional)&lt;/i&gt;: if true, the status change call succeeds, even if the objects belong to a channel. Useful inside a back office application, in which the user is allowed to book any seat - no matter the channel.
Should not be used in combination with `channelKeys`.
* **ignoreSocialDistancing** &lt;i&gt;(optional)&lt;/i&gt;: if true, social distancing rules are not checked for this status change.
[block:api-header]
{
  &quot;title&quot;: &quot;Response&quot;
}
[/block]
*** Without expand=objects ***
204 - No Content

*** With expand=objects ***
200 - ok
```json
{
  "A-3": {
    "label": "A-3",
    "labels": {
      "own": {
        "label": "3",
        "type": "seat"
      },
      "parent": {
        "label": "A",
        "type": "row"
      },
    },
    "status": "myCustomStatus",
    "categoryLabel": "Ground Floor",
    "categoryKey": "4",
    "forSale": true,
    "objectType": "seat",
    "isAccessible": true,
    "isCompanionSeat": false,
    "hasRestrictedView": false,
    "leftNeighbour": "A-2",
    "rightNeighbour": "A-4"
  }
}
```
```json
{
  "T1-3": {
    "label": "T1-3",
    "labels": {
      "own": {
        "label": "3",
        "type": "seat"
      },
      "parent": {
        "label": "T1",
        "type": "table"
      },
    },
    "status": "myCustomStatus",
    "categoryLabel": "Ground Floor",
    "categoryKey": "4",
    "forSale": true,
    "objectType": "seat",
    "isAccessible": true,
    "isCompanionSeat": false,
    "hasRestrictedView": false
  }
}
```
```json
{
  "STA-A-3": {
    "label": "A-3",
    "labels": {
      "own": {
        "label": "3",
        "type": "seat"
      },
      "parent": {
        "label": "A",
        "type": "row"
      },
      "section": "Stalls"
    },
    "status": "myCustomStatus",
    "categoryLabel": "Ground Floor",
    "categoryKey": "4",
    "forSale": true,
    "objectType": "seat",
    "section": "STA",
    "entrance": "Red",
    "isAccessible": true,
    "isCompanionSeat": false,
    "hasRestrictedView": false
  }
}
```
```json
{
  "B1": {
    "label": "B1",
    "labels": {
      "own": {
        "label": "B1",
        "type": "booth"
      }
    },
    "status": "myCustomStatus",
    "categoryLabel": "Ground Floor",
    "categoryKey": "4",
    "forSale": true,
    "objectType": "booth"
  }
}
```
```json
{
  "T1": {
    "label": "T1",
    "labels": {
      "own": {
        "label": "T1",
        "type": "table"
      }
    },
    "status": "myCustomStatus",
    "categoryLabel": "Ground Floor",
    "categoryKey": "4",
    "forSale": true,
    "objectType": "table"
  }
}
```
```json
{
  "GA1": {
    "label": "GA1",
    "labels": {
      "own": {
        "label": "GA1",
        "type": "generalAdmission"
      }
    },
    "status": "myCustomStatus",
    "categoryLabel": "Ground Floor",
    "categoryKey": "4",
    "forSale": true,
    "objectType": "generalAdmission"
  }
}
```
* **objects**: JSON object that contains detailed information about the objects
