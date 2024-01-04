const userModel = require('../models/user.model')
// user repository
const findAllUser = async () => {
  const users = await userModel.findAll()
  return users
}

const findUserById = async (id) => {
  const users = await userModel.findOne({
    where: {
      id: id
    }
  })
  return users
}

const createNewUser = async (body) => {
  const users = await userModel.create(body)
  return users
}

const updateOneUser = async (body, id) => {
  const users = await userModel.update(body, {
    where: {
      id: id
    }
  })
  return users
}

const destroyOneUser = async (id) => {
  const users = await userModel.destroy({
    where: {
      id: id
    }
  })
  return users
}

module.exports = {
  findAllUser,
  findUserById,
  createNewUser,
  updateOneUser,
  destroyOneUser
}
