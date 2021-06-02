---
title: "Chart Reports"
slug: "/api/chart-reports"
hidden: false
createdAt: "2018-10-02T14:51:28.856Z"
updatedAt: "2020-12-11T12:27:53.494Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The *chart report* endpoints all give you access to the data about a seating chart. 

You can retrieve each of these reports in different representations, called report types. 
For example, the `byLabel` report will give you an overview of all seats per seat label, whereas the `byCategoryKey` report will give you an overview of all different categories present on the seating chart, together with a list of the seats that belong to that category. 

The following report types are available: `byLabel`, `byCategoryKey`, `byCategoryLabel` and `byObjectType`. 

Most properties in the responses should be self-explanatory. However, `ids` and `labels` deserve some attention.

`labels` contains the displayed label for the object, its parent row or table, and its section. In most cases, the 'technical' label (aka the ID)
of an object is the same as its display label. But if needed, you can set a different display label in the designer.

`ids` contains the technical labels, by which objects are identified (e.g. when booking them).

## byLabel





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
GET https://api-{region}.seatsio.net/reports/charts/{chartKey}/byLabel?bookWholeTables=chart
GET https://api-{region}.seatsio.net/reports/charts/{chartKey}/byLabel
GET https://api-{region}.seatsio.net/reports/charts/{chartKey}/byLabel?bookWholeTables=true
GET https://api-{region}.seatsio.net/reports/charts/{chartKey}/byLabel?bookWholeTables=false
```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->chartReports->byLabel("d2aaasb4-e192-454a-9752-e5f1cb479421", "chart");
$seatsioClient->chartReports->byLabel("d2aaasb4-e192-454a-9752-e5f1cb479421", null);
$seatsioClient->chartReports->byLabel("d2aaasb4-e192-454a-9752-e5f1cb479421", "true");
$seatsioClient->chartReports->byLabel("d2aaasb4-e192-454a-9752-e5f1cb479421", "false");
```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.ChartReports.ByLabel("d2aaasb4-e192-454a-9752-e5f1cb479421", "chart");
Client.ChartReports.ByLabel("d2aaasb4-e192-454a-9752-e5f1cb479421", null);
Client.ChartReports.ByLabel("d2aaasb4-e192-454a-9752-e5f1cb479421", "true");
Client.ChartReports.ByLabel("d2aaasb4-e192-454a-9752-e5f1cb479421", "false");
```

</TabItem>
<TabItem value='java'>

```java
client.chartReports.byLabel("d2aaasb4-e192-454a-9752-e5f1cb479421", "chart");
client.chartReports.byLabel("d2aaasb4-e192-454a-9752-e5f1cb479421", null);
client.chartReports.byLabel("d2aaasb4-e192-454a-9752-e5f1cb479421", "true");
client.chartReports.byLabel("d2aaasb4-e192-454a-9752-e5f1cb479421", "false");
```

</TabItem>
<TabItem value='python'>

```python
client.charts.reports.by_label("d2aaasb4-e192-454a-9752-e5f1cb479421", "chart")
client.charts.reports.by_label("d2aaasb4-e192-454a-9752-e5f1cb479421", None)
client.charts.reports.by_label("d2aaasb4-e192-454a-9752-e5f1cb479421", "true")
client.charts.reports.by_label("d2aaasb4-e192-454a-9752-e5f1cb479421", "false")

