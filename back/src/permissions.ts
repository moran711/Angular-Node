import {
  newsPermissionsMutation,
  newsPermissionsQuery,
} from './modules/news/news.permissions';
import {
  userPermissionsMutation,
  userPermissionsQuery,
} from './modules/user/user.permissions';

const {shield} = require('graphql-shield');

const permissions = shield(
  {
    Query: {
      ...userPermissionsQuery,
      ...newsPermissionsQuery,
    },
    Mutation: {
      ...userPermissionsMutation,
      ...newsPermissionsMutation,
    },
  },
  {
    allowExternalErrors: true,
  },
);
export default permissions;
