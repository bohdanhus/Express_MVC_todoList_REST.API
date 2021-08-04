const express = require('express')  
const taskController = require('../controller/TaskController.js')
const router = express.Router({
    mergeParams: true
})
router.get('/', function (req, res) {  // 200 404
  const tasks = taskController.getAllTasks()
  if (tasks) {
    res.status(200)
    res.json(tasks)
    res.end()
  } else {
    res.status(404)
    res.end()
  }
})// curl localhost:3000/tasks or http :3000/tasks true

router.get('/:taskId', function (req, res) { // 200 404
    const task = taskController.getTask(parseInt(req.params.listId), parseInt(req.params.taskId))
    if (task) {
      res.status(200)
      res.json(task)
      res.end()
    } else {
      res.status(404)
      res.end()
    }
})//curl localhost:3000/tasks/2 or http :3000/tasks/2 true

router.post('/', (req, res) => { // 201 or 422
    const posted = (taskController.createTask(parseInt(req.params.listId), req.body))
    if (posted) {
      res.status(201)
      res.json(posted)
      res.end()
    } else {
      res.status(422)
      res.end()
    }
});// curl localhost:3000/tasks -d '{ "name": "New task" }' -H "Content-Type: application/json"  true
   // http POST :3000/tasks task="new task"

router.patch('/:taskId', (req, res) => { // 200 404
  const edit = taskController.updateTask(parseInt(req.params.listId), parseInt(req.params.taskId), req.body)
  if (edit) {
    res.status(200)
    res.json(edit)
    res.end()
  } else {
    res.status(404)
    res.end()
  }
});// curl -X PATCH localhost:3000/tasks/1 -d '{"name": "Novoe nazvanie"}' -H "Content-Type: application/json"
   // http PATCH :3000/tasks/1 done=true true

router.delete('/:taskId', (req, res) => { // http DELETE :3000/tasks/1 true
  const remove = taskController.removeTask(parseInt(req.params.listId),  parseInt(req.params.taskId))
  if (remove) {
    res.status(202)
    res.json(remove)
    res.end()
  } else {
    res.status(404)
    res.end()
  }
})

router.put('/:taskId', (req, res) => { // http PATCH :3000/tasks/1 name="" done=true
  const patch = taskController.replaceTask(parseInt(req.params.listId), parseInt(req.params.taskId), req.body)
  if (patch) {
    res.status(200)
    res.json(patch)
    res.end()
  } else {
    res.status(404)
    res.end()
  }
})


module.exports = router;
