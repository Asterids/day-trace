const User = require('./user')
const Action = require('./action')
const UserEntry = require('./userEntry')

Action.belongsToMany(User, {through: {model: UserEntry, unique: false}})
User.belongsToMany(Action, {through: {model: UserEntry, unique: false}})

module.exports = {
  User,
  Action,
  UserEntry
}
