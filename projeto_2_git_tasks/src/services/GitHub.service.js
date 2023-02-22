const {RESTDataSource} = require('apollo-datasource-rest');
const UserNotFoundError = require('../errors/UserNotFoundError')


class GitHubService extends RESTDataSource{
    // Estrutura da Documentação
    constructor() {
        super();
        this.baseURL = "https://api.github.com";
    }

    // Método para retornar determinado usuário
    async getUser(login){
        try{
            return await this.get(`/users/${login}`);
        } catch(e) {
            if(e.extensions.response.status === 404) throw new UserNotFoundError("Usuário não encontrado! :" + login);
            throw new Error(e);
        }
    }
}

module.exports = new GitHubService();