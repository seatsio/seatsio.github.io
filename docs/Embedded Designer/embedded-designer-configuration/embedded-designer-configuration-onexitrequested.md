---
title: "onExitRequested"
slug: "/embedded-designer-configuration-onexitrequested"
hidden: false
createdAt: "2018-08-21T13:03:39.514Z"
updatedAt: "2018-10-12T09:07:57.076Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Type**: function()

Callback function that's invoked when the user does an action that will lead to exiting the floor plan designer. E.g. when the user clicks on the "Exit" button. 

You could for example navigate back to an overview of all charts, using `window.location = ....`
:::info Hide the Exit button
Not passing in this parameter will result in the Exit button to be hidden from the user within the designer app.

If that is the case, make sure you provide other UI elements on your implementation to allow the user navigate to other charts or exit the view completely, instead of having them rely on the browser history buttons.
:::
