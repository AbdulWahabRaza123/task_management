const { default: mongoose } = require("mongoose");
const Task = require("./task.model");

exports.createTask = async (data) => {
  try {
    const createdTask = await Task.create(data);
    return {
      status: true,
      message: "Task created successfully",
      task: createdTask,
      code: 201,
    };
  } catch (e) {
    console.error(e);
    return {
      status: false,
      message: "Task creation error",
      error: e.message,
      code: 500,
    };
  }
};
exports.updateTask = async ({ id, data }) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return { status: false, message: "Invalid Task ID", code: 400 };
    }
    const task = await Task.findById(id);
    if (!task) {
      return { status: false, message: "Task not found", code: 404 };
    }
    Object.assign(task, data);
    const updatedTask = await task.save();

    return {
      status: true,
      message: "Task updated successfully",
      task: updatedTask,
      code: 200,
    };
  } catch (e) {
    console.error(e);
    return {
      status: false,
      message: "Task update error",
      error: e.message,
      code: 500,
    };
  }
};

exports.fetchAllTasks = async ({ userId, title }) => {
  try {
    let filter = { userId };
    if (title) {
      filter.title = { $regex: title, $options: "i" };
    }
    const tasks = await Task.find(filter).sort({ createdAt: -1 });

    return {
      status: true,
      message: "Tasks fetched successfully",
      tasks,
      code: 200,
    };
  } catch (e) {
    console.error(e);
    return {
      status: false,
      message: "Error fetching tasks",
      error: e.message,
      code: 500,
    };
  }
};

exports.fetchTaskById = async (taskId, userId) => {
  try {
    const task = await Task.findOne({ _id: taskId, userId }).populate(
      "userId",
      "name email"
    );

    if (!task) {
      return {
        status: false,
        message: "Task not found",
        code: 404,
      };
    }

    return {
      status: true,
      message: "Task fetched successfully",
      task,
      code: 200,
    };
  } catch (e) {
    console.error(e);
    return {
      status: false,
      message: "Error fetching task",
      error: e.message,
      code: 500,
    };
  }
};

exports.deleteTask = async (taskId, userId) => {
  try {
    const deletedTask = await Task.findOneAndDelete({ _id: taskId, userId });

    if (!deletedTask) {
      return {
        status: false,
        message: "Task not found or unauthorized",
        code: 404,
      };
    }

    return {
      status: true,
      message: "Task deleted successfully",
      code: 200,
    };
  } catch (e) {
    console.error(e);
    return {
      status: false,
      message: "Error deleting task",
      error: e.message,
      code: 500,
    };
  }
};
