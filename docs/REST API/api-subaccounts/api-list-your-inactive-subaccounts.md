---
title: "List your inactive subaccounts"
slug: "api-list-your-inactive-subaccounts"
hidden: false
createdAt: "2018-08-02T10:15:47.782Z"
updatedAt: "2020-02-28T13:15:07.713Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::caution 
Subaccounts are deprecated. Please use [workspaces](api-workspaces) instead.
:::
Returns a paginated list of inactive subaccounts.


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
GET https://api.seatsio.net/subaccounts/inactive

More info: https://docs.seats.io/docs/api-pagination

```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->subaccounts->inactive->firstPage(pageSize?)
$seatsioClient->subaccounts->inactive->pageAfter(afterId, pageSize?)
$seatsioClient->subaccounts->inactive->pageBefore(beforeId, pageSize?)

$seatsioClient->subaccounts->inactive->all();

/*
Some examples (for charts, but listing inactive subaccounts works similarly):

https://github.com/seatsio/seatsio-php/blob/master/README.md#listing-charts-page-by-page
https://github.com/seatsio/seatsio-php/blob/master/README.md#listing-all-charts
*/
```

</TabItem>
<TabItem value='csharp'>

```csharp
client.Subaccounts.Inactive.FirstPage(pageSize?)
client.Subaccounts.Inactive.PageAfter(afterId, pageSize?)
client.Subaccounts.Inactive.PageBefore(beforeId, pageSize?)

client.Subaccounts.Inactive.All();

/*
Some examples (for charts, but listing inactive subaccounts works similarly):

https://github.com/seatsio/seatsio-dotnet/blob/master/README.md#listing-charts-page-by-page
https://github.com/seatsio/seatsio-dotnet/blob/master/README.md#listing-all-charts
*/
```

</TabItem>
<TabItem value='java'>

```java
client.subaccounts.inactive.firstPage(pageSize?)
client.subaccounts.inactive.pageAfter(afterId, pageSize?)
client.subaccounts.inactive.pageBefore(beforeId, pageSize?)

client.subaccounts.inactive.all();

/*
Some examples (for charts, but listing inactive subaccounts works similarly):

https://github.com/seatsio/seatsio-java/blob/master/README.md#listing-charts-page-by-page
https://github.com/seatsio/seatsio-java/blob/master/README.md#listing-all-charts
*/
```

</TabItem>
<TabItem value='python'>

```python
client.subaccounts.inactive.first_page(page_size?, filter?)
client.subaccounts.inactive.page_after(after_id, page_size?, filter?)
client.subaccounts.inactive.page_before(before_id, page_size?, filter?)

client.subaccounts.inactive.list()

"""
Some examples (for charts, but listing inactive subaccounts works similarly):

https://github.com/seatsio/seatsio-python/blob/master/README.md#listing-charts-page-by-page
https://github.com/seatsio/seatsio-python/blob/master/README.md#listing-all-charts
"""
```

</TabItem>
<TabItem value='ruby'>

```ruby
client.subaccounts.inactive.first_page(page_size?)
client.subaccounts.inactive.page_after(after_id, page_size?)
client.subaccounts.inactive.page_before(before_id, page_size?)

client.subaccounts.inactive

# Some examples (for charts, but listing inactive subaccounts works similarly):

# https://github.com/seatsio/seatsio-ruby/blob/master/README.md#listing-charts-page-by-page
# https://github.com/seatsio/seatsio-ruby/blob/master/README.md#listing-all-charts
```

</TabItem>
<TabItem value='javascript'>

```javascript
for await(let subaccount of client.subaccounts.inactive.all(parameters?)) {
	//Do something with the subaccount
}

 client.subaccounts.inactive.firstPage(parameters?, pageSize?)
 client.subaccounts.inactive.pageAfter(afterId, parameters?, pageSize?)
 client.subaccounts.inactive.pageBefore(beforeId, parameters?, pageSize?)
                                       
/*
Some examples (for charts, but listing inactive subaccounts works similarly):

https://github.com/seatsio/seatsio-java/blob/master/README.md#listing-charts-page-by-page
https://github.com/seatsio/seatsio-java/blob/master/README.md#listing-all-charts
*/
```

</TabItem>
</Tabs>



```curl
curl https://api.seatsio.net/subaccounts/inactive?limit=100&start_after_id=34 \
-u aSecretKey:
```

```json
{
    "next_page_starts_after": 122,
    "items": [
        {
            "id": 169,
            "secretKey": "7c647eed-0880-4118-9459-82757579703e",
            "publicKey": "18725661-36d6-4755-905a-28ce82d0c2d5",
            "active": false
        },
        {
            "id": 170,
            "secretKey": "2d59a6ce-cd43-406a-b49d-fcb0a88416ad",
            "publicKey": "81c32887-c014-43ac-90cb-f8db613d5643",
            "active": false
        }
        ...
    ]
}
```
