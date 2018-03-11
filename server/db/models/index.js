const User = require('./user')
const Action = require('./action')
const UserEntry = require('./userEntry')
const UserAction = require('./userAction')

Action.belongsToMany(User, {through: UserAction})
User.belongsToMany(Action, {through: UserAction})

UserEntry.belongsTo(User)
User.hasMany(UserEntry)

module.exports = {
  User,
  Action,
  UserEntry,
  UserAction
};
