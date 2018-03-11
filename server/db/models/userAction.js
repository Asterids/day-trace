const Sequelize = require('sequelize')
const db = require('../db')

const UserAction = db.define('userAction', {})

module.exports = UserAction;
