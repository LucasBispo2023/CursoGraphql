const {ApolloServer} = require('apollo-server');
const graphql = require('../aula 12/src/graphql');
const server = new ApolloServer({
    ...graphql,
    formatError: (err) => {
        if (err.message.startsWith(`Usuário já possui nome cadastrado`)){
            return new Error(err.message);
        }
    }
});

server.listen();