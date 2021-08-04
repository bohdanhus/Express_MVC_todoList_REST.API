const router = require('express').Router({ mergeParams: true })

const listController = require('../controller/ListController.js')
const task = require('./task')

// localhost:3000/lists/:listId/tasks/:taskId


router.get('/', function (req, res) { // curl localhost:3000/lists
  let showLists = listController.getAllLists(req)  
  if (showLists) {
    res.status(200);
    res.json(showLists)
    res.end()
  } else {
    res.status(404)
    res.end()
  }
}) 

router.get('/:listId', function (req, res) {//  localhost:3000/tasks?listId=1 
  const showList = listController.getList(parseInt(req.params.listId))
  if (showList) {
    res.status(201)
    res.json(showList)
    res.end()
  } else {
    res.status(404)
    res.end()
  }
})

router.post('/', function (req, res) {// http POST :3000/lists  name="new list123"
  posted = listController.createList(req.body)  
  if (posted) {
    res.status(201);
    res.json(posted)
    res.end()
  } else {
    res.status(422)
    res.end()
  }
}) 

router.patch('/:listId', function (req, res) { //http PATCH :3000/lists/2 name="new name"
  const edit = listController.editList(req)
  if (edit) {
    res.status(200)
    res.json(edit)
    res.end()
  } else {
    res.status(404)
    res.end()
  }
}) 

router.delete('/:listId', function (req, res) {//http DELETE :3000/lists/2
    const quiestion = listController.deleteList(req)
    checkres(quiestion, res)
}) 

router.use('/:listId/tasks', task)

module.exports = router


