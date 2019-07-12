const router = require('express').Router()
const { documentations } = require('../controllers')

router.get('/', documentations.index)

module.exports = router