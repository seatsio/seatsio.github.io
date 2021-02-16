---
title: "Authentication"
slug: "api-authentication"
hidden: false
createdAt: "2018-07-30T18:27:03.091Z"
updatedAt: "2020-09-29T09:39:59.250Z"
---
When calling the seats.io the seats.io API, you need to authenticate yourself. To do so, you need to include a workspace secret key in each request. You can find that key at the [workspace settings page](https://app.seats.io/workspace-settings).
[block:callout]
{
  &quot;type&quot;: &quot;danger&quot;,
  &quot;body&quot;: &quot;* Never push your secret key to public repositories on GitHub, BitBucket or the likes.\n* Never call the seats.io API from the client&#39;s browser (e.g. using `$.ajax`), as this will require you to publicly expose your secret key.&quot;,
  &quot;title&quot;: &quot;Your secret key carries many privileges, so it&#39;s very important to keep it to yourself!&quot;
}
[/block]

Authentication to the API is performed via [HTTP Basic Auth](http://en.wikipedia.org/wiki/Basic_access_authentication). 

Provide the workspace secret key as the username value. You do not need to provide a password.
API requests without authentication will fail.


[block:api-header]
{
  &quot;title&quot;: &quot;Using curl&quot;
}
[/block]
curl uses the -u flag to pass basic auth credentials. 
Adding a colon (:) after your API key prevents cURL from asking for a password.
```curl
curl https://api.seatsio.net/charts -u 550e8400-e29b-41d4-a716-446655440000:
```

[block:api-header]
{
  &quot;title&quot;: &quot;Using a http header&quot;
}
[/block]
In general, you need to set a header called Authorization with value “Basic x”, where x is your secret key with a colon, base64 encoded. 

So: 
[block:parameters]
{
  &quot;data&quot;: {
    &quot;h-1&quot;: &quot;Example&quot;,
    &quot;h-0&quot;: &quot;Steps&quot;,
    &quot;0-0&quot;: &quot;1. Take your workspace secret key&quot;,
    &quot;0-1&quot;: &quot;550e8400-e29b-41d4-a716-446655440000&quot;,
    &quot;1-0&quot;: &quot;2. append a colon (:)&quot;,
    &quot;1-1&quot;: &quot;550e8400-e29b-41d4-a716-446655440000:&quot;,
    &quot;2-0&quot;: &quot;3. base64-encode it&quot;,
    &quot;2-1&quot;: &quot;NTUwZTg0MDAtZTI5Yi00MWQ0LWE3MTYtNDQ2NjU1NDQwMDAwOg==&quot;,
    &quot;3-0&quot;: &quot;4. put it in an Authorization header&quot;,
    &quot;3-1&quot;: &quot;Authorization: Basic NTUwZTg0MDAtZTI5Yi00MWQ0LWE3MTYtNDQ2NjU1NDQwMDAwOg==&quot;
  },
  &quot;cols&quot;: 2,
  &quot;rows&quot;: 4
}
[/block]

```curl
curl https://api.seatsio.net/charts -H "Authorization: Basic NTUwZTg0MDAtZTI5Yi00MWQ0LWE3MTYtNDQ2NjU1NDQwMDAwOg=="
```

[block:api-header]
{
  &quot;title&quot;: &quot;Using one of the seats.io client libs&quot;
}
[/block]
All of the seats.io [client libraries](doc:api-client-libraries) support authentication with the API, so you don&#39;t have to fiddle with authorization headers and base64 encoding.  
```php
$seatsio = new \Seatsio\SeatsioClient("myWorkspaceSecretKey");
```
```csharp
var client = new SeatsioClient("mySecretKey"); 
```
```java
SeatsioClient client = new SeatsioClient("mySecretKey"); 
```
```python
import seatsio
client = seatsio.Client(secret_key="mySecretKey")
```
```ruby
require 'seatsio'
client = Seatsio::Client.new('mySecretKey')
```
```javascript
let client = new SeatsioClient('mySecretKey');
```

[block:api-header]
{
  &quot;title&quot;: &quot;Using the company admin key&quot;
}
[/block]
Instead of the workspace secret key, you can pass in your company admin key for authentication. The admin keys has privileges to access and modify data in all workspaces. You can find it at your [company settings page](https://app.seats.io/company-settings).

To specify the workspace, pass in the `X-Workspace-Key` header. That header should contain the public workspace key.

If you don&#39;t provide the `X-Workspace-Key` header, API calls with the company admin key operate on the default workspace for your company.
[block:callout]
{
  &quot;type&quot;: &quot;danger&quot;,
  &quot;body&quot;: &quot;&quot;,
  &quot;title&quot;: &quot;The company admin key should never leave your server!&quot;
}
[/block]
