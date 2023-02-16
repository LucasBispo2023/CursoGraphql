const { ApolloServer } = require('apollo-server');
const { typeDefs,resolvers } = require('./aula 10/src/graphql'); // import dos typeDefs e resolvers




const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen();
