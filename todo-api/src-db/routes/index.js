const express = require('express')

const task = require('./task')
const list = require('./list')

const router = express.Router()

router.use("/tasks", task)
router.use("/lists", list)


module.exports = router