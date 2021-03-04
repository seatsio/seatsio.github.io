---
title: "List all charts"
slug: "/api/list-all-charts"
hidden: false
createdAt: "2018-08-01T13:12:11.538Z"
updatedAt: "2020-09-21T14:35:58.050Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Returns a paginated list of charts you’ve previously created in a workspace. The charts are returned in reverse chronological order: the most recently created charts will appear first in the list.



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
GET https://api-{region}.seatsio.net/charts

GET https://api-{region}.seatsio.net/charts?filter=london
GET https://api-{region}.seatsio.net/charts?tag=WestEnd
GET https://api-{region}.seatsio.net/charts?expand=events

More info: https://docs.seats.io/docs/api-pagination
```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->charts->listFirstPage(chartListParams?, pageSize?)
$seatsioClient->charts->listPageAfter(afterId, chartListParams?, pageSize?)
$seatsioClient->charts->listPageBefore(beforeId, chartListParams?, pageSize?)

$seatsioClient->charts->listAll(chartListParams?);

/*
Some examples:

https://github.com/seatsio/seatsio-php/blob/master/README.md#listing-charts-page-by-page
https://github.com/seatsio/seatsio-php/blob/master/README.md#listing-all-charts
*/
```

</TabItem>
<TabItem value='csharp'>

```csharp
client.Charts.ListFirstPage(filter?, tag?, expandEvents?, pageSize?)
client.Charts.ListPageAfter(afterIdfilter?, tag?, expandEvents?, pageSize?)
client.Charts.ListPageBefore(beforeIdfilter?, tag?, expandEvents?, pageSize?)

client.Charts.ListAll(filter?, tag?, expandEvents?);

/*
Some examples:

https://github.com/seatsio/seatsio-dotnet/blob/master/README.md#listing-charts-page-by-page
https://github.com/seatsio/seatsio-dotnet/blob/master/README.md#listing-all-charts
*/
```

</TabItem>
<TabItem value='java'>

```java
client.charts.listFirstPage(chartListParams?, pageSize?)
client.charts.listPageAfter(afterId, chartListParams?, pageSize?)
client.charts.listPageBefore(beforeId, chartListParams?, pageSize?)

client.charts.listAll(chartListParams?);

/*
Some examples:

https://github.com/seatsio/seatsio-java/blob/master/README.md#listing-charts-page-by-page
https://github.com/seatsio/seatsio-java/blob/master/README.md#listing-all-charts
*/
```

</TabItem>
<TabItem value='python'>

```python
client.charts.list_first_page(page_size?, chart_filter?, tag?, expand_events?)
client.charts.list_page_after(after_id, page_size?, chart_filter?, tag?, expand_events?)
client.charts.list_page_before(before_id, page_size?, chart_filter?, tag?, expand_events?)

client.charts.list(page_size?, chart_filter?, tag?, expand_events?)

"""
Some examples:

https://github.com/seatsio/seatsio-python/blob/master/README.md#listing-charts-page-by-page
https://github.com/seatsio/seatsio-python/blob/master/README.md#listing-all-charts
"""
```

</TabItem>
<TabItem value='ruby'>

```ruby
client.charts.list(chart_filter?, tag?, expand_events?).first_page(page_size?)
client.charts.list(chart_filter?, tag?, expand_events?).page_after(after_id, page_size?)
client.charts.list(chart_filter?, tag?, expand_events?).page_before(before_id, page_size?)

client.charts.list(chart_filter?, tag?, expand_events?)

# Some examples:

# https://github.com/seatsio/seatsio-ruby/blob/master/README.md#listing-charts-page-by-page
# https://github.com/seatsio/seatsio-ruby/blob/master/README.md#listing-all-charts
```

</TabItem>
<TabItem value='javascript'>

```javascript
client.charts.listFirstPage(chartListParams?, pageSize?)
client.charts.listPageAfter(afterId, chartListParams?, pageSize?)
client.charts.listPageBefore(beforeId, chartListParams?, pageSize?)

client.charts.listAll(chartListParams?);

/*
Some examples:

https://github.com/seatsio/seatsio-js/blob/master/README.md#listing-charts-page-by-page
https://github.com/seatsio/seatsio-js/blob/master/README.md#listing-all-charts
*/
```

</TabItem>
</Tabs>





## An example



