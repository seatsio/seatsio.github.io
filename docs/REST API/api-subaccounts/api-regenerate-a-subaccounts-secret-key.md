---
title: "Regenerate the secret key of a subaccount"
slug: "/api/regenerate-a-subaccounts-secret-key"
hidden: false
createdAt: "2018-08-02T10:18:29.569Z"
updatedAt: "2021-02-23T13:13:23.966Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


:::caution 
Subaccounts are deprecated. Please use [Workspaces](doc:api-workspaces)  instead.
:::

### Regenerate the secret key

The secret key of a subaccount should be kept secret at all times. If it does get compromised, you can generate a new one. 



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





```shell
curl -X POST https://api.seatsio.net/subaccounts/169/secret-key/actions/regenerate \
-u aSecretKey:
```



```json
{
    "secretKey": "7c647eed-0880-4118-9459-82757579703e"
}
```

