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

const getTask = id => {
    const task = tasks.find(name => name.id === id)
    return task
}

const addTask = data => { 
    const task = createTask(data);
    tasks.push(task)
    return tasks
}

const removeTask = id => { 
    tasks.findIndex(name => name.id === id)
    tasks.splice(id - 1, 1) // filter() != id
    return tasks
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






