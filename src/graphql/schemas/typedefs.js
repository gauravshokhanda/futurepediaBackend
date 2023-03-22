const { mergeTypeDefs } = require('@graphql-tools/merge')
const {  typeDefs:projectResolver } = require('./project.graphql');
const {  typeDefs:customerResolver } = require('./customer.graphql');

const resolvers = [projectResolver, customerResolver]
module.exports = mergeTypeDefs(resolvers)