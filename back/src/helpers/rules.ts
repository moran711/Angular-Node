import {ApolloError} from 'apollo-server';
import statusCodes from '../consts/statusCose';
import userMessages from '../modules/user/user.messages';

const {rule, and} = require('graphql-shield');

const isAuthorized = rule()((parent, args, context, info) =>
  context.user
    ? true
    : new ApolloError(
        userMessages.USER_NOT_AUTHORIZED,
        statusCodes.UNAUTHORIZED,
      ),
);

const hasRoles = (roles) =>
  and(
    isAuthorized,
    rule()((parent, args, context, info) =>
      roles.includes(context.user.role)
        ? true
        : new ApolloError(
            userMessages.INVALID_PERMISSIONS,
            statusCodes.FORBIDDEN,
          ),
    ),
  );

const isTheSameUser = and(
  isAuthorized,
  rule()((parent, args, context, info) => {
    return `${context.user._id}` === args.userId
      ? true
      : new ApolloError(
          userMessages.WRONG_CREDENTIALS,
          statusCodes.UNAUTHORIZED,
        );
  }),
);

export {hasRoles, isAuthorized, isTheSameUser};
