const { checkResFromServer } = require('./helper')
const listController = require('../controller/ListController')
const task = require('./tasks')


const router = require('express')
// localhost: 3000 / lists /: listId / tasks /: taskId
// localhost: 3000 / lists ? listId = 1
  .Router({ mergeParams: true })
 


router.get('/', function (req, res) { // curl localhost:3000/lists curl 
  let lists = listController.getAllLists(req)  
  checkResFromServer(lists, res, 200, 400);
}) 
router.get('/:listId', function (req, res) { // curl localhost:3000/lists/1 curl localhost:3000/lists/1/tasks/1
  const id = parseInt(req.params.listId);
  const list = listController.getList(id)
  checkResFromServer(list, res, 200, 400);

})

router.post('/', function (req, res) { // http POST :3000/lists  name="new list123"
  const data = req.body
  const create = listController.createList(data)
  checkResFromServer(create, res, 201, 422);
})
router.patch('/:listId', function (req, res) { // http PATCH :3000/lists/2 name="new name"
  const id = parseInt(req.params.listId)
  const data = req.body
  const edit = listController.editList(id, data)
  checkResFromServer(edit, res, 200, 404);
}) 

router.delete('/:listId', function (req, res) { // http DELETE :3000/lists/2
  const id = parseInt(req.params.listId)  
  const remove = listController.deleteList(id)
  checkResFromServer(remove, res, 202, 404);
})

router.use('/:listId/tasks', task)

module.exports = router


