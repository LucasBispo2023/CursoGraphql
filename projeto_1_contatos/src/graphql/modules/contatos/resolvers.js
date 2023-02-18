const db = require('../../../db');

module.exports = {

    Query: {
        contacts(){
            return db('contatos');
        }
    },

    Mutation: {
        newContact: async (_, { data }) => {
            const [newContact] = await db('contatos').insert(data).returning("*");
            return newContact;
        },
        updateContact: async (_, { id, data }) => {
            const [updatedContact] = await db('contatos')
              .where({ id })
              .update(data)
              .returning('*');
          
            return updatedContact;
        },
        deleteContact: async (_,{filter}) => {
            if (filter.id) { 
                return await db('contatos').where({id: filter.id}).delete();
            } 
            if (filter.email) {
                return await db('contatos').where({email: filter.email}).delete();
            }

            throw new Error(`No contact parameter passed.`)
            
        }
        
    }
    
    
}