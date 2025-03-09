const taskService = require("./task.service");

exports.createTask = async (req, res) => {
  try {
    const userId = req.user.id;
    const createdTask = await taskService.createTask({
      ...req.body,
      userId,
    });
    return res.status(createdTask.code).json(createdTask);
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: "Task creation error",
      error: e.message,
      status: false,
    });
  }
};
exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTask = await taskService.updateTask({
      id,
      data: req.body,
    });
    return res.status(updatedTask.code).json(updatedTask);
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: "Task updation error",
      error: e.message,
      status: false,
    });
  }
};

exports.fetchAllTasks = async (req, res) => {
  try {
    const userId = req.user.id;
    const { title } = req.body;
    const tasksData = await taskService.fetchAllTasks({
      userId,
      title,
    });
    return res.status(tasksData.code).json(tasksData);
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: "Error fetching tasks",
      error: e.message,
      status: false,
    });
  }
};

exports.fetchTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    if (!id) {
      return res.status(400).json({
        message: "Task ID is required",
        status: false,
        code: 400,
      });
    }
    const taskData = await taskService.fetchTaskById(id, userId);
    return res.status(taskData.code).json(taskData);
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: "Error fetching task",
      error: e.message,
      status: false,
    });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    if (!id) {
      return res.status(400).json({
        message: "Task ID is required",
        status: false,
        code: 400,
      });
    }
    const deletedTask = await taskService.deleteTask(id, userId);
    return res.status(deletedTask.code).json(deletedTask);
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: "Error deleting task",
      error: e.message,
      status: false,
    });
  }
};
