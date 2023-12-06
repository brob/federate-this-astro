---
title: Products routes
---



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
GET /api/product/:id
```
[Example](/api/product/1)

### See this in action

Want to see how to implement this? The Hygraph Getting Started guide will walk you through the process of setting up a Hygraph project and implementing this example.

* [Hygraph Getting Started](https://hygraph.com/docs/getting-started/onboarding-overview)
* [Hygraph Getting Started Project](https://app.hygraph.com/clone/4d65d295cd1e4912aa401fb15f72d40d?name=GS2023%20Stage%202)
* [Implementing the Products remote source](https://hygraph.com/docs/getting-started/add-remote-source)