---
title: "Detailed reports"
slug: "/api-detailed-reports"
hidden: false
createdAt: "2018-08-02T10:10:05.573Z"
updatedAt: "2021-02-25T12:55:01.362Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Want to know which seats of an event are booked, and which ones are free? That’s where our detailed reporting API calls come in handy.

```
GET /reports/events/{eventKey}/{reportType}
```

The report types you can choose from are:
- byStatus
- bySelectability
- byCategoryLabel
- byCategoryKey
- byLabel
- byOrderId
- bySection
- byChannel

You can also pass in an optional filter, for example to retrieve only the objects in a certain status:

```
GET /reports/events/{eventKey}/{reportType}/{filter}
```

E.g. `/reports/events/event34/byStatus/booked`

:::info Note
Keep in mind that certain characters need to be [URI encoded](doc:api-uri-encoding)!
:::



:::info Note
The possible values for objectType are:

- `seat`
- `table`
- `generalAdmission`
- `booth`
:::



## Detailed report by status





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
GET https://api.seatsio.net/reports/events/{eventKey}/byStatus
GET https://api.seatsio.net/reports/events/{eventKey}/byStatus/{status}
```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->eventReports->byStatus("event34");
$seatsioClient->eventReports->byStatus("event34", "booked");

```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.EventReports.ByStatus("event34");
Client.EventReports.ByStatus("event34", "booked");

```

</TabItem>
<TabItem value='java'>

```java
client.eventReports.byStatus("event34");
client.eventReports.byStatus("event34", "booked");

```

</TabItem>
<TabItem value='python'>

```python
client.events.reports.by_status("event34")
client.events.reports.by_status("event34", status="booked")

```

</TabItem>
<TabItem value='ruby'>

```ruby
client.event_reports.by_status("event34")
client.event_reports.by_status("event34", "booked")
```

</TabItem>
<TabItem value='javascript'>

```javascript
await client.eventReports.byStatus('eventKey');
await client.eventReports.byStatus('eventKey', 'booked');
```

</TabItem>
</Tabs>





```shell
curl https://api.seatsio.net/reports/events/event34/byStatus -u aSecretKey: 
```



```json
{
    "free": [
        {
            "label": "C-11",
            "labels": {
                "own": { "label": "11", "type": "seat" },
                "parent": { "label": "C", "type": "row" },
                "section": "Floor"
            },
            "status": "free",
            "categoryLabel": "Ground Floor",
            "categoryKey": "4",
            "entrance": "Main entrance",
            "ticketType": "adult",
            "section": "Floor",
            "orderId": "order1",
            "forSale": true,
            "objectType": "seat",
            "isAccessible": true,
            "isCompanionSeat": false,
            "hasRestrictedView": false,
            "leftNeighbour": "C-10",
            "rightNeighbour": "C-12",
            "isSelectable": true,
            "isDisabledBySocialDistancing": false,
            "channel": "channel1"
        },
        {
            "label": "GA",
            "labels": {
                "own": { "label": "GA", "type": "generalAdmission" }
            },
            "status": "free",
            "categoryLabel": "Standing",
            "categoryKey": 6,
            "capacity": 100,
            "numBooked": 34,
            "numHeld": 6,
            "numFree": 60,
            "forSale": true,
            "objectType": "generalAdmission",
            "isSelectable": true,
            "channel": "channel1"
        }
    ],
    "booked": [
        {
            "label": "C-45",
            "labels": {
                "own": { "label": "45", "type": "seat" },
                "parent": { "label": "C", "type": "row" }
            },
            "status": "booked",
            "categoryLabel": "Balcony",
            "categoryKey": "5",
            "forSale": true,
            "objectType": "seat",
            "isAccessible": true,
            "isCompanionSeat": false,
            "hasRestrictedView": false,
            "leftNeighbour": "C-46",
            "rightNeighbour": "C-44",
            "isSelectable": false,
            "isDisabledBySocialDistancing": false,
            "channel": "channel1"
        }
    ],
    "reservedByToken": [
        {
            "label": "C-35",
            "labels": {
                "own": { "label": "35", "type": "seat" },
                "parent": { "label": "C", "type": "row" }
            },
            "status": "reservedByToken",
            "categoryLabel": "Balcony",
            "catgoryKey": "5",
            "extraData": {"name": "John Doe"},
            "holdToken": "5be320d5-10ca-4c8c-873c-40983c992ffc",
            "forSale": true,
            "objectType": "seat",
            "isAccessible": true,
            "isCompanionSeat": false,
            "hasRestrictedView": false,
            "leftNeighbour": "C-34",
            "rightNeighbour": "C-36",
            "isSelectable": false,
            "isDisabledBySocialDistancing": false,
            "channel": "channel1"
        }
    ]
}
```

##  Detailed report by selectability 

This reports allows you to distinguish between selectable and non-selectable objects. An object is considered selectable if:

- its status equals 'free'
- it's for sale
- and it's not disabled by social distancing rules

Selectable objects can be found under the `selectable` key, non-selectable objects under `not_selectable`.



<Tabs 
  groupId="serverside-code-samples"
  defaultValue="shell"
  values={[
{ label: 'Text', value: 'shell', },
{ label: 'PHP', value: 'php', },
{ label: 'C#', value: 'csharp', },
{ label: 'Java', value: 'java', },
{ label: 'Ruby', value: 'ruby', },
{ label: 'Javascript', value: 'javascript', },
{ label: 'Python', value: 'python', },
]}>
<TabItem value='shell'>

```shell
GET https://api.seatsio.net/reports/events/{eventKey}/bySelectability
```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->eventReports->bySelectability("event34");
$seatsioClient->eventReports->bySelectability("event34", "selectable");
$seatsioClient->eventReports->bySelectability("event34", "not_selectable");
```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.EventReports.BySelectability("event34");
Client.EventReports.BySelectability("event34", "selectable");
Client.EventReports.BySelectability("event34", "not_selectable");

