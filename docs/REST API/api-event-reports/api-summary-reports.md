---
title: "Summary reports"
slug: "api-summary-reports"
hidden: false
createdAt: "2018-08-02T10:10:41.918Z"
updatedAt: "2020-12-28T07:46:17.868Z"
---
Summary reports are a summarised version of the [detailed event reports](doc:api-detailed-reports). They indicate how many objects are in a certain status, category or section.

They also allow you to drill down into the numbers: how many booked seats are there in category A? how many free seats are left in section B?
[block:api-header]
{
  &quot;title&quot;: &quot;Summary report by status&quot;
}
[/block]

```text
GET https://api.seatsio.net/reports/events/{eventKey}/byStatus/summary
```
```php
$seatsioClient->eventReports->summaryByStatus("event34");
```
```csharp
Client.EventReports.SummaryByStatus("event34");
```
```java
client.eventReports.summaryByStatus("event34");
```
```python
client.events.reports.summary_by_status("event34")
```
```ruby
client.event_reports.summary_by_status("event34")

```
```javascript
await client.eventReports.summaryByStatus('eventKey');
```

```curl
curl https://api.seatsio.net/reports/events/event34/byStatus/summary -u aSecretKey: 
```

**Example response**
```json

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

- its status equals &#39;free&#39;
- it&#39;s for sale
- and it&#39;s not disabled by social distancing rules

Selectable objects can be found under the selectable key, non-selectable objects under non_selectable.
```text
GET https://api.seatsio.net/reports/events/{eventKey}/bySelectability/summary
```
```text
$seatsioClient->eventReports->summaryBySelectability("event34");
```
```text
Client.EventReports.SummaryBySelectability("event34");
```
```text
client.eventReports.summaryBySelectability("event34");
```
```text
client.event_reports.summary_by_selectability("event34")

```
```text
client.events.reports.summary_by_selectability("event34")
```
```text
await client.eventReports.summaryBySelectability('eventKey');
```

```text
curl https://api.seatsio.net/reports/events/event34/bySelectability/summary -u aSecretKey: 
```

```json

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

[block:api-header]
{
  &quot;title&quot;: &quot;Summary report by category label&quot;
}
[/block]

```text
GET https://api.seatsio.net/reports/events/{eventKey}/byCategoryLabel/summary
```
```php
$seatsioClient->eventReports->summaryByCategoryLabel("event34");
```
```csharp
Client.EventReports.SummaryByCategoryLabel("event34");
```
```java
client.eventReports.summaryByCategoryLabel("event34");
```
```python
client.events.reports.summary_by_category_label("event34")
```
```ruby
client.event_reports.summary_by_category_label("event34")
```
```javascript
await client.eventReports.summaryByCategoryLabel('eventKey');
```

```curl
curl https://api.seatsio.net/reports/events/event34/byCategoryLabel/summary -u aSecretKey: 
```

```json
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

[block:api-header]
{
  &quot;title&quot;: &quot;Summary report by category key&quot;
}
[/block]

```text
GET https://api.seatsio.net/reports/events/{eventKey}/byCategoryKey/summary
```
```php
$seatsioClient->eventReports->summaryByCategoryKey("event34");
```
```csharp
Client.EventReports.SummaryByCategoryKey("event34");
```
```java
client.eventReports.summaryByCategoryKey("event34");
```
```python
client.events.reports.summary_by_category_key("event34")
```
```ruby
client.event_reports.summary_by_category_key("event34")
```
```javascript
await client.eventReports.summaryByCategoryKey('eventKey');
```

```curl
curl https://api.seatsio.net/reports/events/event34/byCategoryKey/summary -u aSecretKey: 
```

```json
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

[block:api-header]
{
  &quot;title&quot;: &quot;Summary report by section&quot;
}
[/block]

```text
GET https://api.seatsio.net/reports/events/{eventKey}/bySection/summary
```
```php
$seatsioClient->eventReports->summaryBySection("event34");
```
```csharp
Client.EventReports.SummaryBySection("event34");
```
```java
client.eventReports.summaryBySection("event34");
```
```python
client.events.reports.summary_by_section("event34")
```
```ruby
client.event_reports.summary_by_section("event34")
```
```javascript
await client.eventReports.summaryBySection('eventKey');
```

```curl
curl https://api.seatsio.net/reports/events/event34/bySection/summary -u aSecretKey: 
```

```json
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

[block:api-header]
{
  &quot;title&quot;: &quot;Summary report by channel&quot;
}
[/block]

```text
GET https://api.seatsio.net/reports/events/{eventKey}/byChannel/summary
```
```php
$seatsioClient->eventReports->summaryByChannel("event34");
```
```csharp
Client.EventReports.SummaryByChannel("event34");
```
```java
client.eventReports.summaryByChannel("event34");
```
```python
client.events.reports.summary_by_channel("event34")
```
```ruby
client.event_reports.summary_by_channel("event34")
```
```javascript
await client.eventReports.deepSummaryBySection('eventKey');
```

```curl
curl https://api.seatsio.net/reports/events/event34/byChannel/summary -u aSecretKey: 
```

```json
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
