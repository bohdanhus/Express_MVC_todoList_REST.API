const taskController = require('../controller/TaskController')
const router = require('express').Router();


router.get('/', function (req, res) {  // curl localhost:3000/tasks       http :3000/tasks
    const listId = getListId(req)
    const result = taskController.getAll(listId)
    checkResFromServer(result, res, 200, 400);
})

router.get('/', function (req, res) { // curl localhost:3000/tasks/2 or http :3000/tasks/2 true
    const listId = getListId(req)
    const taskId = parseInt(req.params.taskId)
    const result = taskController.getOne(listId, taskId)
    checkResFromServer(result, res, 200, 400);
})

router.post('/', (req, res) => {            // curl localhost:3000/tasks -d '{ "name": "New task" }' -H "Content-Type: application/json"  true
    const listId = parseInt(req.params.listId)// http POST :3000/tasks task="new task"
    const data = req.body
    const result = (taskController.createTask(listId, data))
    checkResFromServer(result, res, 201, 422);
});

router.patch('/', (req, res) => {// curl -X PATCH localhost:3000/tasks/1 -d '{"name": "Novoe nazvanie"}' -H "Content-Type: application/json"
    const listId = parseInt(req.query.listId)
    const taskId = parseInt(req.body.taskId)
    const data = req.body
    const result = taskController.editTask(listId, taskId, data)
    checkResFromServer(result, res, 200, 404);
});

router.delete('/', (req, res) => { // http DELETE :3000/tasks/1 true
    const listId = parseInt(req.query.listId)
    const taskId = parseInt(req.body.taskId)
    const result = taskController.deleteTask(listId, taskId)
    checkResFromServer(result, res, 202, 404);
})

router.put('/:taskId', (req, res) => { // http PATCH :3000/tasks/1 name="" done=true
    const data = req.body
    const listId = parseInt(req.params.listId)
    const taskId = parseInt(req.params.taskId)
    const result = taskController.deleteTask(listId, taskId, data)
    checkResFromServer(result, res, 202, 404);
})


function checkResFromServer(result, res, OK, bad) {
    if (result) {
        res.status(OK)
        res.send(result)
        res.end()
    } else {
        res.status(bad)
        res.end()
    }
}

module.exports = router;
