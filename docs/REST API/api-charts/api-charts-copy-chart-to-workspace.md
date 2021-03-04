---
title: "Copy a chart to a workspace"
slug: "/api/charts-copy-chart-to-workspace"
hidden: false
createdAt: "2018-08-01T13:30:54.934Z"
updatedAt: "2020-10-28T09:21:28.178Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Use this call to copy a published chart version from its workspace to another workspace. Events and tags linked to the original chart are not copied.

The response contains the chartKey of the new chart. You can store this in your database, and use it to refer to the newly created chart in the future.



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
POST https://api-{region}.seatsio.net/charts/{chartKey}/version/published/actions/copy-to-workspace/{workspaceKey}
```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->charts->copyToWorkspace("749b9650-24fb-11e7-93ae-92361f002671", "18725661-36d6-4755-905a-28ce82d0c2d5");
```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.Charts.CopyToWorkspace("749b9650-24fb-11e7-93ae-92361f002671", "18725661-36d6-4755-905a-28ce82d0c2d5");
```

</TabItem>
<TabItem value='java'>

```java
client.charts.copyToWorkspace("749b9650-24fb-11e7-93ae-92361f002671", "18725661-36d6-4755-905a-28ce82d0c2d5");
```

</TabItem>
<TabItem value='python'>

```python
client.charts.copy_to_workspace("749b9650-24fb-11e7-93ae-92361f002671", "18725661-36d6-4755-905a-28ce82d0c2d5")
```

</TabItem>
<TabItem value='ruby'>

```ruby
client.charts.copy_to_workspace("749b9650-24fb-11e7-93ae-92361f002671", "18725661-36d6-4755-905a-28ce82d0c2d5")
```

</TabItem>
<TabItem value='javascript'>

```javascript
await client.charts.copyToWorkspace('chartKey', '18725661-36d6-4755-905a-28ce82d0c2d5');
```

</TabItem>
</Tabs>





```shell
curl -X POST https://api-{region}.seatsio.net/charts/749b9650-24fb-11e7-93ae-92361f002671/version/published/actions/copy-to-workspace/18725661-36d6-4755-905a-28ce82d0c2d5 \
-u anAdminKey:
```



```json
{
    "name":"chart2",
    "id":"19",
    "key":"749b9650-24fb-11e7-93ae-92361f002671",
    "status":"NOT_USED",
    "tags": [],
    "archived": false,
    "publishedVersionThumbnailUrl": "https://cdn.seats.io/system/public/.../published/.../thumbnail"
}
```



:::danger A note about authentication
Because copying a chart between workspaces is an operation that requires privileges on both workspaces, you'll need to use your [company admin](/docs/api/authentication#using-the-company-admin-key) key as a secret key. You can find the admin key at your [company settings page](https://app.seats.io/company-settings).
:::

