const { join } = require('path');
const {loadFilesSync} = require('@graphql-tools/load-files'); //import para leitura de arquivos
const {mergeTypeDefs,mergeResolvers}= require('@graphql-tools/merge') //import para as ferramentas de merge

const allTypes = loadFilesSync(join(__dirname,'modules','**','*.gql')); //leitura e junção de todos os tipos no caminho específico

const typeDefs = mergeTypeDefs(allTypes); // Merge dos tipos

const allResolvers = loadFilesSync(join(__dirname,'modules','**','*.js')); //leitura e junção de todos os resolvers no caminho específico

const resolvers = mergeResolvers(allResolvers); // merge dos Resolvers

module.exports = {resolvers, typeDefs}; // Exportação dos typeDefs e Resolvers
