//const { signToken } = require('../utils/auth');
const { User } = require('../models');

const resolvers = {
    Query: {
      me: asnyc () => {
        return me.find().sort({ createdAt: -1 });
          }
     }  
  };
  
  module.exports = resolvers;