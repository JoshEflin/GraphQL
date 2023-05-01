import { gql } from "@apollo/client"

export const USER_LOGIN = gql `
mutation userLogin($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`