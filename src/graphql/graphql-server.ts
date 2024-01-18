import { ApolloServer } from "apollo-server-express";
import { resolvers } from "./resolvers";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge";
import { buildSubgraphSchema } from "@apollo/subgraph";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import createContext from "./context";
import path from "path";

const typesArray = loadFilesSync(path.join(__dirname, "./schema"), {
  extensions: ["graphql"],
});

export function createGraphQLServer() {
  const server = new ApolloServer({
    context: createContext,
    schema: buildSubgraphSchema([
      {
        typeDefs: mergeTypeDefs(typesArray),
        resolvers,
      },
    ]),
    introspection: true,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
  });

  return server;
}
