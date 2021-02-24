---
title: "Configuring the Chart Manager"
slug: "/chart-manager-configuring"
hidden: false
createdAt: "2020-06-19T07:59:54.831Z"
updatedAt: "2020-08-31T08:52:11.505Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# divId
**Type**: string

The id of the div on your page in which you want seats.io to render the chart manager. This is a required config option.

```javascript
divId: 'chart-manager'
```

# secretKey
**Type**: string
The secret key of a workspace, or the company admin key.
:::danger Important
Never expose this secret key on a public web page! Only use the chart manager behind a login wall.
:::
```javascript
secretKey: 'my secret key'
```


# chart
**Type**: string

The key of the chart you wish to manage

```javascript
chart: 'e1d13871-d228-1861-9dd3-bbe32ec05e36'
```

# mode
**Type**: string

Only 'manageRulesets' is currently supported, to manage social distancing rulesets.

# language
**Type**: string

Currently supported languages are:
- `'nl'` – Dutch
- `'en'` – English
- `'de'` – German
- `'pt'` – Portuguese
- `'es'` – Spanish
- `'fr'` – French

# messages
**Type**: object

The messages parameter allows you to change all kinds of texts that are displayed on the chart: section labels, tooltip texts, static text objects ... you name it.
Just pass in an object with the original texts as keys, and the translations as values.
For a more detailed explanation, check [this page](http://support.seats.io/integrating-seats-io/multi-language-i18n-support).

# tooltipInfo
**Type**: function(object)
**Return**: string

A function whose result will be displayed as extra information on the cursor tooltip.
See [https://docs.seats.io/docs/renderer-config-tooltipinfo](renderer-config-tooltipinfo) for more info.

# showFullScreenButton
**Type**: boolean

Whether to show the full screen button or not. Defaults to true.

# fitTo
**Type**: string

Whether to adapt to the container div width, or to its width and height.

See [https://docs.seats.io/docs/renderer-config-fitto](renderer-config-fitto)
