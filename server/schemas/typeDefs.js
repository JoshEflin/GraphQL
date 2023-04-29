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
    _id: ID
    authors:[String]
    description: String!
    bookId:String
    image:String
    link:String
    title:String!
  }

  type Query {
    users: [User]
    user(userId:ID!):User
    books:[Book]
    book(bookId:ID!):Book
  }

  type Mutation {
    addBook(authors:[String!], description:String!,bookId:String,image:String,link:String,title:String!): Book
    createUser(username:String!, email:String!,password:String!): Book
  }
`;

module.exports = typeDefs;