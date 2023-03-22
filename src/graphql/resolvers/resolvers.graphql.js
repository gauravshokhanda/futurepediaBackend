
// const { Projects } = require("../../models/project.model");
// const { dateScalar } = require("./scalars");
// /**
//  * GraphQL Resolvers
//  **/

// module.exports = resolvers = {
//   Date: dateScalar,
//   Query: {
//     getProjects: (root) => {
//       return new Promise((resolve, reject) => {
//         Projects.find((err, projects) => {
//           if (err) reject(err);
//           else resolve(projects);
//         });
//       });
//     },
//     findAProject: (root, { id }) => {
//       return new Promise((resolve, reject) => {
//         Projects.findOne({ _id: id }, (err, projects) => {
//           if (err) reject(err);
//           else resolve(projects);
//         });
//       });
//     },
//   },
//   Mutation: {
//     addProject: (root, { project }) => {
//       const { ...rest } = project;
//       const newProject = new Projects({ ...rest });
//       return new Promise((resolve, reject) => {
//         newProject.save((err, project) => {
//           if (err) reject(err);
//           else resolve(project);
//         });
//       });
//     },
//   },
// };