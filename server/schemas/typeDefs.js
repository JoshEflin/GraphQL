const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email:String!
    password:String!
    savedBooks:[Book]
  }
  type Auth {
    token: ID!
    user: User
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

  input BookInput {
    authors:[String!]
    description:String!
    bookId:String
    image:String
    link:String
    title:String!
  }
  type Mutation {
    addUser(username:String!, email:String!, password:String!): Auth
    login(email:String!, password:String!):Auth
    saveBook(authors:[String!], description:String!, bookId:String, image:String,link:String, title:String!, _id: ID!): User
    addBook(authors:[String!], description:String!, bookId:String, image:String,link:String, title:String!, _id: ID!): User
  }
  `;
  
  module.exports = typeDefs;