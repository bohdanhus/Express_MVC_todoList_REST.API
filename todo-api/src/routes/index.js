const router = require('express').Router()
const routes = require('./routes')


router.use("/tasks", routes)

module.exports = router