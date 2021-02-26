---
title: "Temporarily hold objects"
slug: "/api-temporarily-hold-objects"
hidden: false
createdAt: "2018-07-31T09:20:48.306Z"
updatedAt: "2021-02-26T11:55:58.267Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Objects can be held for a certain time period. During this period, other users cannot hold or book the same seats.

By default the expiration time for held objects is 15 minutes, but this can be changed via [your company settings page](https://app.seats.io/company-settings).

:::info Note
You only need this API call when holding best available objects.

If you render the chart with a [session](/docs/renderer-config-session) parameter, objects get held when the ticket buyer clicks on them. So no need to manually call `/hold` in that case.
:::

To hold objects using the manual API method, you first need to generate a hold token, which you then pass to the following API call:



<Tabs 
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
POST https://api.seatsio.net/events/{eventKey}/actions/hold

POST https://api.seatsio.net/events/{eventKey}/actions/hold?expand=objects
```

</TabItem>
<TabItem value='php'>

```php
// No ticket types
$seatsioClient->events->hold(
  "event1", // the event key
  ["A-3", "A-5"], // object labels
  "17378c14-ae6a-46a4-ada4-9c745a45e018" // hold token
);

// Ticket types
$seatsioClient->events->hold(
  "event1",
  [
    ["objectId" => "A-3", "ticketType" => "adult"],
    ["objectId" => "A-5", "ticketType" => "child"]
  ],
  "17378c14-ae6a-46a4-ada4-9c745a45e018" // hold token
);
```

</TabItem>
<TabItem value='csharp'>

```csharp
// No ticket types
Client.Events.Hold("event1", new [] { "A-3", "A-5" }, "17378c14-ae6a-46a4-ada4-9c745a45e018");

// Ticket types
ObjectProperties object1 = new ObjectProperties("A-3", "adult");
ObjectProperties object2 = new ObjectProperties("A-5", "child");
Client.Events.Hold("event1", new [] { object1, object2 }, "17378c14-ae6a-46a4-ada4-9c745a45e018");
```

</TabItem>
<TabItem value='java'>

```java
// No ticket types
client.events.hold("event1", Arrays.asList("A-3", "A-5"), "17378c14-ae6a-46a4-ada4-9c745a45e018");

// Ticket types
ObjectProperties object1 = new ObjectProperties("A-3", "adult");
ObjectProperties object2 = new ObjectProperties("A-5", "child");
client.events.hold("event1", Arrays.asList(object1, object2), "17378c14-ae6a-46a4-ada4-9c745a45e018");
```

</TabItem>
<TabItem value='python'>

```python
# No ticket types
client.events.hold("event1", ["A-3", "A-5"], hold_token="17378c14-ae6a-46a4-ada4-9c745a45e018")

# Ticket types
object1 = ObjectProperties("A-3", ticket_type="adult")
object2 = ObjectProperties("A-5", ticket_type="child")
client.events.hold("event1", [object1, object2], hold_token="17378c14-ae6a-46a4-ada4-9c745a45e018")
```

</TabItem>
<TabItem value='ruby'>

```ruby
# No ticket types
client.events.hold('event1', ['A-3', 'A-5'], '17378c14-ae6a-46a4-ada4-9c745a45e018')

# Ticket types
object1 = {:objectId => 'A-3', :ticketType => 'adult'}
object2 = {:objectId => 'A-5', :ticketType => 'child'}
client.events.hold('event1', [object1, object2], '17378c14-ae6a-46a4-ada4-9c745a45e018')
```

</TabItem>
<TabItem value='javascript'>

```javascript
// No ticket types
let holdToken = await client.holdTokens.create();
await client.events.hold('eventKey', ['A-3', 'A-5'], holdToken.holdToken);

// Ticket types
let object1 = {objectId: 'A-3', ticketType: 'adult'};
let object2 = {objectId: 'A-5', ticketType: 'child'};
let holdToken = await client.holdTokens.create();
await client.events.hold('eventKey', [object1, object2], holdToken.holdToken);
```

</TabItem>
</Tabs>





## Request



```json
// No ticket types
{
    "objects": ["A-3", "A-5"],
    "holdToken": "17378c14-ae6a-46a4-ada4-9c745a45e018"
}

// Ticket types
{
    "objects": [
        {"objectId": "A-3", "ticketType": "adult"},
        {"objectId": "A-5", "ticketType": "child"}
    ],
    "holdToken": "17378c14-ae6a-46a4-ada4-9c745a45e018"
}

// Best available
{
    "bestAvailable": {
        number: 2,
        categories: ["balcony", "stalls"],
        extraData: [{"name": "John Doe"}, {"name": "Jane Doe"}],
        ticketTypes: ["adult", "child"]
    },
    "holdToken": "17378c14-ae6a-46a4-ada4-9c745a45e018"
}
```

After invoking this API call, the objects get the status `reservedByToken`. 
(Note: this is a legacy status name: in the past, holding an object was known as reserving an object. We kept the status `reservedByToken` to maintain backwards compatibility, i.e. to not break existing integrations)

When you're ready to confirm the booking for a held object (e.g. after payment was received), issue a `/book` or `/change-object-status` call, passing in the same hold token that was used for acquiring the hold.
 
If no definitive booking is made before the hold expires, the seat are released again. And if you want to cancel a hold before the hold period expires, you just [release](api-release-objects) the objects.

Even for objects that are held, the hold token is an optional argument to `/book` and `/change-object-status`. You only need to pass it when it is the person that made the hold who triggers the API call. If on the other hand you implemented some back office functionality in which venue managers can change the status of held objects, you don't need to pass in the hold token.

:::info 
Holding also works for season tickets. Just pass in an array of events instead of a single event.
:::



## Response

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
    "status": "reservedByToken",
    "holdToken": "17378c14-ae6a-46a4-ada4-9c745a45e018",
    "categoryLabel": "Ground Floor",
    "categoryKey": "4",
    "ticketType": "adult",
    "orderId": "order1",
    "forSale": true,
    "objectType": "seat",
    "leftNeighbour": "A-2",
    "rightNeighbour": "A-4",
    "entrance": "Blue"
  },
  "A-5": {
    "label": "A-5",
    "labels": {
      "own": {
        "label": "5",
        "type": "seat"
      },
      "parent": {
        "label": "A",
        "type": "row"
      },
    },
    "status": "reservedByToken",
    "holdToken": "17378c14-ae6a-46a4-ada4-9c745a45e018",
    "categoryLabel": "Ground Floor",
    "categoryKey": "4",
    "ticketType": "adult",
    "orderId": "order1",
    "forSale": true,
    "objectType": "seat",
    "leftNeighbour": "A-4",
    "rightNeighbour": "A-6",
    "entrance": "Blue"
  }
}
```

