export interface IUser {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  credential: string;
}

export interface ILoginedUser {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  credential: string;
  token: string;
}

export interface IRegisterUserCrypted {
  firstName: string;
  lastName: string;
  email: string;
  encryptedPassword: string;
}

export interface IRegisterUserInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
export interface ILoginInput {
  email: string;
  password: string;
}
