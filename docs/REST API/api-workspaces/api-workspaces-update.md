---
title: "Update a workspace"
slug: "/api-workspaces-update"
hidden: false
createdAt: "2020-02-27T22:00:24.807Z"
updatedAt: "2020-02-28T12:51:41.416Z"
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
POST https://api.seatsio.net/workspaces/{key}
```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->workspaces->update($key, "a workspace");
```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.Workspaces.Update(key, "a workspace);

```

</TabItem>
<TabItem value='java'>

```java
client.workspaces.update(key, "a workspace");
```

</TabItem>
<TabItem value='python'>

```python
client.workspaces.update(key, "a workspace")
```

</TabItem>
<TabItem value='ruby'>

```ruby
client.workspaces.update key: key, name: "a workspace"
```

</TabItem>
<TabItem value='javascript'>

```javascript
await client.workspaces.update(key, 'a workspace');

```

</TabItem>
</Tabs>



```json
{
    "name": "a workspace",
}
```
* **name**: the name of the workspace. Can be any string (including spaces or special characters)
```curl
curl -X POST https://api.seatsio.net/workspaces/18725661-36d6-4755-905a-28ce82d0c2d5 \
-u anAdminKey: -X POST -H 'Content-Type: application/json' -d '{"name": "a workspace"}'
```
**Response**

204 - No Content
