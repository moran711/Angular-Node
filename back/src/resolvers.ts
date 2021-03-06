import {GraphQLUpload} from 'apollo-server';
import {newsMutation, newsQuery} from './modules/news/news.resolver';
import userController from './modules/user/user.controller';
import {userMutation, userQuery} from './modules/user/user.resolver';

const resolvers = {
  Query: {
    ...userQuery,
    ...newsQuery,
  },
  Mutation: {
    ...userMutation,
    ...newsMutation,
  },
  Upload: GraphQLUpload,
  News: {
    author: (parent) => userController.getUserById(parent.author),
  },
};

export {resolvers};
