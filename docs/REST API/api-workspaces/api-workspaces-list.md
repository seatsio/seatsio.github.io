---
title: "List workspaces"
slug: "/api/workspaces-list"
hidden: false
createdAt: "2020-02-27T22:00:24.814Z"
updatedAt: "2020-07-03T16:01:19.321Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Returns a paginated list of workspaces you’ve previously created. The workspaces are returned in reverse chronological order: the most recently created workspace will appear first in the list.

Pass in a filter to only find the workspaces that have a matching name.

By default the call returns active and inactive workspaces. Add `/active` or `/inactive` to change that behaviour.

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
GET https://api-{region}.seatsio.net/workspaces
GET https://api-{region}.seatsio.net/workspaces/active
GET https://api-{region}.seatsio.net/workspaces/inactive

More info: https://docs.seats.io/docs/api-pagination
```

</TabItem>
<TabItem value='php'>

```php
// active and inactive workspaces
$client->workspaces->listFirstPage(pageSize?, filter?)
$client->workspaces->listPageAfter(afterId, pageSize?, filter?)
$client->workspaces->listPageBefore(beforeId, pageSize?, filter?)
$client->workspaces->listAll(filter?);

// active workspaces
$client->workspaces->active->firstPage(pageSize?, filter?)
$client->workspaces->active->pageAfter(afterId, pageSize?, filter?)
$client->workspaces->active->pageBefore(beforeId, pageSize?, filter?)
$client->workspaces->active->all(filter?)

// inactive workspaces
$client->workspaces->inactive->firstPage(pageSize?, filter?)
$client->workspaces->inactive->pageAfter(afterId, pageSize?, filter?)
$client->workspaces->inactive->pageBefore(beforeId, pageSize?, filter?)
$client->workspaces->inactive->all(filter?)

/*
Some examples (for charts, but listing workspaces works similarly):

https://github.com/seatsio/seatsio-php/blob/master/README.md#listing-charts-page-by-page
https://github.com/seatsio/seatsio-php/blob/master/README.md#listing-all-charts
*/
```

</TabItem>
<TabItem value='csharp'>

```csharp
// active and inactive workspaces
client.Workspaces.ListFirstPage(pageSize?, filter?)
client.Workspaces.ListPageAfter(afterId, pageSize?, filter?)
client.Workspaces.ListPageBefore(beforeId, pageSize?, filter?)
client.Workspaces.ListAll(filter?)

// active workspaces
client.Workspaces.Active.FirstPage(pageSize?, filter?)
client.Workspaces.Active.PageAfter(afterId, pageSize?, filter?)
client.Workspaces.Active.PageBefore(beforeId, pageSize?, filter?)
client.Workspaces.Active.All(filter?)

// inactive workspaces
client.Workspaces.Inactive.FirstPage(pageSize?, filter?)
client.Workspaces.Inactive.PageAfter(afterId, pageSize?, filter?)
client.Workspaces.Inactive.PageBefore(beforeId, pageSize?, filter?)
client.Workspaces.Inactive.All(filter?)

/*
Some examples (for charts, but listing workspaces works similarly):

https://github.com/seatsio/seatsio-dotnet/blob/master/README.md#listing-charts-page-by-page
https://github.com/seatsio/seatsio-dotnet/blob/master/README.md#listing-all-charts
*/
```

</TabItem>
<TabItem value='java'>

```java
// active and inactive workspaces
client.workspaces.listFirstPage(pageSize?, filter?)
client.workspaces.listPageAfter(afterId, pageSize?, filter?)
client.workspaces.listPageBefore(beforeId, pageSize?, filter?)
client.workspaces.listAll(filter?)

// active workspaces
client.workspaces.active.firstPage(pageSize?, filter?)
client.workspaces.active.pageAfter(afterId, pageSize?, filter?)
client.workspaces.active.pageBefore(beforeId, pageSize?, filter?)
client.workspaces.active.all(filter?)

