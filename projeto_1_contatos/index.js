const {ApolloServer} = require('apollo-server');
const graphql = require('../aula 14/src/graphql');
const server = new ApolloServer({
    ...graphql,
    formatError: (err) => {
        if(err.message.startsWith(`Usuario já possui nome cadastrado:`)){
            return Error(err.message);
        }
        return err;
    }
});

server.listen();