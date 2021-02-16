---
title: "extraConfig"
slug: "renderer-config-extraconfig"
hidden: false
createdAt: "2018-08-03T12:05:15.196Z"
updatedAt: "2018-08-23T14:26:57.355Z"
---
**Type**: object
**Default**: {}

Some callbacks (e.g. `objectLabel`) do not have access to variables defined in your web page. That&#39;s because they&#39;re executed inside the seats.io iFrame.

With extraConfig, you can pass in an object to which the callbacks do have access. It&#39;s passed to them as the last parameter.

The following callbacks are executed within the iFrame and they receive an extraConfig parameter:

- [`objectColor`](doc:renderer-config-objectcolor) 
- [`sectionColor`](doc:renderer-config-sectioncolor) 
- [`objectLabel`](doc:renderer-config-objectlabel) 
- [`objectIcon`](doc:renderer-config-objecticon) 
- [`objectCategory`](doc:renderer-config-objectcategory) 
- [`isObjectVisible`](doc:renderer-config-isobjectvisible) 
- [`canGASelectionBeIncreased`](doc:renderer-config-cangaselectionbeincreased)