// inactive workspaces
client.workspaces.inactive.firstPage(pageSize?, filter?)
client.workspaces.inactive.pageAfter(afterId, pageSize?, filter?)
client.workspaces.inactive.pageBefore(beforeId, pageSize?, filter?)
client.workspaces.inactive.all(filter?)

/*
Some examples (for charts, but listing workspaces works similarly):

https://github.com/seatsio/seatsio-java/blob/master/README.md#listing-charts-page-by-page
https://github.com/seatsio/seatsio-java/blob/master/README.md#listing-all-charts
*/
```

</TabItem>
<TabItem value='python'>

```python
# active and inactive workspaces
client.workspaces.list_first_page(page_size?, filter?)
client.workspaces.list_page_after(after_id, page_size?, filter?)
client.workspaces.list_page_before(before_id, page_size?, filter?)
client.workspaces.list(filter?)

# active workspaces
client.workspaces.active.first_page(page_size?, filter?)
client.workspaces.active.page_after(after_id, page_size?, filter?)
client.workspaces.active.page_before(before_id, page_size?, filter?)
client.workspaces.active.list(filter?)

# inactive workspaces
client.workspaces.inactive.first_page(page_size?, filter?)
client.workspaces.inactive.page_after(after_id, page_size?, filter?)
client.workspaces.inactive.page_before(before_id, page_size?, filter?)
client.workspaces.inactive.list(filter?)

"""
Some examples (for charts, but listing workspaces works similarly):

https://github.com/seatsio/seatsio-python/blob/master/README.md#listing-charts-page-by-page
https://github.com/seatsio/seatsio-python/blob/master/README.md#listing-all-charts
"""
```

</TabItem>
<TabItem value='ruby'>

```ruby
# active and inactive workspaces
client.workspaces.list(filter?).first_page(page_size?)
client.workspaces.list(filter?).page_after(after_id, page_size?)
client.workspaces.list(filter?).page_before(before_id, page_size?)
client.workspaces.list(filter?)

# active workspaces
client.workspaces.active(filter?).first_page(page_size?)
client.workspaces.active(filter?).page_after(after_id, page_size?)
client.workspaces.active(filter?).page_before(before_id, page_size?)
client.workspaces.active(filter?)

# inactive workspaces
client.workspaces.inactive(filter?).first_page(page_size?)
client.workspaces.inactive(filter?).page_after(after_id, page_size?)
client.workspaces.inactive(filter?).page_before(before_id, page_size?)
client.workspaces.inactive(filter?)

# Some examples (for charts, but listing workspaces works similarly):

# https://github.com/seatsio/seatsio-ruby/blob/master/README.md#listing-charts-page-by-page
# https://github.com/seatsio/seatsio-ruby/blob/master/README.md#listing-all-charts
```

</TabItem>
<TabItem value='javascript'>

```javascript
// active and inactive workspaces
client.workspaces.listFirstPage(filter?, pageSize?)
client.workspaces.listPageAfter(afterId, filter?, pageSize?)
client.workspaces.listPageBefore(beforeId, filter?, pageSize?)
client.workspaces.listAll(filter?)

// active workspaces
client.workspaces.active.firstPage(filter?, pageSize?)
client.workspaces.active.pageAfter(afterId, filter?, pageSize?)
client.workspaces.active.pageBefore(beforeId, filter?, pageSize?)
client.workspaces.active.all(filter?)

// inactive workspaces
client.workspaces.inactive.firstPage(filter?, pageSize?)
client.workspaces.inactive.pageAfter(afterId, filter?, pageSize?)
client.workspaces.inactive.pageBefore(beforeId, filter?, pageSize?)
client.workspaces.inactive.all(filter?)

/*
Some examples (for charts, but listing workspaces works similarly):

https://github.com/seatsio/seatsio-js/blob/master/README.md#listing-charts-page-by-page
https://github.com/seatsio/seatsio-js/blob/master/README.md#listing-all-charts
*/
```

</TabItem>
</Tabs>





```shell
curl https://api-{region}.seatsio.net/workspaces?limit=100&start_after_id=34 \
-u anAdminKey:
```

The response will be a paginated JSON object that contains all workspaces for the authenticated company:

```javascript
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

