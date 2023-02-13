const {gql, ApolloServer} = require('apollo-server')

const db = [

    {
        id:1,
        nome: "Abacaxi",
        preco: 7.50,
        quantidade_estoque: 10,
        ativo: true
    },
    {
        id:1,
        nome: "Manga",
        preco: 8.50,
        quantidade_estoque: 15,
        ativo: true
    }
];

const usuarios = [
    {
        id:1,
        nome:"Lucas",
        idade: 28,
        ativo: true,
        perfil: 2
    },
    {
        id: 2,
        nome: "Sol",
        idade: 0,
        ativo: true,
        perfil: 1
    }
];

const perfis = [
    {
        id: 1,
        link: "linkdoperfil/1"
    },
    {
        id: 2,
        link: "linkdoperfil/2"
    }
]

const typeDefs = gql `

    type Produto {
        id: ID,
        nome: String,
        preco: Float,
        quantidade: Int,
        ativo: Boolean,
    }

    type Usuario {
        id: ID,
        nome: String,
        idade: Int,
        ativo: Boolean,
        perfil: Perfil
    }

    type Perfil {
        id: ID,
        link: String,
    }

    type Query {
        produtos: [Produto],
        produto: Produto,
        usuario(id: Int): Usuario,
        perfis: [Perfil]
    }
`;

const resolvers = {

    Produto: {
        quantidade(obj) {
            return obj.quantidade_estoque;
        },
    },

    Usuario: {
        perfil(usuario) {
            return perfis.find(perfil => perfil.id == usuario.perfil);
        }
    },

    Query: {
        produto(){
            return db[0];
        },
        perfis(){
            return perfis;
        },
        usuario(_,args){
            return usuarios.find(usuario => usuario.id == args.id);
        }
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen();
