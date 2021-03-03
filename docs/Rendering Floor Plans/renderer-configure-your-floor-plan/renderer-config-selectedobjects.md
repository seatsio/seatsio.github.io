---
title: "selectedObjects"
slug: "/renderer/config-selectedobjects"
hidden: false
createdAt: "2018-08-03T09:21:56.568Z"
updatedAt: "2019-04-26T14:42:37.873Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Type**: array<string | object>  
**Default**:[]  

Render the chart with the specified objects selected (if they are still free). 

You can pass object labels inside the array, like this: 

```javascript
selectedObjects: ['A-1', 'A-2']
```

It's also possible to pass in ticket types:

```javascript
selectedObjects: [{label: 'A-1', ticketType: 'adult'}, {label: 'A-2', ticketType: 'child'}]
```

For general admission areas, you need to specify not only the object label, but also the amount, like so: 
 
```javascript
selectedObjects: [{label: 'MyGA', amount: 4}]
``` 

Note that you can mix and match the two, so this will select both the seats and the GA as expected:
 
 ```javascript
 selectedObjects: ['A-1', 'A-2', {label: 'MyGA', amount: 4}]
 ```

<iframe width="100%" height="580" src="//jsfiddle.net/seatsio/o4u3gzb2/embedded/js,html,result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