```

</TabItem>
<TabItem value='java'>

```java
client.eventReports.bySelectability("event34");
client.eventReports.bySelectability("event34", "selectable");
client.eventReports.bySelectability("event34", "not_selectable");

```

</TabItem>
<TabItem value='ruby'>

```ruby
client.event_reports.by_selectability("event34")
client.event_reports.by_selectability("event34", "selectable")
client.event_reports.by_selectability("event34", "not_selectable")
```

</TabItem>
<TabItem value='javascript'>

```javascript
await client.eventReports.bySelectability('eventKey');
await client.eventReports.bySelectability('eventKey', 'selectable');
await client.eventReports.bySelectability('eventKey', 'not_selectable');
```

</TabItem>
<TabItem value='python'>

```python
client.events.reports.by_selectability("event34")
client.events.reports.by_selectability("event34", status="selectable")
client.events.reports.by_selectability("event34", status="not_selectable")
```

</TabItem>
</Tabs>





```shell
curl https://api.seatsio.net/reports/events/event34/bySelectability -u aSecretKey: 
```



```json
{
    "selectable": [
        {
            "label": "C-11",
            "labels": {
                "own": { "label": "11", "type": "seat" },
                "parent": { "label": "C", "type": "row" },
                "section": "Floor"
            },
            "status": "free",
            "categoryLabel": "Ground Floor",
            "categoryKey": "4",
            "entrance": "Main entrance",
            "ticketType": "adult",
            "section": "Floor",
            "orderId": "order1",
            "forSale": true,
            "objectType": "seat",
            "isAccessible": true,
            "isCompanionSeat": false,
            "hasRestrictedView": false,
            "leftNeighbour": "C-10",
            "rightNeighbour": "C-12",
            "status": "free",
            "isDisabledBySocialDistancing": false,
            "channel": "channel1"
        },
        {
            "label": "GA",
            "labels": {
                "own": { "label": "GA", "type": "generalAdmission" }
            },
            "status": "free",
            "categoryLabel": "Standing",
            "categoryKey": 6,
            "capacity": 100,
            "numBooked": 34,
            "numHeld": 6,
            "numFree": 60,
            "forSale": true,
            "objectType": "generalAdmission",
            "status": "free",
            "channel": "channel1"
        }
    ],
    "not_selectable": [
        {
            "label": "C-45",
            "labels": {
                "own": { "label": "45", "type": "seat" },
                "parent": { "label": "C", "type": "row" }
            },
            "status": "booked",
            "categoryLabel": "Balcony",
            "categoryKey": "5",
            "forSale": true,
            "objectType": "seat",
            "isAccessible": true,
            "isCompanionSeat": false,
            "hasRestrictedView": false,
            "leftNeighbour": "C-46",
            "rightNeighbour": "C-44",
            "status": "booked",
            "isDisabledBySocialDistancing": false,
            "channel": "channel1"
        },
        {
            "label": "C-35",
            "labels": {
                "own": { "label": "35", "type": "seat" },
                "parent": { "label": "C", "type": "row" }
            },
            "status": "reservedByToken",
            "categoryLabel": "Balcony",
            "catgoryKey": "5",
            "extraData": {"name": "John Doe"},
            "holdToken": "5be320d5-10ca-4c8c-873c-40983c992ffc",
            "forSale": true,
            "objectType": "seat",
            "isAccessible": true,
            "isCompanionSeat": false,
            "hasRestrictedView": false,
            "leftNeighbour": "C-34",
            "rightNeighbour": "C-36",
            "status": "reservedByToken",
            "isDisabledBySocialDistancing": false,
            "channel": "channel1"
        }
    ]
}
```



## Detailed report by category label





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
GET https://api.seatsio.net/reports/events/{eventKey}/byCategoryLabel
GET https://api.seatsio.net/reports/events/{eventKey}/byCategoryLabel/{categoryLabel}
GET https://api.seatsio.net/reports/events/{eventKey}/byCategoryLabel/NO_CATEGORY
```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->eventReports->byCategoryLabel("event34");
$seatsioClient->eventReports->byCategoryLabel("event34", "cat1");
$seatsioClient->eventReports->byCategoryLabel("event34", "NO_CATEGORY");

