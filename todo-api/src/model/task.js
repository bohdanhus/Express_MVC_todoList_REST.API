const inc = (init = 0) => () => ++init
const genId = inc()

const tasks = [
    { id: genId(), task: 'Show tasks', done: false }, 
    { id: genId(), task: 'Create task', done: false }
]

const getAllTasks = () => {
    return tasks;
}

const createTask = data => {
    return {
        id: genId(),
        task: data.task,
        done: false
    }
}

const editTask = (req, res) => {
    let task = tasks.find(name => name.id === parseInt(req.params.id));
    Object.assign(task, res.body);
    return task;
}

const addTask = (body) => {
    const task = createTask(body);
    tasks.push(task)
    return task
}

const removeTask = (req, res) => {
 
}
const changeTask = (req, res) => {

}
const logRequest = (req, next) => {
    let {method, url} = req;
    console.log(`[${new Date().toISOString()}] ${method} ${url}`);
    next();
}

module.exports = {getAllTasks, createTask, addTask, editTask, removeTask, changeTask, logRequest}






