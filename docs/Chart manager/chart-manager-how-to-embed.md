---
title: "How to embed the Chart Manager"
slug: "/chart-manager-how-to-embed"
hidden: false
createdAt: "2020-06-19T07:55:47.553Z"
updatedAt: "2020-09-02T09:28:07.979Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

To show the chart manager to your admins or box office managers, you need to do the following:

1. add an empty div to your page and give it an id (‘chart-manager’ is a good choice)
2. load https://cdn.seatsio.net/chart.js
3. create a new `seatsio.ChartManager` object, configure it and call its `render()` method

So in short: just copy & paste this code snippet and adapt it to your needs.

```html
<div id="chart-manager"></div>

<script src="https://cdn.seatsio.net/chart.js"></script>
<script>
    new seatsio.ChartManager({
        divId: 'chart-manager',
        secretKey: 'your workspace secret key', // never expose the secret key on a public web page!
        chart: 'your chart key',
        mode: 'manageRulesets'
    }).render();
</script>
```



:::info A special note to React or Angular users
The easiest way to show the chart manager is to use the official wrapper package: 

* **React**: https://github.com/seatsio/seatsio-react
* **Angular**: https://github.com/seatsio/seatsio-angular
* **TypeScript**: https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/seatsio
:::

