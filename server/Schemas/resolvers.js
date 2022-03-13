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
      addUser: async () => {
  
      },
      saveBook: async () => {
  
      },
      removeBook: async () => {
  
      }
    }


  };

  
  
  module.exports = resolvers;