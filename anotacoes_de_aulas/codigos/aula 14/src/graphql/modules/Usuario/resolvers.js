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
        criarUsuario(_,{data}) {

            const { nome } = data;

            const usuarioExistente = db.usuarios.some(u => u.nome === data.nome);

            if (usuarioExistente){
                throw new Error (`Usuário já possui nome cadastrado: ${data.nome}`);
            }

            const novoUsuario = {
                ...data,
                id: geradorDeId(db.usuarios),
                perfil_id: 2
            };
            db.usuarios.push(novoUsuario);
            return novoUsuario;
        },

        atualizarUsuario(_,{id, data}) {
            const usuario = db.usuarios.find(usuario => usuario.id === id); // Pega o objeto a ser modificado
            const index = db.usuarios.findIndex(usuario => usuario.id === id); //Pega o índice desse objeto

            const novoUsuario = { //Cria o usuario modificado
                ...usuario, 
                ...data
            }

            db.usuarios.splice(index,1,novoUsuario); // Faz a modificação do objeto recebendo o índice, como vai ficar o objeto e quantos objetos serão removidos (apenas o a atualizar).

            return novoUsuario;
        },

        deletarUsuario(_,{filtro: {id, nome}}){
           return deletarUsuarioFiltro(id ? {id} : {nome})
        }
    }
};

function deletarUsuarioFiltro(filtro){

    const chave = Object.keys(filtro)[0];
    const value = Object.values(filtro)[0];

    const usuarioEncontrado = db.usuarios.find((u) => u[chave] ===value );
    db.usuarios = db.usuarios.filter((u) => u[chave] !== value );  
    return !!usuarioEncontrado;   
}