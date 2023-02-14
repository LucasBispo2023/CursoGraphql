const {gql, ApolloServer} = require('apollo-server');

const db = {
    usuarios: [
        {
            id:1,
            nome: "Lucas",
            idade: 28,
            ativo: true,
            perfil: 1
        },
        {
            id:2,
            nome: "Pedro",
            idade: 18,
            ativo: true,
            perfil: 2
        }
    ],
    perfis: [
        {id: 1, link: "link1"},
        {id: 2, link: "link2"}
    ]
}

const typeDefs = gql `

    type Usuario {
        id: ID,
        nome: String,
        idade: Int,
        ativo: Boolean,
        perfil: Perfil
    },

    type Perfil {
        id: ID,
        link: String
    },

    type Query {
        usuario(id: ID): Usuario,
        perfis: [Perfil]
        usuarios: [Usuario]
    }

`;

const resolvers = {

    Usuario: {
        perfil(obj){
            return db.perfis.find((p) => p.id == obj.perfil);
        }
    },

    Query: {
        usuario(obj, args) {
            return db.usuarios.find((db) => db.id == args.id);
        },
        perfis() {
            return perfis;
        },
        usuarios(){
            return db.usuarios;
        }
    }
 };

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen()