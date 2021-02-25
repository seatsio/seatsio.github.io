---
title: "Create a workspace"
slug: "/api-workspaces-create"
hidden: false
createdAt: "2020-02-27T22:00:24.623Z"
updatedAt: "2020-07-03T16:00:35.910Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates a workspace. Only the name is required.



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
POST https://api.seatsio.net/workspaces
```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->workspaces->create("a workspace");
```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.Workspaces.Create("a workspace);

```

</TabItem>
<TabItem value='java'>

```java
client.workspaces.create("a workspace");
```

</TabItem>
<TabItem value='python'>

```python
client.workspaces.create("a workspace")
```

</TabItem>
<TabItem value='ruby'>

```ruby
client.workspaces.create name: "a workspace"
```

</TabItem>
<TabItem value='javascript'>

```javascript
await client.workspaces.create('a workspace');

```

</TabItem>
</Tabs>





```json
{
    "name": "a workspace",
    "isTest": false
}
```

* **name**: the name of the workspace. Can be any string (including spaces or special characters)
* **isTest**: optional. Defaults to false.

```curl
curl -X POST https://api.seatsio.net/workspaces \
-u anAdminKey: -X POST -H 'Content-Type: application/json' -d '{"name": "a workspace"}'
```



```json
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

