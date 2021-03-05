---
title: "Summary reports"
slug: "/api/summary-reports"
hidden: false
createdAt: "2018-08-02T10:10:41.918Z"
updatedAt: "2021-02-25T11:14:35.413Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Summary reports are a summarised version of the [detailed event reports](/docs/api/detailed-reports). They indicate how many objects are in a certain status, category or section.

They also allow you to drill down into the numbers: how many booked seats are there in category A? how many free seats are left in section B?

## Summary report by status





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
GET https://api.seatsio.net/reports/events/{eventKey}/byStatus/summary
```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->eventReports->summaryByStatus("event34");
```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.EventReports.SummaryByStatus("event34");
```

</TabItem>
<TabItem value='java'>

```java
client.eventReports.summaryByStatus("event34");
```

</TabItem>
<TabItem value='python'>

```python
client.events.reports.summary_by_status("event34")
```

</TabItem>
<TabItem value='ruby'>

```ruby
client.event_reports.summary_by_status("event34")

```

</TabItem>
<TabItem value='javascript'>

```javascript
await client.eventReports.summaryByStatus('eventKey');
```

</TabItem>
</Tabs>





```shell
curl https://api.seatsio.net/reports/events/event34/byStatus/summary -u aSecretKey: 
```


**Example response**

```javascript

{
    "booked": {
        "count": 34,
        "bySection": {
            "Floor": 12,
            "Balcony": 22
        },
        "byCategoryLabel": {
            "premium": 10,
            "standard": 24
        },
        "byCategoryKey": {
            "1": 10,
            "2": 24
        },
        "bySelectability": {
            "not_selectable": 34
        },
        "byChannel": {
            "NO_CHANNEL": 34
        }
    },
    "free": {
        "count": 80,
        "bySection": {
            "Balcony": 80
        },
        "byCategoryLabel": {
            "premium": 2,
            "standard": 78
        },
        "byCategoryKey": {
            "1": 2,
            "2": 78
        },
        "bySelectability": {
            "selectable": 80
        },
        "byChannel": {
            "NO_CHANNEL": 80
        }
    }
}
```

## Summary report by selectability
This reports allows you to distinguish between selectable and non-selectable objects. An object is considered selectable if:

- its status equals 'free'
- it's for sale
- and it's not disabled by social distancing rules

Selectable objects can be found under the selectable key, non-selectable objects under non_selectable.



<Tabs 
  groupId="serverside-code-samples"
  defaultValue="shell"
  values={[
{ label: 'Text', value: 'shell', },
{ label: 'PHP', value: 'php', },
{ label: 'C#', value: 'csharp', },
{ label: 'Java', value: 'java', },
{ label: 'Ruby', value: 'ruby', },
{ label: 'Python', value: 'python', },
{ label: 'Javascript', value: 'javascript', },
]}>
<TabItem value='shell'>

```shell
GET https://api.seatsio.net/reports/events/{eventKey}/bySelectability/summary
```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->eventReports->summaryBySelectability("event34");
```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.EventReports.SummaryBySelectability("event34");
```

</TabItem>
<TabItem value='java'>

```java
client.eventReports.summaryBySelectability("event34");
```

</TabItem>
<TabItem value='ruby'>

```ruby
client.event_reports.summary_by_selectability("event34")

```

</TabItem>
<TabItem value='python'>

```python
client.events.reports.summary_by_selectability("event34")
```

</TabItem>
<TabItem value='javascript'>

```javascript
await client.eventReports.summaryBySelectability('eventKey');
```

</TabItem>
</Tabs>





```shell
curl https://api.seatsio.net/reports/events/event34/bySelectability/summary -u aSecretKey: 
```



```javascript

{
    "selectable": {
        "count": 34,
        "bySection": {
            "Floor": 12,
            "Balcony": 22
        },
        "byCategoryLabel": {
            "premium": 10,
            "standard": 24
        },
        "byCategoryKey": {
            "1": 10,
            "2": 24
        },
        "byStatus": {
            "free": 34
        },
        "byChannel": {
            "NO_CHANNEL": 34
        }
    },
    "not_selectable": {
        "count": 80,
        "bySection": {
            "Balcony": 80
        },
        "byCategoryLabel": {
            "premium": 2,
            "standard": 78
        },
        "byCategoryKey": {
            "1": 2,
            "2": 78
        },
        "byStatus": {
            "booked": 80
        },
        "byChannel": {
            "NO_CHANNEL": 80
        }
    }
}
```



## Summary report by category label





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
GET https://api.seatsio.net/reports/events/{eventKey}/byCategoryLabel/summary
```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->eventReports->summaryByCategoryLabel("event34");
```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.EventReports.SummaryByCategoryLabel("event34");
```

</TabItem>
<TabItem value='java'>

```java
client.eventReports.summaryByCategoryLabel("event34");
```

</TabItem>
<TabItem value='python'>

```python
client.events.reports.summary_by_category_label("event34")
```

</TabItem>
<TabItem value='ruby'>

```ruby
client.event_reports.summary_by_category_label("event34")
```

</TabItem>
<TabItem value='javascript'>

```javascript
await client.eventReports.summaryByCategoryLabel('eventKey');
```

</TabItem>
</Tabs>





```shell
curl https://api.seatsio.net/reports/events/event34/byCategoryLabel/summary -u aSecretKey: 
```



