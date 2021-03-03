---
title: "Retrieve a chart thumbnail"
slug: "/api/retrieve-a-chart-thumbnail"
hidden: false
createdAt: "2018-08-01T13:28:21.844Z"
updatedAt: "2019-08-21T11:51:33.873Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Chart thumbnails are static PNG representations of a seating chart. This means that you cannot interact with the objects on the chart. You typically use them when showing a list of charts to a user, e.g. when integrating seats.io into your backoffice system.

These thumbnails are not a completely accurate representation of the seating chart. To get a high-detail static representation of a single chart, use [print mode](renderer-config-mode).

:::info Tip
To use the thumbnail in an `<img>` tag, use the publicly accessible `publishedVersionThumbnailUrl` (or `draftVersionThumbnailUrl`) that is returned by the [list charts](doc:api-list-all-charts) and [retrieve chart](doc:api-retrieve-a-chart) calls instead of the call documented below.
:::



## Retrieve the published version thumbnail





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
GET https://api.seatsio.net/charts/{chartKey}/version/published/thumbnail
```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->charts->retrievePublishedVersionThumbnail("4250fffc-e41f-c7cb-986a-2c5e728b8c28");
```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.Charts.RetrievePublishedVersionThumbnail("4250fffc-e41f-c7cb-986a-2c5e728b8c28");
```

</TabItem>
<TabItem value='java'>

```java
client.charts.retrievePublishedVersionThumbnail("4250fffc-e41f-c7cb-986a-2c5e728b8c28");
```

</TabItem>
<TabItem value='python'>

```python
client.charts.retrieve_published_version_thumbnail("749b9650-24fb-11e7-93ae-92361f002671")
```

</TabItem>
<TabItem value='ruby'>

```ruby
client.charts.retrieve_published_version_thumbnail("749b9650-24fb-11e7-93ae-92361f002671")

```

</TabItem>
<TabItem value='javascript'>

```javascript
await client.charts.retrievePublishedVersionThumbnail('chartKey');
```

</TabItem>
</Tabs>





:::info Note
This requires authentication by secret key. 
For a publicly available URL, use the publishedVersionThumbnailUrl that is returned by [list charts](doc:api-list-all-charts) and [retrieve chart](doc:api-retrieve-a-chart) .
:::



```shell
curl https://api.seatsio.net/charts/4250fffc-e41f-c7cb-986a-2c5e728b8c28/version/published/thumbnail \
-u aSecretKey:
```

**Example response**

![thumbnail.png](/img/readme/thumbnail.png)

