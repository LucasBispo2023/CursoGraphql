
module.exports = {

    Query: {
        contacts: async (obj, args, context, info) => await context.contactRegisterService.contacts(),
    },

    Mutation: {
        newContact: async (_, { data }, context) => await context.contactRegisterService.newContact(data),

        updateContact: async (_, { id, data }, context) => await context.contactRegisterService.updateContact(id, data),

        deleteContact: async (_,{filter}, context) => await context.contactRegisterService.deleteContact(filter)
        
    }
    
    
}