---
title: "Create a chart"
slug: "api-create-a-chart"
hidden: false
createdAt: "2018-08-01T13:27:06.249Z"
updatedAt: "2019-08-26T09:06:41.896Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Charts can be created by posting a JSON object that represents the chart to `/charts`. This request body is optional: an empty untitled chart is created when an empty request body is sent.


<Tabs 
  defaultValue="text"
  values={[
{ label: '', value: 'text', },
{ label: 'PHP', value: 'php', },
{ label: 'C#', value: 'csharp', },
{ label: 'Java', value: 'java', },
{ label: 'Python', value: 'python', },
{ label: 'Ruby', value: 'ruby', },
{ label: 'Javascript', value: 'javascript', },
]}>
<TabItem value='text'>

```text
POST https://api.seatsio.net/charts
```

</TabItem>
<TabItem value='php'>

```php
$cat1 = ['key' => 1, 'label' => 'Category 1', 'color' => '#aaaaaa'];
$cat2 = ['key' => 2, 'label' => 'Category 2', 'color' => '#bbbbbb'];
$seatsioClient->charts->create("my chart", "MIXED", [$cat1, $cat2]);
```

</TabItem>
<TabItem value='csharp'>

```csharp
var category1 = new Category(1, "Category 1", "#aaaaaa");
var category2 = new Category(2, "Category 2", "#bbbbbb");
var drawing = Client.Charts.Create("my chart", "MIXED", new [] { category1, category2 });
```

</TabItem>
<TabItem value='java'>

```java
Category category1 = new Category(1, "Category 1", "#aaaaaa");
Category category2 = new Category(2, "Category 2", "#bbbbbb");
client.charts.create("my chart", "MIXED", Arrays.asList(category1, category2));

```

</TabItem>
<TabItem value='python'>

```python
client.charts.create(
    categories=[
        {"key": 1, "label": "Category 1", "color": "#aaaaaa"},
        {"key": 2, "label": "Category 2", "color": "#bbbbbb"}
    ])
```

</TabItem>
<TabItem value='ruby'>

```ruby
categories = [
  {"key": 1, "label": "Category 1", "color": "#aaaaaa"},
  {"key": 2, "label": "Category 2", "color": "#bbbbbb"}
]
client.charts.create categories: categories
```

</TabItem>
<TabItem value='javascript'>

```javascript
let cat1 = {'key': 1, 'label': 'Category 1', 'color': '#aaaaaa'};
let cat2 = {'key': 2, 'label': 'Category 2', 'color': '#bbbbbb'};
await client.charts.create('my chart', 'MIXED', [cat1, cat2]);
```

</TabItem>
</Tabs>



```json
{
    "name": "my chart",
    "venueType": "TABLES",
    "categories": [
        { "key": 1, "label": "Category 1", "color": "#aaaaaa"},
        { "key": 2, "label": "Category 2", "color": "#bbbbbb", "accessible": true}
    ]
}
```
* **name**: the name of the chart. Optional. Defaults to 'Untitled chart'.
* **venueType**: the kind of venue you're creating. Depending on the venue type you choose, drawing sections will or will not be possible in the designer.
Valid venue types are "MIXED" (chart without sections) and "ROWS_WITH_SECTIONS" (chart with sections). If you don't pass in a venue type, "MIXED" is used.
* **categories**: optional array of categories. Each category contains a key (required), label (required) and color (optional). The key needs to be a number or a string. If it's a number, it cannot exceed `Number.MAX_SAFE_INTEGER` (i.e. 9007199254740991). A default color is assigned if you don't specify one. 


```curl
curl https://api.seatsio.net/charts \
-u aSecretKey: -X POST -H 'Content-Type: application/json' -d '{"name": "my chart"}'
```

```json
{
    "name":"chart2",
    "id":"19",
    "key":"749b9650-24fb-11e7-93ae-92361f002671",
    "status":"NOT_USED",
    "tags": [],
    "archived": false,
    "publishedVersionThumbnailUrl": "https://cdn.seats.io/system/public/.../published/.../thumbnail"
}
```
