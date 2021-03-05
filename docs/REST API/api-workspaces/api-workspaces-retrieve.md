---
title: "Retrieve a workspace"
slug: "/api/workspaces-retrieve"
hidden: false
createdAt: "2020-02-27T22:00:24.127Z"
updatedAt: "2020-07-03T16:00:51.844Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Retrieve a workspace



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
GET https://api.seatsio.net/workspace/{key}
```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->workspaces->retrieve($key);
```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.Workspaces.Retrieve(Key);
```

</TabItem>
<TabItem value='java'>

```java
client.workspaces.retrieve(key);
```

</TabItem>
<TabItem value='python'>

```python
client.workspaces.retrieve(key)
```

</TabItem>
<TabItem value='ruby'>

```ruby
client.workspaces.retrieve key: key

```

</TabItem>
<TabItem value='javascript'>

```javascript
await client.workspaces.retrieve(key);
```

</TabItem>
</Tabs>





```shell
curl https://api.seatsio.net/workspaces/18725661-36d6-4755-905a-28ce82d0c2d5 \
-u anAdminKey:
```



```javascript
{
    "id": 169,
    "name": "a workspace",
    "key": "18725661-36d6-4755-905a-28ce82d0c2d5",
    "secretKey": "7c647eed-0880-4118-9459-82757579703e",
    "isDefault": true,
    "isTest": false,
    "isActive": true
}

```

Error 404 (Not Found) is returned when the workspace does not exist (or the passed in secret key doesn't give access to the workspace).
