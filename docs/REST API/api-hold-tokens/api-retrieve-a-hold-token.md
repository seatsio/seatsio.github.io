---
title: "Retrieve a hold token"
slug: "api-retrieve-a-hold-token"
hidden: false
createdAt: "2018-08-02T13:33:21.572Z"
updatedAt: "2021-01-26T14:54:44.290Z"
---
```text
GET https://api.seatsio.net/hold-tokens/{token}
```
```php
$seatsioClient->holdTokens->retrieve("18725661-36d6-4755-905a-28ce82d0c2d5");
```
```csharp
Client.HoldTokens.Retrieve("18725661-36d6-4755-905a-28ce82d0c2d5");
```
```java
client.holdTokens.retrieve("18725661-36d6-4755-905a-28ce82d0c2d5");
```
```python
client.hold_tokens.retrieve("18725661-36d6-4755-905a-28ce82d0c2d5")
```
```ruby
client.hold_tokens.retrieve("18725661-36d6-4755-905a-28ce82d0c2d5")
```
```javascript
await client.holdTokens.retrieve('holdToken');
```

```curl
curl https://api.seatsio.net/hold-tokens/18725661-36d6-4755-905a-28ce82d0c2d5 \
-u aSecretKey:
```

```json
{
    "holdToken": "18725661-36d6-4755-905a-28ce82d0c2d5",
    "expiresAt": "2017-05-05T10:58:44.715Z",
    "expiresInSeconds": 768
}
```
Error 404 (Not Found) is returned if the hold token does not exist, or does not exist anymore.
