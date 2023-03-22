const { MessageTemplate } = require('./messageTemplate.model')

const typeDefs = `
type MessageTemplate {
    id:ID
    content: String!
    templateName: String!
}

type Query {
    getMessageTemplates:[MessageTemplate]
    findAMessageTemplate(id:ID):MessageTemplate
}
input MessageTemplateInput{
    content: String!
    templateName: String!
}
type Mutation {
    addMessageTemplate(messageTemplate:MessageTemplateInput):MessageTemplate
}
`
const resolvers = {
  Query: {
    getMessageTemplates: () => {
      return new Promise((resolve, reject) => {
        MessageTemplate.find((err, messageTemplates) => {
          if (err) reject(err)
          else resolve(messageTemplates)
        })
      })
    },
    findAMessageTemplate: (root, { id }) => {
      return new Promise((resolve, reject) => {
        MessageTemplate.findOne({ _id: id }, (err, messageTemplate) => {
          if (err) reject(err)
          else resolve(messageTemplate)
        })
      })
    }
  },

  Mutation: {
    addMessageTemplate: (root, { messageTemplate }) => {
      const { ...rest } = messageTemplate
      const newMessageTemplate = new MessageTemplate({ ...rest })
      return new Promise((resolve, reject) => {
        newMessageTemplate.save((err, messageTemplate) => {
          if (err) reject(err)
          else resolve(messageTemplate)
        })
      })
    }
  }
}

module.exports = { messageTemplate: { resolvers, typeDefs } }
