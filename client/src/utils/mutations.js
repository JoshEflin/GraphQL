import { gql } from "@apollo/client"

export const USER_LOGIN = gql `
mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`

export const USER_SIGNUP = gql `
mutation Login($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
    }
  }
`