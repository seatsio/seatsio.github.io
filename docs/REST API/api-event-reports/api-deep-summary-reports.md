---
title: "Deep summary reports"
slug: "/api-deep-summary-reports"
hidden: false
createdAt: "2020-12-28T07:31:45.151Z"
updatedAt: "2021-02-25T11:15:38.880Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Deep summary reports contain the same kind of information as the [regular summary reports](api-summary-reports), but in a more detailed way. Summary reports can answer questions like "how many seats in Channel1 have the status 'booked'? The deep summary reports go further: "how many seats in Channel1 **within Section A** have the status 'booked'?

## Deep summary report by status





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
GET https://api.seatsio.net/reports/events/{eventKey}/byStatus/summary/deep
```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->eventReports->deepSummaryByStatus("event34");
```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.EventReports.DeepSummaryByStatus("event34");
```

</TabItem>
<TabItem value='java'>

```java
client.eventReports.deepSummaryByStatus("event34");
```

</TabItem>
<TabItem value='python'>

```python
client.events.reports.deep_summary_by_status("event34")
```

</TabItem>
<TabItem value='ruby'>

```ruby
client.event_reports.deep_summary_by_status("event34")

```

</TabItem>
<TabItem value='javascript'>

```javascript
await client.eventReports.deepSummaryByStatus('eventKey');
```

</TabItem>
</Tabs>





```shell
curl https://api.seatsio.net/reports/events/event34/byStatus/summary/deep -u aSecretKey: 
```


**Example response**

```json

{
  "booked": {
    "count": 9,
    "bySection": {
      "NO_SECTION": {
        "count": 9,
        "byChannel": {
          "NO_CHANNEL": 7,
          "channel1": 2
        },
        "byCategoryKey": {
          "1": 2,
          "3": 7
        },
        "bySelectability": {
          "not_selectable": 9
        },
        "byCategoryLabel": {
          "cat3": 7,
          "cat1": 2
        }
      }
    },
    "byChannel": {
      "NO_CHANNEL": {
        "bySection": {
          "NO_SECTION": 7
        },
        "count": 7,
        "byCategoryKey": {
          "3": 7
        },
        "bySelectability": {
          "not_selectable": 7
        },
        "byCategoryLabel": {
          "cat3": 7
        }
      },
      "channel1": {
        "bySection": {
          "NO_SECTION": 2
        },
        "count": 2,
        "byCategoryKey": {
          "1": 2
        },
        "bySelectability": {
          "not_selectable": 2
        },
        "byCategoryLabel": {
          "cat1": 2
        }
      }
    },
    "byCategoryKey": {
			...
    },
    "bySelectability": {
			...
    },
    "byCategoryLabel": {
      ...
    }
  },
  "free": {
    ...
  }
}
```

## Deep summary report by selectability
This reports allows you to distinguish between selectable and non-selectable objects. An object is considered selectable if:

- its status equals 'free'
- it's for sale
- and it's not disabled by social distancing rules

Selectable objects can be found under the selectable key, non-selectable objects under non_selectable.



<Tabs 
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
GET https://api.seatsio.net/reports/events/{eventKey}/bySelectability/summary/deep
```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->eventReports->deepSummaryBySelectability("event34");
```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.EventReports.DeepSummaryBySelectability("event34");
```

</TabItem>
<TabItem value='java'>

```java
client.eventReports.deepSummaryBySelectability("event34");
```

</TabItem>
<TabItem value='ruby'>

```ruby
client.event_reports.deep_summary_by_selectability("event34")

```

</TabItem>
<TabItem value='python'>

```python
client.events.reports.deep_summary_by_selectability("event34")
```

</TabItem>
<TabItem value='javascript'>

```javascript
await client.eventReports.deepSummaryBySelectability('eventKey');
```

</TabItem>
</Tabs>





```shell
curl https://api.seatsio.net/reports/events/event34/bySelectability/summary/deep -u aSecretKey: 
```



