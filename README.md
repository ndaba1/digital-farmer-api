# The digital farmer official API

<p align="center">
 <img alt="GitHub Workflow Status (branch)" src="https://img.shields.io/github/workflow/status/ndaba1/digital-farmer-api/Digital%20Farmer%20API%20CI/main">
 <a href="https://en.wikipedia.org/wiki/Representational_state_transfer"><img src="https://img.shields.io/badge/interface-REST-blue.svg?longCache=true&style=flat"></a>
 <a href="https://en.wikipedia.org/wiki/GraphQL"><img src="https://img.shields.io/badge/interface-GraphQL-red.svg?longCache=true&style=flat"></a>
</p>


### You can invoke the api either via rest or graphQL from:
 `https://api.digitafarmer.com/v1`.
 
---

### You will need an auth token before invoking the api:
```
#REST
GET: `https://api.digitalfarmer.com/v1/auth/token`

#GraphQL
POST:
    query {
        auth {
            token
        }
    }
```

### The API can be invoked for the following reasons:
- Getting info about a given plant:
  ```
  #with REST:
  GET `https://api.digitafarmer.com/v1/plants/${plant_name}`

  ```
- Getting info about any given disease
- Getting the diseases that can affect a plant
- Getting the plants that a disease can affect

Refer to the guide at https://digitalfarmer.com/developers for more info on the API and how to invoke it
