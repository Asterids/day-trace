const router = require('express').Router()

router.use('/users', require('./users'))
router.use('/actions', require('./actions'))
router.use('/userEntries', require('./userEntries'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

module.exports = router;
