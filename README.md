# The official Digitalfarmer platform API

<p align="center" >
    <img alt="Digitalfarmer_logo" src="./logo.png" height="100px"/>
</p>



<p align="center">
 <img alt="GitHub Workflow Status (branch)" src="https://img.shields.io/github/workflow/status/ndaba1/digital-farmer-api/Digital%20Farmer%20API%20CI/main">
 <a href="https://en.wikipedia.org/wiki/Representational_state_transfer"><img src="https://img.shields.io/badge/interface-REST-blue.svg?longCache=true&style=flat"></a>
 <a href="https://en.wikipedia.org/wiki/GraphQL"><img src="https://img.shields.io/badge/interface-GraphQL-orange.svg?longCache=true&style=flat"></a>
 <img alt="Docker Pulls" src="https://img.shields.io/docker/pulls/vndaba/digital-farmer-api">
</p>


### You can invoke the api either via rest or graphQL from:
 `https://api.digitalfarmer.tech/v1`.
 
---

### You will need an auth token before invoking the api:
```bash
#REST
GET: `https://api.digitalfarmer.tech/v1/auth/token`

#GraphQL
query {
    auth {
        token
    }
}
```

### The API can be invoked for the following reasons:
- Getting info about a given plant:
  ```bash
  #with REST:
  GET `https://api.digitalfarmer.tech/v1/plants/${plant_name}`

  #with GraphQL
  query {
      plant(name: `plant_name`) {
          ...options
      }
  }

  ```
- Getting info about any given disease
  ```
  #with REST
  GET `https://api.digitalfarmer.tech/v1/diseases/${disease_name}`

  #with GraphQL
  query {
      disease(name: `disease_name`) {
          ...options
      }
  }
  ```
- Getting the diseases that can affect a plant
   ```
  #with REST
  GET `https://api.digitalfarmer.tech/v1/plants/${plant_name}/diseases`

  #with GraphQL
  query {
      plant(name: `plant_name`) {
          diseases {
              ...options
          }
      }
  }
  ```
- Getting the plants that a disease can affect
   ```
  #with REST
  GET `https://api.digitalfarmer.tech/v1/diseases/${disease_name}/targets`

  #with GraphQL
  query {
      disease(name: `disease_name`) {
          targets {
              ...options
          }
      }
  }
  ```

  ### Other options include:
  - Get all plants
  - Get all diseases
  - and many more...

Refer to the guide at https://digitalfarmer.tech/developers for more info on the API and how to invoke it

## Docker

You can pull the docker image for the api:

```bash
docker pull vndaba/digital-farmer-api
```

You will need to modify the `MONGO_URI` field in the .env file to point to your own database before running a container.

## Contributing

We are constantly looking to improve and expand our data collections. Contributions are welcome and highly appreciated.
