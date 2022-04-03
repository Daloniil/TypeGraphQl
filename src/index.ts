import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server-express";
import express, { Express } from "express";
import { TaskResolver } from "./resolvers/task";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { createConnection } from "typeorm";
import { Task } from "./entity/Task";

const main = async () => {
  await createConnection({
    type: "postgres",
    database: "typeGraphQl",
    entities: [Task],
    logging: true,
    synchronize: true,
    username: "daloniil",
    password: "daloniil",
    port: 5432,
  });

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [TaskResolver],
      validate: false,
    }),
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
  });

  await apolloServer.start();
  const app: Express = express();

  apolloServer.applyMiddleware({ app });

  app.get("/", (_res, res) => res.send("hello world"));

  const PORT = process.env.PORT || 8000;
  app.listen(PORT, () => console.log(`Server start on port ${PORT}`));
};

main().catch((err) => console.error(err));
