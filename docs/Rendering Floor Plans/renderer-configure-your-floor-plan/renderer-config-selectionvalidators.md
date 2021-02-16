---
title: "selectionValidators"
slug: "renderer-config-selectionvalidators"
hidden: false
createdAt: "2018-08-03T12:04:00.243Z"
updatedAt: "2021-01-29T08:10:45.700Z"
---
[block:api-header]
{
  &quot;title&quot;: &quot;selectionValidators&quot;
}
[/block]
**Type**: array
**Default**: []

```javascript
selectionValidators: [
    {type: &#39;noOrphanSeats&#39;},
    {type: &#39;consecutiveSeats&#39;},
]
```

Selection validators run every time a seat is selected or deselected. They check whether there are no orphan seats, and/or whether all selected seats are consecutive (meaning: next to each other and in the same category).

If the selection is valid, [onSelectionValid](doc:renderer-events-onselectionvalid) is triggered. If not, [onSelectionInvalid](doc:renderer-events-onselectioninvalid) is triggered. 

A typical way to use this is to disable the checkout button on your form and to show a warning when onSelectionInvalid is triggered.


[block:api-header]
{
  &quot;title&quot;: &quot;selectionValidators.noOrphanSeats&quot;
}
[/block]
```javascript
selectionValidators: [
    {type: &#39;noOrphanSeats&#39;}
]
```

Checks for orphan seats. An orphan is a single seat that&#39;s left open.
[block:image]
{
  &quot;images&quot;: [
    {
      &quot;image&quot;: [
        &quot;https://files.readme.io/fbbdabe-orphan.png&quot;,
        &quot;orphan.png&quot;,
        161,
        98,
        &quot;#e4c389&quot;
      ]
    }
  ]
}
[/block]
There&#39;s one exception: near the end of the sales, when the venue is almost completely sold-out, we allow single empty seats in some cases. E.g. in the example below, the ticket buyer has to leave an empty seat if he wants 2 seats. In  that case, we don&#39;t consider the empty seat an orphan:
[block:image]
{
  &quot;images&quot;: [
    {
      &quot;image&quot;: [
        &quot;https://files.readme.io/21d9f79-Screenshot_2020-01-29_at_10.27.16.png&quot;,
        &quot;Screenshot 2020-01-29 at 10.27.16.png&quot;,
        195,
        134,
        &quot;#eee9ea&quot;
      ]
    }
  ]
}
[/block]
### mode

You can make the orphan seats validator less restrictive by passing in `mode: &#39;lenient&#39;`:

```javascript
selectionValidators: [
    {type: &#39;noOrphanSeats&#39;, mode: &#39;lenient&#39;}
]
```

In lenient mode, single empty seats are not considered orphans if there&#39;s no other way than to leave an empty seat in the current &#39;block&#39;. Meaning: in the current group of selectable seats that are next to each other:
[block:image]
{
  &quot;images&quot;: [
    {
      &quot;image&quot;: [
        &quot;https://files.readme.io/8a08cd6-Screenshot_2020-01-29_at_10.31.01.png&quot;,
        &quot;Screenshot 2020-01-29 at 10.31.01.png&quot;,
        256,
        37,
        &quot;#f2ced2&quot;
      ]
    }
  ]
}
[/block]
The default mode is &#39;strict&#39;.
[block:image]
{
  &quot;images&quot;: [
    {
      &quot;image&quot;: [
        &quot;https://files.readme.io/0d03b00-Screenshot_2020-01-29_at_10.34.24.png&quot;,
        &quot;Screenshot 2020-01-29 at 10.34.24.png&quot;,
        246,
        33,
        &quot;#f1c7cb&quot;
      ]
    }
  ]
}
[/block]
### social distancing

When you apply a social distancing ruleset with disabled seats to the sides, we automatically enable the orphan seats validator. If you want to disable it, you can do so by passing in

```javascript
selectionValidators: [
    {type: &#39;noOrphanSeats&#39;, enabled: false}
]
```

### highlight

By default, orphans are highlighted by an exclamation mark, and are colored red. If you prefer this doesn&#39;t happen, pass in `highlight: false`.

```javascript
selectionValidators: [
    {type: &#39;noOrphanSeats&#39;, highlight: false}
]
```
[block:api-header]
{
  &quot;title&quot;: &quot;selectionValidators.consecutiveSeats&quot;
}
[/block]
Checks for seats that are not on the same row or not next to each other. Also, it checks for seats that don&#39;t have the same category.

```javascript
selectionValidators: [
    {&#39;type&#39;: &#39;consecutiveSeats&#39;}
]
```
