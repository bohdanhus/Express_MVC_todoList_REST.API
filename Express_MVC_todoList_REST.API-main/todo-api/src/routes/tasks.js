const { getListId, checkResFromServer } = require('./helper')
const taskController = require('../controller/TaskController')


const router = require('express').Router({
  mergeParams: true
})

//curl localhost:3000/lists?listId=
//curl localhost:3000/lists/1/tasks/1
router.get('/', function (req, res) {  // curl localhost:3000/tasks       http :3000/tasks 
  const listId = getListId(req)
  const tasks = taskController.getAllTasks(listId)
  checkResFromServer(tasks, res, 200, 400);
})

router.get('/:taskId', function (req, res) { // curl localhost:3000/tasks/2 or http :3000/tasks/2 true
  const listId = getListId(req)
  const taskId = parseInt(req.params.taskId)
  const task = taskController.getTask(listId, taskId)
  checkResFromServer(task, res, 200, 400);
})

router.post('/', (req, res) => {            // curl localhost:3000/tasks -d '{ "name": "New task" }' -H "Content-Type: application/json"  true
  const listId = parseInt(req.params.listId)// http POST :3000/tasks task="new task"
  const data = req.body
  const create = (taskController.createTask(listId, data))
  checkResFromServer(create, res, 201, 422);
});

router.patch('/:taskId', (req, res) => {// curl -X PATCH localhost:3000/tasks/1 -d '{"name": "Novoe nazvanie"}' -H "Content-Type: application/json"
  const data = req.body                 //
  
  const listId = parseInt(req.params.listId)
  const taskId = parseInt(req.params.taskId)
  const edit = taskController.editTask(listId, taskId, data)
  checkResFromServer(edit, res, 200, 404);
});

router.delete('/:taskId', (req, res) => { // http DELETE :3000/tasks/1 true
  const listId = parseInt(req.params.listId)
  const taskId = parseInt(req.params.taskId)
  const remove = taskController.removeTask(listId, taskId)
  checkResFromServer(remove, res, 202, 404);
})

router.put('/:taskId', (req, res) => { // http PATCH :3000/tasks/1 name="" done=true
  const data = req.body
  const listId = parseInt(req.params.listId)
  const taskId = parseInt(req.params.taskId)
  const change = taskController.replaceTask(listId, taskId, data)
  checkResFromServer(change, res, 202, 404);
})


module.exports = router;
