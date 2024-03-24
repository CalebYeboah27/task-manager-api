const Task = require("../models/tasks.models");

async function getAllTasks(req, res) {
  try {
    const readtasks = await Task.find({});

    return res.status(200).json({
      msg: "these are all your tasks",
      data: readtasks,
    });
  } catch (error) {
    res.status(404).json({ msg: "No tasks found" });
  }
}

async function getOneTask(req, res) {
  const { id: taskID } = req.params;

  try {
    const task = await Task.findById({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `task with id: ${taskID} not found` });
    }
    
    return res.status(200).json({
      msg: `found task with id: ${taskID}`,
      data: task,
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function createTask(req, res) {
  const { name, completed } = req.body;
  try {
    const createOne = await Task.create({ name, completed });
    return res.status(201).json({
      msg: "added task",
      data: createOne,
    });
  } catch (err) {}
  return res.status(500).json(
    {
      msg: "something went wrong",
    },
    err
  );
}

async function updateTask(req, res) {
  const { id: taskID } = req.params;
  const { name, completed } = req.body;
  try {
    const task = await Task.findOneAndUpdate(
      { _id: taskID },
      { name, completed },
      { new: true, runValidators: true }
    );

    if (!task) {
      return res
        .status(404)
        .json({ msg: `could not update task with id: ${taskID}` });
    }
    return res.status(200).json({
      msg: `Updated task with id: ${taskID}`,
      data: task,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
}

async function deleteTask(req, res) {
  const { id: taskID } = req.params;
  try {
    const task = await Task.findOneAndDelete({ _id: taskID });

    if (!task) {
      return res
        .status(404)
        .json({ msg: `could not deleted task with id: ${taskID}` });
    }

    return res.status(200).json({
      msg: `deleted task with id: ${taskID}`,
    });
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = {
  getAllTasks,
  createTask,
  getOneTask,
  updateTask,
  deleteTask,
};
