export const prerender = false;

import type { APIRoute } from 'astro';
import { createYoga, createSchema } from 'graphql-yoga';
import { products, relatedProducts } from '../../../../data/skncre/productData'

const schema = createSchema({
  typeDefs: `
    type Image {
      url: String!
      alt: String
    }
    
    type Product {
      id: Int!
      slug: String!
      name: String!
      price: Int
      description: String
      shortDescription: String
      ingredients: String
      images: [Image]
      stock: Int
    }

    type related {
      id: Int!
      products: [Product!]
    }

    type Query {
      product(id: ID): Product,
      related(id: ID): related
      products: [Product!]
    }    
  `,
  resolvers: {
    Query: {
      product: (_, { id }) => {
        return products.find(product => product.id === Number(id));
      },
      related: (_, { id }) => {
        return relatedProducts.find(related => related.id === Number(id));
      },
      products: () => products,
    },
  },
});

const { handleRequest } = createYoga({
  schema,
  graphqlEndpoint: '/api/graphql/skncre',
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