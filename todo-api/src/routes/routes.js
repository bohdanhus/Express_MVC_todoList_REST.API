const router = require('express').Router()
const controller = require('../controller/controller.js')

router.get('/', function (req, res) {
    res.sendStatus(200);
    res.json(controller.getAllTasks())
    res.end()
})
// curl localhost:3000/tasks or http :3000/tasks

router.get('/:id', function (req, res) {
    res.sendStatus(200);
    res.json(controller.getTask(req))
    res.end()
})
//curl localhost:3000/tasks/2 or http :3000/tasks/2

router.post('/', (req, res) => {
    res.sendStatus(200);
    res.json(controller.createTask(req))
    res.end()
});
// curl localhost:3000/tasks -d '{ "name": "New task" }' -H "Content-Type: application/json" 
// http POST :3000/tasks task="new task"

router.patch('/:id', (req, res) => {
    res.sendStatus(200);
    res.json(controller.editTask(req, res))
    res.end()
});
// curl -X PATCH localhost:3000/tasks/1 -d '{"name": "Novoe nazvanie"}' -H "Content-Type: application/json"
// http PATCH :3000/tasks/1 done=true

router.delete('/:id', (req, res) => {
    controller.removeTask(req, res)
    res.sendStatus(204);
    res.end()
})
// http DELETE :3000/tasks/1 


router.put('/:id', (req, res) => {
    res.sendStatus(201);
    res.end(controller.changeTask(req, res))

})
// http PATCH :3000/tasks/1 name="" done=true
module.exports = router;

