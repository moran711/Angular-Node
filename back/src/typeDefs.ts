import {gql} from 'apollo-server';
import {userInputs, userTypes} from './modules/user/user.types';
import {newsInputs, newsTypes} from './modules/news/news.types';
const typeDefs = gql`
  ${userTypes}
  ${newsTypes}
  ${newsInputs}
  ${userInputs}
  type Query {
    getAllUsers: [User]
    checkToken(token: String!): VerifiedToken
    getUserById(userId: ID!): User
    getAllNews: [News]
    getNewsById(id: ID!): News
  }
  type Mutation {
    addNews(data: NewsInput): News
    registerUser(user: RegisterUserInput!): User
    loginUser(loginInput: LoginInput!): LoginedUser
  }
`;

export {typeDefs};