```

</TabItem>
<TabItem value='ruby'>

```ruby
client.chart_reports.by_label("d2aaasb4-e192-454a-9752-e5f1cb479421", "chart")
client.chart_reports.by_label("d2aaasb4-e192-454a-9752-e5f1cb479421", nil)
client.chart_reports.by_label("d2aaasb4-e192-454a-9752-e5f1cb479421", "true")
client.chart_reports.by_label("d2aaasb4-e192-454a-9752-e5f1cb479421", "false")
```

</TabItem>
<TabItem value='javascript'>

```javascript
await client.chartReports.byLabel('chartKey', 'chart');
await client.chartReports.byLabel('chartKey', undefined);
await client.chartReports.byLabel('chartKey', 'true');
await client.chartReports.byLabel('chartKey', 'false');
```

</TabItem>
</Tabs>



Multiple objects could have the same label, that's why they're returned as an array.

```shell
curl https://api-{region}.seatsio.net/reports/charts/d2aaasb4-e192-454a-9752-e5f1cb479421/byLabel -u aSecretKey: 
```



```javascript
{
    "SEC A-C-11": [
        {
            "label": "SEC A-C-11",
            "labels": {
                "own": { "label": "11", "type": "seat" },
                "parent": { "label": "Row C", "type": "row" },
                "section": "Section A"
            },   
            "ids": {
                "own": "11",
                "parent": "C",
                "section": "SEC A"
            },
            "categoryLabel": "Ground Floor",
            "categoryKey": "1",
            "entrance": "Main entrance",
            "section": "Floor",
            "objectType": "seat",
            "leftNeighbour": "SEC A-C-10",
            "rightNeighbour": "SEC A-C-12",
            "distanceToFocalPoint": 10.3245
        }
    ],
    "SEC A-C-35": [
        {
            "label": "SEC A-C-35",
            "labels": {
                "own": { "label": "35", "type": "seat" },
                "parent": { "label": "Row C", "type": "row" },
                "section": "Section A"
            },
            "ids": {
              "own": "35",
              "parent": "C",
              "section": "SEC A"
            },
            "categoryLabel": "Balcony",
            "categoryKey": "5",
            "objectType": "seat",
            "leftNeighbour": "SEC A-C-34",
            "rightNeighbour": "SEC A-C-36",
            "distanceToFocalPoint": 12.878
        }
    ],
    "SEC A-C-45": [
        {
            "label": "SEC A-C-45",
            "labels": {
                "own": { "label": "45", "type": "seat" },
                "parent": { "label": "Row C", "type": "row" },
                "section": "Section A"
            },
            "ids": {
              "own": "45",
              "parent": "C",
              "section": "SEC A"
            },
            "categoryLabel": "Balcony",
            "categoryKey": "2",
            "objectType": "seat",
            "leftNeighbour": "SEC A-C-46",
            "rightNeighbour": "SEC A-C-44",
            "distanceToFocalPoint": 20.2134
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
            "categoryLabel": "Standing",
            "categoryKey": 6,
            "capacity": 100,
            "objectType": "generalAdmission",
            "distanceToFocalPoint": 89.213
        }
    ]
}
```

## A note on tables

If your floor plan contains tables, those are returned as separate objects. You can control this behaviour by passing in an optional *bookWholeTables* query parameter: 



```shell
GET https://api-{region}.seatsio.net/reports/charts/{chartKey}/byLabel?bookWholeTables=chart
```

* with `bookWholeTables=chart`, the report respects the table booking settings defined on the chart. If a table is bookable as a whole, the report contains the table (and not the seats). If a table is not bookable as a whole, the report contains the seats (and not the table).
* without the `bookWholeTables` query param, both seats at tables, and the tables themselves will be returned in the response
* with `bookWholeTables=true`, the response will only contain the tables, and not the seats. 
* with `bookWholeTables=false`, the response will only contain the seats at the tables, and not the tables.



## byCategoryKey





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
GET https://api-{region}.seatsio.net/reports/charts/{chartKey}/byCategoryKey?bookWholeTables=chart
GET https://api-{region}.seatsio.net/reports/charts/{chartKey}/byCategoryKey
GET https://api-{region}.seatsio.net/reports/charts/{chartKey}/byCategoryKey?bookWholeTables=true
GET https://api-{region}.seatsio.net/reports/charts/{chartKey}/byCategoryKey?bookWholeTables=false
```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->chartReports->byCategoryKey("d2aaasb4-e192-454a-9752-e5f1cb479421", "chart");
$seatsioClient->chartReports->byCategoryKey("d2aaasb4-e192-454a-9752-e5f1cb479421", null);
$seatsioClient->chartReports->byCategoryKey("d2aaasb4-e192-454a-9752-e5f1cb479421", "true");
$seatsioClient->chartReports->byCategoryKey("d2aaasb4-e192-454a-9752-e5f1cb479421", "false");
```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.ChartReports.ByCategoryKey("d2aaasb4-e192-454a-9752-e5f1cb479421", "chart");
Client.ChartReports.ByCategoryKey("d2aaasb4-e192-454a-9752-e5f1cb479421", null);
Client.ChartReports.ByCategoryKey("d2aaasb4-e192-454a-9752-e5f1cb479421", "true");
Client.ChartReports.ByCategoryKey("d2aaasb4-e192-454a-9752-e5f1cb479421", "false");
```

</TabItem>
<TabItem value='java'>

```java
client.chartReports.byCategoryKey("d2aaasb4-e192-454a-9752-e5f1cb479421", "chart");
client.chartReports.byCategoryKey("d2aaasb4-e192-454a-9752-e5f1cb479421", null);
client.chartReports.byCategoryKey("d2aaasb4-e192-454a-9752-e5f1cb479421", "true");
client.chartReports.byCategoryKey("d2aaasb4-e192-454a-9752-e5f1cb479421", "false");
```

