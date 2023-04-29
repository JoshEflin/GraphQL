const { Book, User } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return User.find({});
    },
//     users: async (parent, { _id }) => {
//       const params = _id ? { _id } : {};
//       return User.find(params);
    },
//   },
//   Mutation: {
//     createUser: async (parent, args) => {
//       const user = await User.create(args);
//       return user;
//     },
//     addBook: async (parent, { _id, techNum }) => {
//       const vote = await User.findOneAndUpdate(
//         { _id },
//         { $inc: { [`tech${techNum}_votes`]: 1 } },
//         { new: true }
//       );
//       return vote;
//     },
//   },
};

module.exports = resolvers;