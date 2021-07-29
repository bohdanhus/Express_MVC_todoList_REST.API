const Task = require('../controller')
const router = require('express').Router()

router.get('/', function (req, res) {
    res.json(controller.getAllTask())
})

module.exports = router








// router.post('/:say', function (req, res) {
//     let say = req.params.say
//     let { first, last } = req.body
//     let message = `${say} ${first} ${last}!`
//     res.json({ message });
// })
