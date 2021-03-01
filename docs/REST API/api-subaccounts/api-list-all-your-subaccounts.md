---
title: "List all your subaccounts"
slug: "/api-list-all-your-subaccounts"
hidden: false
createdAt: "2018-08-02T10:13:10.605Z"
updatedAt: "2020-02-28T13:14:48.278Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


:::caution 
Subaccounts are deprecated. Please use [workspaces](api-workspaces) instead.
:::

Returns a paginated list of subaccounts you’ve previously created. The subaccounts are returned in reverse chronological order: the most recently created subaccounts will appear first in the list.

Both active and inactive subaccounts are returned.



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
GET https://api.seatsio.net/subaccounts

More info: https://docs.seats.io/docs/api-pagination
```

</TabItem>
<TabItem value='php'>

```php
$client->subaccounts->listFirstPage(pageSize?, subaccountListParams?)
$client->subaccounts->listPageAfter(afterId, pageSize?, subaccountListParams?)
$client->subaccounts->listPageBefore(beforeId, pageSize?, subaccountListParams?)

$client->subaccounts->listAll();

/*
Some examples (for charts, but listing subaccounts works similarly):

https://github.com/seatsio/seatsio-php/blob/master/README.md#listing-charts-page-by-page
https://github.com/seatsio/seatsio-php/blob/master/README.md#listing-all-charts
*/
```

</TabItem>
<TabItem value='csharp'>

```csharp
client.Subaccounts.ListFirstPage(filter?, pageSize?)
client.Subaccounts.ListPageAfter(afterId, filter?, pageSize?)
client.Subaccounts.ListPageBefore(beforeId, filter?, pageSize?)

client.Subaccounts.ListAll(filter?);

/*
Some examples (for charts, but listing subaccounts works similarly):

https://github.com/seatsio/seatsio-dotnet/blob/master/README.md#listing-charts-page-by-page
https://github.com/seatsio/seatsio-dotnet/blob/master/README.md#listing-all-charts
*/
```

</TabItem>
<TabItem value='java'>

```java
client.subaccounts.listFirstPage(pageSize?, subaccountListParams?)
client.subaccounts.listPageAfter(afterId, pageSize?, subaccountListParams?)
client.subaccounts.listPageBefore(beforeId, pageSize?, subaccountListParams?)

client.subaccounts.listAll(subaccountListParams?);

/*
Some examples (for charts, but listing subaccounts works similarly):

https://github.com/seatsio/seatsio-java/blob/master/README.md#listing-charts-page-by-page
https://github.com/seatsio/seatsio-java/blob/master/README.md#listing-all-charts
*/
```

</TabItem>
<TabItem value='python'>

```python
client.subaccounts.list_first_page(page_size?, filter?)
client.subaccounts.list_page_after(after_id, page_size?, filter?)
client.subaccounts.list_page_before(before_id, page_size?, filter?)

client.subaccounts.list(filter?)

"""
Some examples (for charts, but listing subaccounts works similarly):

https://github.com/seatsio/seatsio-python/blob/master/README.md#listing-charts-page-by-page
https://github.com/seatsio/seatsio-python/blob/master/README.md#listing-all-charts
"""
```

</TabItem>
<TabItem value='ruby'>

```ruby
client.subaccounts.list(filter?).first_page(page_size?)
client.subaccounts.list(filter?).page_after(after_id, page_size?)
client.subaccounts.list(filter?).page_before(before_id, page_size?)

client.subaccounts.list(filter?)

# Some examples (for charts, but listing subaccounts works similarly):

# https://github.com/seatsio/seatsio-ruby/blob/master/README.md#listing-charts-page-by-page
# https://github.com/seatsio/seatsio-ruby/blob/master/README.md#listing-all-charts
```

</TabItem>
<TabItem value='javascript'>

```javascript
client.subaccounts.listFirstPage(subaccountListParams?, pageSize?)
client.subaccounts.listPageAfter(afterId, subaccountListParams?, pageSize?)
client.subaccounts.listPageBefore(beforeId, subaccountListParams?, pageSize?)

client.subaccounts.listAll(subaccountListParams?);

/*
Some examples (for charts, but listing subaccounts works similarly):

https://github.com/seatsio/seatsio-js/blob/master/README.md#listing-charts-page-by-page
https://github.com/seatsio/seatsio-js/blob/master/README.md#listing-all-charts
*/
```

</TabItem>
</Tabs>





```shell
curl https://api.seatsio.net/subaccounts?limit=100&start_after_id=34 \
-u aSecretKey:
```

The response will be a paginated JSON object that contains the subaccounts of the authenticated user: 

```json
{
    "next_page_starts_after": 122,
    "items": [
        {
            "id": 169,
            "secretKey": "7c647eed-0880-4118-9459-82757579703e",
            "publicKey": "18725661-36d6-4755-905a-28ce82d0c2d5",
            "active": true,
            "name": "a subaccount",
            "email": "joe@test.com"
        },
        {
            "id": 170,
            "secretKey": "2d59a6ce-cd43-406a-b49d-fcb0a88416ad",
            "publicKey": "81c32887-c014-43ac-90cb-f8db613d5643",
            "active": false,
            "name": "another subaccount",
            "email": "jane@test.com"
        }
        ...
    ]
}

```

