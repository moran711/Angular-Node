import {gql} from 'apollo-server';
import {userInputs, userTypes} from './modules/user/user.types';

const typeDefs = gql`
  ${userTypes}
  ${userInputs}
  type Query {
    getAllUsers: [User]
    checkToken(token: String): VerifiedToken
  }
  type Mutation {
    registerUser(user: RegisterUserInput!): User
    loginUser(loginInput: LoginInput!): LoginedUser
  }
`;

export {typeDefs};
