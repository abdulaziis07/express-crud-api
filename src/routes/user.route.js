const express = require('express')
const {
  getUsers,
  getUserById,
  postUser,
  patchUser,
  deleteUser
} = require('../controllers/user.controller')

const router = express.Router()
//user routes
router.get('/users', getUsers)
router.get('/user/:id', getUserById)
router.post('/users', postUser)
router.patch('/user/:id', patchUser)
router.delete('/user/:id', deleteUser)

module.exports = router
