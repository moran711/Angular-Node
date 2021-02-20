import UserController from "./user.controller";

const userQuery = {
  getAllUsers: () => UserController.getAllUsers(),
  checkToken: (parent, args) => UserController.checkToken(args.token),
};

const userMutation = {
  registerUser: async (parent, args) => UserController.registerUser(args.user),
  loginUser: async (parent, args) => UserController.loginUser(args.loginInput),
};

export { userMutation, userQuery };
