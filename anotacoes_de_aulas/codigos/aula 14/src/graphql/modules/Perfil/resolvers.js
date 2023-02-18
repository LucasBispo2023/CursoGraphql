const db = require('../../../db')

module.export = {
    Query: {
        perfis() {
            return db.perfis;
        },
    }
}