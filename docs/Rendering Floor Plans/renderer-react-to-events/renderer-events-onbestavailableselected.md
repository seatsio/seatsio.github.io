---
title: "onBestAvailableSelected"
slug: "renderer-events-onbestavailableselected"
hidden: false
createdAt: "2018-08-03T13:34:14.188Z"
updatedAt: "2018-08-03T13:49:30.940Z"
---
**Type**: function(array_of_objects, nextToEachOther)

Fired when best available objects are successfully selected. This callback receives two parameters:

- `array_of_objects`: the best available objects
- `nextToEachOther`: boolean that indicates whether the selected seats are next to each other. If they aren&#39;t, you could for example show a warning to the ticket buyer. `nextToEachOther` is null when tables or booths are selected instead of seats.
