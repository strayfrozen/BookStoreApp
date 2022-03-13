//const { signToken } = require('../utils/auth');
const { User } = require('../models');
//const { AuthenticationError } = require("apollo-server-express");

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

       const token = signToken(user);
      return { token, user };
      
      },
      saveBook: async () => {
  
      },
      removeBook: async () => {
  
      }
    }


  };

  
  
  module.exports = resolvers;