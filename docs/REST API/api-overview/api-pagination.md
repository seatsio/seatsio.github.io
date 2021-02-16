---
title: "Pagination"
slug: "api-pagination"
hidden: false
createdAt: "2018-07-31T08:30:44.628Z"
updatedAt: "2018-07-31T08:33:50.025Z"
---
All resources that have support for bulk fetches (i.e. `GET`ting a list of resources) have a common structure: they return a paginated result, and they take at least two query parameters: `start_after_id` and `limit`.

Seats.io uses *cursor-based pagination*: the `start_after_id` takes an existing object ID value.
   
[block:api-header]
{
  &quot;title&quot;: &quot;Arguments&quot;
}
[/block]

* **limit** *(optional)*   
A limit on the number of objects to be returned. 
The `limit` query param should only be passed in once, and must be a number. Its default and max values are 1000, unless specified otherwise, and the minimum is 1.    

* **start_after_id** *(optional)*
A cursor for use in pagination, which allows you to fetch the next page if it exists. 
If you make a list request and receive a paginated response that contains a `next_page_starts_after` value of 123, you can use `start_after_id=123` on your next call to fetch the next page of the list.
`start_after_id` cannot be used together with `end_before_id`. 

* **end_before_id** *(optional)*
A cursor for use in pagination, which allows you to fetch the previous page if it exists. 
If you make a list request and receive a paginated response that contains a `previous_page_ends_before` value of 987, you can use `end_before_id=987` on your next call to fetch the previous page of the list.
`end_before_id` cannot be used together with `start_after_id`.

[block:api-header]
{
  &quot;title&quot;: &quot;Response format&quot;
}
[/block]
* **items** *(array)*
An array containing the actual response items. Each item is identified by an `id` property of type string.   
 
* **next_page_starts_after** *(string)*
Contains the id of the last element in the current list page. Not present if there is no next page (i.e. the `items` array contains the end of the full list).
   
* **previous_page_ends_before** *(string)*
Contains the id of the first element in the current list page. Not present if there exists no previous page (i.e. the `items` array contains the beginning of the full list).
