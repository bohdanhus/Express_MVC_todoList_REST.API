const router = require('express').Router()
const routes = require('./routes')


router.use("/task", task)
router.use("/list", list)


module.exports = router