const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email:String!
    password:String!
    savedBooks:[Book]
  }

  type Book {
    authors:[String]
    description: String!
    bookid:String
    image:String
    link:String
    title:String!
  }

  type Query {
    User: [User]
    books(_id: String): [Book]
  }

  type Mutation {
    createBook(User1: String!, User2: String!): Book
    createVote(_id: String!, UserNum: Int!): Book
  }
`;

module.exports = typeDefs;