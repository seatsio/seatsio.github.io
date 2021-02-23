---
title: "Book objects"
slug: "api-book-objects"
hidden: false
createdAt: "2018-07-31T08:46:42.677Z"
updatedAt: "2021-02-19T07:47:32.665Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Changes the object status to ‘booked’. Booked objects are not selectable on a rendered chart.



<Tabs 
  defaultValue="text"
  values={[
{ label: '', value: 'text', },
{ label: 'PHP', value: 'php', },
{ label: 'C#', value: 'csharp', },
{ label: 'Java', value: 'java', },
{ label: 'Python', value: 'python', },
{ label: 'Ruby', value: 'ruby', },
{ label: 'Javascript', value: 'javascript', },
]}>
<TabItem value='text'>

```text
POST https://api.seatsio.net/events/{eventKey}/actions/book

POST https://api.seatsio.net/events/{eventKey}/actions/book?expand=objects
```

</TabItem>
<TabItem value='php'>

```php
// No ticket types
$seatsioClient->events->book("event1", ["A-3", "A-5"]);

// Ticket tyeps
$seatsioClient->events->book(
  "event1",
  [
    ["objectId" => "A-3", "ticketType" => "adult"],
    ["objectId" => "A-5", "ticketType" => "child"]
  ]
);
```

</TabItem>
<TabItem value='csharp'>

```csharp
// No ticket types
Client.Events.Book("event1", new [] { "A-3", "A-5" });

// Ticket types
ObjectProperties object1 = new ObjectProperties("A-3", "adult");
ObjectProperties object2 = new ObjectProperties("A-5", "child");
Client.Events.Book("event1", new [] { object1, object2 });
```

</TabItem>
<TabItem value='java'>

```java
// No ticket types
client.events.book("event1", Arrays.asList("A-3", "A-5"));

// Ticket types
ObjectProperties object1 = new ObjectProperties("A-3", "adult");
ObjectProperties object2 = new ObjectProperties("A-5", "child");
client.events.book("event1", Arrays.asList(object1, object2));

```

</TabItem>
<TabItem value='python'>

```python
# No ticket types
client.events.book("event1", ["A-3", "A-5"])

# Ticket types
object1 = ObjectProperties("A-3", ticket_type="adult")
object2 = ObjectProperties("A-5", ticket_type="child")
client.events.book("event1", [object1, object2])
```

</TabItem>
<TabItem value='ruby'>

```ruby
# No ticket types
client.events.book('event1', ['A-3', 'A-5'])

# Ticket types
object1 = {:objectId => 'A-3', :ticketType => 'adult'}
object2 = {:objectId => 'A-5', :ticketType => 'child'}
client.events.book('event1', [object1, object2])
```

</TabItem>
<TabItem value='javascript'>

```javascript
// No ticket types
await client.events.book('eventKey', ['A-3', 'A-5']);

// Ticket types
let object1 = {objectId: 'A-3', ticketType: 'adult'};
let object2 = {objectId: 'A-5', ticketType: 'child'};
await client.events.book('eventKey', [object1, object2]);

```

</TabItem>
</Tabs>


You should use this API call to tell us whenever a ticket sale is confirmed. The exact definition of *confirmed* depends on your sales process, but this would typically be right before the payment has been processed (read more [here](http://support.seats.io/integrating-seats-io/when-should-i-book-my-seats)).

You can change object status whenever you want. E.g. You could pre-book seats prior to opening up your sales page, to reserve VIP seats.



:::info Note
All seats (or tables, booths or GA places) passed in to this API will be considered as "used seats" for [pricing purposes](https://www.seats.io/pricing).
:::

## Request

```json
// Minimal request
{
    'objects': ['A-3', 'A-5']
}

// Booking held seats 
{
    'objects': ['A-3', 'A-5'], 
    'holdToken': 'a59a0803-f126-4b87-ac26-f8fa4907a60c'
}

// Ticket types
{
    'objects': [
        {'objectId': 'A-1', 'ticketType': 'adult'},
        {'objectId': 'A-2', 'ticketType': 'child'}
    ]
}
```

* **objects**: an array of object ids to book, or an array of object ids and ticket types
* **holdToken** &lt;i&gt;(optional)&lt;/i&gt;: the hold token must be supplied when you want to make sure that the same person that made the hold confirms his booking. If the seats were not held with this token, the API call doesn't book any seats and returns an error 400 (bad request).
* **orderId** *(optional)*: an order id, defined by yourself, to be able to [retrieve the objects IDs per order](/docs/api-detailed-reports#detailed-report-by-order-id) later on.
* **channelKeys** &lt;i&gt;(optional)&lt;/i&gt;: an array of strings, i.e. the channel keys of the channel(s) to which the objects belong. If omitted, and the objects to be booked are assigned to a channel, the request will fail with 400 Bad request. Pass in `NO_CHANNEL` as channel key to allow objects without a channel.
* **ignoreChannels** &lt;i&gt;(optional)&lt;/i&gt;: if true, the booking call succeeds, even if the booked objects belong to a channel. Useful inside a back office application, in which the user is allowed to book any seat - no matter the channel.
Should not be used in combination with `channelKeys`.
* **ignoreSocialDistancing** &lt;i&gt;(optional)&lt;/i&gt;: if true, social distancing rules are not checked for this booking.
## Response

*** Without expand=objects ***
204 - No Content

*** With expand=objects ***
200 - ok
```json
{
  "A-3": {
    "label": "Section A-A-3",
    "labels": {
      "own": {
        "label": "3",
        "type": "seat",
      },
      "parent": {
        "label": "A",
        "type": "row"
      },
      "section": "Section A"
    },
    "status": "booked",
    "categoryLabel": "Ground Floor",
    "categoryKey": "4",
    "ticketType": "adult",
    "orderId": "order1",
    "forSale": true,
    "objectType": "seat",
    "isAccessible": true,
    "isCompanionSeat": false,
    "hasRestrictedView": false,
    "leftNeighbour": "Section A-A-2",
    "rightNeighbour": "Section A-A-4"
  },
  "A-5": {
    "label": "Section A-A-5",
    "labels": {
      "own": {
        "label": "5",
        "type": "seat"
      },
      "parent": {
        "label": "A",
        "type": "row"
      },
      "section": "Section A"
    },
    "status": "booked",
    "categoryLabel": "Ground Floor",
    "categoryKey": "4",
    "ticketType": "adult",
    "orderId": "order1",
    "forSale": true,
    "objectType": "seat",
    "isAccessible": true,
    "isCompanionSeat": false,
    "hasRestrictedView": false,
    "leftNeighbour": "Section A-A-4",
    "rightNeighbour": "Section A-A-6"
  }
}
```