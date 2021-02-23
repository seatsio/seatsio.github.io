---
title: "Workspaces"
slug: "api-workspaces"
hidden: false
createdAt: "2020-02-27T22:00:24.802Z"
updatedAt: "2020-02-28T12:34:11.610Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

A workspace is a collection of seating charts and events. A workspace also has a unique name, and a secret and public key (a.k.a. the workspace key). 

Users have access to one or many workspaces. Once logged in, users can switch between workspaces, create new charts and events, copy floor plans from one workspace to another, etc.

A workspace can either be a production or a test workspace. Used seats are not billed in test workspaces. However, all charts in test workspaces contain a watermark.
