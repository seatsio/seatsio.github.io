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
$seatsioClient->holdTokens->retrieve("18725661-36d6-4755-905a-28ce82d0c2d5");
```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.HoldTokens.Retrieve("18725661-36d6-4755-905a-28ce82d0c2d5");
```

</TabItem>
<TabItem value='java'>

```java
client.holdTokens.retrieve("18725661-36d6-4755-905a-28ce82d0c2d5");
```

</TabItem>
<TabItem value='python'>

```python
client.hold_tokens.retrieve("18725661-36d6-4755-905a-28ce82d0c2d5")
```

</TabItem>
<TabItem value='ruby'>

```ruby
client.hold_tokens.retrieve("18725661-36d6-4755-905a-28ce82d0c2d5")
```

</TabItem>
<TabItem value='javascript'>

```javascript
await client.holdTokens.retrieve('holdToken');
```

</TabItem>
</Tabs>





```shell
curl https://api-{region}.seatsio.net/hold-tokens/18725661-36d6-4755-905a-28ce82d0c2d5 \
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
