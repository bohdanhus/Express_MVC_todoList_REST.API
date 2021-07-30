const router = require('express').Router()
const controller = require('../controller/controller.js')

router.get('/', function (req, res) {
    res.json(controller.getAllTasks())
})
// getAllTasks
// curl localhost:3000/tasks or http :3000/tasks


router.get('/:id', function (req, res) {
    res.json(controller.getTask(req))
})
// getTask
//curl localhost:3000/tasks/2 or http :3000/tasks/2


router.post('/', (req, res) => {
    res.json(controller.createTask(req))
});
//createTask
// curl localhost:3000/tasks -d '{ "name": "New task" }' -H "Content-Type: application/json" 
// http POST :3000/tasks task="new task"


router.patch('/:id', (req, res) => {
    res.json(controller.editTask(req, res))
});
// editTask
// curl -X PATCH localhost:3000/tasks/1 -d '{"name": "New name"}' -H "Content-Type: application/json"
// http PATCH :3000/tasks/1 done=true


router.delete('/:id', (req, res) => {
    controller.removeTask(req, res)
    res.end()
})
// removeTask
// http DELETE :3000/tasks/1 


router.put('/:id', (req, res) => {
    res.end(controller.changeTask(req, res))
})
// changeTask
// http PATCH :3000/tasks/1 name="" done=true
module.exports = router;

// const logRequest = (req, next) => {
//     let {method, url} = req;
//     console.log(`[${new Date().toISOString()}] ${method} ${url}`);
//     next();
// }






// router.post('/:say', function (req, res) {
//     let say = req.params.say
//     let { first, last } = req.body
//     let message = `${say} ${first} ${last}!`
//     res.json({ message });
// })
