---
title: "Error handling"
slug: "/api-error-handling"
hidden: false
createdAt: "2018-07-31T08:27:13.076Z"
updatedAt: "2018-11-06T22:17:46.192Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Seats.io uses standard [HTTP response codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) to indicate problems and errors.

For example: 

* 400 Bad Request, e.g. when you didn't pass in a required parameter
* 401 Unauthorized, e.g. when you didn't pass in your secret key through a basic auth header, or the key is invalid
* 403 Forbidden, e.g. you passed in a valid secret key through the basic auth header, but your user account has been disabled
* 404 Not Found, e.g. when you're looking up a chart, but no chart with that key was found

Have a look at the response body to see what went wrong exactly (except in case of 401 or 403 errors, in that case the response body is empty). 

Here is an example of the response body of a failed request. The request in this example failed because the event, specified in the request, does not exist. 
```json
{
  "status": 404,
  "messages": [ "Event not found: event-key-123" ],
  "errors": [
    {
      "code": "EVENT_NOT_FOUND",
      "message": "Event not found: event-key-123",
      "data": {
        // optional data associated with the specific error 
      }
    }
  ],
  "warnings": [],
  "requestId": "27378c14-ae6a-46a4-ada4-9c745a45e018"
}
```
In general, the response body contains:

1. **status** the http status code. 400 for Bad Request, 404 for Not Found, etc. 
2. **errors**: the reason(s) why the API call failed. Usually there's just a single error. However, in some cases there might be more than one, e.g. when a request results in multiple validation errors. That's why errors is always an *array* of objects. Each error has a code, a message in English, and optional data associated with the error.  
3. **warnings**: an optional list of warnings. A warning has the same structure as an error, i.e. a code, a message and optional data. 
4. **messages**: an array containing all messages of errors and warnings combined.  
5. **requestId**: the identifier of the request you sent. This is useful for us to debug any errors you encounter. Please mention it when contacting us.
