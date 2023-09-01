---
title: Products routes
layout: ../../layouts/page.astro
---


## Products Routes

### Get all products
A collection of fake product information to import into Hygraph remote sources.

[Example](/api/products)

```http
GET /api/products
```

#### Potential SDL

```graphql
type Product {
    id: Int
    name: String
    price: Int
    description: String
    image: String
    category: String
    rating: Float
    numReviews: Int
    countInStock: Int
}

type Products {
    data: [Product]
}
          
```

### Get product by id

```http
GET /api/products/:id
```
[Example](/api/products/1)
