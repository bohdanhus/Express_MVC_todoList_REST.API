const { checkResFromServer } = require('./helper')
const controller = require('../controller/TaskController')


const router = require('express').Router()

function cheackServerRes(result, res, OK, bad) {
  if (result) {
    res.status(OK)
    res.send(result)
    res.end()
  } else {
    res.status(bad)
    res.end()
  }
}

router.get('/:listId/tasks/', function (req, res) { // curl localhost:3000/lists curl
  let result = controller.getAll(req)
  cheackServerRes(result, res, 200, 400);
}) 
router.get('/:listId/tasks/:taskId', function (req, res) { // curl localhost:3000/lists/1 curl localhost:3000/lists/1/tasks/1
  const id = parseInt(req.params.listId);
  const result = controller.getOne(id)
  cheackServerRes(result, res, 200, 400);

})

router.post('/:listId/tasks/', function (req, res) { // http POST :3000/lists  name="new list123"
  const data = req.body
  const result = controller.createTask(data)
  cheackServerRes(result, res, 201, 422);
})
router.patch('/:listId/tasks/', function (req, res) { // http PATCH :3000/lists/2 name="new name"
  const id = parseInt(req.params.listId)
  const data = req.body
  const result = controller.editTask(id, data)
  cheackServerRes(result, res, 200, 404);
})

router.put('/:listId/tasks', (req, res) => { // http PATCH :3000/tasks/1 name="" done=true
  const data = req.body
  const listId = parseInt(req.params.listId)
  const taskId = parseInt(req.params.taskId)
  const change = taskController.replaceTask(listId, taskId, data)
  checkResFromServer(change, res, 202, 404);
})
router.delete('/:listId/tasks/', function (req, res) { // http DELETE :3000/lists/2
  const id = parseInt(req.params.listId)  
  const result = controller.deleteTask(id)
  checkResFromServer(result, res, 202, 404);
})

module.exports = router


