---
title: "Extra data"
slug: "api-extra-data"
hidden: false
createdAt: "2018-08-01T12:53:10.410Z"
updatedAt: "2019-08-21T09:28:02.829Z"
---
Sometimes it&#39;s necessary to pass in some custom data when changing the object status. For example, you might need to store the name of the person that booked a seat, to use in the tooltip of a rendered chart.

`/change-object-status`, `/book`, `/release` and `/hold` take an optional extraData object for each object ID in the request. `extraData` must be a JSON object with key value pairs, not a JSON primitive.
```json
// /book, /release, /hold or /change-object-status
{
    'objects': [
        { 'objectId': 'A-5', 'extraData': { 'name': 'John Doe' }},
        { 'objectId': 'A-6', 'extraData': { 'name': 'Jane Doe' }}
    ]
}
```

```php
$objects = [
  ["objectId" => "A-5", "extraData" => ["name" => "John Doe"]],
  ["objectId" => "A-6", "extraData" => ["name" => "Jane Doe"]]
];
$seatsioClient->events->book("event1", $objects);
```
```csharp
var objects = new [] {
    new ObjectProperties("A-5", new Dictionary<string, object> {{"name", "John Doe"}}),
    new ObjectProperties("A-6", new Dictionary<string, object> {{"name", "Jane Doe"}})
};
Client.Events.Book("event1", objects);
```
```java
List<ObjectProperties> objects = Arrays.asList(
    new ObjectProperties("A-5", ImmutableMap.of("name", "John Doe")),
    new ObjectProperties("A-6", ImmutableMap.of("name", "Jane Doe"))
);
client.events.book("event1", objects);
```
```python
objects= [
    ObjectProperties("A-5", extra_data={"name": "John Doe"}),
    ObjectProperties("A-6", extra_data={"name": "Jane Doe"})
]
client.events.book("event1", objects)
```
```ruby
objects = [
  {:objectId => 'A-5', :extraData => {"name": "John Doe"}},
  {:objectId => 'A-6', :extraData => {"name": "Jane Doe"}}
]

client.events.book('event1', objects)
```
```javascript
let objects =[
  {'objectId' : 'A-5', 'extraData' : {'name' : 'John Doe'}}, 
  {'objectId' : 'A-6', 'extraData' : {'name' : 'John Doe'}}];

await client.events.book('eventKey', objects);
```
- API: added `keepExtraData` flag to calls that change the object status. If set to `true`, the existing extra data doesn&#39;t get cleared
```json
// /book, /release, /hold or /change-object-status
{
    'objects': [
        { 'objectId': 'A-5'},
        { 'objectId': 'A-6'}
    ],
    'keepExtraData': true
}
```

[block:callout]
{
  &quot;type&quot;: &quot;warning&quot;,
  &quot;title&quot;: &quot;Updating extra data&quot;,
  &quot;body&quot;: &quot;You can update extra data for objects without changing their status too. Check [https://docs.seats.io/docs/api-update-extra-data-for-an-object](https://docs.seats.io/docs/api-update-extra-data-for-an-object) and [https://docs.seats.io/docs/api-update-extra-data-for-multiple-objects](https://docs.seats.io/docs/api-update-extra-data-for-multiple-objects) for more information. &quot;
}
[/block]
