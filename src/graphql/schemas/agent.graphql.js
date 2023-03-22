const { Agents } = require("./agent.model");
const typeDefs = `
type Agents{
    id:ID
    name: String!
    isEmailVerified:Boolean
    password: String!
    email: String!
    role: String
  }  
  
  type Query{
    getAgents:[Agents]
    findAAgent(id:ID):Agents
  }
  input AgentInput{
    name: String!
    password: String!
    email: String!
    role: String
    isEmailVerified:Boolean
  }
  type Mutation {
    addAgent(agent:AgentInput):Agents
    deleteAgent(id:ID):Agents
  }
`
const resolvers = {
  Query: {
    getAgents: () => {
      return new Promise((resolve, reject) => {
        Agents.find((err, agents) => {
          if (err) reject(err);
          else resolve(agents);
        });
      });
    },
    findAAgent: (root, { id }) => {
      return new Promise((resolve, reject) => {
        Agents.findOne({ _id: id }, (err, agents) => {
          if (err) reject(err);
          else resolve(agents);
        });
      });
    },
  },
  Mutation: {
    addAgent: (root, { agent }) => {
      const { ...rest } = agent;
      const newAgent = new Agents({ ...rest });
      console.log(newAgent)
      return new Promise((resolve, reject) => {
        newAgent.save((err, agent) => {
          if (err) reject(err);
          else resolve(agent);
        });
      });
    },
    deleteAgent: (root, { id }) => {
      return new Promise((resolve, reject) => {
        Agents.findOneAndDelete({ _id: id }, (err, agent) => {
          if (err) reject(err);
          else resolve(agent);
        });
      });
    }
  },
};
module.exports = { agent: { resolvers, typeDefs } };