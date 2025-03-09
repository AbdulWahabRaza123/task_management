const userService = require("./user.service");

exports.createUser = async (req, res) => {
  try {
    const createdData = await userService.createUser(req.body);
    return res.status(createdData.code).json(createdData);
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: "Invalid user creation error",
      error: e.message,
      status: false,
    });
  }
};

exports.signinUser = async (req, res) => {
  try {
    const loginData = await userService.loginUser(req.body);
    return res.status(loginData.code).json(loginData);
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: "Invalid user signin error",
      error: e.message,
      status: false,
    });
  }
};

exports.getUserByEmail = async (req, res) => {
  try {
    const user = req.user;
    return res.status(200).json({
      message: "User found",
      user: user,
      status: true,
      code: 200,
    });
  } catch (e) {
    console.error(e);
    return res.status(500).json({
      status: false,
      message: "Error fetching user",
      error: e.message,
    });
  }
};
