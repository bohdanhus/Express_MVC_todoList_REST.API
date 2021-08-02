const express = require('express')  
const taskController = require('../controller/TaskController.js')
const router = express.Router({
    mergeParams: true
})
const checkAnswer = (answer, res) => {
  if (answer !== false) {
    res.json(answer)
  } else {
    res.status(400)
    res.end('Task not found')
  }
}

const getListId = (req) => {
  const listId = req.params.listId !== undefined ? req.params.listId : req.query.listId
  return parseInt(listId)
}

router.get('/', function (req, res) {
    const listId = getListId(req)
    res.status(200);
    res.json(taskController.getAllTasks())
})
// curl localhost:3000/tasks or http :3000/tasks true

router.get('/:taskId', function (req, res) {
    const answer = taskController.getTask(getListId(req), parseInt(req.params.taskId))
    res.json(taskController.getTask(req))
    checkAnswer(answer, res)
    res.end()
})
//curl localhost:3000/tasks/2 or http :3000/tasks/2 true

router.post('/', (req, res) => {
    const answer = (taskController.createTask(getListId(req), req.body))
    res.end()
});
// curl localhost:3000/tasks -d '{ "name": "New task" }' -H "Content-Type: application/json"  true
// http POST :3000/tasks task="new task"

router.patch('/:taskId', (req, res) => {
  const answer = taskController.updateTask(getListId(req), parseInt(req.params.taskId), req.body)
  checkAnswer(answer, res)
});
// curl -X PATCH localhost:3000/tasks/1 -d '{"name": "Novoe nazvanie"}' -H "Content-Type: application/json"
// http PATCH :3000/tasks/1 done=true true

router.delete('/:taskId', (req, res) => {
  const answer = taskController.removeTask(getListId(req),  parseInt(req.params.taskId))
  checkAnswer(answer, res)
})
// http DELETE :3000/tasks/1 true


router.put('/:taskId', (req, res) => {
  const answer = taskController.replaceTask(getListId(req), parseInt(req.params.taskId), req.body)
  checkAnswer(answer, res)

})
// http PATCH :3000/tasks/1 name="" done=true


module.exports = router;
