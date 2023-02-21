
const db = require('../../../db');

module.exports = {
    Query: {
        async user(_, {login}, {dataSources} ){
            const userFound = await dataSources.userRegisterService.getUserByLogin(login);

            if(userFound) return userFound;

            const {
                login: loginGit,
                avatar_url
            } = await dataSources.gitHubService.getUser(login)

            return dataSources.userRegisterService.addUser({
                login: loginGit,
                avatar_url
            });
        },

        async users() { return await db('users')}
    },
    User: {
        async tasks(user,_,{dataSources}) {
            return await dataSources.tasksRegisterService.getTasks(user.id);
        }
    }
}