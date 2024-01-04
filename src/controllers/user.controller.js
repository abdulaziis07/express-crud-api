const {
  findAllUser,
  findUserById,
  createNewUser,
  updateOneUser,
  destroyOneUser
} = require('../repositories/user.repository')
// getUsers
const getUsers = async (req, res) => {
  try {
    const users = await findAllUser()
    res.status(200).json({
      message: 'Success to GET all user',
      statusCode: 200,
      data: users
    })
  } catch (err) {
    res.status(400).json({ statusCode: 400, message: err.message })
  }
}
//getUserById
const getUserById = async (req, res) => {
  try {
    const users = await findUserById(req.params.id)
    res.status(200).json({
      message: 'Success to GET userById',
      statusCode: 200,
      data: users
    })
  } catch (err) {
    res.status(404).json({ statusCode: 404, message: err.message })
  }
}
//postUser / createUser
const postUser = async (req, res) => {
  try {
    const users = await createNewUser(req.body)
    res
      .status(201)
      .json({ message: 'Success to CREATE user', statusCode: 201, data: users })
  } catch (err) {
    res.status(401).json({ statusCode: 401, message: err.message })
  }
}
//patchUser / editUser
const patchUser = async (req, res) => {
  try {
    const users = await updateOneUser(req.body, req.params.id)
    res
      .status(200)
      .json({ statusCode: 200, message: 'Success to UPDATE user', data: users })
  } catch (err) {
    res.status(400).json({ status: 400, message: err.message })
  }
}
//deleteUser
const deleteUser = async (req, res) => {
  try {
    const users = await destroyOneUser(req.params.id)
    res.status(200).json({ statusCode: 200, message: 'Success to DELETE user' })
  } catch (err) {
    res.status(400).json({ statusCode: 400, message: err.message })
  }
}

module.exports = {
  getUsers,
  getUserById,
  postUser,
  patchUser,
  deleteUser
}
