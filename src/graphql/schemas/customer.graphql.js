const { Customers } = require('./customer.model')
const { GraphQLDate } = require('graphql-scalars')

const typeDefs = `
scalar Date
type Customers{
    id:ID
    currency:String
    username: String
    timeZone:String
    company:String
    email:String
    password:String
    role:String
    isEmailVerified:Boolean
  }  
  input CustomerInput{
    username: String
    currency: String
    timeZone:String
    company:String
    email:String
    password:String
    role:String
    isEmailVerified:Boolean
  }
  type Query{
    getCustomers:[Customers]
    findACustomer(id:ID):Customers
  }
  type Mutation {
    addCustomer(customer:CustomerInput):Customers
    deleteCustomer(id:ID):Customers
    updateCustomer(id:ID,customer:CustomerInput):Customers
  }
`

const resolvers = {
  Date: GraphQLDate,
  Query: {
    getCustomers: root => {
      return new Promise((resolve, reject) => {
        Customers.find((err, customers) => {
          if (err) reject(err)
          else resolve(customers)
        })
      })
    },
    findACustomer: (root, { id }) => {
      return new Promise((resolve, reject) => {
        Customers.findOne({ _id: id }, (err, customers) => {
          if (err) reject(err)
          else resolve(customers)
        })
      })
    }
  },
  Mutation: {
    addCustomer: (root, { customer }) => {
      const { ...rest } = customer
      const newCustomer = new Customers({ ...rest })
      console.log(newCustomer)
      return new Promise((resolve, reject) => {
        newCustomer.save((err, customer) => {
          if (err) reject(err)
          else resolve(customer)
        })
      })
    },
    deleteCustomer: (root, { id }) => {
      return new Promise((resolve, reject) => {
        Customers.findOneAndDelete({ _id: id }, (err, customer) => {
          if (err) reject(err)
          else resolve(customer)
        })
      })
    },
    updateCustomer: (root, { id, customer }) => {
      return new Promise((resolve, reject) => {
        Customers.findOneAndUpdate({ _id: id }, { $set: customer }, { new: true }, (err, customer) => {
          if (err) reject(err)
          else resolve(customer)
        })
      })
    }
  }
}
module.exports = { customer: { resolvers, typeDefs } }
