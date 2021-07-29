const router = require('express').Router()

const logRequest = require('./routes')
router.use(express.json())
      .use(logRequest)

module.exports = router