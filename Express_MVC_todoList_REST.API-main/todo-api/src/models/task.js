const { genIdTask } = require('./helper')
const { lists } = require('./list')


const tasks = [
    { id: genIdTask(), name: 'New task', done: false }, 
    { id: genIdTask(), name: 'Create server', done: false }, 
    { id: genIdTask(), name: 'Create game', done: false }
]

const getAllTasks = listId => {
  if (listId === undefined) {
    return tasks
  } else {
    const tasks = lists.find(list => list.id === listId).tasks
    return tasks
  }
}
const createTask = data => {
    return {
        id: genIdTask(),
        name: data.name,
        done: false
    }
}
const getTask = (listId, taskId) => {
  const list = lists.find((list) => list.id === listId)
  if (list !== undefined) {
    const task = list.tasks.find((task) => task.id === taskId)
    if (task !== undefined) {
      return task
    }
  }
}
const addTask = (listId, data) => { 
    const task = createTask(data);
    const list = lists.find(list => list.id === listId)
    if (list !== undefined) {
        list.task.push(task)
        return list
    }
}
const removeTask = id => { 
    const list = lists.find(list => list.id === id)
    if (list !== undefined){
    const deliver = list.tasks.findIndex(name => name.id === id)
    if (deliver !== -1){ // если элемент удовлетворяет условию проверяющей функции. В противном случае возвращается -1.
        const deleted = tasks.splice(id - 1, 1) // filter() != id
        return deleted
    } 
  }
}
const editTask = (listId, taskId, data) => {
  const list = lists.find((list) => list.id === listId)
  if (list !== undefined) {
    const task = list.tasks.find(task => task.id === taskId)
    if (task !== undefined) {
      Object.assign(task, data)
      return task
    }
  }
}
const changeTask = (listId, taskId, data) => {
    const list = lists.find((list) => list.id === listId)
    if (list !== undefined) {
      const newTask = {
        id: id,
        name: data.name,
        done: false
      }
      const tasks = list.tasks
      const index = tasks.findIndex((task) => task.id === taskId)
      if (index !== -1) {
        tasks.splice(index, 1, newTask)
        return newTask
      }
    }
}
module.exports = { getAllTasks, createTask, addTask, getTask, editTask, removeTask, changeTask };






