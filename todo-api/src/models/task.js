const incList = (init = 0) => () => ++init

const genIdList = incList()

const incTask = (init = 0) => () => ++init

const genIdTask = incTask()

class TaskModel {
    lists;
    constructor() {
        this.lists = {
            1:
                [
                    {id: 1, name: 'New task', done: false},
                    {id: 2, name: 'Create server', done: false},
                    {id: 3, name: 'Create game', done: false}
                ],
            2:
                [
                    {id: 1, name: 'New task', done: false},
                    {id: 2, name: 'Create server', done: false},
                ],
            3:
                [
                    {id: 1, name: 'New task', done: false},
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

    deleteTask(listId, taskId) {
        this.lists[listId].splice(taskId - 1, 1);
        return this.lists[listId];
    }

    editTask(listId, taskId, data) { // patch
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
}

const Model = new TaskModel();
export default Model;





