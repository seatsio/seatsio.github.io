---
title: "5. Book selected seats"
slug: "tutorial-book-selected-seats"
hidden: false
createdAt: "2018-08-21T09:35:42.604Z"
updatedAt: "2018-11-19T06:35:27.895Z"
---
So you&#39;ve shown your ticket buyer a floor plan, they selected the seats they wish. Now it&#39;s time to actually book them, so that they become unavailable for selection for the next ticket buyer that comes along. 

You do this by calling the [Book objects endpoint](doc:api-book-objects) of the Seats API. 
Here are some examples using the respective [API Client libraries](doc:api-client-libraries) you can use: 


```php
$seatsioClient->events->book("event1", ["A-3", "A-5", "A-7"]);
```
```csharp
Client.Events.Book("event1", new [] { "A-3", "A-5", "A-7" });
```
```java
client.events.book("event1", Arrays.asList("A-3", "A-5", "A-7"));
```
```python
client.events.book("event1", ["A-3", "A-5", "A-7"])
```
```javascript
await client.events.book('eventKey', ['A-3', 'A-5', 'A-7']);
```
## When should I book?
The answer is simple and complex at the same time: &quot;whenever is appropriate in your sales flow&quot;. 

For example, you could call the seats.io API to book seats right before you collect their payment. Or you could pre-book some seats for VIPs before you even open up ticket sales.

For a more in-depth discussion on this topic, check [this page](http://support.seats.io/integrating-seats-io/when-should-i-book-my-seats). 

## Live updates

Whenever you change availability for a seat, we will push out this change to everyone who has the floor plan for your event open in their browser, in near real-time.

In other words: you can look at the seats on a floor plan as a collection of on/off switches, controllable via the REST API. You decide when you switch seats on and off, and by doing so, everyone who is looking at the floor plan will see the availability changes happening live.


## Custom statuses
There&#39;s more than just &#39;booking&#39; a seat. You can use your own statuses (i.e. other than *BOOKED*) as well, read more [here](doc:api-custom-object-status).

## Temporarily holding seats
It&#39;s possible to hold seats for a little while, until the ticket buyer finishes up their purchase. Check [this page](doc:api-temporarily-hold-objects) for more information on how to do this.