---
title: "Update a subaccount"
slug: "/api-update-a-subaccount"
hidden: false
createdAt: "2018-08-02T10:16:44.053Z"
updatedAt: "2020-02-28T13:15:42.049Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::caution 
Subaccounts are deprecated. Please use [workspaces](api-workspaces) instead.
:::
### Update a subaccount


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
POST https://api.seatsio.net/subaccounts/{id}
```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->subaccounts->update(169, "a new subaccount name", "joe@test.com");
```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.Subaccounts.Update(169, "a new subaccount name", "joe@test.com");
```

</TabItem>
<TabItem value='java'>

```java
client.subaccounts.update(169, "a new subaccount name", "joe@test.com");
```

</TabItem>
<TabItem value='python'>

```python
client.subaccounts.update(169, "a new subaccount name", "joe@test.com")
```

</TabItem>
<TabItem value='ruby'>

```ruby
client.subaccounts.update id: 169, name: "a new subaccount name", email: "joe@test.com"
```

</TabItem>
<TabItem value='javascript'>

```javascript
 await client.subaccounts.update(169, 'a new subaccount name', 'john@test.com');
```

</TabItem>
</Tabs>



```json
{
    "name": "a new subaccount name",
    "email": "joe@test.com"
}
```
* **name**: the new name of the subaccount. Optional. Can be any string (including spaces or special characters)
* **email**: the new name of the subaccount. Optional. If you pass in a new e-mail address (which is different from the existing one), seats.io sends a mail to that address. That mail contains a link to a page which allows the user to choose a password to log in to the [dashboard](https://app.seats.io).
```curl
curl -X POST https://api.seatsio.net/subaccounts/34 \
-u aSecretKey: -X POST -H 'Content-Type: application/json' -d '{"name": "a new subaccount name", "email": "joe@test.com"}'
```
**Response**

204 - No Content
