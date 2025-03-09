const { body, validationResult } = require("express-validator");

exports.validateCreateTask = [
  body("title").notEmpty().withMessage("Title is required"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: false,
        message: errors.array().map((err) => err.msg),
        code: 400,
      });
    }
    next();
  },
];
