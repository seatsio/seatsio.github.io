---
title: "List status changes"
slug: "/api/list-status-changes"
hidden: false
createdAt: "2018-08-02T10:08:44.047Z"
updatedAt: "2019-06-25T18:23:26.722Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Each time the status of an object changes (e.g. by holding, booking or releasing it), a status change is recorded in seats.io. Use the following API call to list the status changes for an event.

Status changes are returned paginated, with the most recent ones first. Response body contains the hold token if a hold token was passed in when doing the status change (e.g. to hold an object, or to release an object that was previously held).



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
GET https://api-{region}.seatsio.net/events/{eventKey}/status-changes

GET https://api-{region}.seatsio.net/events/{eventKey}/status-changes?filter=A-1

GET https://api-{region}.seatsio.net/events/{eventKey}/status-changes?sort=objectLabel:desc

More info: https://docs.seats.io/docs/api-pagination

```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->events->statusChanges(eventKey, filter?, sortField?, sortDirection?)->firstPage(pageSize?)
$seatsioClient->events->statusChanges(eventKey, filter?, sortField?, sortDirection?)->pageAfter(afterId, pageSize?)
$seatsioClient->events->statusChanges(eventKey, filter?, sortField?, sortDirection?)->pageBefore(beforeId, pageSize?)

$seatsioClient->events->statusChanges(eventKey, filter?, sortField?, sortDirection?)->all()

/*
Some examples (for charts, but listing status changes works similarly):

https://github.com/seatsio/seatsio-php/blob/master/README.md#listing-charts-page-by-page
https://github.com/seatsio/seatsio-php/blob/master/README.md#listing-all-charts
*/
```

</TabItem>
<TabItem value='csharp'>

```csharp
client.Events.StatusChanges(eventKey, filter?, sortField?, sortDirection?).FirstPage(pageSize?)
client.Events.StatusChanges(eventKey, filter?, sortField?, sortDirection?).PageAfter(afterId, filter?, pageSize?)
client.Events.StatusChanges(eventKey, filter?, sortField?, sortDirection?).PageBefore(beforeId, filter?, pageSize?)

client.Events.StatusChanges(eventKey, filter?, sortField?, sortDirection?).All(filter?);

/*
Some examples (for charts, but listing status changes works similarly):

https://github.com/seatsio/seatsio-dotnet/blob/master/README.md#listing-charts-page-by-page
https://github.com/seatsio/seatsio-dotnet/blob/master/README.md#listing-all-charts
*/
```

</TabItem>
<TabItem value='java'>

```java
client.events.statusChanges(eventKey, filter?, sortField?, sortDirection?).firstPage(pageSize?)
client.events.statusChanges(eventKey, filter?, sortField?, sortDirection?).pageAfter(afterId, pageSize?)
client.events.statusChanges(eventKey, filter?, sortField?, sortDirection?).pageBefore(beforeId, pageSize?)

client.events.statusChanges(eventKey, filter?, sortField?, sortDirection?).all();

/*
Some examples (for charts, but listing status changes works similarly):

https://github.com/seatsio/seatsio-java/blob/master/README.md#listing-charts-page-by-page
https://github.com/seatsio/seatsio-java/blob/master/README.md#listing-all-charts
*/
```

</TabItem>
<TabItem value='python'>

```python
client.events.status_changes(event_key, filter? sort_field?, sort_direction?).first_page(page_size?)
client.events.status_changes(event_key, filter? sort_field?, sort_direction?).page_after(after_id, page_size?)
client.events.status_changes(event_key, filter? sort_field?, sort_direction?).page_before(before_id, page_size?)

client.events.status_changes(event_key, filter? sort_field?, sort_direction?).list()

"""
Some examples (for charts, but listing status changes works similarly):

https://github.com/seatsio/seatsio-python/blob/master/README.md#listing-charts-page-by-page
https://github.com/seatsio/seatsio-python/blob/master/README.md#listing-all-charts
"""
```

</TabItem>
<TabItem value='ruby'>

```ruby
client.events.list_status_changes(event_key, filter?, sort_field?, sort_direction?).first_page(page_size?)
client.events.list_status_changes(event_key, filter?, sort_field?, sort_direction?).page_after(after_id, page_size?)
client.events.list_status_changes(event_key, filter?, sort_field?, sort_direction?).page_before(before_id, page_size?)

client.events.list_status_changes(event_key, filter?, sort_field?, sort_direction?)
  
# Some examples (for charts, but listing status changes works similarly):

# https://github.com/seatsio/seatsio-ruby/blob/master/README.md#listing-charts-page-by-page
# https://github.com/seatsio/seatsio-ruby/blob/master/README.md#listing-all-charts
```

</TabItem>
<TabItem value='javascript'>

```javascript
import { StatusChangesParams } from 'seatsio'

for await (let statusChange of client.events.statusChanges(event.key).all(params?)) {
     //Do something with the status change
}

let params = new StatusChangesParams().sortByObjectLabel().sortDescending()
await client.events.statusChanges(event.key).firstPage(params, pageSize?)

let params = new StatusChangesParams().sortByStatus().sortAscending()
await client.events.statusChanges(event.key).pageAfter(afterId, params, pageSize?)

let params = new StatusChangesParams().withFilter('filter').sortByDate().sortDescending()
await client.events.statusChanges(event.key).pageBefore(beforeId, params, pageSize?)
                                                                   /*
Some examples (for charts, but listing status changes works similarly):

https://github.com/seatsio/seatsio-java/blob/master/README.md#listing-charts-page-by-page
https://github.com/seatsio/seatsio-java/blob/master/README.md#listing-all-charts
*/
```

</TabItem>
</Tabs>



- `filter`: use this parameter to filter on object labels. E.g. if you pass in 'A-1', all status changes for objects that have 'A-1' in their name will be returned (e.g. 'A-11', 'A-1', 'Section A-A-1').
- `sort`: by default, status changes are sorted by date, with the newest status changes coming first. You can change this to sort by object label (`sort=objectLabel`) or by status (`sort=status`). Sorting by date with the oldest status changes first is also possible (`sort=date:asc`)

**Example request**

```shell
curl https://api-{region}.seatsio.net/events/anEvent/status-changes?limit=100&start_after_id=34 \
-u aSecretKey:
```



```json
{
    "next_page_starts_after": 122,
    "items": [
        {
            "id": 169,
            "eventId": 12,
            "status": "booked",
            "quantity": 1,
            "objectLabel": "A-1",
            "date": "2017-05-05T10:58:44.715Z",
            "orderId": "anOrder",
            "extraData": {
                "name": "John Doe"
            },
            "origin": {
              "type": "API_CALL",
              "ip": "10.4.32.67"
            }
        },
        {
            "id": 168,
            "eventId": 12,
            "status": "reservedByToken",
            "quantity": 1,
            "objectLabel": "B-1",
            "date": "2017-05-05T09:58:44.715Z",
            "orderId": "anotherOrder",
            "extraData": {
                "name": "Jane Doe"
            }, 
            "holdToken": "bbaa2792-7707-416c-a2e2-dbec7ad7ee1f",
            "origin": {
              "type": "HELD_BY_USER"
            }
        }
        ...
    ]
}
```

`origin` can be either `API_CALL`, `HELD_BY_USER`, `HOLD_RELEASED_BY_USER` or `HOLD_EXPIRED`. An `ip` property is present when the type equals `API_CALL`.
