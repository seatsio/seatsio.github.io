---
title: "onSessionInitialized"
slug: "/renderer-events-onsessioninitialized"
hidden: false
createdAt: "2021-01-06T10:45:54.944Z"
updatedAt: "2021-01-06T10:56:37.737Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Type**: function(holdToken)  

Fired when a session is initialized. This is either when:  
* a new session is started, e.g. when [chart.startNewSession()](chartstartnewsession)  is called, or when the user clicks on the "start over" button on the "session expired" dialog
* or when the chart is (re-)rendered with an already active session, e.g. after a browser refresh. 

The `holdToken` parameter that gets passed into this callback is an object with the following structure: 

```json
{    
    "holdToken": "71f0fc20-3c3b-4f9f-a38b-ed350ba564e7",
    "expiresAt": "2020-01-06T10:58:44.715Z",
    "expiresInSeconds": 599
}
```

You can listen to this event to update a timer in your host page.
