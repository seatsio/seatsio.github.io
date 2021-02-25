---
title: "Create a hold token"
slug: "/api-create-a-hold-token"
hidden: false
createdAt: "2018-08-02T10:12:11.240Z"
updatedAt: "2020-09-24T15:00:18.121Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';




<Tabs 
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
POST https://api.seatsio.net/hold-tokens
```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->holdTokens->create(); // uses default expiration date for your account
$seatsioClient->holdTokens->create(5); // sets expiration date to 5 minutes in the future
```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.HoldTokens.Create(); // uses default expiration date for your account
Client.HoldTokens.Create(5); // sets expiration date to 5 minutes in the future
```

</TabItem>
<TabItem value='java'>

```java
client.holdTokens.create(); // uses default expiration date for your account
client.holdTokens.create(5); // sets expiration date to 5 minutes in the future
```

</TabItem>
<TabItem value='python'>

```python
client.hold_tokens.create() // uses default expiration date for your account
client.hold_tokens.create(5) // sets expiration date to 5 minutes in the future
```

</TabItem>
<TabItem value='ruby'>

```ruby
client.hold_tokens.create // uses default expiration date for your account
client.hold_tokens.create :expire_in_minutes 5 // sets expiration date to 5 minutes in the future
```

</TabItem>
<TabItem value='javascript'>

```javascript
await client.holdTokens.create(); // uses default expiration date for your account
await client.holdTokens.create(5); // sets expiration date to 5 minutes in the future
```

</TabItem>
</Tabs>



You can pass in an optional `expiresInMinutes` value if the expiration date is different from the default value set for you account:

```json
{
  "expiresInMinutes": 30
}
```



```shell
curl -X POST https://api.seatsio.net/hold-tokens \
-u aSecretKey: \
-H "Content-Type: application/json" \
-d "{'expiresInMinutes': 30}"
```



```json
{    
    "holdToken": "71f0fc20-3c3b-4f9f-a38b-ed350ba564e7",
    "expiresAt": "2017-05-05T10:58:44.715Z",
    "expiresInSeconds": 768
}
```

