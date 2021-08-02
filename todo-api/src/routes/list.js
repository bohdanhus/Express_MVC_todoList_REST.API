const router = require('express').Router({mergeParams: true})
const ListController = require('../controller/ListController.js')



router.get('/', function (req, res) {
    res.status(200);
    res.json(ListController.getAllLists(req))
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

module.exports = router