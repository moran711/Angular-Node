const jwt = require("jsonwebtoken");

const defaultParams = {
  expiresIn: "1d",
  secret:
    "5hD7das$1z5bgjld4msu5ks91gs5ruw8kfg6b8$5mkk4e4b2j7n6v3jp88gsn58mhd87",
};

const generateToken = (userId, email, params = defaultParams) => {
  const options = {
    expiresIn: params.expiresIn,
  };
  return jwt.sign({ userId, email }, params.secret, options);
};
export default generateToken;
