import {UserInputError} from 'apollo-server';
import bcrypt from 'bcryptjs';
import generateToken from '../../helpers/generateToken';
import verifyUser from '../../helpers/verifyToken';
import {
  ILoginedUser,
  ILoginInput,
  IRegisterUserInput,
  IUser,
} from './user.interfaces';
import userMessages from './user.messages';
import UserService from './user.service';

class UserController {
  async getAllUsers() {
    return await UserService.getAllUsers();
  }
  async checkToken(token: string) {
    const user = verifyUser(token);

    if (!user) {
      return {
        result: false,
      };
    }

    return {
      result: !!(await UserService.getUserByEmail(user.email)),
    };
  }
  async registerUser({
    firstName,
    lastName,
    email,
    password,
  }: IRegisterUserInput): Promise<IUser> {
    if (await UserService.getUserByEmail(email)) {
      throw new UserInputError(userMessages.USER_ALREADY_EXIST, {
        statusCode: 400,
      });
    }
    const encryptedPassword = await bcrypt.hash(password, 12);
    return await UserService.registerUser({
      firstName,
      lastName,
      email,
      encryptedPassword,
    });
  }
  async loginUser({email, password}: ILoginInput): Promise<ILoginedUser> {
    const user = await UserService.getUserByEmail(email);

    if (!user) {
      throw new UserInputError(userMessages.WRONG_CREDENTIALS, {
        statusCode: 400,
      });
    }

    const match = await bcrypt.compare(password, user.credential);

    if (!match) {
      throw new UserInputError(userMessages.WRONG_CREDENTIALS, {
        statusCode: 400,
      });
    }

    const token = generateToken(user._id, user.email);

    return {
      ...user._doc,
      _id: user._id,
      token,
    };
  }
}

export default new UserController();
