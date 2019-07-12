const router = require('express').Router()
const documentation = require('./documentation')
const publications = require('./publications')

router.use('/', documentation)
router.use('/api/publications', publications)

module.exports = router