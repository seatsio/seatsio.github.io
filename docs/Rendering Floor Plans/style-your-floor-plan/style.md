---
title: "style"
slug: "/renderer/style"
hidden: false
createdAt: "2019-07-22T20:53:58.402Z"
updatedAt: "2019-07-22T22:18:21.539Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Type**: object  

**Example**:
```javascript
style: {
   border: '3d'
}
```

Sets the intention for certain style properties, allowing to override the current style preset.

:::caution These are not CSS properties
To ensure style does not break across multiple components and screen resolutions, these settings define intentions but not raw CSS values. Make sure to see the list of options below.
:::

# Style properties

## font

Defines the font for text and labels.

```javascript
style: {
   font: 'Roboto'
}
```

**Possible values:** 
- `'Roboto'`
- `'Montserrat'`
- `'WorkSans'`
- `'NotoSansHK'`
- `'Lato'`
- `'NunitoSans'`

## fontWeight

Defines how font weights should be balanced.

```javascript
style: {
   fontWeight: 'bolder'
}
```

**Possible values:** 
- `'bolder'` – text will lean towards the bolder side.
- `'minMax'` – text will either be very thin or very bold.


## borderRadius

Defines the border radius of tooltips, dialogs and buttons.

```javascript
style: {
   borderRadius: 'none'
}
```

**Possible values:** 
- `'none'` – sharp corners.
- `'max'` – very rounded corners.
- `'asymmetrical'` – alternating rounding on opposite corners.


## border

Defines the border thickness of tooltips, dialogs and buttons.

```javascript
style: {
   border: '3d'
}
```

**Possible values:** 
- `'thick'` – thicker borders, usually about 2px thick.
- `'3d'` – same as `'thick'` but with a subtle 3d bevel effect using various shades.


## padding

Defines the padding and white space of tooltips, dialogs and buttons.

```javascript
style: {
   padding: 'spacious'
}
```

**Possible values:** 
- `'spacious'` – additional spacing and padding, creating a negative space on some dialogs.


## buttonFace

Defines how soft buttons (like number steppers) are colored.

```javascript
style: {
   buttonFace: 'fillEnabled'
}
```

**Possible values:** 
- `'fillEnabled'` – fills all buttons that are enabled.
- `'fillHighlightedOption'` – only fills the recommended/highlighted option.
