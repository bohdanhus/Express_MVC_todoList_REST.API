const router = require('express').Router({ mergeParams: true })
const ListController = require('../controller/ListController.js')
const task = require('./task')


router.get('/', function (req, res) {
    res.status(200);
    res.json(ListController.getAllLists(req))
    res.end()
}) // curl localhost:3000/lists
router.get('/:listId', function (req, res) {
    const listId = parseInt(req.params.listId)
    res.status(200);
    res.json(ListController.getList(listId)
    res.end()
})// curl localhost:3000/lists/1

router.post('/', function (req, res) {
    res.status(200);
    res.json(ListController.createList(req))
    res.end()
}) // http POST :3000/lists

router.patch('/:listId', function (req, res) {
    res.status(200);
    res.json(ListController.editLists(req))
    res.end()
}) //http PATCH :3000/lists/2 name="new name"

router.delete('/:listId', function (req, res) {
    const delivery = ListController.removeList(req, res)
    if (delivery === true) {
        res.status(204);
        res.end()
    } else {
        res.status(404);
        res.end()
   }
}) //http DELETE :3000/lists/2

module.exports = router