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
  News: {
    author: (parent) => userController.getUserById(parent.author),
  },
};

export {resolvers};
