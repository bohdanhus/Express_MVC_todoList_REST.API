const router = require('express').Router()
const controller = require('../controller/controller.js')

// getAllTasks
router.get('/', function (req, res) {
    res.json(controller.getAllTasks())
})
// curl localhost:3000/tasks
// http :3000/tasks


//createTask
router.post('/', (req, res) => {
    res.json(controller.createTask(req))
});
// curl localhost:3000/tasks -d '{ "task": "New task" }' -H "Content-Type: application/json" 
// http POST :3000/tasks task="new task"


// editTask
router.patch('/:id', (req, res) => {
    res.json(controller.editTask(req, res))
});
// curl -X PATCH localhost:3000/tasks/1 -d '{"task": "New name"}' -H "Content-Type: application/json"
// http PATCH :3000/tasks/1 done=true


// removeTask
router.delete('/:id', (req, res) => {
    res.end(controller.removeTask(req, res))
})
// http DELETE :3000/tasks/1 


// changeTask
router.put('/:id', (req, res) => {
    res.end(controller.changeTask(req, res))
})
// http PATCH :3000/tasks/1 task="" done=true


module.exports = router;








// router.post('/:say', function (req, res) {
//     let say = req.params.say
//     let { first, last } = req.body
//     let message = `${say} ${first} ${last}!`
//     res.json({ message });
// })
