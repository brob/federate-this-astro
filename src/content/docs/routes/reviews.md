---
title: Reviews Routes
---



### Get all reviews
A collection of fake review information to import into Hygraph remote sources.

[Example](/api/reviews/all)

```http
GET /api/reviews/all
```

#### Potential SDL

```graphql

type Review {
    id: Int
    product: Int
    productSlug: String
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

