---
title: "Publish a draft version"
slug: "/api-publish-a-draft-version"
hidden: false
createdAt: "2018-08-01T13:28:46.462Z"
updatedAt: "2019-03-28T10:13:48.008Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Publishing a draft version means replacing the currently published version by the draft version. The draft version is deleted afterwards. This cannot be undone!



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
POST https://api.seatsio.net/charts/{chartKey}/version/draft/actions/publish
```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->charts->publishDraftVersion("4250fffc-e41f-c7cb-986a-2c5e728b8c28");
```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.Charts.PublishDraftVersion("4250fffc-e41f-c7cb-986a-2c5e728b8c28");
```

</TabItem>
<TabItem value='java'>

```java
client.charts.publishDraftVersion("4250fffc-e41f-c7cb-986a-2c5e728b8c28");
```

</TabItem>
<TabItem value='python'>

```python
client.charts.publish_draft_version("4250fffc-e41f-c7cb-986a-2c5e728b8c28")
```

</TabItem>
<TabItem value='ruby'>

```ruby
client.charts.publish_draft_version("4250fffc-e41f-c7cb-986a-2c5e728b8c28")
```

</TabItem>
<TabItem value='javascript'>

```javascript
 await client.charts.publishDraftVersion('chartKey');
```

</TabItem>
</Tabs>





```curl
curl -X POST https://api.seatsio.net/charts/749b9650-24fb-11e7-93ae-92361f002671/version/draft/actions/publish \
-u aSecretKey:
```



## Response

If everything goes well and the draft chart is published, you'll get a **204** No Content response. 

If, however, the chart contains validation errors, the chart is not published and a **400** Bad Request response is issued. The response body contains details of why the validation failed and looks like this: 



```json
{
    "status": 400,
    "messages": [
        "Failed to publish chart [key: <Chart key>]: invalid draft drawing",
        "Invalid draft drawing"
    ],
    "errors": [
        {
            "code": "DRAWING_VALIDATION_FAILED",
            "message": "Failed to publish chart [key: <Chart key>]: invalid draft drawing",
            "data": {
                "failedValidations": [
                    "VALIDATE_OBJECTS_WITHOUT_CATEGORIES",
                    "VALIDATE_FOCAL_POINT",
                    "VALIDATE_OBJECT_TYPES_PER_CATEGORY"
                ]
            }
        }
    ],
    "warnings": [
        {
            "code": "DRAWING_VALIDATION_FAILED",
            "message": "Invalid draft drawing",
            "data": {
                "failedValidations": [
                    "VALIDATE_DUPLICATE_LABELS",
                    "VALIDATE_UNLABELED_OBJECTS"
                ]
            }
        }
    ],
    "requestId": "<request id>"
}
```

Currently the following validators are supported: 

* VALIDATE_UNLABELED_OBJECTS: can a chart contain unlabeled seats? 
* VALIDATE_DUPLICATE_LABELS: can a chart contain two bookable objects that have the same label (e.g. two seats with label A-1)
* VALIDATE_OBJECTS_WITHOUT_CATEGORIES: Is it allowed for a seat to have no category?
* VALIDATE_FOCAL_POINT: Is a focal point required for a seating chart to be valid? Charts without focal point cannot use Best Available seat selection.
* VALIDATE_OBJECT_TYPES_PER_CATEGORY: Is it allowed to, for example, apply a category A to both seats and booths?


:::info Tip
You can set the validation level for each of them via your settings page.
:::

