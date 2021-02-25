---
title: "Discard a draft version"
slug: "/api-discard-a-draft-version"
hidden: false
createdAt: "2018-08-01T13:29:08.502Z"
updatedAt: "2018-11-15T09:50:17.218Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

If you're not happy with a draft version, you can choose to discard it. Discarding means deleting the draft version. This cannot be undone!



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
POST https://api.seatsio.net/charts/{chartKey}/version/draft/actions/discard
```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->charts->discardDraftVersion("4250fffc-e41f-c7cb-986a-2c5e728b8c28");
```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.Charts.DiscardDraftVersion("4250fffc-e41f-c7cb-986a-2c5e728b8c28");
```

</TabItem>
<TabItem value='java'>

```java
client.charts.discardDraftVersion("4250fffc-e41f-c7cb-986a-2c5e728b8c28");
```

</TabItem>
<TabItem value='python'>

```python
client.charts.discard_draft_version("4250fffc-e41f-c7cb-986a-2c5e728b8c28")
```

</TabItem>
<TabItem value='ruby'>

```ruby
client.charts.discard_draft_version("4250fffc-e41f-c7cb-986a-2c5e728b8c28")

```

</TabItem>
<TabItem value='javascript'>

```javascript
await client.charts.discardDraftVersion('chartKey');
```

</TabItem>
</Tabs>





```shell
curl -X POST https://api.seatsio.net/charts/749b9650-24fb-11e7-93ae-92361f002671/version/draft/actions/discard \
-u aSecretKey:
```

