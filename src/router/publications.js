const router = require('express').Router()
const { publications } = require('../controllers')

router.get('/', publications.index)
router.post('/', publications.create)
router.get('/:id', publications.show)
router.delete('/:id', publications.destroy)
router.post('/:id/comments', publications.comment)
router.patch('/:id/likes', publications.like)

module.exports = router