```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.EventReports.ByCategoryLabel("event34");
Client.EventReports.ByCategoryLabel("event34", "cat1");
Client.EventReports.ByCategoryLabel("event34", "NO_CATEGORY");

```

</TabItem>
<TabItem value='java'>

```java
client.eventReports.byCategoryLabel("event34");
client.eventReports.byCategoryLabel("event34", "cat1");
client.eventReports.byCategoryLabel("event34", "NO_CATEGORY");

```

</TabItem>
<TabItem value='python'>

```python
client.events.reports.by_category_label("event34")
client.events.reports.by_category_label("event34", "category1")
client.events.reports.by_category_label("event34", "NO_CATEGORY")

```

</TabItem>
<TabItem value='ruby'>

```ruby
client.event_reports.by_category_label("event34")
client.event_reports.by_category_label("event34", "category1")
client.event_reports.by_category_label("event34", "NO_CATEGORY")

```

</TabItem>
<TabItem value='javascript'>

```javascript
await client.eventReports.byCategoryLabel('eventKey');
await client.eventReports.byCategoryLabel('eventKey', 'Cat1');
await client.eventReports.byCategoryLabel('eventKey', 'NO_CATEGORY');

```

</TabItem>
</Tabs>





```shell
curl https://api.seatsio.net/reports/events/event34/byCategoryLabel -u aSecretKey: 
```



```json
{
    "Ground Floor": [
        {
            "label": "C-11",
            "labels": {
                "own": { "label": "11", "type": "seat" },
                "parent": { "label": "C", "type": "row" },
                "section": "Floor"
            },
            "status": "free",
            "categoryLabel": "Ground Floor",
            "categoryKey": "4",
            "entrance": "Main entrance",
            "ticketType": "adult",
            "section": "Floor",
            "orderId": "order1",
            "forSale": true,
            "objectType": "seat",
            "isAccessible": true,
            "isCompanionSeat": false,
            "hasRestrictedView": false,
            "leftNeighbour": "C-10",
            "rightNeighbour": "C-12",
            "isSelectable": true,
            "isDisabledBySocialDistancing": false,
            "channel": "channel1"
        }
    ],
    "Balcony": [
        {
            "label": "C-35",
            "labels": {
                "own": { "label": "35", "type": "seat" },
                "parent": { "label": "C", "type": "row" }
            },
            "status": "reservedByToken",
            "categoryLabel": "Balcony",
            "categoryKey": "5",
            "extraData": {"name": "John Doe"},
            "holdToken": "5be320d5-10ca-4c8c-873c-40983c992ffc",
            "forSale": true,
            "objectType": "seat",
            "isAccessible": true,
            "isCompanionSeat": false,
            "hasRestrictedView": false,
            "leftNeighbour": "C-34",
            "rightNeighbour": "C-36",
            "isSelectable": false,
            "isDisabledBySocialDistancing": false,
            "channel": "channel1"
        },
        {
            "label": "C-45",
            "labels": {
                "own": { "label": "45", "type": "seat" },
                "parent": { "label": "C", "type": "row" }
            },
            "status": "booked",
            "categoryLabel": "Balcony",
            "categoryKey": "5",
            "forSale": true,
            "objectType": "seat",
            "isAccessible": true,
            "isCompanionSeat": false,
            "hasRestrictedView": false,
            "leftNeighbour": "C-46",
            "rightNeighbour": "C-44",
            "isSelectable": false,
            "isDisabledBySocialDistancing": false,
            "channel": "channel1"
        }
    ],
    "Standing": [
        {
            "label": "GA",
            "labels": {
                "own": { "label": "GA", "type": "generalAdmission" }
            },
            "status": "free",
            "categoryLabel": "Standing",
            "categoryKey": 6,
            "capacity": 100,
            "numBooked": 34,
            "numHeld": 6,
            "numFree": 60,
            "forSale": true,
            "objectType": "generalAdmission",
            "isSelectable": true,
            "channel": "channel1"
        }
    ],
    "NO_CATEGORY": [ ... ]
}
```



