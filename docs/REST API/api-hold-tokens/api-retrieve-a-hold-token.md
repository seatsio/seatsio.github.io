---
title: "Retrieve a hold token"
slug: "/api/retrieve-a-hold-token"
hidden: false
createdAt: "2018-08-02T13:33:21.572Z"
updatedAt: "2021-01-26T14:54:44.290Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';




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
GET https://api-{region}.seatsio.net/hold-tokens/{token}
```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->holdTokens->retrieve("wvXbB9MlHt");
```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.HoldTokens.Retrieve("wvXbB9MlHt");
```

</TabItem>
<TabItem value='java'>

```java
client.holdTokens.retrieve("wvXbB9MlHt");
```

</TabItem>
<TabItem value='python'>

```python
client.hold_tokens.retrieve("wvXbB9MlHt")
```

</TabItem>
<TabItem value='ruby'>

```ruby
client.hold_tokens.retrieve("wvXbB9MlHt")
```

</TabItem>
<TabItem value='javascript'>

```javascript
await client.holdTokens.retrieve('wvXbB9MlHt');
```

</TabItem>
</Tabs>





```shell
curl https://api-{region}.seatsio.net/hold-tokens/wvXbB9MlHt \
-u aSecretKey:
```



```javascript
{
    "holdToken": "wvXbB9MlHt",
    "expiresAt": "2017-05-05T10:58:44.715Z",
    "expiresInSeconds": 768
}
```

Error 404 (Not Found) is returned if the hold token does not exist, or does not exist anymore.
