import express from 'express'

const router = express.Router()


import tasks from './tasks.js'
import lists from './lists.js'


router.use("/lists", lists)
router.use("/tasks", tasks)

export default router