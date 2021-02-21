import {
  userPermissionsMutation,
  userPermissionsQuery,
} from './modules/user/user.permissions';

const {shield} = require('graphql-shield');

const permissions = shield(
  {
    Query: {
      ...userPermissionsQuery,
    },
    Mutation: {
      ...userPermissionsMutation,
    },
  },
  {
    allowExternalErrors: true,
  },
);
export default permissions;
