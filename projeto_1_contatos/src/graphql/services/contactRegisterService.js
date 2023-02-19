const db = require('../../db')

class ContactRegisterService {
    constructor(service){
        this.service = service;
    }

    contacts = async () => await this.service('contatos');

    newContact = async (data) => {
        const [newContact] = await this.service('contatos').insert(data).returning("*");
        return newContact;
    };

    updateContact = async (id, data) => {
        const [updatedContact] = await this.service('contatos')
          .where({ id })
          .update(data)
          .returning('*');
      
        return updatedContact;
    };

    deleteContact = async (filter) => {
        if (filter.id) { 
            return await this.service('contatos').where({id: filter.id}).delete();
        } 
        if (filter.email) {
            return await this.service('contatos').where({email: filter.email}).delete();
        }

        throw new Error(`No contact parameter passed.`)
        
    }
}

module.exports = new ContactRegisterService(db);