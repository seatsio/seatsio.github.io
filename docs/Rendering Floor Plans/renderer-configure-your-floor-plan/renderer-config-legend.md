---
title: "legend"
slug: "/renderer-config-legend"
hidden: false
createdAt: "2018-08-03T12:01:27.368Z"
updatedAt: "2020-10-13T07:13:39.903Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## showLegend

**Type**: boolean  
**Default**: false  

If true, a legend with the category names and colors is rendered at the top of the chart.

```javascript
showLegend: true
```

## legend.hideNonSelectableCategories

**Type**: boolean  
**Default**: false  

Set this property to true to hide non selectable categories in the legend. A non selectable category is a category for which there are no selectable objects on the chart.
 
By default, even categories without selectable objects are shown in the legend.

```javascript
legend: {
    hideNonSelectableCategories: true
}
```



## legend.hidePricing

**Type**: boolean  
**Default**: false  

Set this property to true to only show category labels in the legend, without pricing information. Cannot be used in combination with `legend.hideCategoryName: true`. 

```javascript
legend: {
    hidePricing: true
}
```

## legend.hideCategoryName

**Type**: boolean  
**Default**: false  

Set this property to true to only show pricing information in the legend, without the category name. Cannot be used in combination with `legend.hidePricing: true`. 

```javascript
legend: {
    hideCategoryName: true
}
```
