const router = require('express').Router({ mergeParams: true })
const ListController = require('../controller/ListController.js')
const task = require('./task')
// localhost:3000/lists/:listId/tasks/:taskId
const checkAnswer = (answer, res) => {
  if (answer !== false) {
    res.json(answer)
  } else {
    res.status(400)
    res.end('List not found')
  }
}

router.get('/', function (req, res) {
    res.status(200);
    res.json(listController.getAllLists(req))
    res.end()
}) // curl localhost:3000/lists
router.post('/', function (req, res) {
    res.status(200);
    res.json(listController.createList(req))
    res.end()
}) // http POST :3000/lists


router.get('/:listId', function (req, res) {
    const answer = listController.getList(parseInt(req.params.listId))
    checkAnswer(answer, res)
})// curl localhost:3000/lists/1


router.patch('/:listId', function (req, res) {
    const answer = listController.editList(req)
    checkAnswer(answer, res)
    res.end()
}) //http PATCH :3000/lists/2 name="new name"

router.delete('/:listId', function (req, res) {
    const answer = listController.deleteList(req)
    checkAnswer(answer, res)
}) 
//http DELETE :3000/lists/2
router.use('/:listId/tasks', task)
module.exports = router


