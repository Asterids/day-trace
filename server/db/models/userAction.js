const Sequelize = require('sequelize');
const db = require('../db.js');

const UserAction = db.define('userAction', {});

module.exports = UserAction;
