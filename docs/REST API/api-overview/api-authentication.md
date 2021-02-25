---
title: "Authentication"
slug: "/api-authentication"
hidden: false
createdAt: "2018-07-30T18:27:03.091Z"
updatedAt: "2020-09-29T09:39:59.250Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

When calling the seats.io the seats.io API, you need to authenticate yourself. To do so, you need to include a workspace secret key in each request. You can find that key at the [workspace settings page](https://app.seats.io/workspace-settings).

:::danger Your secret key carries many privileges, so it's very important to keep it to yourself!
* Never push your secret key to public repositories on GitHub, BitBucket or the likes.
* Never call the seats.io API from the client's browser (e.g. using `$.ajax`), as this will require you to publicly expose your secret key.
:::


Authentication to the API is performed via [HTTP Basic Auth](http://en.wikipedia.org/wiki/Basic_access_authentication). 

Provide the workspace secret key as the username value. You do not need to provide a password.
API requests without authentication will fail.



## Using curl

curl uses the -u flag to pass basic auth credentials. 
Adding a colon (:) after your API key prevents cURL from asking for a password.

```curl
curl https://api.seatsio.net/charts -u 550e8400-e29b-41d4-a716-446655440000:
```



## Using a http header

In general, you need to set a header called Authorization with value “Basic x”, where x is your secret key with a colon, base64 encoded. 

So: 


Steps|Example|
---|---|
1. Take your workspace secret key|550e8400-e29b-41d4-a716-446655440000|
2. append a colon (:)|550e8400-e29b-41d4-a716-446655440000:|
3. base64-encode it|NTUwZTg0MDAtZTI5Yi00MWQ0LWE3MTYtNDQ2NjU1NDQwMDAwOg==|
4. put it in an Authorization header|Authorization: Basic NTUwZTg0MDAtZTI5Yi00MWQ0LWE3MTYtNDQ2NjU1NDQwMDAwOg==|



```curl
curl https://api.seatsio.net/charts -H "Authorization: Basic NTUwZTg0MDAtZTI5Yi00MWQ0LWE3MTYtNDQ2NjU1NDQwMDAwOg=="
```



## Using one of the seats.io client libs

All of the seats.io [client libraries](api-client-libraries) support authentication with the API, so you don't have to fiddle with authorization headers and base64 encoding.  



<Tabs 
  defaultValue="php"
  values={[
{ label: 'PHP', value: 'php', },
{ label: 'C#', value: 'csharp', },
{ label: 'Java', value: 'java', },
{ label: 'Python', value: 'python', },
{ label: 'Ruby', value: 'ruby', },
{ label: 'Javascript', value: 'javascript', },
]}>
<TabItem value='php'>

```php
$seatsio = new \Seatsio\SeatsioClient("myWorkspaceSecretKey");
```

</TabItem>
<TabItem value='csharp'>

```csharp
var client = new SeatsioClient("mySecretKey"); 
```

</TabItem>
<TabItem value='java'>

```java
SeatsioClient client = new SeatsioClient("mySecretKey"); 
```

</TabItem>
<TabItem value='python'>

```python
import seatsio
client = seatsio.Client(secret_key="mySecretKey")
```

</TabItem>
<TabItem value='ruby'>

```ruby
require 'seatsio'
client = Seatsio::Client.new('mySecretKey')
```

</TabItem>
<TabItem value='javascript'>

```javascript
let client = new SeatsioClient('mySecretKey');
```

</TabItem>
</Tabs>





## Using the company admin key

Instead of the workspace secret key, you can pass in your company admin key for authentication. The admin keys has privileges to access and modify data in all workspaces. You can find it at your [company settings page](https://app.seats.io/company-settings).

To specify the workspace, pass in the `X-Workspace-Key` header. That header should contain the public workspace key.

If you don't provide the `X-Workspace-Key` header, API calls with the company admin key operate on the default workspace for your company.

:::danger The company admin key should never leave your server!

:::