```json
{
  "selectable": {
    "count": 15,
    "bySection": {
      "NO_SECTION": {
        "count": 15,
        "byChannel": {
          "NO_CHANNEL": 14,
          "channel2": 1
        },
        "byCategoryKey": {
          "2": 1,
          "3": 13,
          "NO_CATEGORY": 1
        },
        "byStatus": {
          "free": 15
        },
        "byCategoryLabel": {
          "cat2": 1,
          "cat3": 13,
          "NO_CATEGORY": 1
        }
      }
    },
    "byChannel": {
      "NO_CHANNEL": {
        "bySection": {
          "NO_SECTION": 14
        },
        "count": 14,
        "byCategoryKey": {
          "3": 13,
          "NO_CATEGORY": 1
        },
        "byStatus": {
          "free": 14
        },
        "byCategoryLabel": {
          "cat3": 13,
          "NO_CATEGORY": 1
        }
      },
      "channel2": {
        "bySection": {
          "NO_SECTION": 1
        },
        "count": 1,
        "byCategoryKey": {
          "2": 1
        },
        "byStatus": {
          "free": 1
        },
        "byCategoryLabel": {
          "cat2": 1
        }
      }
    },
    "byCategoryKey": {
			...
    },
    "byStatus": {
			...
    },
    "byCategoryLabel": {
			...
    }
  },
  "not_selectable": {
    ...
  }
}

```



## Deep summary report by category label





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
GET https://api.seatsio.net/reports/events/{eventKey}/byCategoryLabel/summary/deep
```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->eventReports->deepSummaryByCategoryLabel("event34");
```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.EventReports.DeepSummaryByCategoryLabel("event34");
```

</TabItem>
<TabItem value='java'>

```java
client.eventReports.deepSummaryByCategoryLabel("event34");
```

</TabItem>
<TabItem value='python'>

```python
client.events.reports.deep_summary_by_category_label("event34")
```

</TabItem>
<TabItem value='ruby'>

```ruby
client.event_reports.deep_summary_by_category_label("event34")
```

</TabItem>
<TabItem value='javascript'>

```javascript
await client.eventReports.deepSummaryByCategoryLabel('eventKey');
```

</TabItem>
</Tabs>





```shell
curl https://api.seatsio.net/reports/events/event34/byCategoryLabel/summary/deep -u aSecretKey: 
```



```json
{
  "count": 2,
  "cat1": {
    "bySection": {
      "NO_SECTION": {
        "count": 2,
        "byChannel": {
          "channel1": 2
        },
        "byCategoryKey": {
          "1": 2
        },
        "bySelectability": {
          "not_selectable": 2
        },
        "byStatus": {
          "booked": 2
        }
      }
    },
    "byChannel": {
      "channel1": {
        "bySection": {
          "NO_SECTION": 2
        },
        "count": 2,
        "byCategoryKey": {
          "1": 2
        },
        "bySelectability": {
          "not_selectable": 2
        },
        "byStatus": {
          "booked": 2
        }
      }
    },
    "bySelectability": {
			...
    },
    "byStatus": {
			...
    }
  },
  "cat2": {
    ...
  },
  "NO_CATEGORY": {
    ...
  }
}
```



## Deep summary report by category key





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
GET https://api.seatsio.net/reports/events/{eventKey}/byCategoryKey/summary/deep
```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->eventReports->deepSummaryByCategoryKey("event34");
```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.EventReports.DeepSummaryByCategoryKey("event34");
```

</TabItem>
<TabItem value='java'>

```java
client.eventReports.deepSummaryByCategoryKey("event34");
```

</TabItem>
<TabItem value='python'>

```python
client.events.reports.deep_summary_by_category_key("event34")
```

</TabItem>
<TabItem value='ruby'>

```ruby
client.event_reports.deep_summary_by_category_key("event34")
```

</TabItem>
<TabItem value='javascript'>

```javascript
await client.eventReports.deepSummaryByCategoryKey('eventKey');
```

</TabItem>
</Tabs>





```shell
curl https://api.seatsio.net/reports/events/event34/byCategoryKey/summary/deep -u aSecretKey: 
```



```json
{
  "count": 2,
  "1": {
    "bySection": {
      "NO_SECTION": {
        "count": 2,
        "byChannel": {
          "channel1": 2
        },
        "bySelectability": {
          "not_selectable": 2
        },
        "byStatus": {
          "booked": 2
        },
        "byCategoryLabel": {
          "cat1": 2
        }
      }
    },
    "byChannel": {
      "channel1": {
        "bySection": {
          "NO_SECTION": 2
        },
        "count": 2,
        "bySelectability": {
          "not_selectable": 2
        },
        "byStatus": {
          "booked": 2
        },
        "byCategoryLabel": {
          "cat1": 2
        }
      }
    },
    "bySelectability": {
      ...
    },
    "byStatus": {
      ...
    }
  },
  "2": {
    ...
  },
  "NO_CATEGORY": {
    ...
  }
}
```



