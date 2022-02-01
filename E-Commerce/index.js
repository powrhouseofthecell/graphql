import { ApolloServer } from 'apollo-server';
import Query from './resolvers/Query.js';
import Product from './resolvers/Product.js';
import Category from './resolvers/Category.js';
import typeDefs from './Schema.js';
import { products, categories, reviews } from './db.js';

const server = new ApolloServer({
   typeDefs,
   resolvers: {
      Query,
      Product,
      Category,
   },
   context: {
      products,
      categories,
      reviews,
   },
});

server.listen().then(({ url }) => {
   console.log('Server running on port ' + url);
});
