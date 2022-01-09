# The digital farmer official API

<p align="center">
<a href="https://github.com/ndaba1/digital-farmer-api/actions?query=workflow%3ACI"><img src="https://img.shields.io/github/workflow/ndaba1/digital-farmer-api/CI?style=flat-square"></a>
<a href="https://en.wikipedia.org/wiki/Representational_state_transfer"><img src="https://img.shields.io/badge/interface-REST-brightgreen.svg?longCache=true&style=flat-square"></a>
</p>


You can invoke the api either via rest or graphQL from:
 `https://api.digitafarmer.com/api/v1`.
---

### The API can be invoked for the following reasons:
- Getting info about a given plant:
  ```
  #with REST:
  GET `https://api.digitafarmer.com/api/v1/plants/${plant_name}`

  ```
- Getting info about any given disease
- Getting the diseases that can affect a plant
- Getting the plants that a disease can affect

Refer to the guide at https://digitalfarmer.com/developers for more info on the API and how to invoke it