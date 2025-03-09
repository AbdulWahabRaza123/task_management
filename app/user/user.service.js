const User = require("./user.model");
const bcrypt = require("bcrypt");
const helperFunctions = require("../../utils");

exports.createUser = async (data) => {
  try {
    data.password = await bcrypt.hash(data.password, 10);
    const createdUser = await User.create(data);
    return {
      status: true,
      message: "User created successfully",
      user: createdUser,
      code: 201,
    };
  } catch (e) {
    console.error(e);
    return {
      status: false,
      message: "Invalid user creation error",
      error: e.message,
      code: 500,
    };
  }
};

exports.loginUser = async ({ email, password }) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return {
        status: false,
        message: "User does not exist",
        code: 401,
      };
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return {
        status: false,
        message: "Invalid password",
        code: 401,
      };
    }

    return {
      status: true,
      message: "Login successful",
      user,
      token: helperFunctions.generateToken({
        userId: user._id,
        email: user.email,
      }),
      code: 200,
    };
  } catch (e) {
    console.error(e);
    return {
      status: false,
      message: "Invalid user login error",
      error: e.message,
      code: 500,
    };
  }
};

exports.getUserByEmail = async ({ email }) => {
  try {
    const user = await User.findOne({ email }).lean();

    if (!user) {
      return {
        status: false,
        message: "User does not exist",
        code: 401,
      };
    }

    return {
      status: true,
      message: "User found",
      user,
      code: 200,
    };
  } catch (e) {
    console.error(e);
    return {
      status: false,
      message: "Invalid user email error",
      error: e.message,
      code: 500,
    };
  }
};
