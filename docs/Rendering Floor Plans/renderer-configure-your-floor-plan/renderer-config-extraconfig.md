---
title: "extraConfig"
slug: "/renderer/config-extraconfig"
hidden: false
createdAt: "2018-08-03T12:05:15.196Z"
updatedAt: "2018-08-23T14:26:57.355Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Type**: object  
**Default**: {}  

Some callbacks (e.g. `objectLabel`) do not have access to variables defined in your web page. That's because they're executed inside the seats.io iFrame.

With extraConfig, you can pass in an object to which the callbacks do have access. It's passed to them as the last parameter.

The following callbacks are executed within the iFrame and they receive an extraConfig parameter:

- [`objectColor`](/docs/renderer/config-objectcolor) 
- [`sectionColor`](/docs/renderer/config-sectioncolor) 
- [`objectLabel`](/docs/renderer/config-objectlabel) 
- [`objectIcon`](/docs/renderer/config-objecticon) 
- [`objectCategory`](/docs/renderer/config-objectcategory) 
- [`isObjectVisible`](/docs/renderer/config-isobjectvisible) 
- [`canGASelectionBeIncreased`](/docs/renderer/config-cangaselectionbeincreased)
