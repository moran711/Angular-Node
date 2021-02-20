const jwt = require('jsonwebtoken');
import dotenv from 'dotenv';
dotenv.config();
const defaultParams = {
  expiresIn: '1d',
  secret: process.env.SECRET,
};

const generateToken = (userId, email, params = defaultParams) => {
  const options = {
    expiresIn: params.expiresIn,
  };
  return jwt.sign({userId, email}, params.secret, options);
};
export default generateToken;
