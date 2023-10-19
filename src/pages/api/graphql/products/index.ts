export const prerender = false;

import type { APIRoute } from 'astro';
import { createYoga, createSchema } from 'graphql-yoga';

import ShoppingCart from '../../../../data/cart';
import {products} from '../../../../data/productData'
const schema = createSchema({
  typeDefs: `
    type CartItem {
      id: Int!
      name: String!
      price: Float!
      qty: Int!
    }
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
    type Query {
      cart: [CartItem!]
      products: [Product!]
    }    
  `,
  resolvers: {
    Query: {
      cart: () => ShoppingCart,
      products: () => products,
    },
  },
});

const { handleRequest } = createYoga({
  schema,
  graphqlEndpoint: '/api/graphql/products',
  fetchAPI: {
    Request: Request,
    Response: Response,
  },
});

export const POST: APIRoute = async (context) => {
  const { request } = context;
  return handleRequest(request, context);
};

export const GET: APIRoute = async (context) => {
  const { request } = context;
  return handleRequest(request, context);
};