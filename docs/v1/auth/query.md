# GET authorization token

**Method**: `POST`

**Endpoint**: `https://api.digitalfarmer.tech/v1/query`

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

Any error responses will be returned in the body response by graphql. They are too general to define but the body should give you enough info to handle the exception.