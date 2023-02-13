const { gql, ApolloServer } = require('apollo-server')

/*
* ==> Schema
*/

const usuarios = [
    {
        idade: 18,
        nome: 'Paulo',
        salario: 4356.75,
        ativo: true,
        id: 1267354
    },
    {
        idade: 18,
        nome: 'Paulo',
        salario: 4356.75,
        ativo: true,
        id: 1267454
    }
]

const produtos = [
    {
        id:2,
        nome: "Abacaxi",
        preco: "6.45",
        ativo: true,
        quantidade: 10
    },
    {
        id:1,
        nome: "Laranja",
        preco: "4.50",
        ativo: true,
        quantidade: 30
    }
]

const typeDefs = gql ` 

    type Produto {
        id: ID
        quantidade: Int
        preco: Float
        ativo: Boolean
        nome: String
    }

    type Usuario {
        idade: Int
        salario: Float
        nome: String
        ativo: Boolean
        id: ID
    }

    type Query {
        usuarios: [Usuario]
        produtos: [Produto]
    }   
`;

const resolvers = {

    Query: {
        usuarios() {
            return usuarios;
        },

        produtos() {
            return produtos;

        }
    }
};

//Criação do servidor apollo.
const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen();