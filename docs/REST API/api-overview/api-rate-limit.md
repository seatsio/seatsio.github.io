---
title: "Rate limit"
slug: "/api/rate-limit"
hidden: false
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introduction

The seats.io API has a rate limit, so the servers keep running smoothly when they receive an extremely high number of requests.

This limit is set to **80 concurrent requests per customer**. When you send more simultaneous requests, the API answers
with status code `429 - Too Many Requests`.

In-browser calls by rendered charts (e.g. to fetch object statuses, or to create a hold token) also count towards the rate limit - not just API calls from your server to seats.io.

Note that we don't enforce a maximum on the number of requests per second. It's perfectly fine to do hundreds of fast calls per second, as
long as you respect the limit of 80 concurrent requests.

## Maximum number of visitors

The rate limit translates to a maximum of about **50 renderings and bookings per second**. In other words: 50 new ticket buyers
can enter your site and book some placezs every second, without hitting the concurrent requests rate limit.

Be aware: all of this depends on a number of factors, such as the size of your chart, whether social distancing rules are in place, the number of booked places etc.
So it's very important to do proper load testing before you go live.

## Handling rate limited requests

Status `429` should be handled by a retry mechanism.

You could build that yourself (e.g through exponential backoff), or just use our [api client libraries](/docs/api/client-libraries).
They have exponential backoff built-in, since

- v74.0 (PHP - https://github.com/seatsio/seatsio-php)
- v64.0 (Java - https://github.com/seatsio/seatsio-java)
- v32.0 (Ruby - https://github.com/seatsio/seatsio-ruby)
- v60.0 (Python - https://github.com/seatsio/seatsio-python)
- v63.0 (JS - https://github.com/seatsio/seatsio-js)
- v81.0 (C# - https://github.com/seatsio/seatsio-dotnet)

## Higher rate limit

Expecting an higher load than what we allow on our shared instance? A dedicated seats.io server might be an option. Please [get in touch](mailto:sales@seats.io).
