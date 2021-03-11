---
title: "List status changes for an object"
slug: "/api/list-status-changes-for-an-object"
hidden: false
createdAt: "2018-08-02T10:09:04.228Z"
updatedAt: "2019-06-25T18:24:21.711Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Lists status changes for an object in the event, with the most recent ones first.



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
GET https://api-{region}.seatsio.net/events/{eventKey}/objects/{objectLabel}/status-changes

More info: More info: https://docs.seats.io/docs/api-pagination

```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->events->statusChangesForObject(eventKey, objectLabel)->firstPage(pageSize?)
$seatsioClient->events->statusChangesForObject(eventKey, objectLabel)->pageAfter(afterId, pageSize?)
$seatsioClient->events->statusChangesForObject(eventKey, objectLabel)->pageBefore(beforeId, pageSize?)

$seatsioClient->events->statusChangesForObject(eventKey, objectLabel)->all()

/*
Some examples (for charts, but listing status changes works similarly):

https://github.com/seatsio/seatsio-php/blob/master/README.md#listing-charts-page-by-page
https://github.com/seatsio/seatsio-php/blob/master/README.md#listing-all-charts
*/
```

</TabItem>
<TabItem value='csharp'>

```csharp
client.Events.StatusChangesForObject(eventKey, objectLabel).FirstPage(pageSize?)
client.Events.StatusChangesForObject(eventKey, objectLabel).PageAfter(afterId, filter?, pageSize?)
client.Events.StatusChangesForObject(eventKey, objectLabel).PageBefore(beforeId, filter?, pageSize?)

client.Events.StatusChangesForObject(eventKey, objectLabel).All(filter?);

/*
Some examples (for charts, but listing status changes works similarly):

https://github.com/seatsio/seatsio-dotnet/blob/master/README.md#listing-charts-page-by-page
https://github.com/seatsio/seatsio-dotnet/blob/master/README.md#listing-all-charts
*/
```

</TabItem>
<TabItem value='java'>

```java
client.events.statusChangesForObject(eventKey, objectLabel).firstPage(pageSize?)
client.events.statusChanges(eventKey, objectLabel).pageAfter(afterId, pageSize?)
client.events.statusChanges(eventKey, objectLabel).pageBefore(beforeId, pageSize?)

client.events.statusChanges(eventKey, objectLabel).all();

/*
Some examples (for charts, but listing status changes works similarly):

https://github.com/seatsio/seatsio-java/blob/master/README.md#listing-charts-page-by-page
https://github.com/seatsio/seatsio-java/blob/master/README.md#listing-all-charts
*/
```

</TabItem>
<TabItem value='python'>

```python
client.events.status_changes_for_object(event_key, object_label).first_page(page_size?)
client.events.status_changes_for_object(event_key, object_label).page_after(after_id, page_size?)
client.events.status_changes_for_object(event_key, object_label).page_before(before_id, page_size?)

client.events.status_changes_for_object(event_key, object_label).list()

"""
Some examples (for charts, but listing status changes for an object works similarly):

https://github.com/seatsio/seatsio-python/blob/master/README.md#listing-charts-page-by-page
https://github.com/seatsio/seatsio-python/blob/master/README.md#listing-all-charts
"""
```

</TabItem>
<TabItem value='ruby'>

```ruby
client.events.list_status_changes_for_object(event_key, object_label).first_page(page_size?)
client.events.list_status_changes_for_object(event_key, object_label).page_after(after_id, page_size?)
client.events.list_status_changes_for_object(event_key, object_label).page_before(before_id, page_size?)

client.events.list_status_changes_for_object(event_key, object_label)
  
# Some examples (for charts, but listing status changes for an object works similarly):

# https://github.com/seatsio/seatsio-ruby/blob/master/README.md#listing-charts-page-by-page
# https://github.com/seatsio/seatsio-ruby/blob/master/README.md#listing-all-charts
```

</TabItem>
<TabItem value='javascript'>

```javascript
for await (let statusChange of client.events.statusChangesForObject(eventKey, objectLabel).all()) {
	//Do something with the status changes
}

client.events.statusChangesForObject(eventKey, objectLabel).firstPage(pageSize?)
client.events.statusChangesForObject(eventKey, objectLabel).pageAfter(afterId, pageSize?)
client.events.statusChangesForObject(eventKey, objectLabel).pagBefore(beforeId, pageSize?)

/*
Some examples (for charts, but listing status changes for an object works similarly):

https://github.com/seatsio/seatsio-java/blob/master/README.md#listing-charts-page-by-page
https://github.com/seatsio/seatsio-java/blob/master/README.md#listing-all-charts
*/
```

</TabItem>
</Tabs>





```shell
curl https://api-{region}.seatsio.net/events/event34/objects/A-1/status-changes?limit=100&start_after_id=34 \
-u aSecretKey:

```



```javascript
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
            "status": "free",
            "quantity": 1,
            "objectLabel": "A-1",
            "date": "2017-05-05T09:58:44.715Z",
            "orderId": "anotherOrder",
            "extraData": {
                "name": "Jane Doe"
            },
            "origin": {
              "type": "HELD_BY_USER"
            }
        }
        ...
    ]
}
```

`origin` can be either `API_CALL`, `HELD_BY_USER`, `HOLD_RELEASED_BY_USER` or `HOLD_EXPIRED`. An `ip` property is present when the type equals `API_CALL`.
