---
title: "Rate limit"
slug: "/api/rate-limit"
hidden: false
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introduction

The seats.io API is rate limited, to keep the servers running smoothly when they receive an extremely high number of requests.

This limit is set to **80 concurrent requests per customer**. When you send more simultaneous requests, the API answers
with status code `429 - Too Many Requests`.

Note that we don't enforce a maximum on the number of requests per second. It's perfectly fine to do hundreds of fast calls per second, as
long as you respect the limit of 80 concurrent requests.

## Maximum number of visitors

In-browser calls by rendered charts (e.g. to fetch object statuses, or to create a hold token) also count towards the rate limit - not just API calls from your server to seats.io.

80 concurrent requests corresponds to about **100 renderings and 200 booked places per second**. In other words: 100 new ticket buyers
can enter your site every second and book 2 places, without hitting the concurrent requests rate limit.

Be aware: this depends on a number of factors, such as the size of the chart, whether social distancing rules are in place, the number of already booked places etc.
So it's very important to do proper load testing before you go live.

When booking best available places, the limit is lower: 100 booked places per second instead of 200.

## Handling rate limited requests

Status `429` should be handled by a retry mechanism. You could build that yourself (e.g through exponential backoff),
or just use our [api client libraries](/docs/api/client-libraries). They have exponential backoff built-in, since

- PHP: v74.0 (https://github.com/seatsio/seatsio-php)
- Java: v64.0 (https://github.com/seatsio/seatsio-java)
- Ruby: v32.0 (https://github.com/seatsio/seatsio-ruby)
- Python: v60.0 (https://github.com/seatsio/seatsio-python)
- JS: v63.0 (https://github.com/seatsio/seatsio-js)
- C#: v81.0 (https://github.com/seatsio/seatsio-dotnet)

## Higher rate limit

Expecting an higher load than what we allow on our shared instance? A dedicated seats.io server might be an option. Please [get in touch](mailto:sales@seats.io).
