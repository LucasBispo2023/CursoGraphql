const {gql, ApolloServer} = require('apollo-server')

const usuarios = [
    {
        id:1,
        nome:"Lucas",
        idade: 28,
        ativo: true,
    },
    {
        id: 2,
        nome: "Sol",
        idade: 0,
        ativo: true
    }
];

const produtos = [
    {
        id:1,
        nome: "Abacaxi",
        preco: 7.50,
        quantidade: 10,
        ativo: true
    },
    {
        id:1,
        nome: "Manga",
        preco: 8.50,
        quantidade: 15,
        ativo: true
    }
];


const typeDefs = gql `

    type Produto {
        id: ID,
        nome: String,
        preco: Float,
        quantidade: Int,
        ativo: Boolean
    },

    type Usuario {
        id: ID,
        nome: String,
        idade: Int,
        ativo: Boolean
    },

    type Query {
        usuarios: [Usuario]
        produtos: [Produto]
        usuario(id: Int, nome: String): Usuario
        produto(id: Int, nome: String): Produto
    }
`;

const resolvers = { 

    Query:{
        usuarios(){
            return usuarios;
        },
        produtos(){
            return produtos;
        },
        usuario(_,args){
            const { id, nome } = args // Pegando o id e o nome de args.
            if(id)
                return usuarios.find(usuario => usuario.id == args.id);
            else
                return usuarios.find(usuario => usuario.nome == args.nome);            
        },
        produto(_,args){
            const {id, nome} = args;
            if(id) return produtos.find(produto => produto.id == args.id);
            else return produtos.find(produto => produto.nome == args.nome);
        }

        
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen();