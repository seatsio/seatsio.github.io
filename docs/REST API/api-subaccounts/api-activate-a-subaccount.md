---
title: "Activate a subaccount"
slug: "/api-activate-a-subaccount"
hidden: false
createdAt: "2018-08-02T10:18:12.868Z"
updatedAt: "2020-02-28T13:16:13.633Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


:::caution 
Subaccounts are deprecated. Please use [workspaces](api-workspaces) instead.
:::

### Activate a subaccount



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
POST https://api.seatsio.net/subaccounts/{id}/actions/activate
```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->subaccounts->activate(169);
```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.Subaccounts.Activate(169);
```

</TabItem>
<TabItem value='java'>

```java
client.subaccounts.activate(169);
```

</TabItem>
<TabItem value='python'>

```python
client.subaccounts.activate(169)
```

</TabItem>
<TabItem value='ruby'>

```ruby
client.subaccounts.activate id: 169
```

</TabItem>
<TabItem value='javascript'>

```javascript
await client.subaccounts.activate('subaccountId');
```

</TabItem>
</Tabs>





```shell
curl -X POST https://api.seatsio.net/subaccounts/169/actions/activate \
-u aSecretKey:
```

**Response**

204 - No Content
