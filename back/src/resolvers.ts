import { userMutation, userQuery } from "./modules/user/user.resolver";

const resolvers = {
  Query: {
    ...userQuery,
  },
  Mutation: {
    ...userMutation,
  },
};

export { resolvers };
