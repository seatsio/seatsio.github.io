---
title: "Change object statuses in batch"
slug: "/api/change-object-status-in-batch"
hidden: false
createdAt: "2020-03-02T07:47:33.337Z"
updatedAt: "2020-10-13T07:32:19.661Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This API call allows changing the status for multiple objects in multiple events, in one transaction. Meaning: either all status changes get applied, or none.

This is different from changing the object status in a season, in the sense that not all events need to be linked to the same chart. The events can be completely independent.

A good use case is a shopping basket, in which you allow your customers to select tickets for many events. Or a tool that allows swapping seats (i.e.: releasing some seats, and booking other seats).



<Tabs 
  groupId="serverside-code-samples"
  defaultValue="shell"
  values={[
{ label: 'Text', value: 'shell', },
{ label: 'PHP', value: 'php', },
{ label: 'C#', value: 'csharp', },
{ label: 'Java', value: 'java', },
{ label: 'Python', value: 'python', },
{ label: 'Ruby', value: 'ruby', },
{ label: 'Javascript', value: 'javascript', },
]}>
<TabItem value='shell'>

```shell
POST https://api-{region}.seatsio.net/events/actions/change-object-status

POST https://api-{region}.seatsio.net/events/actions/change-object-status?expand=objects

```

</TabItem>
<TabItem value='php'>

```php
// Booking seats
$seatsioClient->events->changeObjectStatusInBatch([
	new StatusChangeRequest("event1", ["A-3", "A-5"], "booked"),
	new StatusChangeRequest("event2", ["B-27"], "booked"),
);

// Holding seats
$seatsioClient->events->changeObjectStatusInBatch([
	new StatusChangeRequest("event1", ["A-3", "A-5"], "reservedByToken", "wvXbB9MlHt"),
	new StatusChangeRequest("event2", ["B-27"], "reservedByToken", "wvXbB9MlHt"),
);
```

</TabItem>
<TabItem value='csharp'>

```csharp
// Booking seats
Client.Events.ChangeObjectStatus(new[] {
	new StatusChangeRequest("event1", new[] {"A-3", "A-5"}, "booked"),
	new StatusChangeRequest("event2", new[] {"B-27"}, "booked"),
});

// Holding seats
Client.Events.ChangeObjectStatus(new[] {
	new StatusChangeRequest("event1", new[] {"A-3", "A-5"}, "reservedByToken", "wvXbB9MlHt"),
	new StatusChangeRequest("event2", new[] {"B-27"}, "reservedByToken", "wvXbB9MlHt"),
});
```

</TabItem>
<TabItem value='java'>

```java
// Booking seats
client.events.changeObjectStatus(newArrayList(
	new StatusChangeRequest("event1", newArrayList("A-3", "A-5"), "booked"),
	new StatusChangeRequest("event2", newArrayList("B-27"), "booked"),
));

// Holding seats
client.events.changeObjectStatus(newArrayList(
	new StatusChangeRequest("event1", newArrayList("A-3", "A-5"), "reservedByToken", "wvXbB9MlHt"),
	new StatusChangeRequest("event2", newArrayList("B-27"), "reservedByToken", "wvXbB9MlHt"),
));
```

</TabItem>
<TabItem value='python'>

```python
# Booking seats
client.events.change_object_status_in_batch([
  StatusChangeRequest("event1", ["A-3", "A-5"], "booked"),
  StatusChangeRequest("event2", ["B-27"], "booked")
])

# Holding seats
client.events.change_object_status_in_batch([
  StatusChangeRequest("event1", ["A-3", "A-5"], "reservedByToken", "wvXbB9MlHt"),
  StatusChangeRequest("event2", ["B-27"], "reservedByToken", "wvXbB9MlHt")
])

```

</TabItem>
<TabItem value='ruby'>

```ruby
# Booking seats
client.events.change_object_status_in_batch([
	{ :event => 'event1', :objects => ['A-3', 'A-5'], :status => 'booked'},
  { :event => 'event2', :objects => ['B-27'], :status => 'booked'}
])

# Holding seats
client.events.change_object_status_in_batch([
	{ :event => 'event1', :objects => ['A-3', 'A-5'], :status => 'reservedByToken', :holdToken => 'wvXbB9MlHt'},
  { :event => 'event2', :objects => ['B-27'], :status => 'reservedByToken', :holdToken => 'wvXbB9MlHt'}
])

```

</TabItem>
<TabItem value='javascript'>

```javascript
// Booking seats
client.events.changeObjectStatus([
	new StatusChangeRequest('event1', ['A-3', 'A-5'], 'booked'),
	new StatusChangeRequest('event2', ['B-27'], 'booked'),
]);

// Holding seats
client.events.changeObjectStatus([
	new StatusChangeRequest('event1', ['A-3', 'A-5'], 'reservedByToken', 'wvXbB9MlHt'),
	new StatusChangeRequest('event2', ['B-27'], 'reservedByToken', 'wvXbB9MlHt'),
]);
```

</TabItem>
</Tabs>





:::info Note
All seats (or tables, booths or GA places) passed in to this API will be considered as "used seats" for [pricing purposes](https://www.seats.io/pricing).
:::



:::info Note
This API call only supports events that belong to the same workspace. It's not possible to book objects in events across workspaces. To do so, you'll need to make multiple calls.
:::



## Request



```javascript
// Booking seats
{
  statusChanges: [
    { event: 'event1', objects: ['A-3', 'A-5'], status: 'booked' },
    { event: 'event2', objects: ['B-27'], status: 'booked' }
  ]
}

// Holding seats
{
  statusChanges: [
    { 
      event: 'event1', 
      objects: ['A-3', 'A-5'], 
      status: 'reservedByToken',
      holdToken: 'wvXbB9MlHt'
    },
    ...
  ]
}
```

The request is a JSON object with one property: `statusChanges`. This is an array of JSON objects, with the following properties:

* **event**: the event key
* **objects**: an array of object IDs
* **status**: the status you want to assign to an object
* **holdToken** *(optional)*: the hold token must be supplied when you hold a seat (status `reservedByToken`), or want to make sure that the same person that made the hold confirms his booking.
* **keepExtraData** *(optional)*: boolean. If set to true, the existing extra data doesn't get cleared
* **orderId** *(optional)*: an order id, defined by yourself, to be able to retrieve the objects IDs per order later on.
* **channelKeys** <i>(optional)</i>: an array of strings, i.e. the channel keys of the channel(s) to which the objects belong. If omitted, and the objects are assigned to a channel, the request will fail with 400 Bad request. Pass in `NO_CHANNEL` as channel key to allow objects without a channel.
* **ignoreChannels** <i>(optional)</i>: if true, the status change call succeeds, even if the objects belong to a channel. Useful inside a back office application, in which the user is allowed to book any seat - no matter the channel.
Should not be used in combination with `channelKeys`.

## Response

*** Without expand=objects ***
204 - No Content

*** With expand=objects ***
200 - ok

* **results**: JSON array that contains detailed information about the objects. results[0] corresponds to the first status change request you passed in, results[1] to the second one etc.

```javascript
{
  results: [
    {
      "A-3": {
        "label": "A-3",
        ...
      },
      "A-5": {
        "label": "A-5",
        ...
      }
    },
    {
      "B-27": {
        "label": "B-27",
        ...
      }
    }
  ]
}
```

