// const {getAll, addTask, getTask, editTask, removeTask, changeTask} = require('../models/task.js');
let  Model  = require('../models/index');

class taskController {
    getAll(listId) {
        return Model.getAll(listId)
    }

    getOne(listId, taskId) {
        return Model.getOne(listId, taskId)
    }

    createTask(listId, data) {
        return Model.addTask(listId, data)
    }

    editTask(listId, taskId, data) {
        return Model.editTask(listId, taskId, data)
    }

    changeTask(listId, taskId, data) {
        return Model.changeTask(listId, taskId, data)
    }

    deleteTask(listId, taskId) {
        return Model.deleteTask(listId, taskId)
    }
}

module.exports = new taskController();
