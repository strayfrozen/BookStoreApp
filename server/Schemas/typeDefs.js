const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Me {
    username: String
    email: String
    password: String
    savedBooks: [Book]  
  }
`;


module.exports = typeDefs;