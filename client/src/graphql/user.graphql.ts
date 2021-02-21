export const CHECK_TOKEN = `
query($token: String) {
  checkToken(token: $token) {
    result
  }
}
`;

export const LOGIN_USER = `
mutation($loginInput: LoginInput!) {
  loginUser(loginInput: $loginInput) {
    lastName
    token
    firstName
  }
}
`;

export const REGISTER_USER = `
mutation($user: RegisterUserInput!) {
  registerUser(user: $user) {
    _id
    firstName
    lastName
    email
    credential
  }
}`;
