import {ApolloError} from 'apollo-server';

const {rule, and} = require('graphql-shield');

const isAuthorized = rule()((parent, args, context, info) =>
  context.user ? true : new ApolloError('USER_NOT_AUTHORIZED', '401'),
);

const hasRoles = (roles) =>
  and(
    isAuthorized,
    rule()((parent, args, context, info) =>
      roles.includes(context.user.role)
        ? true
        : new ApolloError('INVALID_PERMISSIONS', '403'),
    ),
  );

const isTheSameUser = and(
  isAuthorized,
  rule()((parent, args, context, info) =>
    `${context.user._id}` === args.id
      ? true
      : new ApolloError('WRONG_CREDENTIALS', '401'),
  ),
);

module.exports = {
  hasRoles,
  isAuthorized,
  isTheSameUser,
};