</TabItem>
<TabItem value='python'>

```python
client.charts.reports.by_category_key("d2aaasb4-e192-454a-9752-e5f1cb479421", "chart")
client.charts.reports.by_category_key("d2aaasb4-e192-454a-9752-e5f1cb479421", None)
client.charts.reports.by_category_key("d2aaasb4-e192-454a-9752-e5f1cb479421", "true")
client.charts.reports.by_category_key("d2aaasb4-e192-454a-9752-e5f1cb479421", "false")

```

</TabItem>
<TabItem value='ruby'>

```ruby
client.chart_reports.by_category_key("d2aaasb4-e192-454a-9752-e5f1cb479421", "chart")
client.chart_reports.by_category_key("d2aaasb4-e192-454a-9752-e5f1cb479421", nil)
client.chart_reports.by_category_key("d2aaasb4-e192-454a-9752-e5f1cb479421", "true")
client.chart_reports.by_category_key("d2aaasb4-e192-454a-9752-e5f1cb479421", "false")
```

</TabItem>
<TabItem value='javascript'>

```javascript
await client.chartReports.byCategoryKey('chartKey', 'chart');
await client.chartReports.byCategoryKey('chartKey', undefined);
await client.chartReports.byCategoryKey('chartKey', 'true');
await client.chartReports.byCategoryKey('chartKey', 'false');
```

</TabItem>
</Tabs>



The response is a JSON object where all the keys are category keys, and the values an array of objects that represent the seats belonging to that category. 

```javascript
{
  "8": [
    {
      "label": "3-A-1",
      "labels": {
        "parent": {
          "label": "Row A",
          "type": "row"
        },
        "own": {
          "label": "1",
          "type": "seat"
        },
        "section": "Section 3"
      },
      "ids": {
        "own": "1",
        "parent": "A",
        "section": "3"
      },
      "objectType": "seat",
      "categoryKey": "8",
      "categoryLabel": "VIP",
      "section": "3",
      "distanceToFocalPoint": 10.3245
    },
    {
      "label": "3-A-2",
      "labels": {
        "parent": {
          "label": "Row A",
          "type": "row"
        },
        "own": {
          "label": "2",
          "type": "seat"
        },
        "section": "Section 3"
      },
      "ids": {
        "own": "2",
        "parent": "A",
        "section": "3"
      },
      "objectType": "seat",
      "categoryKey": "8",
      "categoryLabel": "VIP",
      "section": "3",
      "distanceToFocalPoint": 89.3245
    }
  ],
  "9": [
    {
      "label": "201-A-1",
      "labels": {
        "parent": {
          "label": "Row A",
          "type": "row"
        },
        "own": {
          "label": "1",
          "type": "seat"
        },
        "section": "Section 201"
      },
      "ids": {
        "own": "1",
        "parent": "A",
        "section": "201"
      },
      "objectType": "seat",
      "categoryKey": "9",
      "categoryLabel": "regular",
      "section": "201",
      "distanceToFocalPoint": 34.847
    },
    ...
  ]
}

```



## byCategoryLabel





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
GET https://api-{region}.seatsio.net/reports/charts/{chartKey}/byCategoryLabel?bookWholeTables=chart
GET https://api-{region}.seatsio.net/reports/charts/{chartKey}/byCategoryLabel
GET https://api-{region}.seatsio.net/reports/charts/{chartKey}/byCategoryLabel?bookWholeTables=true
GET https://api-{region}.seatsio.net/reports/charts/{chartKey}/byCategoryLabel?bookWholeTables=false
```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->chartReports->byCategoryLabel("d2aaasb4-e192-454a-9752-e5f1cb479421", "chart");
$seatsioClient->chartReports->byCategoryLabel("d2aaasb4-e192-454a-9752-e5f1cb479421", null);
$seatsioClient->chartReports->byCategoryLabel("d2aaasb4-e192-454a-9752-e5f1cb479421", "true");
$seatsioClient->chartReports->byCategoryLabel("d2aaasb4-e192-454a-9752-e5f1cb479421", "false");
```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.ChartReports.ByCategoryLabel("d2aaasb4-e192-454a-9752-e5f1cb479421", "chart");
Client.ChartReports.ByCategoryLabel("d2aaasb4-e192-454a-9752-e5f1cb479421", null);
Client.ChartReports.ByCategoryLabel("d2aaasb4-e192-454a-9752-e5f1cb479421", "true");
Client.ChartReports.ByCategoryLabel("d2aaasb4-e192-454a-9752-e5f1cb479421", "false");
```

</TabItem>
<TabItem value='java'>

```java
client.chartReports.byCategoryLabel("d2aaasb4-e192-454a-9752-e5f1cb479421", "chart");
client.chartReports.byCategoryLabel("d2aaasb4-e192-454a-9752-e5f1cb479421", null);
client.chartReports.byCategoryLabel("d2aaasb4-e192-454a-9752-e5f1cb479421", "true");
client.chartReports.byCategoryLabel("d2aaasb4-e192-454a-9752-e5f1cb479421", "false");
```

</TabItem>
<TabItem value='python'>

```python
client.charts.reports.by_category_label("d2aaasb4-e192-454a-9752-e5f1cb479421", "chart")
client.charts.reports.by_category_label("d2aaasb4-e192-454a-9752-e5f1cb479421", None)
client.charts.reports.by_category_label("d2aaasb4-e192-454a-9752-e5f1cb479421", "true")
client.charts.reports.by_category_label("d2aaasb4-e192-454a-9752-e5f1cb479421", "false")

