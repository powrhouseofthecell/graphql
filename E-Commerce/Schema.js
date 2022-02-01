import { gql } from 'apollo-server';
const typeDefs = gql`
   type Query {
      hello: String
      products: [Product!]!
      product(id: ID!): Product
      category(id: ID!): Category
      categories: [Category!]!
   }
   type Product {
      id: ID!
      name: String!
      description: String! # Non Nullable
      quantity: Float!
      image: String!
      price: Float!
      onSale: Boolean!
      category: Category
      reviews: [Review!]!
   }
   type Category {
      id: ID!
      name: String!
      products: [Product!]!
   }
   type Review {
      id: ID!
      date: String!
      title: String!
      comment: String!
      rating: Int!
   }
   # input
`;

export default typeDefs;
