//const { signToken } = require('../utils/auth');
const { User } = require('../models');

const resolvers = {
    Query: {
      me:  () => {
        return me.find().sort({ createdAt: -1 });
          }
     }  ,
     Mutation: {
      login: async () => {
  
      },
      addUser: async (parent, args) => {
        const user = await User.create(args);
      
        return user;
      },
      saveBook: async () => {
  
      },
      removeBook: async () => {
  
      }
    }


  };

  
  
  module.exports = resolvers;