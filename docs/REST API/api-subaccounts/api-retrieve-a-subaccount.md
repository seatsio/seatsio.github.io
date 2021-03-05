---
title: "Retrieve a subaccount"
slug: "/api/retrieve-a-subaccount"
hidden: false
createdAt: "2018-08-02T10:16:08.374Z"
updatedAt: "2020-02-28T13:15:18.522Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


:::caution 
Subaccounts are deprecated. Please use [workspaces](/docs/api/workspaces) instead.
:::

### Retrieve a subaccount



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
GET https://api.seatsio.net/subaccounts/{id}
```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->subaccounts->retrieve(169);
```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.Subaccounts.Retrieve(169);
```

</TabItem>
<TabItem value='java'>

```java
client.subaccounts.retrieve(169);
```

</TabItem>
<TabItem value='python'>

```python
client.subaccounts.retrieve(169)
```

</TabItem>
<TabItem value='ruby'>

```ruby
client.subaccounts.retrieve id: 169

```

</TabItem>
<TabItem value='javascript'>

```javascript
await client.subaccounts.retrieve('subaccountId');
```

</TabItem>
</Tabs>





```shell
curl https://api.seatsio.net/subaccounts/169 \
-u aSecretKey:
```



```javascript
{
    "id": 169,
    "secretKey": "7c647eed-0880-4118-9459-82757579703e",
    "publicKey": "18725661-36d6-4755-905a-28ce82d0c2d5",
    "name": "a subaccount",
    "email": "joe@test.com",
    "active": true
}
```

Error 404 (Not Found) is returned when the subaccount does not exist (or when it belongs to another parent user)
