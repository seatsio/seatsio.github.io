---
title: "Regenerate the secret key of a subaccount"
slug: "api-regenerate-a-subaccounts-secret-key"
hidden: false
createdAt: "2018-08-02T10:18:29.569Z"
updatedAt: "2020-02-28T13:16:22.231Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::caution 
Subaccounts are deprecated. Please use [workspaces](api-workspaces) instead.
:::
### Regenerate the secret key

The secret key of a subaccount should be kept secret at all times. If it does get compromised, you can generate a new one.


<Tabs 
  defaultValue="text"
  values={[
{ label: '', value: 'text', },
{ label: 'PHP', value: 'php', },
{ label: 'C#', value: 'csharp', },
{ label: 'Java', value: 'java', },
{ label: 'Python', value: 'python', },
{ label: 'Ruby', value: 'ruby', },
{ label: 'Javascript', value: 'javascript', },
]}>
<TabItem value='text'>

```text
POST https://api.seatsio.net/subaccounts/{id}/secret-key/actions/regenerate
```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->subaccounts->regenerateSecretKey(169);
```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.Subaccounts.RegenerateSecretKey(169);
```

</TabItem>
<TabItem value='java'>

```java
client.subaccounts.regenerateSecretKey(169);
```

</TabItem>
<TabItem value='python'>

```python
client.subaccounts.regenerate_secret_key(169)
```

</TabItem>
<TabItem value='ruby'>

```ruby
client.subaccounts.regenerate_secret_key id: 169
```

</TabItem>
<TabItem value='javascript'>

```javascript
await client.subaccounts.regenerateSecretKey('subaccountId');
```

</TabItem>
</Tabs>



```curl
curl -X POST https://api.seatsio.net/subaccounts/169/secret-key/actions/regenerate \
-u aSecretKey:
```

```json
{
    "secretKey": "7c647eed-0880-4118-9459-82757579703e"
}
```
