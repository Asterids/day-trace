const User = require('./user')
const Action = require('./action')
const UserEntry = require('./userEntry')

Action.belongsToMany(User, {through: UserEntry})
User.belongsToMany(Action, {through: UserEntry})

module.exports = {
  User,
  Action,
  UserEntry
}
