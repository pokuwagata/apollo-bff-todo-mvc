import { ApolloServer } from "apollo-server";
import 'graphql-import-node';
import typeDefs from "./schema.graphql";
import resolvers from "./resolver";

const server = new ApolloServer({
  typeDefs,
  resolvers,
})
  .listen()
  .then(({ url }) => console.log(`GraphQL Service running on ${url}`));
