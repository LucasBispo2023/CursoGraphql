const {ApolloServer} = require('apollo-server');
const graphql = require('./src/graphql');
const GitHubService = require('./src/graphql/services/GitHub.service');
const TaskRegisterService = require('./src/graphql/services/TaskRegisterService');
const UserRegisterService = require('./src/graphql/services/UserRegisterService');




const server = new ApolloServer({
    ...graphql,
    dataSources: () => ({
        gitHubService: GitHubService,
        userRegisterService: UserRegisterService,
        taskRegisterService: TaskRegisterService
    }),
});

server.listen();
