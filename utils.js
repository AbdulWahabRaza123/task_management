const jwt = require("jsonwebtoken");
exports.generateToken = ({ userId, email }) => {
  const token = jwt.sign({ userId, email }, process.env.JWT_SECRET_KEY);
  return token;
};
