const jwt = require("jsonwebtoken");
const userModel = require("../../app/user/user.model");

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  const token = authHeader && authHeader.split(" ")[1]; // Extract the token part
  if (token == null) {
    return res
      .status(401)
      .json({ status: false, message: "No token provided" });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, data) => {
    if (err) {
      return res.status(403).json({ status: false, message: "Invalid token" });
    }
    try {
      const { email } = data;
      const user = await userModel.findOne({ email });
      if (!user) {
        return res
          .status(401)
          .json({ status: false, message: "User not found", code: 404 });
      }
      req.user = user;
      next();
    } catch (e) {
      return res
        .status(500)
        .json({ status: false, message: "Internal server error", code: 500 });
    }
  });
};

module.exports = authenticateToken;
