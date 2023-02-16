const db = require('../../../db');

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
        }
    }
};