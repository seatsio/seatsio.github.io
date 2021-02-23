---
title: "Save social distancing rulesets"
slug: "api-charts-save-social-distancing-rulesets"
hidden: false
createdAt: "2020-06-19T07:17:22.286Z"
updatedAt: "2020-11-17T07:01:30.633Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

A social distancing ruleset determines which seats should not be selectable for a ticket buyer. Something like: 'families of up to 4 people can sit next to each other, but there should be a gap of 2 seats to the left and to the right of them'.
:::info Applying a ruleset to an event
This article describes the call to add rulesets to a chart. To apply one of those rulesets to an event, use the [create event](/docs/api-create-an-event) or [update event](/docs/api-update-an-event) call.
:::



<Tabs 
  defaultValue="text"
  values={[
{ label: 'Text', value: 'text', },
{ label: 'PHP', value: 'php', },
{ label: 'C#', value: 'csharp', },
{ label: 'Java', value: 'java', },
{ label: 'Python', value: 'python', },
{ label: 'Ruby', value: 'ruby', },
{ label: 'Javascript', value: 'javascript', },
]}>
<TabItem value='text'>

```text
POST https://api.seatsio.net/charts/{chartKey}/social-distancing-rulesets
```

</TabItem>
<TabItem value='php'>

```php
$ruleset1 = SocialDistancingRuleset::ruleBased("My first ruleset")
  ->setIndex(0)
  ->setNumberOfDisabledSeatsToTheSides(1)
  ->setDisableSeatsInFrontAndBehind(true)
  ->setDisableDiagonalSeatsInFrontAndBehind(true)
  ->setNumberOfDisabledAisleSeats(2)
  ->setMaxGroupSize(1)
  ->setMaxOccupancyAbsolute(10)
  ->setOneGroupPerTable(true)
  ->setDisabledSeats(["A-1"])
  ->setEnabledSeats(["A-2"])
  ->build();

$ruleset2 = SocialDistancingRuleset::fixed("My second ruleset")
  ->setIndex(1)
  ->setDisabledSeats(["A-1"])
  ->build();

$rulesets = ["ruleset1" => $ruleset1, "ruleset2" => $ruleset2];

$seatsioClient->charts->saveSocialDistancingRulesets($chartKey, $rulesets);
```

</TabItem>
<TabItem value='csharp'>

```csharp
var ruleset1 = SocialDistancingRuleset.RuleBased("My first ruleset")
  .WithIndex(0)
  .WithNumberOfDisabledSeatsToTheSides(1)
  .WithDisableSeatsInFrontAndBehind(true)
  .WithDisableDiagonalSeatsInFrontAndBehind(true)
  .WithNumberOfDisabledAisleSeats(2)
  .WithMaxGroupSize(1)
  .WithMaxOccupancyAbsolute(10)
  .WithOneGroupPerTable(true)
  .WithDisabledSeats(new List<string> {"A-1"})
  .WithEnabledSeats(new List<string> {"A-2"})
  .Build();

var ruleset2 = SocialDistancingRuleset.Fixed("My second ruleset")
  .WithIndex(1)
  .WithDisabledSeats(new List<string> {"A-1"})
  .Build();

var rulesets = new Dictionary<string, SocialDistancingRuleset>
{
  {"ruleset1", ruleset1},
  {"ruleset2", ruleset2}
};

Client.Charts.SaveSocialDistancingRulesets(chartKey, rulesets);
```

</TabItem>
<TabItem value='java'>

```java
SocialDistancingRuleset ruleset1 = SocialDistancingRuleset.ruleBased("My first ruleset")
  .withIndex(0)
  .withNumberOfDisabledSeatsToTheSides(1)
  .withDisableSeatsInFrontAndBehind(true)
  .withDisableDiagonalSeatsInFrontAndBehind(true)
  .withNumberOfDisabledAisleSeats(2)
  .withMaxGroupSize(1)
  .withMaxOccupancyAbsolute(10)
  .withOneGroupPerTable(true)
  .withDisabledSeats(newHashSet("A-1"))
  .withEnabledSeats(newHashSet("A-2"))
  .build();

SocialDistancingRuleset ruleset2 = SocialDistancingRuleset.fixed("My second ruleset")
  .withIndex(1)
  .withDisabledSeats(newHashSet("A-1"))
  .build();

Map<String, SocialDistancingRuleset> rulesets = ImmutableMap.of(
  "ruleset1", ruleset1,
  "ruleset2", ruleset2
);

client.charts.saveSocialDistancingRulesets(chart.key, rulesets);
```

</TabItem>
<TabItem value='python'>

```python
rulesets = {
  'ruleset1': SocialDistancingRuleset(
    name='My first ruleset',
    number_of_disabled_seats_to_the_sides=1,
    disable_seats_in_front_and_behind=True,
    disable_diagonal_seats_in_front_and_behind=True,
    number_of_disabled_aisle_seats=2,
    max_group_size=1,
    max_occupancy_absolute=10,
    max_occupancy_percentage=0,
    one_group_per_table=True,
    fixed_group_layout=False,
    disabled_seats=["A-1"],
    enabled_seats=["A-2"],
    index=4
  ),
  'ruleset2': SocialDistancingRuleset(name='My second ruleset'),
}

client.charts.save_social_distancing_rulesets(chart.key, rulesets)
```

</TabItem>
<TabItem value='ruby'>