## Deep summary report by section





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
GET https://api.seatsio.net/reports/events/{eventKey}/bySection/summary/deep
```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->eventReports->deepSummaryBySection("event34");
```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.EventReports.DeepSummaryBySection("event34");
```

</TabItem>
<TabItem value='java'>

```java
client.eventReports.deepSummaryBySection("event34");
```

</TabItem>
<TabItem value='python'>

```python
client.events.reports.deep_summary_by_section("event34")
```

</TabItem>
<TabItem value='ruby'>

```ruby
client.event_reports.deep_summary_by_section("event34")
```

</TabItem>
<TabItem value='javascript'>

```javascript
await client.eventReports.deepSummaryBySection('eventKey');
```

</TabItem>
</Tabs>





```shell
curl https://api.seatsio.net/reports/events/event34/bySection/summary/deep -u aSecretKey: 
```



```json
{
  "section1": {
    "count": 2,
    "byChannel": {
      "NO_CHANNEL": {
        "count": 2,
        "byCategoryKey": {
          "NO_CATEGORY": 2
        },
        "bySelectability": {
          "selectable": 2
        },
        "byStatus": {
          "free": 2
        },
        "byCategoryLabel": {
          "NO_CATEGORY": 2
        }
      }
    },
    "byCategoryKey": {
      "NO_CATEGORY": {
        "count": 2,
        "byChannel": {
          "NO_CHANNEL": 2
        },
        "bySelectability": {
          "selectable": 2
        },
        "byStatus": {
          "free": 2
        }
      }
    },
    "bySelectability": {
      ...
    },
    "byStatus": {
      ...
    },
    "byCategoryLabel": {
      ...
    }
  },
  "section2": {
    ...
  },
  "NO_SECTION": {
    ...
  }
}
```



## Deep summary report by channel





<Tabs 
  defaultValue="shell"
  values={[
{ label: 'Text', value: 'shell', },
{ label: 'PHP', value: 'php', },
{ label: 'C#', value: 'csharp', },
{ label: 'Java', value: 'java', },
{ label: 'Python', value: 'python', },
{ label: '', value: 'rust', },
{ label: 'Javascript', value: 'javascript', },
]}>
<TabItem value='shell'>

```shell
GET https://api.seatsio.net/reports/events/{eventKey}/byChannel/summary/deep
```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->eventReports->deepSummaryByChannel("event34");
```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.EventReports.DeepSummaryByChannel("event34");
```

</TabItem>
<TabItem value='java'>

```java
client.eventReports.deepSummaryByChannel("event34");
```

</TabItem>
<TabItem value='python'>

```python
client.events.reports.deep_summary_by_channel("event34")
```

</TabItem>
<TabItem value='rust'>

```rust
client.event_reports.deep_summary_by_channel("event34")
```

</TabItem>
<TabItem value='javascript'>

```javascript
await client.eventReports.deepSummaryByChannel('eventKey');
```

</TabItem>
</Tabs>





```shell
curl https://api.seatsio.net/reports/events/event34/byChannel/summary/deep -u aSecretKey: 
```



```json
{
  "channel1": {
    "count": 2,
    "bySection": {
      "NO_SECTION": {
        "count": 2,
        "byCategoryKey": {
          "1": 2
        },
        "bySelectability": {
          "not_selectable": 2
        },
        "byStatus": {
          "booked": 2
        },
        "byCategoryLabel": {
          "cat1": 2
        }
      }
    },
    "byCategoryKey": {
      "1": {
        "bySection": {
          "NO_SECTION": 2
        },
        "count": 2,
        "bySelectability": {
          "not_selectable": 2
        },
        "byStatus": {
          "booked": 2
        }
      }
    },
    "bySelectability": {
      ...
    },
    "byStatus": {
      ...
    },
    "byCategoryLabel": {
      ...
    }
  },
  "channel2": {
    ...
  },
  "NO_CHANNEL": {
    ...
  },
}
```

