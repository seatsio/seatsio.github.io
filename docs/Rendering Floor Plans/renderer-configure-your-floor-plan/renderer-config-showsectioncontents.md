---
title: "showSectionContents"
slug: "/renderer/config-showsectioncontents"
hidden: false
---

**Type**: string   
**Possible values**: `auto`, `always`, `onlyAfterZoom`   
**Default**: `auto`   

Only useful for charts with sections.

This setting allows you specify when section contents (rows of seats, tables, etc) should be shown.

When set to `auto` (the default), section contents are shown only after zooming in, or when the available screen size is large enough.  


When set to `always`, section contents will always be rendered, at any zoom level or screen size. This means the sections themselves won't be shown in their category color, but rather in a very light gray, with their contents rendered in color. Like so:

![Screenshot 2019-06-28 14.35.38.png](/img/readme/Screenshot-2019-06-28-14.35.38.png)

This is notably useful on seating charts that have multiple categories within a same section.


When set to `onlyAfterZoom`, the section contents won't be shown initially, even if the screen size is large enough. This will require an extra click from the user (they'll have to select the section first), but can provide for a more uniform experience across screen sizes. 
