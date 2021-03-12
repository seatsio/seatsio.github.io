---
title: "Create a subaccount"
slug: "/api/create-a-subaccount"
hidden: false
createdAt: "2018-08-02T10:16:26.967Z"
updatedAt: "2020-02-28T13:15:31.839Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


:::caution 
Subaccounts are deprecated. Please use [workspaces](/docs/api/workspaces) instead.
:::

Creates a subaccount with an e-mail address and a name. Both the e-mail and the name are optional.
 
If you do pass in an e-mail, the subaccount receives a message with a link to set the initital password. From that point on, he can log in to the [dashboard](https://app.seats.io) to manage charts and events.



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
POST https://api-{region}.seatsio.net/subaccounts
```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->subaccounts->createWithEmail("test@test.com", "a subaccount");
$seatsioClient->subaccounts->create("a subaccount");
```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.Subaccounts.CreateWithEmail("test@test.com", "a subaccount);
Client.Subaccounts.Create("a subaccount);

```

</TabItem>
<TabItem value='java'>

```java
client.subaccounts.createWithEmail("test@test.com", "a subaccount");
client.subaccounts.create("a subaccount");
```

</TabItem>
<TabItem value='python'>

```python
client.subaccounts.create_with_email("test@test.com", "a subaccount")
client.subaccounts.create("a subaccount")
```

</TabItem>
<TabItem value='ruby'>

```ruby
client.subaccounts.create_with_email email: "test@test.com", name: "a subaccount"
client.subaccounts.create name: "a subaccount"
```

</TabItem>
<TabItem value='javascript'>

```javascript
await client.subaccounts.create('a subaccount');
await client.subaccounts.createWithEmail('test@test.com', 'a subaccount');
```

</TabItem>
</Tabs>





```javascript
{
    "email": "test@test.com",
    "name": "a subaccount"
}
```

* **email**: the e-mail address of the subaccount. Optional. Must be filled in if you want the subaccount to manage charts and events via the [dashboard](https://app.seats.io). 
* **name**: the name of the subaccount. Optional. Can be any string (including spaces or special characters)

```shell
curl -X POST https://api-{region}.seatsio.net/subaccounts \
-u aSecretKey: -X POST -H 'Content-Type: application/json' -d '{"email": "test@test.com", "name": "a subaccount"}'
```



```javascript
{
    "id": 169,
    "secretKey": "7c647eed-0880-4118-9459-82757579703e",
    "publicKey": "18725661-36d6-4755-905a-28ce82d0c2d5",
    "active": true,
    "email": "test@test.com",
    "name": "a subaccount"
}

```