## Detailed report by category key





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
GET https://api.seatsio.net/reports/events/{eventKey}/byCategoryKey
GET https://api.seatsio.net/reports/events/{eventKey}/byCategoryKey/{categoryKey}
GET https://api.seatsio.net/reports/events/{eventKey}/byCategoryKey/NO_CATEGORY
```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->eventReports->byCategoryKey("event34");
$seatsioClient->eventReports->byCategoryKey("event34", "4");
$seatsioClient->eventReports->byCategoryKey("event34", "NO_CATEGORY");

```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.EventReports.ByCategoryKey("event34");
Client.EventReports.ByCategoryKey("event34", "4");
Client.EventReports.ByCategoryKey("event34", "NO_CATEGORY");

```

</TabItem>
<TabItem value='java'>

```java
client.eventReports.byCategoryKey("event34");
client.eventReports.byCategoryKey("event34", "4");
client.eventReports.byCategoryKey("event34", "NO_CATEGORY");

```

</TabItem>
<TabItem value='python'>

```python
client.events.reports.by_category_key("event34")
client.events.reports.by_category_key("event34", "4")
client.events.reports.by_category_key("event34", "NO_CATEGORY")

```

</TabItem>
<TabItem value='ruby'>

```ruby
client.event_reports.by_category_key("event34")
client.event_reports.by_category_key("event34", "4")
client.event_reports.by_category_key("event34", "NO_CATEGORY")