```

</TabItem>
<TabItem value='ruby'>

```ruby
client.chart_reports.by_category_label("d2aaasb4-e192-454a-9752-e5f1cb479421", "chart")
client.chart_reports.by_category_label("d2aaasb4-e192-454a-9752-e5f1cb479421", nil)
client.chart_reports.by_category_label("d2aaasb4-e192-454a-9752-e5f1cb479421", "true")
client.chart_reports.by_category_label("d2aaasb4-e192-454a-9752-e5f1cb479421", "false")
```

</TabItem>
<TabItem value='javascript'>

```javascript
await client.chartReports.byCategoryLabel('chartKey', 'chart');
await client.chartReports.byCategoryLabel('chartKey', undefined);
await client.chartReports.byCategoryLabel('chartKey', 'true');
await client.chartReports.byCategoryLabel('chartKey', 'false');
```

</TabItem>
</Tabs>



The response has the same structure as the `byCategoryKey` endpoint, but JSON object's keys are category labels in this case: 


```javascript
{
  "Golden Circle": [
    {
      "label": "3-A-1",
      "labels": {
        "parent": {
          "label": "Row A",
          "type": "row"
        },
        "own": {
          "label": "1",
          "type": "seat"
        },
        "section": "Section 3"
      },
      "ids": {
        "own": "1",
        "parent": "A",
        "section": "3"
      },
      "objectType": "seat",
      "categoryKey": "8",
      "categoryLabel": "VIP",
      "section": "3",
      "distanceToFocalPoint": 10.3245
    },
    {
      "label": "3-A-2",
      "labels": {
        "parent": {
          "label": "Row A",
          "type": "row"
        },
        "own": {
          "label": "2",
          "type": "seat"
        },
        "section": "Section 3"
      },
      "ids": {
        "own": "2",
        "parent": "A",
        "section": "3"
      },
      "objectType": "seat",
      "categoryKey": "8",
      "categoryLabel": "VIP",
      "section": "3",
      "distanceToFocalPoint": 10.3245
    }
  ],
  "Balcony": [
    {
      "label": "201-A-1",
      "labels": {
        "parent": {
          "label": "Row A",
          "type": "row"
        },
        "own": {
          "label": "1",
          "type": "seat"
        },
        "section": "Section 201"
      },
      "ids": {
        "own": "1",
        "parent": "A",
        "section": "201"
      },
      "objectType": "seat",
      "categoryKey": "9",
      "categoryLabel": "regular",
      "section": "201",
      "distanceToFocalPoint": 10.3245
    },
    ...
  ]
}

```

## byObjectType

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
GET https://api-{region}.seatsio.net/reports/charts/{chartKey}/byObjectType?bookWholeTables=chart
GET https://api-{region}.seatsio.net/reports/charts/{chartKey}/byObjectType
GET https://api-{region}.seatsio.net/reports/charts/{chartKey}/byObjectType?bookWholeTables=true
GET https://api-{region}.seatsio.net/reports/charts/{chartKey}/byObjectType?bookWholeTables=false
```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->chartReports->byObjectType("d2aaasb4-e192-454a-9752-e5f1cb479421", "chart");
$seatsioClient->chartReports->byObjectType("d2aaasb4-e192-454a-9752-e5f1cb479421", null);
$seatsioClient->chartReports->byObjectType("d2aaasb4-e192-454a-9752-e5f1cb479421", "true");
$seatsioClient->chartReports->byObjectType("d2aaasb4-e192-454a-9752-e5f1cb479421", "false");
```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.ChartReports.ByObjectType("d2aaasb4-e192-454a-9752-e5f1cb479421", "chart");
Client.ChartReports.ByObjectType("d2aaasb4-e192-454a-9752-e5f1cb479421", null);
Client.ChartReports.ByObjectType("d2aaasb4-e192-454a-9752-e5f1cb479421", "true");
Client.ChartReports.ByObjectType("d2aaasb4-e192-454a-9752-e5f1cb479421", "false");
```

