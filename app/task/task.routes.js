const express = require("express");
const router = express.Router();
const { validateCreateTask } = require("./task.validators");
const taskController = require("./task.controller");
const authenticateToken = require("../../middlewares/authentication/user-auth");
router.post(
  "/create",
  authenticateToken,
  validateCreateTask,
  taskController.createTask
);
router.post("/", authenticateToken, taskController.fetchAllTasks);
router.get("/:id", authenticateToken, taskController.fetchTaskById);
router.put("/:id", authenticateToken, taskController.updateTask);
router.delete("/:id", authenticateToken, taskController.deleteTask);

module.exports = router;