```

</TabItem>
<TabItem value='javascript'>

```javascript
await client.eventReports.byCategoryKey('eventKey');
await client.eventReports.byCategoryKey('eventKey', '9');
await client.eventReports.byCategoryKey('eventKey', 'NO_CATEGORY');
```

</TabItem>
</Tabs>





```shell
curl https://api.seatsio.net/reports/events/event34/byCategoryKey -u aSecretKey: 
```



```json
{
    "4": [
        {
            "label": "C-11",
            "labels": {
                "own": { "label": "11", "type": "seat" },
                "parent": { "label": "C", "type": "row" },
                "section": "Floor"
            },
            "status": "free",
            "categoryLabel": "Ground Floor",
            "categoryKey": "4",
            "entrance": "Main entrance",
            "ticketType": "adult",
            "section": "Floor",
            "orderId": "order1",
            "forSale": true,
            "objectType": "seat",
            "isAccessible": true,
            "isCompanionSeat": false,
            "hasRestrictedView": false,
            "leftNeighbour": "C-10",
            "rightNeighbour": "C-12",
            "isSelectable": true,
            "isDisabledBySocialDistancing": false,
            "channel": "channel1"
        }
    ],
    "5": [
        {
            "label": "C-35",
            "labels": {
                "own": { "label": "35", "type": "seat" },
                "parent": { "label": "C", "type": "row" }
            },
            "status": "reservedByToken",
            "categoryLabel": "Balcony",
            "categoryKey": "5",
            "extraData": {"name": "John Doe"},
            "holdToken": "5be320d5-10ca-4c8c-873c-40983c992ffc",
            "forSale": true,
            "objectType": "seat",
            "isAccessible": true,
            "isCompanionSeat": false,
            "hasRestrictedView": false,
            "leftNeighbour": "C-34",
            "rightNeighbour": "C-36",
            "isSelectable": false,
            "isDisabledBySocialDistancing": false,
            "channel": "channel1"
        },
        {
            "label": "C-45",
            "labels": {
                "own": { "label": "45", "type": "seat" },
                "parent": { "label": "C", "type": "row" }
            },
            "status": "booked",
            "categoryLabel": "Balcony",
            "categoryKey": "5",
            "forSale": true,
            "objectType": "seat",
            "isAccessible": true,
            "isCompanionSeat": false,
            "hasRestrictedView": false,
            "leftNeighbour": "C-46",
            "rightNeighbour": "C-44",
            "isSelectable": false,
            "isDisabledBySocialDistancing": false,
            "channel": "channel1"
        }
    ],
    "6": [
        {
            "label": "GA",
            "labels": {
                "own": { "label": "GA", "type": "generalAdmission" }
            },
            "status": "free",
            "categoryLabel": "Standing",
            "categoryKey": 6,
            "capacity": 100,
            "numBooked": 34,
            "numHeld": 6,
            "numFree": 60,
            "forSale": true,
            "objectType": "generalAdmission",
            "isSelectable": true,
            "channel": "channel1"
        }
    ],
    "NO_CATEGORY": [ ... ]
}
```



## Detailed report by label





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
GET https://api.seatsio.net/reports/events/{eventKey}/byLabel
GET https://api.seatsio.net/reports/events/{eventKey}/byLabel/{label}
```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->eventReports->byLabel("event34");
$seatsioClient->eventReports->byLabel("event34", "C-11");

```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.EventReports.ByLabel("event34");
Client.EventReports.ByLabel("event34", "C-11");

```

</TabItem>
<TabItem value='java'>

```java
client.eventReports.byLabel("event34");
client.eventReports.byLabel("event34", "C-11");

```

</TabItem>
<TabItem value='python'>

```python
client.events.reports.by_label("event34")
client.events.reports.by_label("event34", "C-11")

```

</TabItem>
<TabItem value='ruby'>

```ruby
client.event_reports.by_label("event34")
client.event_reports.by_label("event34", "C-11")
```

</TabItem>
<TabItem value='javascript'>

```javascript
await client.eventReports.byLabel('eventKey');
await client.eventReports.byLabel('eventKey', 'A-1');
```

</TabItem>
</Tabs>



Multiple objects could have the same label, that's why they're returned as an array.

```shell
curl https://api.seatsio.net/reports/events/event34/byLabel -u aSecretKey: 
```



```json
{
    "C-11": [
        {
            "label": "C-11",
            "labels": {
                "own": { "label": "11", "type": "seat" },
                "parent": { "label": "C", "type": "row" }
                "section": "Floor"
            },
            "status": "free",
            "categoryLabel": "Ground Floor",
            "categoryKey": "1",
            "entrance": "Main entrance",
            "ticketType": "adult",
            "section": "Floor",
            "orderId": "order1",
            "forSale": true,
            "objectType": "seat",
            "isAccessible": true,
            "isCompanionSeat": false,
            "hasRestrictedView": false,
            "leftNeighbour": "C-10",
            "rightNeighbour": "C-12",
            "isSelectable": true,
            "isDisabledBySocialDistancing": false,
            "channel": "channel1"
        }
    ],
    "C-35": [
        {
            "label": "C-35",
            "labels": {
                "own": { "label": "35", "type": "seat" },
                "parent": { "label": "C", "type": "row" }
            },
            "status": "reservedByToken",
            "categoryLabel": "Balcony",
            "categoryKey": "5",
            "extraData": {"name": "John Doe"},
            "holdToken": "5be320d5-10ca-4c8c-873c-40983c992ffc",
            "forSale": true,
            "objectType": "seat",
            "isAccessible": true,
            "isCompanionSeat": false,
            "hasRestrictedView": false,
            "leftNeighbour": "C-34",
            "rightNeighbour": "C-36",
            "isSelectable": false,
            "isDisabledBySocialDistancing": false,
            "channel": "channel1"
        }
    ],
    "C-45": [
        {
            "label": "C-45",
            "labels": {
                "own": { "label": "45", "type": "seat" },
                "parent": { "label": "C", "type": "row" },
            },
            "status": "booked",
            "categoryLabel": "Balcony",
            "categoryKey": "2",
            "forSale": true,
            "objectType": "seat",
            "isAccessible": true,
            "isCompanionSeat": false,
            "hasRestrictedView": false,
            "leftNeighbour": "C-46",
            "rightNeighbour": "C-44",
            "isSelectable": false,
            "isDisabledBySocialDistancing": false,
            "channel": "channel1"
        }
    ],
    "GA": [
        {
            "label": "GA",
            "labels": {
                "own": { "label": "GA", "type": "generalAdmission" }
            },
            "status": "free",
            "categoryLabel": "Standing",
            "categoryKey": 6,
            "capacity": 100,
            "numBooked": 34,
            "numHeld": 6,
            "numFree": 60,
            "forSale": true,
            "objectType": "generalAdmission",
            "isSelectable": true,
            "channel": "channel1"
        }
    ]
}
```