```ruby
rulesets = {
  "ruleset1" => {
    "name" => "My first ruleset",
    "numberOfDisabledSeatsToTheSides" => 1,
    "disableSeatsInFrontAndBehind" => true,
    "disableDiagonalSeatsInFrontAndBehind" => true,
    "numberOfDisabledAisleSeats" => 2,
    "maxGroupSize" => 1,
    "maxOccupancyAbsolute" => 10,
    "maxOccupancyPercentage" => 0,
    "fixedGroupLayout" => false,
    "disabledSeats" => ["A-1"],
    "enabledSeats" => ["A-2"],
    "index" => 4,
  },
  "ruleset2" => {
    "name" => "My second ruleset"
  }
}

client.charts.save_social_distancing_rulesets(chart.key, rulesets)
```

</TabItem>
<TabItem value='javascript'>

```javascript
const ruleset1 = SocialDistancingRuleset.ruleBased('My first ruleset')
  .setIndex(0)
  .setNumberOfDisabledSeatsToTheSides(1)
  .setDisableSeatsInFrontAndBehind(true)
  .setDisableDiagonalSeatsInFrontAndBehind(true)
  .setNumberOfDisabledAisleSeats(2)
  .setMaxGroupSize(1)
  .setMaxOccupancyPercentage(10)
  .setOneGroupPerTable(true)
  .setDisabledSeats(['A-1'])
  .setEnabledSeats(['A-2'])
  .build()

const ruleset2 = SocialDistancingRuleset.fixed('My second ruleset')
  .setIndex(1)
  .setDisabledSeats(['A-1'])
  .build()

client.charts.saveSocialDistancingRulesets(chart.key, { ruleset1: ruleset1, ruleset2: ruleset2 })
```

</TabItem>
</Tabs>


Returns 204 - No Content 
```json
{
  "socialDistancingRulesets": {
    "ruleset1": {
      "name": "My first ruleset",
      "index": 0,
      "numberOfDisabledSeatsToTheSides": 2,
      "disableSeatsInFrontAndBehind": true,
      "disableDiagonalSeatsInFrontAndBehind": true,
      "numberOfDisabledAisleSeats": 0,
      "maxGroupSize": 4,
      "enabledSeats": [],
      "disabledSeats": ["A-1", "A-2", "A-3", "A-4", "A-5"],
      "maxOccupancyAbsolute": 150, // or: "maxOccupancyPercentage": 30,
      "oneGroupPerTable": true
    },
  	"ruleset2": {
      "fixedGroupLayout": true,
      "disabledSeats": ["A-1", "A-2", "A-3", "A-4", "A-5"]
    }
  }
}
```
* **name**: required. The name of the ruleset. Used to refer to it internally.
* **index**: optional. Number that determines the order of the rulesets when displayed in a list. Lower indexes go to the top.
* **numberOfDisabledSeatsToTheSides**: optional. The number of seats to disable to the left and right of a selected seat.
* **disableSeatsInFrontAndBehind**: optional. The number of seats to disable to the left and right of a selected seat.
* **disableDiagonalSeatsInFrontAndBehind**: optional. Set to true to not only disable seats directly in front of and behind a seat, but also diagonally. Can only be enabled if `disableSeatsInFrontAndBehind` is true.
If you don't pass in `disableDiagonalSeatsInFrontAndBehind`, and `numberOfDisabledSeatsToTheSides` is bigger than 1, `disableDiagonalSeatsInFrontAndBehind` is set to `true` automatically.
* **numberOfDisabledAisleSeats**: optional. Disables seats on each end of a row.
* **maxGroupSize**: optional. How many people can sit next to each other. Set to 0 for no limit.
* **enabledSeats**: optional. Array of seats that should be selectable by ticket buyers, even if the rules say otherwise. Useful to mark some seats as non-aisle seats when the aisle seats rule is enabled.
* **disabledSeats**: optional. Array of seats that should not be selectable by ticket buyers. Could be used to mark every other row as disabled.
* **maxOccupancyAbsolute**: optional. The maximum number of people that are allowed for this event.
* **maxOccupancyPercentage**: optional. Integer between 1 and 100. The maximum number of people that are allowed for this event, expressed as a percentage of the total capacity of the venue.
* **oneGroupPerTable**: optional boolean. Defaults to false. When true, table seats that are not booked are left empty. Only one group of people can sit at a table.
* **fixedGroupLayout**: boolean. Defaults to false. Set to true to manually indicate which seats should be booked as a group (by passing in `disabledSeats`). When the ticket buyer clicks on a seat, all selectable seats next to that seat become selected as well.
```curl
curl https://api.seatsio.net/charts/{chartKey}/social-distancing-rulesets \
-u aSecretKey: -X POST -H 'Content-Type: application/json' -d '{
  "socialDistancingRulesets": {
    "ruleset1": {
      "name": "My first ruleset",
      "index": 0,
 			"numberOfDisabledSeatsToTheSides": 2,
      "disableSeatsInFrontAndBehind": true,
      "disableDiagonalSeatsInFrontAndBehind": true,
      "numberOfDisabledAisleSeats": 0,
      "maxGroupSize": 4,
      "enabledSeats": [],
      "disabledSeats": ["A-1", "A-2", "A-3", "A-4", "A-5"],
      "maxOccupancyAbsolute": 150,
      "oneGroupPerTable": true
    }
  }
}'
```