```javascript
{
    "premium": {
        "count": 34,
        "bySection": {
            "Floor": 12,
            "Balcony": 22
        },
        "byStatus": {
            "free": 10,
            "booked": 24
        },
        "bySelectability": {
            "selectable": 10
            "not_selectable": 24
        },
        "byChannel": {
            "NO_CHANNEL": 34
        }
    },
    "standard": {
        "count": 80,
        "bySection": {
            "Balcony": 80
        },
        "byStatus": {
            "free": 2,
            "booked": 78
        },
        "bySelectability": {
            "selectable": 2
            "not_selectable": 78
        },
        "byChannel": {
            "NO_CHANNEL": 80
        }
    },
    "NO_CATEGORY": {
        "count": 0,
        "bySection": {},
        "byStatus": {},
        "bySelectability": {},
        "byChannel": {}
    }
}
```



## Summary report by category key





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
GET https://api.seatsio.net/reports/events/{eventKey}/byCategoryKey/summary
```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->eventReports->summaryByCategoryKey("event34");
```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.EventReports.SummaryByCategoryKey("event34");
```

</TabItem>
<TabItem value='java'>

```java
client.eventReports.summaryByCategoryKey("event34");
```

</TabItem>
<TabItem value='python'>

```python
client.events.reports.summary_by_category_key("event34")
```

</TabItem>
<TabItem value='ruby'>

```ruby
client.event_reports.summary_by_category_key("event34")
```

</TabItem>
<TabItem value='javascript'>

```javascript
await client.eventReports.summaryByCategoryKey('eventKey');
```

</TabItem>
</Tabs>





```shell
curl https://api.seatsio.net/reports/events/event34/byCategoryKey/summary -u aSecretKey: 
```



```javascript
{
    "1": {
        "count": 34,
        "bySection": {
            "Floor": 12,
            "Balcony": 22
        },
        "byStatus": {
            "free": 10,
            "booked": 24
        },
        "bySelectability": {
            "selectable": 10,
            "not_selectable": 24
        },
        "byChannel": {
            "NO_CHANNEL": 34
        }
    },
    "2": {
        "count": 80,
        "bySection": {
            "Balcony": 80
        },
        "byStatus": {
            "free": 2,
            "booked": 78
        },
        "bySelectability": {
            "selectable": 2,
            "not_selectable": 78
        },
        "byChannel": {
            "NO_CHANNEL": 80
        }
    },
    "NO_CATEGORY": {
        "count": 0,
        "bySection": {},
        "byStatus": {},
        "byChannel": {}
    }
}
```



## Summary report by section





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
GET https://api.seatsio.net/reports/events/{eventKey}/bySection/summary
```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->eventReports->summaryBySection("event34");
```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.EventReports.SummaryBySection("event34");
```

</TabItem>
<TabItem value='java'>

```java
client.eventReports.summaryBySection("event34");
```

</TabItem>
<TabItem value='python'>

```python
client.events.reports.summary_by_section("event34")
```

</TabItem>
<TabItem value='ruby'>

```ruby
client.event_reports.summary_by_section("event34")
```

</TabItem>
<TabItem value='javascript'>

```javascript
await client.eventReports.summaryBySection('eventKey');
```

</TabItem>
</Tabs>





```shell
curl https://api.seatsio.net/reports/events/event34/bySection/summary -u aSecretKey: 
```



```javascript
{
    "Floor": {
        "count": 34,
        "byStatus": {
            "booked": 12,
            "free": 22
        },
        "byCategoryLabel": {
            "premium": 10,
            "standard": 24
        },
        "byCategoryKey": {
            "1": 10,
            "2": 24
        },
        "bySelectability": {
            "selectable": 22,
            "not_selectable": 12
        },
        "byChannel": {
            "NO_CHANNEL": 34
        }
    },
    "Balcony": {
        "count": 80,
        "byStatus": {
            "free": 80
        },
        "byCategoryLabel": {
            "premium": 2,
            "standard": 78
        },
        "byCategoryKey": {
            "1": 2,
            "2": 78
        },
        "bySelectability": {
            "selectable": 80
        },
        "byChannel": {
            "NO_CHANNEL": 80
        }
    },
    "NO_SECTION": {
        "count": 0,
        "byStatus": {},
        "byCategoryLabel": {},
        "byCategoryKey": {},
        "byChannel": {}
    }
}
```



## Summary report by channel





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
GET https://api.seatsio.net/reports/events/{eventKey}/byChannel/summary
```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->eventReports->summaryByChannel("event34");
```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.EventReports.SummaryByChannel("event34");
```

</TabItem>
<TabItem value='java'>

```java
client.eventReports.summaryByChannel("event34");
```

</TabItem>
<TabItem value='python'>

```python
client.events.reports.summary_by_channel("event34")
```

</TabItem>
<TabItem value='ruby'>

```ruby
client.event_reports.summary_by_channel("event34")
```

</TabItem>
<TabItem value='javascript'>

```javascript
await client.eventReports.deepSummaryBySection('eventKey');
```

</TabItem>
</Tabs>





```shell
curl https://api.seatsio.net/reports/events/event34/byChannel/summary -u aSecretKey: 
```



```javascript
{
    "channel1": {
        "count": 34,
        "byStatus": {
            "booked": 12,
            "free": 22
        },
        "byCategoryLabel": {
            "premium": 10,
            "standard": 24
        },
        "byCategoryKey": {
            "1": 10,
            "2": 24
        },
        "bySelectability": {
            "selectable": 22,
            "not_selectable": 12
        }
    },
    "channel2": {
        "count": 80,
        "byStatus": {
            "free": 80
        },
        "byCategoryLabel": {
            "premium": 2,
            "standard": 78
        },
        "byCategoryKey": {
            "1": 2,
            "2": 78
        },
        "bySelectability": {
            "selectable": 80
        }
    },
    "NO_CHANNEL": {
        "count": 0,
        "byStatus": {},
        "byCategoryLabel": {},
        "byCategoryKey": {}
    }
}
```