## Detailed report by order id





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
GET https://api.seatsio.net/reports/events/{eventKey}/byOrderId
GET https://api.seatsio.net/reports/events/{eventKey}/byOrderId/{orderId}
GET https://api.seatsio.net/reports/events/{eventKey}/byOrderId/NO_ORDER_ID
```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->eventReports->byOrderId("event34");
$seatsioClient->eventReports->byOrderId("event34", "order1");
$seatsioClient->eventReports->byOrderId("event34", "NO_ORDER_ID");
```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.EventReports.ByOrderId("event34");
Client.EventReports.ByOrderId("event34", "order1");
Client.EventReports.ByOrderId("event34", "NO_ORDER_ID");
```

</TabItem>
<TabItem value='java'>

```java
client.eventReports.byOrderId("event34");
client.eventReports.byOrderId("event34", "order1");
client.eventReports.byOrderId("event34", "NO_ORDER_ID");
```

</TabItem>
<TabItem value='python'>

```python
client.events.reports.by_order_id("event34")
client.events.reports.by_order_id("event34", "order1")
client.events.reports.by_order_id("event34", "NO_ORDER_ID")

```

</TabItem>
<TabItem value='ruby'>

```ruby
client.event_reports.by_order_id("event34")
client.event_reports.by_order_id("event34", "order1")
client.event_reports.by_order_id("event34", "NO_ORDER_ID")

```

</TabItem>
<TabItem value='javascript'>

```javascript
let report = await client.eventReports.byOrderId('eventKey');
let report = await client.eventReports.byOrderId('eventKey', 'order1');
let report = await client.eventReports.byOrderId('eventKey', 'NO_ORDER_ID');
```

</TabItem>
</Tabs>





```shell
curl https://api.seatsio.net/reports/events/event34/byOrderId -u aSecretKey: 
```



```json
{
    "order1": [
        {
            "label": "C-11",
            "labels": {
                "own": { "label": "11", "type": "seat" },
                "parent": { "label": "C", "type": "row" },
                "section": "Floor"
            },
            "status": "free",
            "categoryLabel": "Ground Floor",
            "categoryKey": "1",
            "entrance": "Main entrance",
            "ticketType": "adult",
            "section": "Floor",
            "orderId": "order1",
            "forSale": true,
            "objectType": "seat",
            "isAccessible": true,
            "isCompanionSeat": false,
            "hasRestrictedView": false,
            "leftNeighbour": "C-10",
            "rightNeighbour": "C-12",
            "isSelectable": true,
            "isDisabledBySocialDistancing": false,
            "channel": "channel1"
        },
        {
            "label": "C-35",
            "labels": {
                "own": { "label": "35", "type": "seat" },
                "parent": { "label": "C", "type": "row" },
            },
            "status": "reservedByToken",
            "categoryLabel": "Balcony",
            "categoryKey": "5",
            "extraData": {"name": "John Doe"},
            "orderId": "order1",
            "holdToken": "5be320d5-10ca-4c8c-873c-40983c992ffc",
            "forSale": true   ,
            "objectType": "seat",
            "isAccessible": true,
            "isCompanionSeat": false,
            "hasRestrictedView": false,
            "leftNeighbour": "C-34",
            "rightNeighbour": "C-36",
            "isSelectable": false,
            "isDisabledBySocialDistancing": false,
            "channel": "channel1"
        }
    ],
    "order2": [
        {
            "label": "C-45",
            "labels": {
                "own": { "label": "45", "type": "seat" },
                "parent": { "label": "C", "type": "row" },
            },
            "status": "booked",
            "categoryLabel": "Balcony",
            "categoryKey": "2",
            "orderId": "order2",
            "forSale": true,
            "objectType": "seat",
            "isAccessible": true,
            "isCompanionSeat": false,
            "hasRestrictedView": false,
            "leftNeighbour": "C-46",
            "rightNeighbour": "C-44",
            "isSelectable": false,
            "isDisabledBySocialDistancing": false,
            "channel": "channel1"
        }
    ],
    "NO_ORDER_ID": [
        {
            "label": "GA",
            "labels": {
                "own": { "label": "GA", "type": "generalAdmission" }
            },
            "status": "free",
            "categoryLabel": "Standing",
            "categoryKey": 6,
            "capacity": 100,
            "numBooked": 34,
            "numHeld": 6,
            "numFree": 60,
            "forSale": true,
            "objectType": "generalAdmission",
            "isSelectable": true,
            "channel": "channel1"
        }
    ],
    "NO_ORDER_ID": [ ... ]
}
```



## Detailed report by section





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
GET https://api.seatsio.net/reports/events/{eventKey}/bySection
GET https://api.seatsio.net/reports/events/{eventKey}/bySection/{section}
GET https://api.seatsio.net/reports/events/{eventKey}/bySection/NO_SECTION

```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->eventReports->bySection("event34");
$seatsioClient->eventReports->bySection("event34", "Floor");
$seatsioClient->eventReports->bySection("event34", "NO_SECTION");

