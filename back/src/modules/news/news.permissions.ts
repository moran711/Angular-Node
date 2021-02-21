import {or, allow} from 'graphql-shield';
import {isAuthorized} from '../../helpers/rules';

const newsPermissionsQuery = {
  getAllNews: allow,
  getNewsById: isAuthorized,
};
const newsPermissionsMutation = {
  addNews: isAuthorized,
};

export {newsPermissionsMutation, newsPermissionsQuery};
