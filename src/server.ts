import { createServer } from "http";
import express from "express";
import { createGraphQLServer } from "./graphql/graphql-server";

(async () => {
  const app = express();
  const server = createGraphQLServer();
  const port = process.env.PORT || "4000";
  const httpServer = createServer(app);
  await server.start();

  server.applyMiddleware({ app, path: "/graphql" });

  httpServer.listen({ port }, (): void => {
    console.log(`🚀 User service is started on port: ${port} 🚀\n`);
  });
})();