</TabItem>
<TabItem value='java'>

```java
client.chartReports.byObjectType("d2aaasb4-e192-454a-9752-e5f1cb479421", "chart");
client.chartReports.byObjectType("d2aaasb4-e192-454a-9752-e5f1cb479421", null);
client.chartReports.byObjectType("d2aaasb4-e192-454a-9752-e5f1cb479421", "true");
client.chartReports.byObjectType("d2aaasb4-e192-454a-9752-e5f1cb479421", "false");
```

</TabItem>
<TabItem value='python'>

```python
client.charts.reports.by_object_type("d2aaasb4-e192-454a-9752-e5f1cb479421", "chart")
client.charts.reports.by_object_type("d2aaasb4-e192-454a-9752-e5f1cb479421", None)
client.charts.reports.by_object_type("d2aaasb4-e192-454a-9752-e5f1cb479421", "true")
client.charts.reports.by_object_type("d2aaasb4-e192-454a-9752-e5f1cb479421", "false")

```

</TabItem>
<TabItem value='ruby'>

```ruby
client.chart_reports.by_object_type("d2aaasb4-e192-454a-9752-e5f1cb479421", "chart")
client.chart_reports.by_object_type("d2aaasb4-e192-454a-9752-e5f1cb479421", nil)
client.chart_reports.by_object_type("d2aaasb4-e192-454a-9752-e5f1cb479421", "true")
client.chart_reports.by_object_type("d2aaasb4-e192-454a-9752-e5f1cb479421", "false")
```

</TabItem>
<TabItem value='javascript'>

```javascript
await client.chartReports.byObjectType('chartKey', 'chart');
await client.chartReports.byObjectType('chartKey', undefined);
await client.chartReports.byObjectType('chartKey', 'true');
await client.chartReports.byObjectType('chartKey', 'false');
```

</TabItem>
</Tabs>

```shell
curl https://api-{region}.seatsio.net/reports/charts/d2aaasb4-e192-454a-9752-e5f1cb479421/byObjectType -u aSecretKey: 
```

```javascript
{
    "seat": [
        {
            "label": "SEC A-C-11",
            "labels": {
                "own": { "label": "11", "type": "seat" },
                "parent": { "label": "Row C", "type": "row" },
                "section": "Section A"
            },
            "ids": {
              "own": "11",
              "parent": "C",
              "section": "SEC A"
            },
            "categoryLabel": "Ground Floor",
            "categoryKey": "1",
            "entrance": "Main entrance",
            "section": "Floor",
            "objectType": "seat",
            "leftNeighbour": "SEC A-C-10",
            "rightNeighbour": "SEC A-C-12",
            "distanceToFocalPoint": 10.3245
        },
        {
            "label": "SEC A-C-35",
            "labels": {
                "own": { "label": "35", "type": "seat" },
                "parent": { "label": "Row C", "type": "row" },
                "section": "Section A"
            },
            "ids": {
              "own": "35",
              "parent": "C",
              "section": "SEC A"
            },
            "categoryLabel": "Balcony",
            "categoryKey": "5",
            "objectType": "seat",
            "leftNeighbour": "SEC A-C-34",
            "rightNeighbour": "SEC A-C-36",
            "distanceToFocalPoint": 10.3245
        },
        {
            "label": "SEC A-C-45",
            "labels": {
                "own": { "label": "45", "type": "seat" },
                "parent": { "label": "Row C", "type": "row" },
                "section": "Section A"
            },
            "ids": {
              "own": "45",
              "parent": "C",
              "section": "SEC A"
            },
            "categoryLabel": "Balcony",
            "categoryKey": "2",
            "objectType": "seat",
            "leftNeighbour": "SEC A-C-46",
            "rightNeighbour": "SEC A-C-44",
            "distanceToFocalPoint": 10.3245
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
            "categoryLabel": "Standing",
            "categoryKey": 6,
            "capacity": 100,
            "objectType": "generalAdmission",
            "distanceToFocalPoint": 10.3245
        }
    ],
    "table": [],
    "booth": []
}
```
