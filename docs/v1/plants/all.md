## This is the documentation concerning actions involving the plants route

**Auth Required**: `True`

**Methods Allowed**: `GET`

**APIs Allowed**: `GraphQL, REST`

**REST Endpoint**: `https://api.digitalfarmer.tech/v1/plants`

**GraphQL Endpoint**: `https://api.digitalfarmer.tech/v1/query`


### Expected response with correct config:

1. REST

**Status code**: `200`

**Response Body**: 

```json
{
  "commonName": "${plant_name}",
  "about": "${plant_description}",
  "aliases": [
    "${plant_aliases}"
  ],
  "diseases": [
    "${common_plant_diseases}"
  ],
  "habitat": "${plant_habitat}",
  "latinName": "${latin_name}",
  "pests": [
    "${plant_pests}"
  ],
  "requirements": [
    "${propagation_requirements}"
  ],
  "sampleImages": [
    "${urls_to_sample_images}"
  ],
  "taxonomicTree": {
    "Domain": " Eukaryota",
    " Kingdom": " Plantae",
    " Phylum": " Spermatophyta",
    " Subphylum": " Angiospermae",
    " Class": " Dicotyledonae",
    " Order": "  Solanales",
    " Family": " Solanaceae",
    " Genus": " solanum",
    " Species": " \"Solanum aethiopicum\""
  },
  "uses": [
    "Edible vegetable",
    "Animal pasture",
    "medicinal effects"
  ]
}

```

2. GraphQL

Giving an example for graphql will be dificult and non-exhaustive since you get only what you asked for. Assumming the request query looks as follows:

```graphql
query {
    plants {
        commonName,
        latinName
    }
}

```

The expected response would be as follows:

```json
{
  "data": {
    "plants": [
      {
        "commonName": "${plant_name}",
        "latinName": "${latin_name}"
      },
      {
        "commonName": "${plant_name}",
        "latinName": "${latin_name}"
      },
      ...
    ]
  }
}

```