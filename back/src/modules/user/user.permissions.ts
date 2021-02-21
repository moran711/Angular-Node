import {or, allow} from 'graphql-shield';
import {isAuthorized, isTheSameUser, hasRoles} from '../../helpers/rules';

const userPermissionsQuery = {
  getAllUsers: allow,
  getUserById: isTheSameUser,
  checkToken: allow,
};
const userPermissionsMutation = {
  registerUser: allow,
  loginUser: allow,
};

export {userPermissionsMutation, userPermissionsQuery};
