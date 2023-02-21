const {RESTDataSource} = require('apollo-datasource-rest');


class GitHubService extends RESTDataSource{
    // Estrutura da Documentação
    constructor() {
        super();
        this.baseURL = "https://api.github.com";
    }

    // Método para retornar determinado usuário
    async getUser(login){
        return await this.get(`/users/${login}`);
    }
}

module.exports = new GitHubService();