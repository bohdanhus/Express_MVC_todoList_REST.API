import { controller } from '../controller/TaskController.js'
import express from 'express'

const router = express.Router()

router.get('/', function (req, res) {  // curl localhost:3000/tasks       http :3000/tasks
    const listId = parseInt(req.params.listId)
    const result = controller.getAll(listId)
    checkServerResponse(result, res, 200, 400);
})

router.get('/taskId', function (req, res) { // curl localhost:3000/tasks/2 or http :3000/tasks/2 true
    const listId = parseInt(req.params.listId)
    const taskId = parseInt(req.params.taskId)
    const result = controller.getOne(listId, taskId)
    checkServerResponse(result, res, 200, 400);
})

router.post('/', (req, res) => {            // curl localhost:3000/tasks -d '{ "name": "New task" }' -H "Content-Type: application/json"  true
    const listId = parseInt(req.params.listId)// http POST :3000/tasks task="new task"
    const data = req.body
    const result = (controller.createTask(listId, data))
    checkServerResponse(result, res, 201, 422);
});

router.patch('/', (req, res) => {// curl -X PATCH localhost:3000/tasks/1 -d '{"name": "Novoe nazvanie"}' -H "Content-Type: application/json"
    const listId = parseInt(req.query.listId)
    const taskId = parseInt(req.body.taskId)
    const data = req.body
    const result = controller.editTask(listId, taskId, data)
    checkResFromServer(result, res, 200, 404);
});

router.delete('/', (req, res) => { // http DELETE :3000/tasks/1 true
    const listId = parseInt(req.query.listId)
    const taskId = parseInt(req.body.taskId)
    const result = controller.deleteTask(listId, taskId)
    checkServerResponse(result, res, 202, 404);
})

router.put('/:taskId', (req, res) => { // http PATCH :3000/tasks/1 name="" done=true
    const data = req.body
    const listId = parseInt(req.params.listId)
    const taskId = parseInt(req.params.taskId)
    const result = controller.deleteTask(listId, taskId, data)
    checkServerResponse(result, res, 202, 404);
})


function checkServerResponse(result, res, OK, bad) {
    if (result) {
        res.status(OK)
        res.send(result)
        res.end()
    } else {
        res.status(bad)
        res.end()
    }
}

export default router
