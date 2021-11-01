import { gql } from '@apollo/client';

export const REGISTER_USER = gql`
  mutation (
    $name: String
    $email: String
    $profile: String
    $password: String
  ) {
    registerUser(
      name: $name
      email: $email
      profile: $profile
      password: $password
    ) {
      id
      email
      name
      profile
      token
    }
  }
`;

export const LOGIN_USER = gql`
  mutation ($email: String, $password: String) {
    loginUser(email: $email, password: $password) {
      id
      email
      name
      profile
      token
    }
  }
`;
