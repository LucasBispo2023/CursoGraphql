const db = require('../../../db');

function geradorDeId(lista){
    let novoId;
    let ultimo = lista[lista.length - 1 ];
    if (!ultimo){
        novoId = 0;
    } else {
        novoId = ultimo.id;
    }
    return ++novoId;
}

module.exports = {
    Usuario: {
        perfil(obj) {
            return db.perfis.find(perfil => perfil.id == obj.perfil)
        }
    },
    Query: {
        usuario(obj,args){
            return db.usuarios.find(db => db.id == args.id);
        },
        usuarios(){
            return db.usuarios;
        },
    },
    Mutation: {
        criarUsuario(_,args) {

            const { nome } = args;

            const usuarioExistente = db.usuarios.some(u => u.nome === args.nome);

            if (usuarioExistente){
                throw new Error (`Usuário já possui nome cadastrado: ${args.nome}`);
            }

            const novoUsuario = {
                ...args,
                id: geradorDeId(db.usuarios),
                perfil_id: 2
            };
            db.usuarios.push(novoUsuario);
            return novoUsuario;
        }
    }
};