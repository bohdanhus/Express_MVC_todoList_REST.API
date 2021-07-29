const tasks = [
    { id: genId(), name: 'Show tasks' }, 
    { id: genId(), name: 'Create task' }
]
const inc = (init = 0) => () => ++init
const genId = inc()



const getAllTask = () => {
    return tasks;
}
const createNewTask = data => {
    return {
        id: genId(),
        name: data.name,
        done: false
    }
}
const addTask = (body) > {
    const task = createTask(body);
    tasks.push(task)
    return(tasks)
}
const EditTask = () => {

}













const createTask = data => {
    return {
        id: genId(),
        name: data.name,
        done: false
    }
}

module.exports = { inc, genId, tasks, createTask}