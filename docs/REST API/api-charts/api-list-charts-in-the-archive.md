---
title: "List charts in the archive"
slug: "/api-list-charts-in-the-archive"
hidden: false
createdAt: "2018-08-01T13:29:26.334Z"
updatedAt: "2019-03-21T11:00:45.152Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

When you don't want a chart to show up on your dashboard, you have to move it to the archive. It will stay there forever, unless you decide to move it out of the archive again. Charts cannot be hard deleted. 



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
GET https://api.seatsio.net/charts/archive

More info: https://docs.seats.io/docs/api-pagination

```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->charts->archive->firstPage(pageSize?)
$seatsioClient->charts->archive->pageAfter(afterId, pageSize?)
$seatsioClient->charts->archive->pageBefore(beforeId, pageSize?)

$seatsioClient->charts->archive->all();

/*
Some examples (for non-archived charts, but listing archived charts works similarly):

https://github.com/seatsio/seatsio-php/blob/master/README.md#listing-charts-page-by-page
https://github.com/seatsio/seatsio-php/blob/master/README.md#listing-all-charts
*/
```

</TabItem>
<TabItem value='csharp'>

```csharp
client.Charts.Archive.ListFirstPage(pageSize?)
client.Charts.Archive.ListPageAfter(afterId, pageSize?)
client.Charts.Archive.ListPageBefore(beforeId, pageSize?)

client.Charts.Archive.ListAll();

/*
Some examples (for non-archived charts, but listing archived charts works similarly):

https://github.com/seatsio/seatsio-dotnet/blob/master/README.md#listing-charts-page-by-page
https://github.com/seatsio/seatsio-dotnet/blob/master/README.md#listing-all-charts
*/
```

</TabItem>
<TabItem value='java'>

```java
client.charts.archive.firstPage(pageSize?)
client.charts.archive.pageAfter(afterId, pageSize?)
client.charts.archive.pageBefore(beforeId, pageSize?)

client.charts.archive.all();

/*
Some examples (for unarchived charts, but listing archived charts works similarly):

https://github.com/seatsio/seatsio-java/blob/master/README.md#listing-charts-page-by-page
https://github.com/seatsio/seatsio-java/blob/master/README.md#listing-all-charts
*/
```

</TabItem>
<TabItem value='python'>

```python
client.charts.archive.first_page(page_size?)
client.charts.archive.page_after(after_id, page_size?)
client.charts.archive.page_before(before_id, page_size?)

client.charts.archive.list()

"""
Some examples (for unarchived charts, but listing archived charts works similarly):

https://github.com/seatsio/seatsio-python/blob/master/README.md#listing-charts-page-by-page
https://github.com/seatsio/seatsio-python/blob/master/README.md#listing-all-charts
"""
```

</TabItem>
<TabItem value='ruby'>

```ruby
client.charts.archive.first_page(page_size?)
client.charts.archive.page_after(after_id, page_size?)
client.charts.archive.page_before(before_id, page_size?)

client.charts.archive

# Some examples (for unarchived charts, but listing archived charts works similarly):

# https://github.com/seatsio/seatsio-ruby/blob/master/README.md#listing-charts-page-by-page
# https://github.com/seatsio/seatsio-ruby/blob/master/README.md#listing-all-charts
```

</TabItem>
<TabItem value='javascript'>

```javascript
for await(let chart of client.charts.archive.all()) {
    //Do something with the archived chart
}

client.charts.archive.firstPage(parameters?, pageSize?)
client.charts.archive.pageAfter(afterId, parameters?, pageSize?)
client.charts.archive.pageBefore(beforeId, parameters?, pageSize?)
```

</TabItem>
</Tabs>





```shell
curl https://api.seatsio.net/charts/archive -u aSecretKey: 
```



```json
 {
    "next_page_starts_after": 12,
    "items":[
        {
            "name":"chart1",
            "id":"20",
            "key":"6451436c-24fb-11e7-93ae-92361f002671",
            "status":"PUBLISHED",
            "tags": [],
            "archived": true,
            "publishedVersionThumbnailUrl": "https://cdn.seats.io/system/public/.../published/.../thumbnail"
        },
        {
            "name":"chart2",
            "id":"19",
            "key":"749b9650-24fb-11e7-93ae-92361f002671",
            "status":"NOT_USED",
            "tags": ["tag1", "tag2"],
            "archived": true,
            "publishedVersionThumbnailUrl": "https://cdn.seats.io/system/public/.../published/.../thumbnail"
        }
    ]
}
```

