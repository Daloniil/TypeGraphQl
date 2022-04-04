"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ormconfig_1 = require("./../ormconfig");
require("reflect-metadata");
const type_graphql_1 = require("type-graphql");
const apollo_server_express_1 = require("apollo-server-express");
const express_1 = __importDefault(require("express"));
const task_1 = require("./resolvers/task");
const apollo_server_core_1 = require("apollo-server-core");
const typeorm_1 = require("typeorm");
const main = async () => {
    await (0, typeorm_1.createConnection)(ormconfig_1.ormConfig);
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema: await (0, type_graphql_1.buildSchema)({
            resolvers: [task_1.TaskResolver],
            validate: false,
        }),
        plugins: [apollo_server_core_1.ApolloServerPluginLandingPageGraphQLPlayground],
    });
    await apolloServer.start();
    const app = (0, express_1.default)();
    apolloServer.applyMiddleware({ app });
    app.get("/", (_res, res) => res.send("hello world"));
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => console.log(`Server start on port ${PORT}`));
};
main().catch((err) => console.error(err));
//# sourceMappingURL=index.js.map