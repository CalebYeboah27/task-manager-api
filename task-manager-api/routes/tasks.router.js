const express = require('express')
const { getAllTasks, createTask, getOneTask, updateTask, deleteTask } = require('../controllers/tasks.controllers')

const tasksRouter = express.Router()

tasksRouter.get('/', getAllTasks)
tasksRouter.post('/', createTask)
tasksRouter.get('/:id', getOneTask)
tasksRouter.patch('/:id', updateTask)
tasksRouter.delete('/:id', deleteTask)

module.exports = tasksRouter