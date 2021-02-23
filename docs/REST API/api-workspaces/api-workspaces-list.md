---
title: "List all workspaces"
slug: "api-workspaces-list"
hidden: false
createdAt: "2020-02-27T22:00:24.814Z"
updatedAt: "2020-07-03T16:01:19.321Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Returns a paginated list of workspaces you’ve previously created. The workspaces are returned in reverse chronological order: the most recently created workspace will appear first in the list.

Pass in a filter to only find the workspaces that have a matching name.


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
GET https://api.seatsio.net/workspaces

More info: https://docs.seats.io/docs/api-pagination
```

</TabItem>
<TabItem value='php'>

```php
$client->workspaces->listFirstPage(pageSize?, filter?)
$client->workspaces->listPageAfter(afterId, pageSize?, filter?)
$client->workspaces->listPageBefore(beforeId, pageSize?, filter?)

$client->workspaces->listAll(filter?);

/*
Some examples (for charts, but listing workspaces works similarly):

https://github.com/seatsio/seatsio-php/blob/master/README.md#listing-charts-page-by-page
https://github.com/seatsio/seatsio-php/blob/master/README.md#listing-all-charts
*/
```

</TabItem>
<TabItem value='csharp'>

```csharp
client.Workspaces.ListFirstPage(pageSize?, filter?)
client.Workspaces.ListPageAfter(afterId, pageSize?, filter?)
client.Workspaces.ListPageBefore(beforeId, pageSize?, filter?)

client.Workspaces.ListAll(filter?);

/*
Some examples (for charts, but listing workspaces works similarly):

https://github.com/seatsio/seatsio-dotnet/blob/master/README.md#listing-charts-page-by-page
https://github.com/seatsio/seatsio-dotnet/blob/master/README.md#listing-all-charts
*/
```

</TabItem>
<TabItem value='java'>

```java
client.workspaces.listFirstPage(pageSize?, filter?)
client.workspaces.listPageAfter(afterId, pageSize?, filter?)
client.workspaces.listPageBefore(beforeId, pageSize?, filter?)

client.workspaces.listAll(filter?);

/*
Some examples (for charts, but listing workspaces works similarly):

https://github.com/seatsio/seatsio-java/blob/master/README.md#listing-charts-page-by-page
https://github.com/seatsio/seatsio-java/blob/master/README.md#listing-all-charts
*/
```

</TabItem>
<TabItem value='python'>

```python
client.workspaces.list_first_page(page_size?, filter?)
client.workspaces.list_page_after(after_id, page_size?, filter?)
client.workspaces.list_page_before(before_id, page_size?, filter?)

client.workspaces.list(filter?)

"""
Some examples (for charts, but listing workspaces works similarly):

https://github.com/seatsio/seatsio-python/blob/master/README.md#listing-charts-page-by-page
https://github.com/seatsio/seatsio-python/blob/master/README.md#listing-all-charts
"""
```

</TabItem>
<TabItem value='ruby'>

```ruby
client.workspaces.list(filter?).first_page(page_size?)
client.workspaces.list(filter?).page_after(after_id, page_size?)
client.workspaces.list(filter?).page_before(before_id, page_size?)

client.workspaces.list(filter?)

# Some examples (for charts, but listing workspaces works similarly):

# https://github.com/seatsio/seatsio-ruby/blob/master/README.md#listing-charts-page-by-page
# https://github.com/seatsio/seatsio-ruby/blob/master/README.md#listing-all-charts
```

</TabItem>
<TabItem value='javascript'>

```javascript
client.workspaces.listFirstPage(filter?, pageSize?)
client.workspaces.listPageAfter(afterId, filter?, pageSize?)
client.workspaces.listPageBefore(beforeId, filter?, pageSize?)

client.workspaces.listAll(filter?);

/*
Some examples (for charts, but listing workspaces works similarly):

https://github.com/seatsio/seatsio-js/blob/master/README.md#listing-charts-page-by-page
https://github.com/seatsio/seatsio-js/blob/master/README.md#listing-all-charts
*/
```

</TabItem>
</Tabs>



```curl
curl https://api.seatsio.net/workspaces?limit=100&start_after_id=34 \
-u anAdminKey:
```
The response will be a paginated JSON object that contains all workspaces for the authenticated company:
```json
{
    "next_page_starts_after": 122,
    "items": [
        {
            "id": 169,
            "name": "a workspace",
            "key": "18725661-36d6-4755-905a-28ce82d0c2d5",
            "secretKey": "7c647eed-0880-4118-9459-82757579703e",
            "isDefault": true,
            "isTest": false,
            "isActive": true
        }
        {
            "id": 170,
            "name": "another workspace",
            "key": "34725661-36d6-4755-905a-28ce82d0c2d5",
            "secretKey": "56647eed-0880-4118-9459-82757579703e",
            "isDefault": false,
            "isTest": true,
            "isActive": false
        }
        ...
    ]
}

```
