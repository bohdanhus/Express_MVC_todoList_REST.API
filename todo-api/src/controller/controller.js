const { getAllTasks, createTask, editTask, removeTask, changeTask, addTask } = require('../model')

class todoList {
    getAllTasks() {
      return getAllTasks();
    }
    createTask(req) {
      return addTask(req.body)
    }
    editTask(req,res) {
      return editTask(req,res)
    }
    removeTask(req,res) {
      return removeTask(req,res)
    }
    changeTask(req,res) {
      return changeTask(req,res)
    } 
}

module.exports = new todoList();