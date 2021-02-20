const jwt = require('jsonwebtoken');

const verifyUser = (token) => {
  if (!token) return;
  try {
    const decoded = jwt.verify(
      token,
      '5hD7das$1z5bgjld4msu5ks91gs5ruw8kfg6b8$5mkk4e4b2j7n6v3jp88gsn58mhd87',
    );
    return decoded;
  } catch (err) {
    return false;
  }
};
export default verifyUser;
