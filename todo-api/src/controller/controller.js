const { getAllTasks, getTask, addTask, editTask, removeTask, changeTask } = require('../model')

class todoList {
  getAllTasks() {
    return getAllTasks();
  }
  
  createTask(req) {
    const data = req.body
    return addTask(data)
  }

  getTask(req) {
    const id = parseInt(req.params.id)
    return getTask(id)
  }

  removeTask(req) {
    const id = parseInt(req.params.id);
    return removeTask(id)
  }

  editTask(req) {
    const id = parseInt(req.params.id)
    const data = req.body
    return editTask(id, data)  
  }

  changeTask(req) {
    const id = parseInt(req.params.id)
    const data = req.body
    return changeTask(id, data)
  }
}



module.exports = new todoList();