```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.EventReports.BySection("event34");
Client.EventReports.BySection("event34", "Floor");
Client.EventReports.BySection("event34", "NO_SECTION");

```

</TabItem>
<TabItem value='java'>

```java
client.eventReports.bySection("event34");
client.eventReports.bySection("event34", "Floor");
client.eventReports.bySection("event34", "NO_SECTION");

```

</TabItem>
<TabItem value='python'>

```python
client.events.reports.by_section("event34")
client.events.reports.by_section("event34", "Floor")
client.events.reports.by_section("event34", "NO_SECTION")
```

</TabItem>
<TabItem value='ruby'>

```ruby
client.event_reports.by_section("event34")
client.event_reports.by_section("event34", "Floor")
client.event_reports.by_section("event34", "NO_SECTION")
```

</TabItem>
<TabItem value='javascript'>

```javascript
await client.eventReports.bySection('eventKey');
await client.eventReports.bySection('eventKey', 'Floor');
await client.eventReports.bySection('eventKey', 'NO_SECTION');
```

</TabItem>
</Tabs>





```shell
curl https://api.seatsio.net/reports/events/event34/bySection -u aSecretKey: 
```



```json
{
    "Floor": [
        {
            "label": "C-11",
            "labels": {
                "own": { "label": "11", "type": "seat" },
                "parent": { "label": "C", "type": "row" },
                "section": "Floor"
            },
            "status": "free",
            "categoryLabel": "Ground Floor",
            "categoryKey": "1",
            "entrance": "Main entrance",
            "ticketType": "adult",
            "section": "Floor",
            "forSale": true,
            "orderId": "order1",
            "objectType": "seat",
            "leftNeighbour": "C-10",
            "rightNeighbour": "C-12",
            "isSelectable": true,
            "isDisabledBySocialDistancing": false,
            "channel": "channel1"
        },
        {
            "label": "C-35",
            "labels": {
                "own": { "label": "35", "type": "seat" },
                "parent": { "label": "C", "type": "row" },
                "section": "Floor"
            },
            "status": "reservedByToken",
            "categoryLabel": "Balcony",
            "categoryKey": "5",
            "extraData": {"name": "John Doe"},
            "section": "Floor",
            "forSale": true,
            "orderId": "order1",
            "holdToken": "5be320d5-10ca-4c8c-873c-40983c992ffc",
            "objectType": "seat",
            "isAccessible": true,
            "isCompanionSeat": false,
            "hasRestrictedView": false,
            "leftNeighbour": "C-34",
            "rightNeighbour": "C-36",
            "isSelectable": false,
            "isDisabledBySocialDistancing": false,
            "channel": "channel1"
        }
    ],
    "Balcony": [
        {
            "label": "C-45",
            "labels": {
                "own": { "label": "45", "type": "seat" },
                "parent": { "label": "C", "type": "row" },
                "section": "Balcony"
            },
            "status": "booked",
            "categoryLabel": "Balcony",
            "categoryKey": "2",
            "section": "Balcony",
            "forSale": true,
            "orderId": "order2",
            "objectType": "seat",
            "isAccessible": true,
            "isCompanionSeat": false,
            "hasRestrictedView": false,
            "leftNeighbour": "C-46",
            "rightNeighbour": "C-44",
            "isSelectable": false,
            "isDisabledBySocialDistancing": false,
            "channel": "channel1"
        }
    ],
    "NO_SECTION": [
        {
            "label": "GA",
            "labels": {
                "own": { "label": "GA", "type": "generalAdmission" }
            },
            "status": "free",
            "categoryLabel": "Standing",
            "categoryKey": 6,
            "capacity": 100,
            "numBooked": 34,
            "numHeld": 6,
            "numFree": 60,
            "forSale": true,
            "objectType": "generalAdmission",
            "isSelectable": true,
            "channel": "channel1"
        }
    ],
    "NO_SECTION": [ ... ]
}
```



