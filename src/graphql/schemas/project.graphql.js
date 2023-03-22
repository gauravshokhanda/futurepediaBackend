
const { Projects } = require("./project.model");
const { GraphQLDate, } = require('graphql-scalars');

const typeDefs = `
type Projects{
    id:ID
    name: String
    user: String!
  }  

  type Query{
    getProjects:[Projects]
    findAProject(id:ID):Projects
  }

  input ProjectInput{
    name: String
    user: String
  }
  type Mutation {
    addProject(project1:ProjectInput):Projects
  }
`

const resolvers = {
  Date: GraphQLDate,
  Query: {
    getProjects: () => {
      return new Promise((resolve, reject) => {
        Projects.find((err, projects) => {
          if (err) reject(err);
          else resolve(projects);
        });
      });
    },
    findAProject: (root, { id }) => {
      return new Promise((resolve, reject) => {
        Projects.findOne({ _id: id }, (err, projects) => {
          if (err) reject(err);
          else resolve(projects);
        });
      });
    },
  },
  Mutation: {
    addProject: (root, { project1 }) => {
      const { ...rest } = project1;
      const newProject = new Projects({ ...rest });
      console.log(newProject)
      return new Promise((resolve, reject) => {
        newProject.save((err, project) => {
          if (err) reject(err);
          else resolve(project);
        });
      });
    },
  },
};
module.exports = { project: { resolvers, typeDefs } };