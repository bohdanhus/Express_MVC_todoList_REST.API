const { getAllTasks, getTask, editTask, removeTask, changeTask, addTask } = require('../model')

class todoList {
  getAllTasks() {
    return getAllTasks();
  }
  
  createTask(req) {
    return addTask(req.body)
  }

  getTask(req) {
    const id = parseInt(req.params.id)
    return getTask(id)
  }

  removeTask(req, res) {
    const id = parseInt(req.params.id);
    return removeTask(id)
  }

  editTask(req) {
    const id = parseInt(req.params.id)
    const body = req.body
    return editTask(id,body)  
  }

  changeTask(req, res) {
    const id = parseInt(req.params.id)
    const body = req.body
    return changeTask(id,body)
  }
}



module.exports = new todoList();