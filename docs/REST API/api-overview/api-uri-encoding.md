---
title: "URI encoding"
slug: "api-uri-encoding"
hidden: false
createdAt: "2018-07-31T08:40:44.718Z"
updatedAt: "2018-07-31T08:42:08.582Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Don't forget to URI-encode string parameters in URLs.
 
For example, the reporting call `/reports/events/{eventKey}/byCategoryLabel/{label}` takes a `label` parameter. When this parameter contains reserved ASCII characters such as '/' and ':', or non ASCII characters such as 'ã', you must apply [percent-encoding](https://en.wikipedia.org/wiki/Percent-encoding). 

E.g. `Balcão Nobre` becomes `Balc%C3%A3o%20Nobre`.

Note that our [API Client libraries](doc:api-client-libraries) do this under the hood, so you don't have to encode anything when using them.
