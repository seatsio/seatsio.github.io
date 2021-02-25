---
title: "Update a chart"
slug: "/api-update-a-chart"
hidden: false
createdAt: "2018-08-01T13:27:13.005Z"
updatedAt: "2019-08-26T09:06:54.682Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The name and categories of a chart can be updated by posting to /charts/{chart key}.



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
POST https://api.seatsio.net/charts/{chartKey}
```

</TabItem>
<TabItem value='php'>

```php
$cat1 = ['key' => 1, 'label' => 'Category 1', 'color' => '#aaaaaa'];
$cat2 = ['key' => 2, 'label' => 'Category 2', 'color' => '#bbbbbb'];
$seatsioClient->charts->update("4250fffc-e41f-c7cb-986a-2c5e728b8c28", "New name for my chart", [$cat1, $cat2])
```

</TabItem>
<TabItem value='csharp'>

```csharp
var category1 = new Category(1, "Category 1", "#aaaaaa");
var category2 = new Category(2, "Category 2", "#bbbbbb");
var drawing = Client.Charts.Update("4250fffc-e41f-c7cb-986a-2c5e728b8c28", "New name for my chart", new [] { category1, category2 });
```

</TabItem>
<TabItem value='java'>

```java
Category category1 = new Category(1, "Category 1", "#aaaaaa");
Category category2 = new Category(2, "Category 2", "#bbbbbb");
client.charts.update("4250fffc-e41f-c7cb-986a-2c5e728b8c28", "New name for my chart", Arrays.asList(category1, category2));
```

</TabItem>
<TabItem value='python'>

```python
client.charts.update("4250fffc-e41f-c7cb-986a-2c5e728b8c28",
    new_name="New name for my chart", 
    categories=[
        {"key": 1, "label": "Category 1", "color": "#aaaaaa"}
    ])
```

</TabItem>
<TabItem value='ruby'>

```ruby
client.charts.update key: "4250fffc-e41f-c7cb-986a-2c5e728b8c28",
    new_name: "New name for my chart", 
    categories: [
        {"key": 1, "label": "Category 1", "color": "#aaaaaa"}
    ]
```

</TabItem>
<TabItem value='javascript'>

```javascript
let cat1 = {'key': 1, 'label': 'Category 1', 'color': '#aaaaaa'};
let cat2 = {'key': 2, 'label': 'Category 2', 'color': '#bbbbbb'};

await client.charts.update('chartKey', 'New name for my chart', [cat1, cat2]);
```

</TabItem>
</Tabs>





:::info Note
Seats.io creates a draft chart version when you update a chart. If a draft version already exists, that draft gets updated.

This does not apply to charts without events. For those charts we don't create a draft version.
:::



## Update the chart name

To update the name of a chart, send the new name in the request body. If you don't send a name, it will not change.

```json
{
    "name": "New name for my chart"
}
```



## Update chart categories

To update categories, you must send an updated array of categories, for example: 

```json
[
    { "key": 1, "label": "Category 1", "color": "#aaaaaa"},
    { "key": 2, "label": "Category 2", "color": "#bbbbbb", "accessible": true}
]
```

The fields are: 

* **key**: a number or a string that uniquely identifies the category in the chart. Note that when passing in a number, it cannot exceed the value of Number.MAX_SAFE_INTEGER (i.e. 2^32 = 9007199254740991)
* **label**: the category label, a string
* **color**: a valid html color


Updating categories works as follows:

- A category with a key that did not yet exist is added as a new category
- A category with an existing key is updated. The label and color you provide overwrite the old label and color.
- All other categories, which are not included in the array, are deleted. Sending an empty array of categories removes all categories.
 
Suppose that this is the list of existing categories:

```json
{
    "categories": [
        { "key": 1, "label": "Category 1", "color": "#aaaaaa"},
        { "key": 2, "label": "Category 2", "color": "#bbbbbb"}
    ]
}
```

and you send this update chart request:

```json
{
    "categories": [
        { "key": 2, "label": "My category 2"}
    ]
}
```

then category 1 will be deleted, the label for category 2 will be set to "My category 2", and the color of category 2 is left unchanged.

```json
{
    "categories": [
        { "key": 2, "label": "My category 2", "color": "#bbbbbb"}
    ]
}
```



```curl
curl https://api.seatsio.net/charts/4250fffc-e41f-c7cb-986a-2c5e728b8c28 \
-u aSecretKey: -X POST -H 'Content-Type: application/json' -d '{"name": "New name for my chart"}'
```

**Response**

204 - No Content
