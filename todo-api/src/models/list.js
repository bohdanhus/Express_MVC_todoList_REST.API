const inc = (init = 0) => () => ++init
const genId = inc()

const tasks = [
    { id: genId(), name: 'New task in list 2', done: false }, 
    { id: genId(), name: 'Create server', done: false }, 
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
