---
title: "alwaysShowSectionContents"
slug: "/renderer-config-alwaysshowsectioncontents"
hidden: false
createdAt: "2018-08-03T11:58:45.737Z"
updatedAt: "2019-11-05T19:19:36.927Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Type**: boolean
**Default**: false

Only useful for charts with sections.

The normal behaviour for charts with sections, is to show section contents (rows of seats, tables, etc) only after zooming in, or when the available screen size is large enough. 

However, if `alwaysShowSectionContents` is set to `true`, section contents will always be rendered, at any zoom level or screen size. This means the sections themselves won't be shown in their category color, but rather in a very light gray, with their contents rendered in color. Like so: 


![Screenshot 2019-06-28 14.35.38.png](/img/readme/Screenshot-2019-06-28-14.35.38.png)
This is notably useful on seating charts that have multiple categories within a same section.