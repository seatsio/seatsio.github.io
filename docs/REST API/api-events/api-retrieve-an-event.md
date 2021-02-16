---
title: "Retrieve an event"
slug: "api-retrieve-an-event"
hidden: false
createdAt: "2018-08-02T09:57:07.007Z"
updatedAt: "2020-10-30T11:17:29.827Z"
---
### Retrieve an event
```text
GET https://api.seatsio.net/events/{eventKey}
```
```php
$seatsioClient->events->retrieve("anotherEvent");
```
```csharp
Client.Events.Retrieve("anotherEvent");
```
```java
client.events.retrieve("anotherEvent");
```
```python
client.events.retrieve("anotherEvent")
```
```ruby
client.events.retrieve key: "anotherEvent"
```
```javascript
await client.events.retrieve('eventKey');
```

```curl
curl https://api.seatsio.net/events/anEvent -u aSecretKey: 
```

```json
{
    "id": 168,
    "key": "anotherEvent",
    "tableBookingConfig": {
      "mode": "CUSTOM",
      "tables": {
      	"T1": "BY_TABLE",
      	"T2": "BY_SEAT",
      	"T3": "BY_TABLE"
      }
    },
    "chartKey": "4150dddc-e41f-c7cb-986a-2c5e728b8c20",
    "supportsBestAvailable": true,
    "forSaleConfig": {
        "forSale": false,
        "objects": ["section1"],
        "categories": []
    },
    "channels": [
      {
        "name": "Channel 1",
        "key": "8950dddc-e51f-c7cb-986a-2c5e728b8c21",
        "color": "#aaaaaa",
        "objects": ["A-1", "A-2"]
      }
    ],
    "socialDistancingRulesetKey": "ruleset1",
    "createdOn": "2017-03-05T10:58:44.715Z",
    "updatedOn": "2017-04-05T10:58:44.615Z"
}

```
* **supportsBestAvailable**: true if the chart of the event has a focal point.

* **forSaleConfig**: null, unless /mark-as-for-sale or /mark-as-not-for-sale have been called

* **tableBookingConfig**: `mode` can either be
  - `INHERIT`: table booking settings are inherited from the chart
  - `CUSTOM`: for this event, some tables have a different table booking config than defined on the chart
  - `ALL_BY_SEAT`: for this event, all tables are bookable by seat
  - `ALL_BY_TABLE`:  for this event, all tables are bookable as a whole

* **tableBookingModes**: deprecated. Use `tableBookingConfig.tables` instead.

* **bookWholeTables**: deprecated. Use `tableBookingConfig.mode` instead.
