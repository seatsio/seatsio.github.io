---
title: "Move a chart to the archive"
slug: "api-move-a-chart-to-the-archive"
hidden: false
createdAt: "2018-08-01T13:29:48.193Z"
updatedAt: "2019-03-28T15:45:03.748Z"
---
```text
POST https://api.seatsio.net/charts/{chartKey}/actions/move-to-archive
```
```php
$seatsioClient->charts->moveToArchive("749b9650-24fb-11e7-93ae-92361f002671");
```
```csharp
Client.Charts.MoveToArchive("749b9650-24fb-11e7-93ae-92361f002671");
```
```java
client.charts.moveToArchive("749b9650-24fb-11e7-93ae-92361f002671");
```
```python
client.charts.move_to_archive("749b9650-24fb-11e7-93ae-92361f002671")
```
```ruby
client.charts.move_to_archive("749b9650-24fb-11e7-93ae-92361f002671")
```
```javascript
 await client.charts.moveToArchive('chartKey');
```
Returns 204 when the chart was successfully moved to the archive. 
Returns 400 (Bad Request) when the chart was already moved to the archive.
```curl
curl -X POST https://api.seatsio.net/charts/749b9650-24fb-11e7-93ae-92361f002671/actions/move-to-archive \
-u aSecretKey:

```
