---
title: "List events"
slug: "/api-list-events"
hidden: false
createdAt: "2018-08-02T09:56:39.537Z"
updatedAt: "2020-10-29T11:37:52.293Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

List non-deleted events, sorted by newest event first.



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
GET https://api.seatsio.net/events

More info: https://docs.seats.io/docs/api-pagination

```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->events->listFirstPage(pageSize?)
$seatsioClient->events->listPageAfter(afterId, pageSize?)
$seatsioClient->events->listPageBefore(beforeId, pageSize?)

$seatsioClient->events->listAll();

/*
Some examples (for charts, but listing events works similarly):

https://github.com/seatsio/seatsio-php/blob/master/README.md#listing-charts-page-by-page
https://github.com/seatsio/seatsio-php/blob/master/README.md#listing-all-charts
*/
```

</TabItem>
<TabItem value='csharp'>

```csharp
client.Events.ListFirstPage(pageSize?)
client.Events.ListPageAfter(afterId, pageSize?)
client.Events.ListPageBefore(beforeId, pageSize?)

client.Events.ListAll();

/*
Some examples (for charts, but listing events works similarly):

https://github.com/seatsio/seatsio-dotnet/blob/master/README.md#listing-charts-page-by-page
https://github.com/seatsio/seatsio-dotnet/blob/master/README.md#listing-all-charts
*/
```

</TabItem>
<TabItem value='java'>

```java
client.events.listFirstPage(pageSize?)
client.events.listPageAfter(afterId, pageSize?)
client.events.listPageBefore(beforeId, pageSize?)

client.events.listAll();

/*
Some examples (for events, but listing events works similarly):

https://github.com/seatsio/seatsio-java/blob/master/README.md#listing-charts-page-by-page
https://github.com/seatsio/seatsio-java/blob/master/README.md#listing-all-charts
*/
```

</TabItem>
<TabItem value='python'>

```python
client.events.list_first_page(page_size?)
client.events.list_page_after(after_id, page_size?)
client.events.list_page_before(before_id, page_size?)

client.events.list()

"""
Some examples (for charts, but listing events works similarly):

https://github.com/seatsio/seatsio-python/blob/master/README.md#listing-charts-page-by-page
https://github.com/seatsio/seatsio-python/blob/master/README.md#listing-all-charts
"""
```

</TabItem>
<TabItem value='ruby'>

```ruby
client.events.list.first_page(page_size?)
client.events.list.page_after(after_id, page_size?)
client.events.list.page_before(before_id, page_size?)

client.events.list

# Some examples (for charts, but listing events works similarly):

# https://github.com/seatsio/seatsio-ruby/blob/master/README.md#listing-charts-page-by-page
# https://github.com/seatsio/seatsio-ruby/blob/master/README.md#listing-all-charts
```

</TabItem>
<TabItem value='javascript'>

```javascript
client.events.listFirstPage(pageSize?)
client.events.listPageAfter(afterId, pageSize?)
client.events.listPageBefore(beforeId, pageSize?)

client.events.listAll();

/*
Some examples (for charts, but listing events works similarly):

https://github.com/seatsio/seatsio-js/blob/master/README.md#listing-charts-page-by-page
https://github.com/seatsio/seatsio-js/blob/master/README.md#listing-all-charts
*/
```

</TabItem>
</Tabs>





```shell
curl https://api.seatsio.net/events \
-u aSecretKey:
```



```json
{
    "next_page_starts_after": 122,
    "items": [
        {
            "id": 169,
            "key": "anEvent",
            "tableBookingConfig": {
              "mode": "CUSTOM",
              "tables": {
      	        "T1": "BY_TABLE",
      	        "T2": "BY_SEAT",
      	        "T3": "BY_TABLE"
              }
            },
            "chartKey": "4250fffc-e41f-c7cb-986a-2c5e728b8c28",
            "socialDistancingRulesetKey": "ruleset1",
            "createdOn": "2017-05-05T10:58:44.715Z"
        },
        {
            "id": 168,
            "key": "anotherEvent",
            "chartKey": "4150dddc-e41f-c7cb-986a-2c5e728b8c20",
            "createdOn": "2017-03-05T10:58:44.715Z",
            "updatedOn": "2017-04-05T10:58:44.615Z"
        }
        ...
    ]
}
```

