---
title: "onSelectionInvalid"
slug: "renderer-events-onselectioninvalid"
hidden: false
createdAt: "2018-08-03T13:35:37.572Z"
updatedAt: "2018-08-23T14:21:19.984Z"
---
**Type**: function(violations)

- **violations**: an array of violations against the passed in [selectionValidators](doc:renderer-config-selectionvalidators) E.g. `[&#39;noOrphanSeats&#39;, &#39;consecutiveSeats&#39;]` if the selected seats contain orphans AND non-consecutive seats.

Triggered when one or more [selectionValidators](doc:renderer-config-selectionvalidators) are passed in, and the selection is invalid.

You should use this callback to prevent a ticket buyer from submitting the ticketing form, and to show a warning message. For example: 

```javascript
{
    ...
    selectionValidators: [{type: &#39;noOrphanSeats&#39;}, {type: &#39;consecutiveSeats&#39;}],
    onSelectionValid: () =&gt; ..., // enable submit button and hide warning
    onSelectionInvalid: violations =&gt; ... // disable submit button and show warning
    ...
}
```
