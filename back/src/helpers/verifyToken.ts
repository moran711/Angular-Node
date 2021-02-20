const jwt = require('jsonwebtoken');
import dotenv from 'dotenv';
dotenv.config();
const verifyUser = (token) => {
  if (!token) return;
  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    return decoded;
  } catch (err) {
    return false;
  }
};
export default verifyUser;
