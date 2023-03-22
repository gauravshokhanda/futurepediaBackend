// const { gql } = require("apollo-server-express");

// const typeDefs = gql`
// scalar Date
//   type User{
//     id:ID
//     username: String!
//     currency: String!
//     timeZone: String!
//     company: String!
//     email: String!
//     password: String!
//     role: String!
//     isEmailVerified: Boolean!
//     created_at: Date!
//   }
  
//   type Tags{
//     id:ID
//     value: String
//     created_at: Date!
//   }  
//   input TagInput{
//     value: String
//   }
//   type Query{
//     getTags:[Tags]
//     findATag(id:ID):Tags
//   }
//   type Mutation {
//     addTag(project:TagInput):Tags
//   }
// `;

// module.exports = typeDefs;