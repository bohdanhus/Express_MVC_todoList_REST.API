const router = require('express').Router()
const TaskController = require('../controller/TaskController.js');
const ListController = require('../controller/ListController.js')

router.get('/', function (req, res) {
    res.status(200);
    res.json(controller.getAllTasks())
    res.end()
})
// curl localhost:3000/tasks or http :3000/tasks

router.get('/lists/:listId/tasks', function (req, res) {
    res.status(200);
    res.json(controller.getList(req))
    res.end()
})
router.get('/lists/:listId', function (req, res) {
    res.status(200);
    res.json(controller.getLists(req))
    res.end()
})

router.get('/lists', function (req, res) {
    res.status(200);
    res.json(controller.getAllLists(req))
    res.end()
})

router.get('/:id', function (req, res) {
    res.status(200);
    res.json(controller.getTask(req))
    res.end()
})
//curl localhost:3000/tasks/2 or http :3000/tasks/2

router.post('/', (req, res) => {
    res.status(200);
    res.json(controller.createTask(req))
    res.end()
});
// curl localhost:3000/tasks -d '{ "name": "New task" }' -H "Content-Type: application/json" 
// http POST :3000/tasks task="new task"

router.patch('/:id', (req, res) => {
    res.status(200);
    res.json(controller.editTask(req, res))
    res.end()
});
// curl -X PATCH localhost:3000/tasks/1 -d '{"name": "Novoe nazvanie"}' -H "Content-Type: application/json"
// http PATCH :3000/tasks/1 done=true

router.delete('/:id', (req, res) => {
    const delivery = controller.removeTask(req, res)
    if (delivery === true) {
        res.status(204);
        res.end()
    } else {
        res.status(404);
        res.end()
   }
})
// http DELETE :3000/tasks/1 


router.put('/:id', (req, res) => {
    res.status(201);
    res.end(controller.changeTask(req, res))

})
// http PATCH :3000/tasks/1 name="" done=true
module.exports = routes;

