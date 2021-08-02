const { genIdTask, lists } = require('./list')
const tasks = [
    { id: genIdTask(), name: 'New task', done: false }, 
    { id: genIdTask(), name: 'Create server', done: false }, 
    { id: genIdTask(), name: 'Create game', done: false }, 
    { id: genIdTask(), name: 'Show task', done: false }, 
    { id: genIdTask(), name: 'Show server', done: false }, 
    { id: genIdTask(), name: 'Show game', done: false }
]

const getAllTasks = () => {
    return tasks
}


const createTask = data => {
    return {
        id: genIdTask(),
        name: data.name,
        done: false
    }
}

const getTask = (listid, taskid) => {
const list = lists.find((list) => list.id === listid)
  if (list !== undefined) {
    const task = list.tasks.find((task) => task.id === taskid)
    if (task !== undefined) {
      return task
    } else {
      return 'TASK NOT FOUND'
    }
  } else {
    return 'LIST NOT FOUND'
  }
}//


const addTask = (id, options) => { 
    const task = createTask(data);
    const list = lists.find(list => list.id === id)
    if (list !== undefined) {
        list.task.push(task)
        return list
    } else {
      return "list not found"
    }
}//

const removeTask = id => { //
    const list = lists.find(list => list.id === id)
    if (list !== undefined){
    const deliver = list.tasks.findIndex(name => name.id === id)
    if (deliver !== -1){ // если элемент удовлетворяет условию проверяющей функции. В противном случае возвращается -1.
        const deleted = tasks.splice(id - 1, 1) // filter() != id
        return deleted
    } else {
        return 'TAST NOT FOUND'
    }
}else {
    return 'LIST NOT FOUND'
}
}

const editTask = (listid, taskid, data) => {
const list = lists.find((list) => list.id === listid)
  if (list !== undefined) {
    const task = list.tasks.find(task => task.id === taskid)
    if (task !== undefined) {
      Object.assign(task, options)
      return task
    } else {
      return 'task not found'
    }
  } else {
    return 'list not found'
  }
}

const changeTask = (listid, taskid, data) => { 
    const list = lists.find((list) => list.id === taskid)
  if (list !== undefined){
    const newTask = {
        id: id,
        name: data.name,
        done: data.done ?? false
    }
    const tasks = list.tasks
    const index = tasks.findIndex((task) => task.id === taskid)
    if (index !== -1) {
      tasks.splice(index, 1, newTask)
      return newTask
    } else {
      return 'Task not found'
    }
  } else {
    return 'list not found'
  }
}

module.exports = {getAllTasks, createTask, addTask, getTask, editTask, removeTask, changeTask}







