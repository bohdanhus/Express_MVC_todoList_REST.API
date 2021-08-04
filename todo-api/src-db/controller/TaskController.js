const { taskModel } = require('../models/index.js');

class taskController {
  getAllTasks(listId) {
    return taskModel.getAllTasks(listId)
  }
  
  createTask(req) {
    const data = req.body
    return taskModel.addTask(data)
  }

  getTask(req) {
    const id = parseInt(req.params.id)
    return taskModel.getTask(id)
  }

  removeTask(req) {
    const id = parseInt(req.params.id);
    return taskModel.removeTask(id)
  }

  editTask(req) {
    const id = parseInt(req.params.id)
    const data = req.body
    return taskModel.editTask(id, data)  
  }

  changeTask(req) {
    const id = parseInt(req.params.id)
    const data = req.body
    return taskModel.changeTask(id, data)
  }
}



module.exports = new taskController();
