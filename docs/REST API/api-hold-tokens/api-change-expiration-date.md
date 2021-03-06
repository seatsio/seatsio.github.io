---
title: "Change expiration date"
slug: "/api/change-expiration-date"
hidden: false
createdAt: "2018-08-02T10:12:28.121Z"
updatedAt: "2019-05-15T07:18:30.839Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Once a hold token is created, you can change its validity period. 

A good use case would be a reservation wizard, in which a user first has 15 minutes to select his seats, and then another 30 minutes to complete payment. In that case, it makes sense to change the token to expire in 30 minutes from now when the ticket buyer arrives at the payment page. 

If you pass in 0, the token expires immediately.

Note that the total maximum validity of a hold token is 2 hours. That means that a token that was created 10 minutes ago can at most be valid for another 1h50m.




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
POST https://api-{region}.seatsio.net/hold-tokens/{token}
```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->holdTokens->expireInMinutes("wvXbB9MlHt", 30);
```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.HoldTokens.ExpireInMinutes("wvXbB9MlHt", 30);
```

</TabItem>
<TabItem value='java'>

```java
client.holdTokens.expireInMinutes("wvXbB9MlHt", 30);
```

</TabItem>
<TabItem value='python'>

```python
client.hold_tokens.expire_in_minutes("wvXbB9MlHt", 30)
```

</TabItem>
<TabItem value='ruby'>

```ruby
client.hold_tokens.expire_in_minutes("wvXbB9MlHt", 30)

```

</TabItem>
<TabItem value='javascript'>

```javascript
await client.holdTokens.expiresInMinutes('wvXbB9MlHt', 30);
```

</TabItem>
</Tabs>




To change the expiration date of hold token, send a `POST` to https://api-{region}.seatsio.net/hold-tokens/{token}. The request body must be a JSON object containing an expiresInMinutes property:

```javascript
{
  expiresInMinutes: 30
}
```



```shell
curl -X POST https://api-{region}.seatsio.net/hold-tokens/wvXbB9MlHt \
-u aSecretKey: \
-H "Content-Type: application/json" \
-d "{'expiresInMinutes': 30}"
```



```javascript
 {    
     "holdToken": "wvXbB9MlHt",
     "expiresAt": "2017-05-05T10:58:44.715Z",
     "expiresInSeconds": 768
 }
```