## Detailed report by channel



```shell
GET https://api.seatsio.net/reports/events/{eventKey}/byChannel
GET https://api.seatsio.net/reports/events/{eventKey}/byChannel/{channel}
GET https://api.seatsio.net/reports/events/{eventKey}/byChannel/NO_CHANNEL
```



```shell
curl https://api.seatsio.net/reports/events/event34/byChannel -u aSecretKey: 
```



```json
{
    "channel1": [
        {
            "label": "C-11",
            "labels": {
                "own": { "label": "11", "type": "seat" },
                "parent": { "label": "C", "type": "row" },
                "section": "Floor"
            },
            "status": "free",
            "categoryLabel": "Ground Floor",
            "categoryKey": "1",
            "entrance": "Main entrance",
            "ticketType": "adult",
            "section": "Floor",
            "forSale": true,
            "orderId": "order1",
            "objectType": "seat",
            "leftNeighbour": "C-10",
            "rightNeighbour": "C-12",
            "isSelectable": true,
            "isDisabledBySocialDistancing": false
        },
        {
            "label": "C-35",
            "labels": {
                "own": { "label": "35", "type": "seat" },
                "parent": { "label": "C", "type": "row" },
                "section": "Floor"
            },
            "status": "reservedByToken",
            "categoryLabel": "Balcony",
            "categoryKey": "5",
            "extraData": {"name": "John Doe"},
            "section": "Floor",
            "forSale": true,
            "orderId": "order1",
            "holdToken": "5be320d5-10ca-4c8c-873c-40983c992ffc",
            "objectType": "seat",
            "isAccessible": true,
            "isCompanionSeat": false,
            "hasRestrictedView": false,
            "leftNeighbour": "C-34",
            "rightNeighbour": "C-36",
            "isSelectable": false,
            "isDisabledBySocialDistancing": false
        }
    ],
    "channel2": [
        {
            "label": "C-45",
            "labels": {
                "own": { "label": "45", "type": "seat" },
                "parent": { "label": "C", "type": "row" },
                "section": "Balcony"
            },
            "status": "booked",
            "categoryLabel": "Balcony",
            "categoryKey": "2",
            "section": "Balcony",
            "forSale": true,
            "orderId": "order2",
            "objectType": "seat",
            "isAccessible": true,
            "isCompanionSeat": false,
            "hasRestrictedView": false,
            "leftNeighbour": "C-46",
            "rightNeighbour": "C-44",
            "isSelectable": false,
            "isDisabledBySocialDistancing": false
        }
    ],
    "NO_CHANNEL": [
        {
            "label": "GA",
            "labels": {
                "own": { "label": "GA", "type": "generalAdmission" }
            },
            "status": "free",
            "categoryLabel": "Standing",
            "categoryKey": 6,
            "capacity": 100,
            "numBooked": 34,
            "numHeld": 6,
            "numFree": 60,
            "forSale": true,
            "objectType": "generalAdmission",
            "isSelectable": true
        }
    ],
    "NO_CHANNEL": [ ... ]
}
```

