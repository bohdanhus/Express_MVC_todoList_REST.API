const incList = (init = 0) => () => ++init

const genIdList = incList()

const incTask = (init = 0) => () => ++init

const genIdTask = incTask()

class Model {

    const

    constructor() {

        this.lists = {
            genIdList:
                [
                    {id: genIdTask(), name: 'New task', done: false},
                    {id: genIdTask(), name: 'Create server', done: false},
                    {id: genIdTask(), name: 'Create game', done: false}
                ],
            genIdList:
                [
                    {id: genIdTask(), name: 'New task', done: false},
                    {id: genIdTask(), name: 'Create server', done: false},
                ],
            genIdList:
                [
                    {id: genIdTask(), name: 'New task', done: false},
                ]
        }
    }

    getAll(listId) {
        return this.lists[listId]
    }

    getOne(listId, taskId) {
        return this.lists[listId][taskId - 1]
    }

    addTask(listId, data) {
        const task = {
            id: genIdTask(),
            name: data.name,
            done: false
        }
        this.list[listId].push(task)
        return this.lists[listId]
    }

    deleteTask (listId, taskId){
        this.lists[listId].splice(taskId - 1, 1);
        return this.lists[listId];
    }

    editTask(listId, taskId, data){ // patch
        let task = this.lists[listId].find(task => task.id === taskId);
        if (task !== undefined) {
            Object.assign(task, data)
            return this.lists[listId]
        }
        return this.lists[listId]
    }

    changeTask(listId, taskId, data) {
        let task = this.lists[listId].find(task => task.id === taskId);
        if (task !== undefined) {
            const newTask = {
                id: genIdTask(),
                name: data.name,
                done: false
            }
            Object.assign(task, data)
            return this.lists[listId]
        }
        return this.lists[listId]
    }
    const changeTask = (listid, taskid, data) => {
    const list = lists.find((list) => list.id === taskid)
    if (list !== undefined) {
        const newTask = {
            id: id,
            name: data.name,
            done: false
        }
        const tasks = list.tasks
        const index = tasks.findIndex((task) => task.id === taskid)
        if (index !== -1) {
            tasks.splice(index, 1, newTask)
            return newTask
        }
    }



}



module.exports = Model;





