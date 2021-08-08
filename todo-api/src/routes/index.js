const express = require('express')
const router = express.Router()


const tasks = require('./tasks')
const lists = require('./lists')


router.use("/lists", lists)
router.use("/tasks", tasks)

module.exports = router