const inc = (init = 0) => () => ++init
const genId = inc()

const tasks = [
    { id: genId(), name: 'New task', done: false }, 
    { id: genId(), name: 'Create server', done: false }, 
    { id: genId(), name: 'Create game', done: false }, 
    { id: genId(), name: 'Show task', done: false }, 
    { id: genId(), name: 'Show server', done: false }, 
    { id: genId(), name: 'Show game', done: false }
]

const getAllTasks = () => {
    return tasks;
}

const createTask = data => {
    return {
        id: genId(),
        name: data.name,
        done: false
    }
}

const getTask = (id) => {
    const task = tasks.find(name => name.id === id)
    return task
}

const addTask = (body) => {
    const createdTask = createTask(body);
    tasks.push()
    return createdTask
}

const removeTask = (id) => {
    tasks.findIndex(name => name.id === id)
    tasks.splice(id - 1, 1)
    return tasks
}

const editTask = (id, body) => {
    let name = tasks.find(name => name.id === id);
    Object.assign(name, body);
    return name;
}

const changeTask = (id, body) => {
    tasks.find(name => name.id === id)
    return tasks[id - 1] = {
        id: id,
        name: body.name,
        done: body.done,
    };
}

module.exports = {getAllTasks, createTask, addTask, getTask, editTask, removeTask, changeTask}






