import {or, allow} from 'graphql-shield';
import {isAuthorized} from '../../helpers/rules';

const newsPermissionsQuery = {
  getAllNews: isAuthorized,
  getNewsById: isAuthorized,
};
const newsPermissionsMutation = {
  addNews: isAuthorized,
};

export {newsPermissionsMutation, newsPermissionsQuery};
