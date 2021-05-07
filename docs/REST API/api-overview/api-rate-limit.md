---
title: "Rate limit"
slug: "/api/rate-limit"
hidden: false
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The seats.io API is rate limited, to keep the servers running smoothly when they receive an extremely high number of requests.

This limit is set to **80 concurrent requests** per seats.io account. That means that 80 requests can be active at any given time (per account).

When you send more simultaneous requests, the API answers with status code `429 - Too Many Requests`.

Note that this is not a limit on the number of concurrent ticket buyers (see below).

Also, we don't enforce a maximum on the number of requests per second. It's perfectly fine to do hundreds of fast calls per second, as long as you respect the limit of 80 concurrent requests.

## How many ticket buyers can enter my site?

In-browser calls by rendered charts (e.g. to fetch object statuses, or to create a hold token) also count towards the rate limit - not just API calls from your server to seats.io.

80 concurrent requests corresponds to about **100 renderings and 200 booked places per second**. In other words: 100 ticket buyers
can enter your site every second and book 2 places, without hitting the concurrent requests rate limit.

Be aware: this depends on a number of factors, such as the size of the chart, whether social distancing rules are in place, the number of already booked places etc.
So it's very important to do proper load testing before you go live.

Calls to book best available seats take a little longer than normal booking calls, meaning you'll be able to do only about 100 requests per second instead of 200, before hitting the rate limit.

## Handling rate limited requests

Status `429` should be handled by a retry mechanism. You could build that yourself (e.g through [exponential backoff](https://en.wikipedia.org/wiki/Exponential_backoff)),
or just use our [api client libraries](/docs/api/client-libraries). They have exponential backoff built-in.

- [PHP](https://github.com/seatsio/seatsio-php): since v74.0
- [Java](https://github.com/seatsio/seatsio-java): since v64.0
- [Ruby](https://github.com/seatsio/seatsio-ruby): since v32.0
- [Python](https://github.com/seatsio/seatsio-python): since v60.0
- [JS](https://github.com/seatsio/seatsio-js): since v63.0
- [C#](https://github.com/seatsio/seatsio-dotnet): since v81.0

So if you use one of these, then you don't have to do anything: the client library will automatically and repeatedly retry requests that fail with status 429.

## Higher rate limit

Expecting a higher load than what we allow on our shared instance? A dedicated seats.io server might be an option. Please [get in touch](mailto:sales@seats.io).
