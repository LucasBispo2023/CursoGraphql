const {ApolloServer} = require('apollo-server');
const graphql = require('../aula 13/src/graphql');
const server = new ApolloServer({
    ...graphql,
    formatError: (err) => {
        if(err.message.startsWith(`Usuario já possui nome cadastrado:`)){
            return Error(err.message);
        }
    }
});

server.listen();    