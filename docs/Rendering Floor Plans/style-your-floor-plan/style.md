---
title: "style"
slug: "style"
hidden: false
createdAt: "2019-07-22T20:53:58.402Z"
updatedAt: "2019-07-22T22:18:21.539Z"
---
**Type**: object

**Example**:
```javascript
style: {
   border: &#39;3d&#39;
}
```

Sets the intention for certain style properties, allowing to override the current style preset.
[block:callout]
{
  &quot;type&quot;: &quot;warning&quot;,
  &quot;title&quot;: &quot;These are not CSS properties&quot;,
  &quot;body&quot;: &quot;To ensure style does not break across multiple components and screen resolutions, these settings define intentions but not raw CSS values. Make sure to see the list of options below.&quot;
}
[/block]
# Style properties

## font

Defines the font for text and labels.

```javascript
style: {
   font: &#39;Roboto&#39;
}
```

**Possible values:** 
- `&#39;Roboto&#39;`
- `&#39;Montserrat&#39;`
- `&#39;WorkSans&#39;`
- `&#39;NotoSansHK&#39;`
- `&#39;Lato&#39;`


## fontWeight

Defines how font weights should be balanced.

```javascript
style: {
   fontWeight: &#39;bolder&#39;
}
```

**Possible values:** 
- `&#39;bolder&#39;` – text will lean towards the bolder side.
- `&#39;minMax&#39;` – text will either be very thin or very bold.


## borderRadius

Defines the border radius of tooltips, dialogs and buttons.

```javascript
style: {
   borderRadius: &#39;none&#39;
}
```

**Possible values:** 
- `&#39;none&#39;` – sharp corners.
- `&#39;max&#39;` – very rounded corners.
- `&#39;asymmetrical&#39;` – alternating rounding on opposite corners.


## border

Defines the border thickness of tooltips, dialogs and buttons.

```javascript
style: {
   border: &#39;3d&#39;
}
```

**Possible values:** 
- `&#39;thick&#39;` – thicker borders, usually about 2px thick.
- `&#39;3d&#39;` – same as `&#39;thick&#39;` but with a subtle 3d bevel effect using various shades.


## padding

Defines the padding and white space of tooltips, dialogs and buttons.

```javascript
style: {
   padding: &#39;spacious&#39;
}
```

**Possible values:** 
- `&#39;spacious&#39;` – additional spacing and padding, creating a negative space on some dialogs.


## buttonFace

Defines how soft buttons (like number steppers) are colored.

```javascript
style: {
   buttonFace: &#39;fillEnabled&#39;
}
```

**Possible values:** 
- `&#39;fillEnabled&#39;` – fills all buttons that are enabled.
- `&#39;fillHighlightedOption&#39;` – only fills the recommended/highlighted option.
