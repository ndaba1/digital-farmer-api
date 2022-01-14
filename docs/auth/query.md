# GET authorization token

**Method**: `POST`

**Endpoint**: `https://api.digitalfarmer.com/v1/query`

### Auth required: False

### Request: 

```graphql
query {
    auth {
        token
    }
}

```

### Success responses:

```json
{
  "data": {
    "auth": {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXRob2RzIjoiR0VUIiwidmVyaWZpZWQiOnRydWUsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDIxNjYwNzIsImV4cCI6MTY0MjE2OTY3Mn0.ycAUuajrGvpLRzhbftzWDJvI5c_Pj4BlAFaNkLCHltQ"
    }
  }
}
```

