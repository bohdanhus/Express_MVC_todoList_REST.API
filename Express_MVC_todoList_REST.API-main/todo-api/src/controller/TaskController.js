const { getAllTasks, addTask, getTask, editTask, removeTask, changeTask } = require('../models/task.js');

class taskController {
  getAllTasks(listId) {
    return getAllTasks(listId)
  }
  getTask(listId, taskId) {
    return getTask(listId, taskId)
  }
  createTask(listId, data) {
    return addTask(listId, data)
  }
  removeTask(listId, taskId) {
    return removeTask(listId, taskId)
  }
  editTask(listId, taskId, data) {
    return editTask(listId, taskId, data)  
  }
  changeTask(listId, taskId,  data) {
    return changeTask(listId, taskId, data)
  }
}



module.exports = new taskController();
