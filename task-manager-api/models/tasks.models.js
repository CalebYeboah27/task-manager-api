const mongoose = require('mongoose')

const task = {
    name: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean
    }
}

const taskSchema = new mongoose.Schema(task)

module.exports = mongoose.model('Tasks', taskSchema)