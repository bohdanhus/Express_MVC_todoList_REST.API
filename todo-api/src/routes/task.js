const express = require('express')  
const router = express.Router({
    mergeParams: true
})
const TaskController = require('../controller/TaskController.js')
// const getIdList = require('./helperRoutes');

router.get('/', function (req, res) {
    res.status(200);
    res.json(TaskController.getAllTasks())
})
// curl localhost:3000/tasks or http :3000/tasks true

router.get('/:id', function (req, res) {
    res.status(200);
    res.json(TaskController.getTask(req))
    res.end()
})
//curl localhost:3000/tasks/2 or http :3000/tasks/2 true

router.post('/', (req, res) => {
    res.status(200);
    res.json(TaskController.createTask(req))
    res.end()
});
// curl localhost:3000/tasks -d '{ "name": "New task" }' -H "Content-Type: application/json"  true
// http POST :3000/tasks task="new task"

router.patch('/:id', (req, res) => {
    res.status(200);
    res.json(TaskController.editTask(req, res))
    res.end()
});
// curl -X PATCH localhost:3000/tasks/1 -d '{"name": "Novoe nazvanie"}' -H "Content-Type: application/json"
// http PATCH :3000/tasks/1 done=true true

router.delete('/:id', (req, res) => {
    const delivery = TaskController.removeTask(req, res)
    if (delivery === true) {
        res.status(204);
        res.end()
    } else {
        res.status(404);
        res.end()
   }
})
// http DELETE :3000/tasks/1 true


router.put('/:id', (req, res) => {
    res.status(201);
    res.end(TaskController.changeTask(req, res))

})
// http PATCH :3000/tasks/1 name="" done=true



module.exports = router;

