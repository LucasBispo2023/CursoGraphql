const {ApolloServer} = require('apollo-server');
const graphql = require('./src/graphql');
const GitHubService = require('./src/services/GitHub.service');
const TaskRegisterService = require('./src/services/TaskRegisterService');
const UserRegisterService = require('./src/services/UserRegisterService');




const server = new ApolloServer({
    ...graphql,
    dataSources: () => ({
        gitHubService: GitHubService,
        userRegisterService: UserRegisterService,
        tasksRegisterService: TaskRegisterService
    }),
    context: ({req}) => {
        const user_id = req.headers.authorization;
        return {
            user_id,
        };
    },
});

server.listen();
