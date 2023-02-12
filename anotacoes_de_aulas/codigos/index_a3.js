const {gql, ApolloServer } = require('apollo-server')

/**
 * Scallar Types
 * - Int
 * - Float
 * - String
 * - Boolean
 * - ID
 */

//Definição dos tipos
const typeDefs = gql ` 
    type Query {
        idade: Int
        salario: Float
        nome: String
        ativo: Boolean
        id: ID
        tecnologias: [String]!
    }
`;

//Resolvers
const resolvers = {
    Query: {
        idade() {
            return 18;
        },
        salario() {
            return 1750.00;
        },
        nome() {
            return "Lucas Bispo";
        },
        ativo() {
            return true;
        },
        id() {
            return 1;
        },
        tecnologias(){
            return ['Graphql', 'React', 'CSS', 'Ruby on Rails'];
        }
    }
};

//Criação do servidor apollo.
const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen();