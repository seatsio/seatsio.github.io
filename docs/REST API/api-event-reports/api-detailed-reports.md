---
title: "Detailed reports"
slug: "/api/detailed-reports"
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
- byObjectType

You can also pass in an optional filter, for example to retrieve only the objects in a certain status:

```
GET /reports/events/{eventKey}/{reportType}/{filter}
```

E.g. `/reports/events/event34/byStatus/booked`

:::info Note
Keep in mind that certain characters need to be [URI encoded](/docs/api/uri-encoding)!
:::



:::info Note
The possible values for objectType are:

- `seat`
- `table`
- `generalAdmission`
- `booth`
:::

Most properties in the responses should be self-explanatory. However, `ids` and `labels` deserve some attention.

`labels` contains the displayed label for the object, its parent row or table, and its section. In most cases, the 'technical' label (aka the ID)
of an object is the same as its display label. But if needed, you can set a different display label in the designer.

`ids` contains the technical labels, by which objects are identified (e.g. when booking them).

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
GET https://api-{region}.seatsio.net/reports/events/{eventKey}/byStatus
GET https://api-{region}.seatsio.net/reports/events/{eventKey}/byStatus/{status}
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
curl https://api-{region}.seatsio.net/reports/events/event34/byStatus -u aSecretKey: 
```



```javascript
{
    "free": [
        {
            "label": "C-11",
            "labels": {
                "own": { "label": "11", "type": "seat" },
                "parent": { "label": "Row C", "type": "row" },
                "section": "Floor"
            },
            "ids": {
              "own": "11",
              "parent": "C"
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
            "channel": "channel1",
            "distanceToFocalPoint": 84.3242
        },
        {
            "label": "GA",
            "labels": {
                "own": { "label": "General Admission 1", "type": "generalAdmission" }
            },
            "ids": {
              "own": "GA"
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
            "channel": "channel1",
            "distanceToFocalPoint": 82.832
        }
    ],
    "booked": [
        {
            "label": "C-45",
            "labels": {
                "own": { "label": "45", "type": "seat" },
                "parent": { "label": "Row C", "type": "row" }
            },
            "ids": {
              "own": "45",
              "parent": "C"
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
            "channel": "channel1",
            "distanceToFocalPoint": 10.3245
        }
    ],
    "reservedByToken": [
        {
            "label": "C-35",
            "labels": {
                "own": { "label": "35", "type": "seat" },
                "parent": { "label": "Row C", "type": "row" }
            },
            "ids": {
              "own": "35",
              "parent": "C"
            },
            "status": "reservedByToken",
            "categoryLabel": "Balcony",
            "catgoryKey": "5",
            "extraData": {"userId": "123"},
            "holdToken": "wvXbB9MlHt",
            "forSale": true,
            "objectType": "seat",
            "isAccessible": true,
            "isCompanionSeat": false,
            "hasRestrictedView": false,
            "leftNeighbour": "C-34",
            "rightNeighbour": "C-36",
            "isSelectable": false,
            "isDisabledBySocialDistancing": false,
            "channel": "channel1",
            "distanceToFocalPoint": 62.923
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
GET https://api-{region}.seatsio.net/reports/events/{eventKey}/bySelectability
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
curl https://api-{region}.seatsio.net/reports/events/event34/bySelectability -u aSecretKey: 
```



```javascript
{
    "selectable": [
        {
            "label": "C-11",
            "labels": {
                "own": { "label": "11", "type": "seat" },
                "parent": { "label": "Row C", "type": "row" },
                "section": "Floor"
            },
            "ids": {
              "own": "11",
              "parent": "C"
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
            "channel": "channel1",
            "distanceToFocalPoint": 84.3242
        },
        {
            "label": "GA",
            "labels": {
                "own": { "label": "General Admission 1", "type": "generalAdmission" }
            },
            "ids": {
              "own": "GA"
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
            "channel": "channel1",
            "distanceToFocalPoint": 82.832
        }
    ],
    "not_selectable": [
        {
            "label": "C-45",
            "labels": {
                "own": { "label": "45", "type": "seat" },
                "parent": { "label": "Row C", "type": "row" }
            },
            "ids": {
              "own": "45",
              "parent": "C"
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
            "channel": "channel1",
            "distanceToFocalPoint": 10.3245
        },
        {
            "label": "C-35",
            "labels": {
                "own": { "label": "35", "type": "seat" },
                "parent": { "label": "Row C", "type": "row" }
            },
            "ids": {
              "own": "35",
              "parent": "C"
            },
            "status": "reservedByToken",
            "categoryLabel": "Balcony",
            "catgoryKey": "5",
            "extraData": {"userId": "123"},
            "holdToken": "wvXbB9MlHt",
            "forSale": true,
            "objectType": "seat",
            "isAccessible": true,
            "isCompanionSeat": false,
            "hasRestrictedView": false,
            "leftNeighbour": "C-34",
            "rightNeighbour": "C-36",
            "status": "reservedByToken",
            "isDisabledBySocialDistancing": false,
            "channel": "channel1",
            "distanceToFocalPoint": 62.923
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
GET https://api-{region}.seatsio.net/reports/events/{eventKey}/byCategoryLabel
GET https://api-{region}.seatsio.net/reports/events/{eventKey}/byCategoryLabel/{categoryLabel}
GET https://api-{region}.seatsio.net/reports/events/{eventKey}/byCategoryLabel/NO_CATEGORY
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
curl https://api-{region}.seatsio.net/reports/events/event34/byCategoryLabel -u aSecretKey: 
```



```javascript
{
    "Ground Floor": [
        {
            "label": "C-11",
            "labels": {
                "own": { "label": "11", "type": "seat" },
                "parent": { "label": "Row C", "type": "row" },
                "section": "Floor"
            },
            "ids": {
              "own": "11",
              "parent": "C"
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
            "channel": "channel1",
            "distanceToFocalPoint": 84.3242
        }
    ],
    "Balcony": [
        {
            "label": "C-35",
            "labels": {
                "own": { "label": "35", "type": "seat" },
                "parent": { "label": "Row C", "type": "row" }
            },
            "ids": {
              "own": "35",
              "parent": "C"
            },
            "status": "reservedByToken",
            "categoryLabel": "Balcony",
            "categoryKey": "5",
            "extraData": {"userId": "123"},
            "holdToken": "wvXbB9MlHt",
            "forSale": true,
            "objectType": "seat",
            "isAccessible": true,
            "isCompanionSeat": false,
            "hasRestrictedView": false,
            "leftNeighbour": "C-34",
            "rightNeighbour": "C-36",
            "isSelectable": false,
            "isDisabledBySocialDistancing": false,
            "channel": "channel1",
            "distanceToFocalPoint": 62.923
        },
        {
            "label": "C-45",
            "labels": {
                "own": { "label": "45", "type": "seat" },
                "parent": { "label": "Row C", "type": "row" }
            },
            "ids": {
              "own": "45",
              "parent": "C"
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
            "channel": "channel1",
            "distanceToFocalPoint": 10.3245
        }
    ],
    "Standing": [
        {
            "label": "GA",
            "labels": {
                "own": { "label": "General Admission 1", "type": "generalAdmission" }
            },
            "ids": {
              "own": "GA"
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
            "channel": "channel1",
            "distanceToFocalPoint": 82.832
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
GET https://api-{region}.seatsio.net/reports/events/{eventKey}/byCategoryKey
GET https://api-{region}.seatsio.net/reports/events/{eventKey}/byCategoryKey/{categoryKey}
GET https://api-{region}.seatsio.net/reports/events/{eventKey}/byCategoryKey/NO_CATEGORY
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
curl https://api-{region}.seatsio.net/reports/events/event34/byCategoryKey -u aSecretKey: 
```



```javascript
{
    "4": [
        {
            "label": "C-11",
            "labels": {
                "own": { "label": "11", "type": "seat" },
                "parent": { "label": "Row C", "type": "row" },
                "section": "Floor"
            },
            "ids": {
              "own": "11",
              "parent": "C"
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
            "channel": "channel1",
            "distanceToFocalPoint": 84.3242
        }
    ],
    "5": [
        {
            "label": "C-35",
            "labels": {
                "own": { "label": "35", "type": "seat" },
                "parent": { "label": "Row C", "type": "row" }
            },
            "ids": {
              "own": "35",
              "parent": "C"
            },
            "status": "reservedByToken",
            "categoryLabel": "Balcony",
            "categoryKey": "5",
            "extraData": {"userId": "123"},
            "holdToken": "wvXbB9MlHt",
            "forSale": true,
            "objectType": "seat",
            "isAccessible": true,
            "isCompanionSeat": false,
            "hasRestrictedView": false,
            "leftNeighbour": "C-34",
            "rightNeighbour": "C-36",
            "isSelectable": false,
            "isDisabledBySocialDistancing": false,
            "channel": "channel1",
            "distanceToFocalPoint": 62.923
        },
        {
            "label": "C-45",
            "labels": {
                "own": { "label": "45", "type": "seat" },
                "parent": { "label": "Row C", "type": "row" }
            },
            "ids": {
              "own": "45",
              "parent": "C"
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
            "channel": "channel1",
            "distanceToFocalPoint": 10.3245
        }
    ],
    "6": [
        {
            "label": "GA",
            "labels": {
                "own": { "label": "General Admission 1", "type": "generalAdmission" }
            },
            "ids": {
              "own": "GA"
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
            "channel": "channel1",
            "distanceToFocalPoint": 82.832
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
GET https://api-{region}.seatsio.net/reports/events/{eventKey}/byLabel
GET https://api-{region}.seatsio.net/reports/events/{eventKey}/byLabel/{label}
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
curl https://api-{region}.seatsio.net/reports/events/event34/byLabel -u aSecretKey: 
```



```javascript
{
    "C-11": [
        {
            "label": "C-11",
            "labels": {
                "own": { "label": "11", "type": "seat" },
                "parent": { "label": "Row C", "type": "row" }
                "section": "Floor"
            },
            "ids": {
              "own": "11",
              "parent": "C"
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
            "channel": "channel1",
            "distanceToFocalPoint": 84.3242
        }
    ],
    "C-35": [
        {
            "label": "C-35",
            "labels": {
                "own": { "label": "35", "type": "seat" },
                "parent": { "label": "Row C", "type": "row" }
            },
            "ids": {
              "own": "35",
              "parent": "C"
            },
            "status": "reservedByToken",
            "categoryLabel": "Balcony",
            "categoryKey": "5",
            "extraData": {"userId": "123"},
            "holdToken": "wvXbB9MlHt",
            "forSale": true,
            "objectType": "seat",
            "isAccessible": true,
            "isCompanionSeat": false,
            "hasRestrictedView": false,
            "leftNeighbour": "C-34",
            "rightNeighbour": "C-36",
            "isSelectable": false,
            "isDisabledBySocialDistancing": false,
            "channel": "channel1",
            "distanceToFocalPoint": 62.923
        }
    ],
    "C-45": [
        {
            "label": "C-45",
            "labels": {
                "own": { "label": "45", "type": "seat" },
                "parent": { "label": "Row C", "type": "row" },
            },
            "ids": {
              "own": "45",
              "parent": "C"
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
            "channel": "channel1",
            "distanceToFocalPoint": 10.3245
        }
    ],
    "GA": [
        {
            "label": "GA",
            "labels": {
                "own": { "label": "General Admission 1", "type": "generalAdmission" }
            },
            "ids": {
              "own": "GA"
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
            "channel": "channel1",
            "distanceToFocalPoint": 82.832
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
GET https://api-{region}.seatsio.net/reports/events/{eventKey}/byOrderId
GET https://api-{region}.seatsio.net/reports/events/{eventKey}/byOrderId/{orderId}
GET https://api-{region}.seatsio.net/reports/events/{eventKey}/byOrderId/NO_ORDER_ID
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
curl https://api-{region}.seatsio.net/reports/events/event34/byOrderId -u aSecretKey: 
```



```javascript
{
    "order1": [
        {
            "label": "C-11",
            "labels": {
                "own": { "label": "11", "type": "seat" },
                "parent": { "label": "Row C", "type": "row" },
                "section": "Floor"
            },
            "ids": {
              "own": "11",
              "parent": "C"
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
            "channel": "channel1",
            "distanceToFocalPoint": 84.3242
        },
        {
            "label": "C-35",
            "labels": {
                "own": { "label": "35", "type": "seat" },
                "parent": { "label": "Row C", "type": "row" },
            },
            "ids": {
              "own": "35",
              "parent": "C"
            },
            "status": "reservedByToken",
            "categoryLabel": "Balcony",
            "categoryKey": "5",
            "extraData": {"userId": "123"},
            "orderId": "order1",
            "holdToken": "wvXbB9MlHt",
            "forSale": true   ,
            "objectType": "seat",
            "isAccessible": true,
            "isCompanionSeat": false,
            "hasRestrictedView": false,
            "leftNeighbour": "C-34",
            "rightNeighbour": "C-36",
            "isSelectable": false,
            "isDisabledBySocialDistancing": false,
            "channel": "channel1",
            "distanceToFocalPoint": 62.923
        }
    ],
    "order2": [
        {
            "label": "C-45",
            "labels": {
                "own": { "label": "45", "type": "seat" },
                "parent": { "label": "Row C", "type": "row" },
            },
            "ids": {
              "own": "45",
              "parent": "C"
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
            "channel": "channel1",
            "distanceToFocalPoint": 10.3245
        }
    ],
    "NO_ORDER_ID": [
        {
            "label": "GA",
            "labels": {
                "own": { "label": "General Admission 1", "type": "generalAdmission" }
            },
            "ids": {
              "own": "GA"
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
            "channel": "channel1",
            "distanceToFocalPoint": 82.832
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
GET https://api-{region}.seatsio.net/reports/events/{eventKey}/bySection
GET https://api-{region}.seatsio.net/reports/events/{eventKey}/bySection/{section}
GET https://api-{region}.seatsio.net/reports/events/{eventKey}/bySection/NO_SECTION

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
curl https://api-{region}.seatsio.net/reports/events/event34/bySection -u aSecretKey: 
```



```javascript
{
    "Floor": [
        {
            "label": "C-11",
            "labels": {
                "own": { "label": "11", "type": "seat" },
                "parent": { "label": "Row C", "type": "row" },
                "section": "Floor"
            },
            "ids": {
              "own": "11",
              "parent": "C"
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
            "channel": "channel1",
            "distanceToFocalPoint": 84.3242
        },
        {
            "label": "C-35",
            "labels": {
                "own": { "label": "35", "type": "seat" },
                "parent": { "label": "Row C", "type": "row" },
                "section": "Floor"
            },
            "ids": {
              "own": "35",
              "parent": "C"
            },
            "status": "reservedByToken",
            "categoryLabel": "Balcony",
            "categoryKey": "5",
            "extraData": {"userId": "123"},
            "section": "Floor",
            "forSale": true,
            "orderId": "order1",
            "holdToken": "wvXbB9MlHt",
            "objectType": "seat",
            "isAccessible": true,
            "isCompanionSeat": false,
            "hasRestrictedView": false,
            "leftNeighbour": "C-34",
            "rightNeighbour": "C-36",
            "isSelectable": false,
            "isDisabledBySocialDistancing": false,
            "channel": "channel1",
            "distanceToFocalPoint": 62.923
        }
    ],
    "Balcony": [
        {
            "label": "C-45",
            "labels": {
                "own": { "label": "45", "type": "seat" },
                "parent": { "label": "Row C", "type": "row" },
                "section": "Balcony"
            },
            "ids": {
              "own": "45",
              "parent": "C"
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
            "channel": "channel1",
            "distanceToFocalPoint": 10.3245
        }
    ],
    "NO_SECTION": [
        {
            "label": "GA",
            "labels": {
                "own": { "label": "General Admission 1", "type": "generalAdmission" }
            },
            "ids": {
              "own": "GA"
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
            "channel": "channel1",
            "distanceToFocalPoint": 82.832
        }
    ],
    "NO_SECTION": [ ... ]
}
```



## Detailed report by channel



```shell
GET https://api-{region}.seatsio.net/reports/events/{eventKey}/byChannel
GET https://api-{region}.seatsio.net/reports/events/{eventKey}/byChannel/{channel}
GET https://api-{region}.seatsio.net/reports/events/{eventKey}/byChannel/NO_CHANNEL
```



```shell
curl https://api-{region}.seatsio.net/reports/events/event34/byChannel -u aSecretKey: 
```



```javascript
{
    "channel1": [
        {
            "label": "C-11",
            "labels": {
                "own": { "label": "11", "type": "seat" },
                "parent": { "label": "Row C", "type": "row" },
                "section": "Floor"
            },
            "ids": {
              "own": "11",
              "parent": "C"
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
            "distanceToFocalPoint": 84.3242
        },
        {
            "label": "C-35",
            "labels": {
                "own": { "label": "35", "type": "seat" },
                "parent": { "label": "Row C", "type": "row" },
                "section": "Floor"
            },
            "ids": {
              "own": "35",
              "parent": "C"
            },
            "status": "reservedByToken",
            "categoryLabel": "Balcony",
            "categoryKey": "5",
            "extraData": {"userId": "123"},
            "section": "Floor",
            "forSale": true,
            "orderId": "order1",
            "holdToken": "wvXbB9MlHt",
            "objectType": "seat",
            "isAccessible": true,
            "isCompanionSeat": false,
            "hasRestrictedView": false,
            "leftNeighbour": "C-34",
            "rightNeighbour": "C-36",
            "isSelectable": false,
            "isDisabledBySocialDistancing": false,
            "distanceToFocalPoint": 62.923
        }
    ],
    "channel2": [
        {
            "label": "C-45",
            "labels": {
                "own": { "label": "45", "type": "seat" },
                "parent": { "label": "Row C", "type": "row" },
                "section": "Balcony"
            },
            "ids": {
              "own": "45",
              "parent": "C"
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
            "distanceToFocalPoint": 10.3245
        }
    ],
    "NO_CHANNEL": [
        {
            "label": "GA",
            "labels": {
                "own": { "label": "General Admission 1", "type": "generalAdmission" }
            },
            "ids": {
              "own": "GA"
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
            "distanceToFocalPoint": 82.832
        }
    ],
    "NO_CHANNEL": [ ... ]
}
```


## Detailed report by object type

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
GET https://api-{region}.seatsio.net/reports/events/{eventKey}/byObjectType
GET https://api-{region}.seatsio.net/reports/events/{eventKey}/byObjectType/{status}
```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->eventReports->byObjectType("event34");
$seatsioClient->eventReports->byObjectType("event34", "generalAdmission");

```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.EventReports.ByObjectType("event34");
Client.EventReports.ByObjectType("event34", "generalAdmission");

```

</TabItem>
<TabItem value='java'>

```java
client.eventReports.byObjectType("event34");
client.eventReports.byObjectType("event34", "generalAdmission");

```

</TabItem>
<TabItem value='python'>

```python
client.events.reports.by_object_type("event34")
client.events.reports.by_object_type("event34", object_type="generalAdmission")

```

</TabItem>
<TabItem value='ruby'>

```ruby
client.event_reports.by_object_type("event34")
client.event_reports.by_object_type("event34", "generalAdmission")
```

</TabItem>
<TabItem value='javascript'>

```javascript
await client.eventReports.byObjectType('eventKey');
await client.eventReports.byObjectType('eventKey', 'generalAdmission');
```

</TabItem>
</Tabs>





```shell
curl https://api-{region}.seatsio.net/reports/events/event34/byObjectType -u aSecretKey: 
```



```javascript
{
    "seat": [
        {
            "label": "C-11",
            "labels": {
                "own": { "label": "11", "type": "seat" },
                "parent": { "label": "Row C", "type": "row" },
                "section": "Floor"
            },
            "ids": {
              "own": "11",
              "parent": "C"
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
            "channel": "channel1",
            "distanceToFocalPoint": 84.3242
        },
        {
            "label": "C-45",
            "labels": {
                "own": { "label": "45", "type": "seat" },
                "parent": { "label": "Row C", "type": "row" }
            },
            "ids": {
              "own": "45",
              "parent": "C"
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
            "channel": "channel1",
            "distanceToFocalPoint": 10.3245
        },
        {
            "label": "C-35",
            "labels": {
                "own": { "label": "35", "type": "seat" },
                "parent": { "label": "Row C", "type": "row" }
            },
            "ids": {
              "own": "35",
              "parent": "C"
            },
            "status": "reservedByToken",
            "categoryLabel": "Balcony",
            "catgoryKey": "5",
            "extraData": {"userId": "123"},
            "holdToken": "wvXbB9MlHt",
            "forSale": true,
            "objectType": "seat",
            "isAccessible": true,
            "isCompanionSeat": false,
            "hasRestrictedView": false,
            "leftNeighbour": "C-34",
            "rightNeighbour": "C-36",
            "isSelectable": false,
            "isDisabledBySocialDistancing": false,
            "channel": "channel1",
            "distanceToFocalPoint": 62.923
        }
    ],
    "generalAdmission": [
        {
            "label": "GA",
            "labels": {
                "own": { "label": "General Admission 1", "type": "generalAdmission" }
            },
            "ids": {
              "own": "GA"
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
            "channel": "channel1",
            "distanceToFocalPoint": 82.832
        }
    ],
    "table": [],
    "booth": []
}
```

