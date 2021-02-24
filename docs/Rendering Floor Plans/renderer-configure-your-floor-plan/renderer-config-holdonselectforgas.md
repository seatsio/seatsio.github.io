---
title: "holdOnSelectForGAs"
slug: "/renderer-config-holdonselectforgas"
hidden: false
createdAt: "2018-11-23T08:59:33.842Z"
updatedAt: "2019-12-10T12:40:40.958Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Type**: boolean

Accounts created before 2018/11/22 don't have hold on select for GAs enabled by default. For those accounts, selecting GA places does not cause them to be held, even when a hold on select session is enabled through the `session` parameter. Pass in `holdOnSelectForGAs: true` to activate it. More recent accounts don't need to do this: they have it enabled by default.
