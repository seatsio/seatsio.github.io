---
title: "Deactivate a subaccount"
slug: "/api-deactivate-a-subaccount"
hidden: false
createdAt: "2018-08-02T10:17:59.933Z"
updatedAt: "2020-02-28T13:16:03.882Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


:::caution 
Subaccounts are deprecated. Please use [workspaces](api-workspaces) instead.
:::

### Deactivate a subaccount

Subaccounts are either active or inactive. Inactive subaccounts do not have the permission to create charts, create events, book seats, in short: to do anything meaningful.



<Tabs 
  defaultValue="text"
  values={[
{ label: 'Text', value: 'text', },
{ label: 'PHP', value: 'php', },
{ label: 'C#', value: 'csharp', },
{ label: 'Java', value: 'java', },
{ label: 'Python', value: 'python', },
{ label: 'Ruby', value: 'ruby', },
{ label: 'Javascript', value: 'javascript', },
]}>
<TabItem value='text'>

```text
POST https://api.seatsio.net/subaccounts/{id}/actions/deactivate
```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->subaccounts->deactivate(169);
```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.Subaccounts.Deactivate(169);
```

</TabItem>
<TabItem value='java'>

```java
client.subaccounts.deactivate(169);
```

</TabItem>
<TabItem value='python'>

```python
client.subaccounts.deactivate(169)
```

</TabItem>
<TabItem value='ruby'>

```ruby
client.subaccounts.deactivate id: 169
```

</TabItem>
<TabItem value='javascript'>

```javascript
await client.subaccounts.deactivate(169);
```

</TabItem>
</Tabs>





```curl
curl -X POST https://api.seatsio.net/subaccounts/169/actions/deactivate \
-u aSecretKey:

```

**Response**

204 - No Content
