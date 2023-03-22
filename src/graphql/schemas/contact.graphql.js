
const { Contact } = require("./contact.model");

const typeDefs = `
type Contact{
    id:ID
    name: String
    phone: String
    tag:[String]
    attributes:[String]
    projectId:String
  }  
  input ContactInput{
    name: String
    phone: String
    tag:[String]
    attributes:[String]
    projectId:String
  }
  type Query{
    getContacts:[Contact]
    findAContact(id:ID):Contact
  }
  type Mutation {
    addContact(user:ContactInput):Contact
  }
`

const resolvers = {
  Query: {
    getContacts: (root) => {
      return new Promise((resolve, reject) => {
        Contact.find((err, Contact) => {
          if (err) reject(err);
          else resolve(Contact);
        });
      });
    },
    findAContact: (root, { id }) => {
      return new Promise((resolve, reject) => {
        Contact.findOne({ _id: id }, (err, Contact) => {
          if (err) reject(err);
          else resolve(Contact);
        });
      });
    },
  },
  Mutation: {
    addContact: (root, { user }) => {
      const { ...rest } = user;
      const newContact = new Contact({ ...rest });
      console.log(newContact)
      return new Promise((resolve, reject) => {
        newContact.save((err, user) => {
          if (err) reject(err);
          else resolve(user);
        });
      });
    },
  },
};
module.exports = { contact: { resolvers, typeDefs } };