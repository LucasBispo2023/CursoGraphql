const { gql, ApolloServer } = require('apollo-server');

const db = {
    usuarios: [
        {
            id: 1,
            nome: "Lucas",
            idade: 28,
            ativo: true,
            perfil: 1
        },
        {
            id: 2,
            nome: "João",
            idade: 28,
            ativo: true,
            perfil: 2
        }
    ],

    perfis: [
        { id: 1, descricao: "ADMIN" },
        { id: 2, descricao: "NORMAL" }
    ]
};

const typeDefs = gql` 
    enum TipoDePerfil {
        ADMIN NORMAL
    }

    type Perfil {
        id: ID,
        descricao: TipoDePerfil
    }
    
    type Usuario {
        id: ID,
        nome: String,
        idade: Int,
        ativo: Boolean,
        perfil: Perfil
    }

    type Query {
        usuarios: [Usuario],
        usuario(id: ID): Usuario,
        perfis: [Perfil]
        perfil(id:ID): Perfil
    }
`;

const resolvers = {
    Usuario: {
        perfil(obj) {
            return db.perfis.find(perfil => perfil.id == obj.perfil)
        }
    },

    Query: {
        usuario(obj,args){
            return db.usuarios.find(db => db.id == args.id);
        },
        perfis(){
            return db.perfis;
        },
        usuarios(){
            return db.usuarios;
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen();
