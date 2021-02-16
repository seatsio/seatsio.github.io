---
title: "canGASelectionBeIncreased"
slug: "renderer-config-cangaselectionbeincreased"
hidden: false
createdAt: "2018-08-03T11:54:53.330Z"
updatedAt: "2020-02-17T08:21:19.952Z"
---
**Type**: function(gaArea, defaultValue, extraConfig, ticketType)

This function is invoked when a user clicks on a GA area. If `canGASelectionBeIncreased` returns true, the user is able to increase the number of selected places by clicking on the + button of the ticket selector that pops up.


[block:image]
{
  &quot;images&quot;: [
    {
      &quot;image&quot;: [
        &quot;https://files.readme.io/b6f1ad5-Screenshot_2018-08-03_14.31.18.png&quot;,
        &quot;Screenshot 2018-08-03 14.31.18.png&quot;,
        436,
        284,
        &quot;#9d9e9d&quot;
      ]
    }
  ]
}
[/block]
* **gaArea**: the GA area that has been selected
* **defaultValue**: a boolean that indicates if additional GA places can be selected. This is determined by whether the number of selected places plus the number places booked by other users is smaller than the capacity of the GA area.
* **extraConfig**: see [extraConfig](doc:renderer-config-extraconfig)
* **ticketType**: the ticket type for which the user clicked on the plus button. Optional. 

The default value is determined by evaluating:
 
```javascript
gaArea.numBooked + gaArea.numSelected &lt; gaArea.capacity
```

A good use case for this callback is to allow back office users to select places that are on hold for VIP customers. If 10 VIP places are held in a GA area with a capacity of 15, users would by default only be able to select 5 extra places. You can override this as follows:

```javascript
canGASelectionBeIncreased: function(gaArea, defaultValue) {
    if(gaArea.label === &#39;Standing&#39;) {
        return gaArea.numBooked - 10 + gaArea.numSelected &lt; gaArea.capacity;        
    }
    return defaultValue;
}
```
