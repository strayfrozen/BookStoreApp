const resolvers = {
    Query: {
      me:  () => {
              return username;
          }
        }
  };
  
  module.exports = resolvers;