---
title: Reviews Routes
layout: ../../layouts/page.astro
---


## Reviews Routes

### Get all reviews
A collection of fake review information to import into Hygraph remote sources.

[Example](/api/reviews)

```http
GET /api/reviews
```

#### Potential SDL

```graphql

type Review {
    id: Int
    product: Int
    name: String
    rating: Float
    comment: String
}

type Reviews {
    data: [Review]
}
          
```

### Get review by product id

```http
GET /api/reviews/product/:productId
```
[Example](/api/reviews/product/1)