```shell
curl https://api-{region}.seatsio.net/charts -u aSecretKey: 
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
            "archived": false,
            "publishedVersionThumbnailUrl": "https://thumbnails.seats.io/workspaceKey/.../published/.../thumbnail",
            "socialDistancingRulesets": {
              "ruleset1": {
                "name": "My first ruleset",
                ...
            }
        },
        {
            "name":"chart2",
            "id":"19",
            "key":"749b9650-24fb-11e7-93ae-92361f002671",
            "status":"PUBLISHED_WITH_DRAFT",
            "tags": ["tag1", "tag2"],
            "archived": false,
            "publishedVersionThumbnailUrl": "https://thumbnails.seats.io/workspaceKey/.../published/.../thumbnail",
            "draftVersionThumbnailUrl": "https://thumbnails.seats.io/workspaceKey/.../draft/.../thumbnail"
        }
    ]
}
```


 
The status of a chart can be either
- "NOT_USED": there are no events linked to the chart
- "PUBLISHED": there's an event linked to the chart, and there's no draft version
- "PUBLISHED_WITH_DRAFT": there's an event linked to the chart, and a draft version exists

publishedVersionThumbnailUrl (and draftVersionThumbnailUrl if applicable) are URLs that return a PNG thumbnail for the chart.

## Query parameters

This is a paginated API endpoint, so the normal pagination query params (limit, start_after_id and end_before_id) are applicable. See [this page](/docs/api/pagination) for more info.

* **filter** *(optional)*   
Allows you to filter on chart name (case insensitive).
Specifying multiple filters will result in a 400 Bad Request.

* **tag** *(optional)*   
Return only charts that have this tag.
Specifying multiple tags will result in a 400 Bad Request.

* **expand** *(optional)*
Charts have events associated with them. You can expand the events for each chart by providing `expand=events`. 



<Tabs 
  groupId="serverside-code-samples"
  defaultValue="php"
  values={[
{ label: 'PHP', value: 'php', },
{ label: 'C#', value: 'csharp', },
{ label: 'Java', value: 'java', },
{ label: 'Python', value: 'python', },
{ label: 'Javascript', value: 'javascript', },
]}>
<TabItem value='php'>

```php
$seatsioClient->charts->listFirstPage((new ChartListParams())->withFilter('london')); 
// newest charts having 'london' in their name

$seatsioClient->charts->listFirstPage((new ChartListParams())->withTag('WestEnd')); 
// newest charts tagged 'WestEnd'

$seatsioClient->charts->listFirstPage((new ChartListParams())->withExpandEvents(true)); 
// newest charts and a list of linked events
```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.Charts.ListFirstPage(filter: "london")); 
// newest charts having 'london' in their name

Client.Charts.ListFirstPage(tag: "foo"); 
// newest charts tagged 'WestEnd'

Client.Charts.ListFirstPage(expandEvents: true); 
// newest charts and a list of linked events
```

</TabItem>
<TabItem value='java'>

```java
client.charts.listFirstPage(new ChartListParams().withFilter("london")); 
// newest charts having 'london' in their name

client.charts.listFirstPage(new ChartListParams().withTag("WestEnd")); 
// newest charts tagged 'WestEnd'

client.charts.listFirstPage(new ChartListParams().withExpandEvents(true)); 
// newest charts and a list of linked events
```

</TabItem>
<TabItem value='python'>

```python
client.charts.list_first_page(filter="london") 
# newest charts having 'london' in their name

client.charts.list_first_page(tag="foo") 
# newest charts tagged 'WestEnd'

client.charts.list_first_page(expandEvents=True) 
# newest charts and a list of linked events
```

</TabItem>
<TabItem value='javascript'>

```javascript
let params = new ChartListParams().withFilter('london');
await client.charts.listFirstPage(params);
// newest charts having 'london' in their name

let params = new ChartListParams().withTag('WestEnd');
await client.charts.listFirstPage(params);
// newest charts tagged 'WestEnd'

let params = new ChartListParams().withExpandEvents(true);
await client.charts.listFirstPage(params);
// newest charts and a list of linked events


```

</TabItem>
</Tabs>





```json
{
    "items":[
        {
            "name":"chart1",
            "id":"20",
            "key":"6451436c-24fb-11e7-93ae-92361f002671",
            "status":"PUBLISHED",
            "archived": false,
            "publishedVersionThumbnailUrl": "https://thumbnails.seats.io/workspaceKey/.../published/.../thumbnail",
            "socialDistancingRulesets": {
              "ruleset1": {
                "name": "My first ruleset",
                ...
            },
            "events": [
                {
                    "id": "50",
                    "bookWholeTables": false,
                    "key": "eventKey2"
                },
                {
                    "id": "49",
                    "bookWholeTables": false,
                    "key": "event34"
                }
            ]
        },
        {
            "name":"chart2",
            "id":"19",
            "key":"749b9650-24fb-11e7-93ae-92361f002671",
            "status":"NOT_USED",
            "archived": false,
            "publishedVersionThumbnailUrl": "https://thumbnails.seats.io/workspaceKey/.../published/.../thumbnail"
        }
    ]
}
```

