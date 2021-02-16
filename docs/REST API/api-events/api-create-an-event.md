---
title: "Create an event"
slug: "api-create-an-event"
hidden: false
createdAt: "2018-08-02T09:57:18.036Z"
updatedAt: "2021-01-20T09:33:06.515Z"
---
```text
POST https://api.seatsio.net/events
```
```php
$seatsioClient->events->create("4250fffc-e41f-c7cb-986a-2c5e728b8c28", "event34");

$seatsioClient->events->create(
  "4250fffc-e41f-c7cb-986a-2c5e728b8c28", null,
  TableBookingConfig::custom(["T1" => "BY_TABLE", "T2" => "BY_SEAT"])
);

$seatsioClient->events->create(
  "4250fffc-e41f-c7cb-986a-2c5e728b8c28", null, null,
  "9350fffc-e41f-c7cb-986a-2c5e728b8c2b" // social distancing ruleset key
);
```
```csharp
Client.Events.Create("4250fffc-e41f-c7cb-986a-2c5e728b8c28", "event34");

Client.Events.Create(
  "4250fffc-e41f-c7cb-986a-2c5e728b8c28", null,
  new Dictionary<string, string> {{"T1", "BY_TABLE"}, {"T2", "BY_SEAT"}}
);

Client.Events.Create(
  "4250fffc-e41f-c7cb-986a-2c5e728b8c28", null, null,
  "9350fffc-e41f-c7cb-986a-2c5e728b8c2b" // social distancing ruleset key
);
```
```java
client.events.create("4250fffc-e41f-c7cb-986a-2c5e728b8c28", "event34");

client.events.create(
  "4250fffc-e41f-c7cb-986a-2c5e728b8c28", null,
  TableBookingConfig.custom(ImmutableMap.of("T1", BY_TABLE, "T2", BY_SEAT))
);

client.events.create(
  "4250fffc-e41f-c7cb-986a-2c5e728b8c28", null, null,
  "9350fffc-e41f-c7cb-986a-2c5e728b8c2b" // social distancing ruleset key
);
```
```python
client.events.create("749b9650-24fb-11e7-93ae-92361f002671", event_key="event34")

client.events.create("749b9650-24fb-11e7-93ae-92361f002671", table_booking_config=TableBookingConfig.custom({"T1": "BY_TABLE", "T2": "BY_SEAT"}))

client.events.create("749b9650-24fb-11e7-93ae-92361f002671", social_distancing_ruleset_key="9350fffc-e41f-c7cb-986a-2c5e728b8c2b")
```
```ruby
client.events.create key: "749b9650-24fb-11e7-93ae-92361f002671", event_key: "event34"

client.events.create key: "749b9650-24fb-11e7-93ae-92361f002671", table_booking_config: Seatsio::TableBookingConfig::custom({'T1' => 'BY_TABLE', 'T2' => 'BY_SEAT'})

client.events.create key: "749b9650-24fb-11e7-93ae-92361f002671", social_distancing_ruleset_key: "9350fffc-e41f-c7cb-986a-2c5e728b8c2b"
```
```javascript
await client.events.create('chartKey', 'eventKey');

await client.events.create(
  'chartKey', null,
  TableBookingConfig.custom({ T1: 'BY_TABLE', T2: 'BY_SEAT' })
);

await client.events.create(
  'chartKey', null, null,
  '9350fffc-e41f-c7cb-986a-2c5e728b8c2b' // social distancing ruleset key
);
```
**Request**
```json
{
    "chartKey": "4250fffc-e41f-c7cb-986a-2c5e728b8c28",
    "eventKey": "event34",
    "tableBookingConfig": {
      "mode": "CUSTOM",
      "tables": { "T1": "BY_TABLE", "T2": "BY_SEAT" }
    },
    "socialDistancingRulesetKey": "9350fffc-e41f-c7cb-986a-2c5e728b8c2b"
}
```
* **chartKey**: chart key to which the event will be linked. Required.

* **eventKey**: the key of the event. This is the unique identifier of the event in your own database. Optional, if you don&#39;t pass in your own event key, seats.io will generate one.

* **tableBookingConfig**: optional. When not passed in, the event inherits the table booking settings defined on the chart. `mode` can either be:
  - `INHERIT`: table booking settings are inherited from the chart (which is the default behaviour)
  - `CUSTOM`: when using this mode, you can pass in a `tables` object to override the table booking settings of the chart for some tables.  The `tables` object has table labels as its keys, and `BY_TABLE` or `BY_SEAT` as values.
  - `ALL_BY_SEAT`: for this event, all tables are bookable by seat
  - `ALL_BY_TABLE`:  for this event, all tables are bookable as a whole

* **socialDistancingRulesetKey**: optional. The UUID which identifies a social distancing ruleset. You can get that key by [retrieving the chart](/docs/api-retrieve-a-chart) for the event.

* **bookWholeTables**: deprecated. Boolean. Whether only whole tables can be booked, or the individual seats of a table. Cannot be used in combination with `tableBookingModes`. Pass in `false` to make all tables bookable by seat, and `true` to make them bookable by table.
If both `bookWholeTables` and `tableBookingModes` are omitted, the table booking modes from the chart are inherited.

* **tableBookingModes**: deprecated. allows to indicate which tables are bookable by seat, and which by table. It&#39;s an object with table names as keys, and table booking modes as values (BY_TABLE or BY_SEAT). If a table is not specified, it defaults to BY_SEAT. Cannot be used in combination with `bookWholeTables` 
If both `bookWholeTables` and `tableBookingModes` are omitted, the table booking modes from the chart are inherited.

**Example request**
```curl
curl https://api.seatsio.net/events \
-u aSecretKey: -X POST -H 'Content-Type: application/json' -d '{"chartKey": "4250fffc-e41f-c7cb-986a-2c5e728b8c28"}'
```

```json
{
    "id": 169,
    "eventKey": "event34",
    "tableBookingConfig": {
      "mode": "CUSTOM",
      "tables": { "T1": "BY_TABLE", "T2": "BY_SEAT" }
    },
    "socialDistancingRulesetKey": "9350fffc-e41f-c7cb-986a-2c5e728b8c2b",
    "supportsBestAvailable": true,
    "createdOn": "2017-05-05T10:58:44.715Z"
}
```
