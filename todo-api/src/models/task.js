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

const getTask = id => {
    let task = tasks.find(task => task.id === id);
    return task
}


const addTask = data => { 
    const task = createTask(data);
    tasks.push(task)
    return tasks
}

const removeTask = id => { 
    const deliver = tasks.findIndex(name => name.id === id)
    if (deliver !== -1){ // если элемент удовлетворяет условию проверяющей функции. В противном случае возвращается -1.
        tasks.splice(id - 1, 1) // filter() != id
        return true
    } else {
        return false;
    }
}

const editTask = (id, data) => {
    let name = tasks.find(name => name.id === id);
    Object.assign(name, data);
    return name;
}

const changeTask = (id, data) => { 
    tasks.find(name => name.id === id)
    return tasks[id - 1] = {
        id: id,
        name: data.name,
        done: data.done,
    };
}

module.exports = {getAllTasks, createTask, addTask, getTask, editTask, removeTask, changeTask}






