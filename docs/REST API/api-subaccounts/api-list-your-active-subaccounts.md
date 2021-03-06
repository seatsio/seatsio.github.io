---
title: "List your active subaccounts"
slug: "/api/list-your-active-subaccounts"
hidden: false
createdAt: "2018-08-02T10:15:26.988Z"
updatedAt: "2020-02-28T13:14:57.976Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


:::caution 
Subaccounts are deprecated. Please use [workspaces](/docs/api/workspaces) instead.
:::

Returns a paginated list of active subaccounts.



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
GET https://api-{region}.seatsio.net/subaccounts/active

More info: https://docs.seats.io/docs/api-pagination

```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->subaccounts->active->firstPage(pageSize?)
$seatsioClient->subaccounts->active->pageAfter(afterId, pageSize?)
$seatsioClient->subaccounts->active->pageBefore(beforeId, pageSize?)

$seatsioClient->subaccounts->active->all();

/*
Some examples (for charts, but listing active subaccounts works similarly):

https://github.com/seatsio/seatsio-php/blob/master/README.md#listing-charts-page-by-page
https://github.com/seatsio/seatsio-php/blob/master/README.md#listing-all-charts
*/
```

</TabItem>
<TabItem value='csharp'>

```csharp
client.Subaccounts.Active.FirstPage(pageSize?)
client.Subaccounts.Active.PageAfter(afterId, pageSize?)
client.Subaccounts.Active.PageBefore(beforeId, pageSize?)

client.Subaccounts.Active.All();

/*
Some examples (for charts, but listing active subaccounts works similarly):

https://github.com/seatsio/seatsio-dotnet/blob/master/README.md#listing-charts-page-by-page
https://github.com/seatsio/seatsio-dotnet/blob/master/README.md#listing-all-charts
*/
```

</TabItem>
<TabItem value='java'>

```java
client.subaccounts.active.firstPage(pageSize?)
client.subaccounts.active.pageAfter(afterId, pageSize?)
client.subaccounts.active.pageBefore(beforeId, pageSize?)

client.subaccounts.active.all();

/*
Some examples (for charts, but listing active subaccounts works similarly):

https://github.com/seatsio/seatsio-java/blob/master/README.md#listing-charts-page-by-page
https://github.com/seatsio/seatsio-java/blob/master/README.md#listing-all-charts
*/
```

</TabItem>
<TabItem value='python'>

```python
client.subaccounts.active.first_page(page_size?, filter?)
client.subaccounts.active.page_after(after_id, page_size?, filter?)
client.subaccounts.active.page_before(before_id, page_size?, filter?)

client.subaccounts.active.list();

"""
Some examples (for charts, but listing active subaccounts works similarly):

https://github.com/seatsio/seatsio-python/blob/master/README.md#listing-charts-page-by-page
https://github.com/seatsio/seatsio-python/blob/master/README.md#listing-all-charts
"""
```

</TabItem>
<TabItem value='ruby'>

```ruby
client.subaccounts.active.first_page(page_size?)
client.subaccounts.active.page_after(after_id, page_size?)
client.subaccounts.active.page_before(before_id, page_size?)

client.subaccounts.active

# Some examples (for charts, but listing active subaccounts works similarly):

# https://github.com/seatsio/seatsio-ruby/blob/master/README.md#listing-charts-page-by-page
# https://github.com/seatsio/seatsio-ruby/blob/master/README.md#listing-all-charts
```

</TabItem>
<TabItem value='javascript'>

```javascript
for await(let subaccount of client.subaccounts.active.all(parameters?)) {
	//Do something with the subaccount
}

 client.subaccounts.active.firstPage(parameters?, pageSize?)
 client.subaccounts.active.pageAfter(afterId, parameters?, pageSize?)
 client.subaccounts.active.pageBefore(beforeId, parameters?, pageSize?)
                                     
/*
Some examples (for charts, but listing active subaccounts works similarly):

https://github.com/seatsio/seatsio-java/blob/master/README.md#listing-charts-page-by-page
https://github.com/seatsio/seatsio-java/blob/master/README.md#listing-all-charts
*/
```

</TabItem>
</Tabs>





```shell
curl https://api-{region}.seatsio.net/subaccounts/active?limit=100&start_after_id=34 \
-u aSecretKey:
```



```javascript
{
    "next_page_starts_after": 122,
    "items": [
        {
            "id": 169,
            "secretKey": "7c647eed-0880-4118-9459-82757579703e",
            "publicKey": "18725661-36d6-4755-905a-28ce82d0c2d5",
            "active": true
        },
        {
            "id": 170,
            "secretKey": "2d59a6ce-cd43-406a-b49d-fcb0a88416ad",
            "publicKey": "81c32887-c014-43ac-90cb-f8db613d5643",
            "active": true
        }
        ...
    ]
}
```

