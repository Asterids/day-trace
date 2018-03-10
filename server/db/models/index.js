const User = require('./user')
const Action = require('./action')
const UserEntry = require('./userEntry')

UserEntry.belongsTo(User)
User.hasMany(UserEntry)

module.exports = {
  User,
  Action,
  UserEntry
}
