---
title: "Move a chart out of the archive"
slug: "api-move-a-chart-out-of-the-archive"
hidden: false
createdAt: "2018-08-01T13:30:04.894Z"
updatedAt: "2019-03-28T15:44:42.320Z"
---
```text
POST https://api.seatsio.net/charts/{chartKey}/actions/move-out-of-archive
```
```php
$seatsioClient->charts->moveOutOfArchive("749b9650-24fb-11e7-93ae-92361f002671");
```
```csharp
Client.Charts.MoveOutOfArchive("749b9650-24fb-11e7-93ae-92361f002671");
```
```java
client.charts.moveOutOfArchive("749b9650-24fb-11e7-93ae-92361f002671");
```
```python
client.charts.move_out_of_archive("749b9650-24fb-11e7-93ae-92361f002671")
```
```ruby
client.charts.move_out_of_archive("749b9650-24fb-11e7-93ae-92361f002671")
```
```javascript
await client.charts.moveOutOfArchive('chartKey');
```
Returns 204 when the chart was successfully moved out of the archive, back to the active chart list. 
Returns 400 (Bad Request) when the chart was not in the archive.
```text
curl -X POST https://api.seatsio.net/charts/749b9650-24fb-11e7-93ae-92361f002671/actions/move-out-of-archive \
-u aSecretKey:
```
