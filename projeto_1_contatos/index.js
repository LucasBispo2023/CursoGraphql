const {ApolloServer} = require('apollo-server');
const graphql = require('./src/graphql');
const ContactRegisterService = require('./src/graphql/services/contactRegisterService');
const server = new ApolloServer({
    ...graphql,
    context: () => ({
        contactRegisterService: ContactRegisterService,
    }),
});

server.listen();
