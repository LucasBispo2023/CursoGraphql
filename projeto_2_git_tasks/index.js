const {ApolloServer} = require('apollo-server');
const graphql = require('./src/graphql');
const GitHubService = require('./src/graphql/services/GitHub.service');




const server = new ApolloServer({
    ...graphql,
    dataSources: () => ({
        gitHubService: GitHubService,
    }),
});

server.listen();
