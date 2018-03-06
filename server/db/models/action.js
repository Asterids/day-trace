const Sequelize = require('sequelize')
const db = require('../db')

const Action = db.define('action', {
  description: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  }
})

module.exports = Action
