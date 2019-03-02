const express = require('express')
const router = express.Router()

const usersController = require('../../controllers/v1/users')

router.get('/', usersController.index)
router.get('/:uid', usersController.show)
router.post('/', usersController.create)
router.patch('/:uid', usersController.update)
router.put('/:uid', usersController.update)

module.exports = router
