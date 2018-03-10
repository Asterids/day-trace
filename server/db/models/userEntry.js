const Sequelize = require('sequelize')
const db = require('../db')

const UserEntry = db.define('userEntry', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  comments: Sequelize.TEXT
})

module.exports = UserEntry
