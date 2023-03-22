const { mergeResolvers } = require('@graphql-tools/merge')
const {  resolvers:projectResolver } = require('./project.graphql');
const {  resolvers:customerResolver } = require('./customer.graphql');
const resolvers = [projectResolver, customerResolver]
module.exports = mergeResolvers(resolvers)