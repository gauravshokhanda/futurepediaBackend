const express = require('express')
const { makeExecutableSchema } = require('@graphql-tools/schema')
const { ApolloServer } = require('apollo-server-express')
const { messageTemplate } = require('./schemas/messageTemplate.graphql')
const { project } = require('./schemas/project.graphql')
const { customer } = require('./schemas/customer.graphql')
const { contact } = require('./schemas/contact.graphql')
const { agent } = require('./schemas/agent.graphql')
const { seedRoles } = require('./schemas/role.graphql')

const schema = makeExecutableSchema({
  typeDefs: [project.typeDefs, customer.typeDefs,  agent.typeDefs],
  resolvers: [project.resolvers, customer.resolvers, agent.resolvers]
})

const apolloServer = new ApolloServer({ schema })

const initApollo = async () => {
  const appoloApp = express()
  await apolloServer.start()
  apolloServer.applyMiddleware({ app: appoloApp })
  appoloApp.listen({ port: 9999 }, () => {
    seedDb()
    console.log(`🚀 Server ready at http://localhost:9999${apolloServer.graphqlPath}`)
  })
}

const seedDb = () => {
  seedRoles()
}
module.exports = { initApollo }
