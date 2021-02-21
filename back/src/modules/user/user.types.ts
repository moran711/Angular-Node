const userInputs = `
  input RegisterUserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }
  input LoginInput {
    email: String!
    password: String!
  }
`;

const userTypes = `
  type User {
    _id: String
    firstName: String
    lastName: String
    email: String
    credential: String
  }
  type LoginedUser {
    _id: ID
    firstName: String
    lastName: String
    email: String
    credential: String
    token: String
  }
  type VerifiedToken {
    result: Boolean
  }
`;

export {userTypes, userInputs};
