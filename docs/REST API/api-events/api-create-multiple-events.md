---
title: "Create multiple events"
slug: "/api-create-multiple-events"
hidden: false
createdAt: "2019-01-15T11:40:46.026Z"
updatedAt: "2020-11-05T10:11:57.290Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Use this API call to create multiple events at once for a chart. The maximum number of events that can be created with a single API call is 100.  



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
POST https://api.seatsio.net/events/actions/create-multiple
```

</TabItem>
<TabItem value='php'>

```php
$params = [
	(new EventCreationParams())
    ->setEventKey("event34")
    ->setTableBookingConfig(TableBookingConfig::allByTable())
    ->setSocialDistancingRulesetKey("ruleset1"),
	(new EventCreationParams())
    ->setEventKey("event35")
    ->setTableBookingConfig(TableBookingConfig::allBySeat())
    ->setSocialDistancingRulesetKey("ruleset2")
];

$events = $seatsioClient->events->createMultiple("4250fffc-e41f-c7cb-986a-2c5e728b8c28", $params);
```

</TabItem>
<TabItem value='csharp'>

```csharp
var eventCreationParams = new[] {
  new EventCreationParams("event34", TableBookingConfig.AllByTable(), "ruleset1"),
  new EventCreationParams("event35", TableBookingConfig.AllBySeat(), "ruleset2")
};

Client.Events.Create("4250fffc-e41f-c7cb-986a-2c5e728b8c28", eventCreationParams);
```

</TabItem>
<TabItem value='java'>

```java
List<EventCreationParams> events = new ArrayList<>();
events.add(new EventCreationParams("event34", TableBookingConfig.allByTable(), "ruleset1"));
events.add(new EventCreationParams("event35", TableBookingConfig.allBySeat(), "ruleset2"));

client.events.create("4250fffc-e41f-c7cb-986a-2c5e728b8c28", events);
```

</TabItem>
<TabItem value='python'>

```python
eventProps = [
  EventProperties(event_key="event34", table_booking_config=TableBookingConfig.all_by_table(), social_distancing_ruleset_key="ruleset1"),
  EventProperties(event_key="event35", table_booking_config=TableBookingConfig.all_by_seat(), social_distancing_ruleset_key="ruleset2")
]

events = client.events.create_multiple("4250fffc-e41f-c7cb-986a-2c5e728b8c28", eventProps);
```

</TabItem>
<TabItem value='ruby'>

```ruby
params = [
  { event_key: 'event34', table_booking_config: Seatsio::TableBookingConfig::all_by_table(), social_distancing_ruleset_key: 'ruleset1' },
    { event_key: 'event35', table_booking_config: Seatsio::TableBookingConfig::all_by_seat(), social_distancing_ruleset_key: 'ruleset2' }
]

client.events.create_multiple chart_key: '4250fffc-e41f-c7cb-986a-2c5e728b8c28' event_creation_params: params
```

</TabItem>
<TabItem value='javascript'>

```javascript
Creating multiple events is currently not supported in the JS client
```

</TabItem>
</Tabs>



**Request**

```json
{
    "chartKey": "4250fffc-e41f-c7cb-986a-2c5e728b8c28",
    "events": [
      { 
        "eventKey": "event34",
        "tableBookingConfig": { "mode": "ALL_BY_TABLE" },
        "socialDistancingRulesetKey": "ruleset1"
      },
      {
        "eventKey": "event35",
        "tableBookingConfig": { "mode": "ALL_BY_SEAT" },
        "socialDistancingRulesetKey": "ruleset2"
      }
    ]
}
```

The docs for the call to [create a single event](/docs/api-create-an-event) explain these request parameters.

**Example request**

```shell
curl https://api.seatsio.net/events/actions/create-multiple \
-u aSecretKey: -X POST -H 'Content-Type: application/json' -d '{"chartKey": "4250fffc-e41f-c7cb-986a-2c5e728b8c28", "events": [{}, {}]}'
```



```json
{
  "events": [
    {
      "id": 169,
      "key": "event34",
      "chartKey": "4250fffc-e41f-c7cb-986a-2c5e728b8c28",
      "tableBookingConfig": { "mode": "ALL_BY_TABLE" },
      "createdOn": "2017-05-05T10:58:44.715Z"
    },
    {
      "id": 170,
      "key": "event35",
      "chartKey": "4250fffc-e41f-c7cb-986a-2c5e728b8c28",
      "tableBookingConfig": { "mode": "ALL_BY_SEAT" },
      "createdOn": "2017-05-05T10:58:44.815Z"
     }
  ]
}
```

