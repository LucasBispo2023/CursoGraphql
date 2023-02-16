const {ApolloServer} = require('apollo-server');
const {db} = require('../aula 11/src/db/index');
const {typeDefs,resolvers} = require('../aula 11/src/graphql/index');
const {a} = require('../aula 11/src/graphql/index')
console.log(a)

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen();
