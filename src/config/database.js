const { Sequelize } = require('sequelize')
require('dotenv').config()

const db = new Sequelize('express_layered_crud', 'root', '', {
  host: process.env.DATABASE_HOST,
  dialect: process.env.DATABASE_DIALECT
})

module.exports = db
