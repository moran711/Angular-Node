import userModel from './user.model';
import {IRegisterUserCrypted} from './user.interfaces';
class UserService {
  async registerUser({
    firstName,
    lastName,
    email,
    encryptedPassword,
  }: IRegisterUserCrypted) {
    const user = new userModel({
      firstName,
      lastName,
      email,
      credential: encryptedPassword,
    });
    return await user.save();
  }
  async getUserByEmail(email: string) {
    return await userModel.findOne({email}).exec();
  }
  async getAllUsers() {
    return await userModel.find();
  }
}

export default new UserService();
