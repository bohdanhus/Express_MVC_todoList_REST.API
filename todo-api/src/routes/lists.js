import { controller } from '../controller/TaskController.js'
import express from 'express'

const router = express.Router()

router.get('/:listId/tasks/', function (req, res) { // curl localhost:3000/lists curl
    let result;
    result = controller.getAll(req);
    checkServerResponse(result, res, 200, 400);
})
router.get('/:listId/tasks/:taskId', function (req, res) { // curl localhost:3000/lists/1 curl localhost:3000/lists/1/tasks/1
    const listId = parseInt(req.params.listId);
    let result;
    result = controller.getOne(listId);
    checkServerResponse(result, res, 200, 400);

})

router.post('/:listId/tasks/', function (req, res) { // http POST :3000/lists  name="new list123"
    const data = req.body
    let result;
    result = controller.createTask(data);
    checkServerResponse(result, res, 201, 422);
})
router.patch('/:listId/tasks/', function (req, res) { // http PATCH :3000/lists/2 name="new name"
    const listId = parseInt(req.params.listId)
    const data = req.body
    let result;
    result = controller.editTask(listId, data);
    checkServerResponse(result, res, 200, 404);
})

router.put('/:listId/tasks', (req, res) => { // http PATCH :3000/tasks/1 name="" done=true
    const data = req.body
    const listId = parseInt(req.params.listId)
    const taskId = parseInt(req.params.taskId)
    let result;
    result = checkServerResponse.replaceTask(listId, taskId, data);
    checkServerResponse(result, res, 202, 404);
})
router.delete('/:listId/tasks/', function (req, res) { // http DELETE :3000/lists/2
    const listId = parseInt(req.params.listId)
    const result = controller.deleteTask(listId)
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


