const db = require('./db');

const {
  User,
  Action,
  UserEntry
} = require('./models')

const users = [
  { username: 'guest', email: 'guest@daytrace.com', password: 'password' }
]

const actions = [
  { id: 1, description: 'Had caffeine' },
  { id: 2, description: 'Had alcohol' },
  { id: 3, description: 'Had headache' },
  { id: 4, description: 'Practiced French' },
  { id: 5, description: 'Did a good deed' },
  { id: 6, description: 'Went running' },
  { id: 7, description: 'Did yoga' },
  { id: 8, description: 'Ate breakfast' },
  { id: 9, description: 'Read a book' },
  { id: 10, description: 'Wrote a letter' },
  { id: 11, description: 'Practiced piano' },
  { id: 12, description: 'Practiced guitar' }
]

const userentries = [
  { userId: 1, actionId: 3, createdAt: new Date(2018, 2, 6) },
  { userId: 1, actionId: 3, createdAt: new Date(2018, 2, 5) },
  { userId: 1, actionId: 1, createdAt: new Date(2018, 2, 4) },
  { userId: 1, actionId: 2, createdAt: new Date(2018, 2, 4) },
  { userId: 1, actionId: 3, createdAt: new Date(2018, 2, 3) },
  { userId: 1, actionId: 1, createdAt: new Date(2018, 2, 1) },
  { userId: 1, actionId: 3, createdAt: new Date(2018, 2, 1) },
  { userId: 1, actionId: 1, createdAt: new Date(2018, 1, 28) },
  { userId: 1, actionId: 9, createdAt: new Date(2018, 1, 28) },
  { userId: 1, actionId: 1, createdAt: new Date(2018, 1, 27) },
  { userId: 1, actionId: 7, createdAt: new Date(2018, 1, 27) },
  { userId: 1, actionId: 2, createdAt: new Date(2018, 1, 27) },
  { userId: 1, actionId: 4, createdAt: new Date(2018, 1, 26) },
  { userId: 1, actionId: 9, createdAt: new Date(2018, 1, 25) },
  { userId: 1, actionId: 1, createdAt: new Date(2018, 1, 25) },
  { userId: 1, actionId: 8, createdAt: new Date(2018, 1, 25) },
  { userId: 1, actionId: 7, createdAt: new Date(2018, 1, 25) },
  { userId: 1, actionId: 3, createdAt: new Date(2018, 1, 24) },
  { userId: 1, actionId: 1, createdAt: new Date(2018, 1, 23) },
  { userId: 1, actionId: 2, createdAt: new Date(2018, 1, 23) },
  { userId: 1, actionId: 4, createdAt: new Date(2018, 1, 22) },
  { userId: 1, actionId: 9, createdAt: new Date(2018, 1, 22) },
  { userId: 1, actionId: 7, createdAt: new Date(2018, 1, 21) },
  { userId: 1, actionId: 1, createdAt: new Date(2018, 1, 20) },
  { userId: 1, actionId: 2, createdAt: new Date(2018, 1, 20) },
  { userId: 1, actionId: 8, createdAt: new Date(2018, 1, 19) },
  { userId: 1, actionId: 7, createdAt: new Date(2018, 1, 19) },
  { userId: 1, actionId: 9, createdAt: new Date(2018, 1, 19) },
  { userId: 1, actionId: 8, createdAt: new Date(2018, 1, 18) },
  { userId: 1, actionId: 2, createdAt: new Date(2018, 1, 18) },
  { userId: 1, actionId: 1, createdAt: new Date(2018, 1, 17) },
  { userId: 1, actionId: 4, createdAt: new Date(2018, 1, 17) },
  { userId: 1, actionId: 8, createdAt: new Date(2018, 1, 17) },
  { userId: 1, actionId: 7, createdAt: new Date(2018, 1, 17) },
  { userId: 1, actionId: 8, createdAt: new Date(2018, 1, 16) },
  { userId: 1, actionId: 1, createdAt: new Date(2018, 1, 16) },
  { userId: 1, actionId: 2, createdAt: new Date(2018, 1, 15) },
  { userId: 1, actionId: 3, createdAt: new Date(2018, 1, 14) },
  { userId: 1, actionId: 7, createdAt: new Date(2018, 1, 14) },
  { userId: 1, actionId: 8, createdAt: new Date(2018, 1, 13) },
  { userId: 1, actionId: 1, createdAt: new Date(2018, 1, 13) },
  { userId: 1, actionId: 9, createdAt: new Date(2018, 1, 12) },
  { userId: 1, actionId: 4, createdAt: new Date(2018, 1, 12) },
  { userId: 1, actionId: 7, createdAt: new Date(2018, 1, 12) },
  { userId: 1, actionId: 1, createdAt: new Date(2018, 1, 10) },
  { userId: 1, actionId: 3, createdAt: new Date(2018, 1, 10) },
  { userId: 1, actionId: 2, createdAt: new Date(2018, 1, 9) },
  { userId: 1, actionId: 1, createdAt: new Date(2018, 1, 8) },
  { userId: 1, actionId: 1, createdAt: new Date(2018, 1, 7) },
  { userId: 1, actionId: 7, createdAt: new Date(2018, 1, 7) },
  { userId: 1, actionId: 8, createdAt: new Date(2018, 1, 7) },
  { userId: 1, actionId: 4, createdAt: new Date(2018, 1, 6) },
  { userId: 1, actionId: 8, createdAt: new Date(2018, 1, 6) },
  { userId: 1, actionId: 2, createdAt: new Date(2018, 1, 5) },
  { userId: 1, actionId: 1, createdAt: new Date(2018, 1, 4) },
  { userId: 1, actionId: 9, createdAt: new Date(2018, 1, 4) },
  { userId: 1, actionId: 7, createdAt: new Date(2018, 1, 3) },
  { userId: 1, actionId: 1, createdAt: new Date(2018, 1, 2) },
  { userId: 1, actionId: 2, createdAt: new Date(2018, 1, 1) },
  { userId: 1, actionId: 3, createdAt: new Date(2018, 1, 1) },
  { userId: 1, actionId: 1, createdAt: new Date(2018, 0, 31) },
  { userId: 1, actionId: 8, createdAt: new Date(2018, 0, 31) },
  { userId: 1, actionId: 1, createdAt: new Date(2018, 0, 30) },
  { userId: 1, actionId: 1, createdAt: new Date(2018, 0, 29) },
  { userId: 1, actionId: 3, createdAt: new Date(2018, 0, 29) },
  { userId: 1, actionId: 1, createdAt: new Date(2018, 0, 28) },
  { userId: 1, actionId: 8, createdAt: new Date(2018, 0, 28) },
  { userId: 1, actionId: 4, createdAt: new Date(2018, 0, 28) },
  { userId: 1, actionId: 2, createdAt: new Date(2018, 0, 28) },
  { userId: 1, actionId: 9, createdAt: new Date(2018, 0, 27) },
  { userId: 1, actionId: 8, createdAt: new Date(2018, 0, 26) },
  { userId: 1, actionId: 4, createdAt: new Date(2018, 0, 26) },
  { userId: 1, actionId: 7, createdAt: new Date(2018, 0, 26) },
  { userId: 1, actionId: 1, createdAt: new Date(2018, 0, 25) },
  { userId: 1, actionId: 2, createdAt: new Date(2018, 0, 25) },
  { userId: 1, actionId: 8, createdAt: new Date(2018, 0, 24) },
  { userId: 1, actionId: 7, createdAt: new Date(2018, 0, 23) },
  { userId: 1, actionId: 9, createdAt: new Date(2018, 0, 23) },
  { userId: 1, actionId: 1, createdAt: new Date(2018, 0, 22) },
  { userId: 1, actionId: 2, createdAt: new Date(2018, 0, 21) },
  { userId: 1, actionId: 1, createdAt: new Date(2018, 0, 20) },
  { userId: 1, actionId: 9, createdAt: new Date(2018, 0, 20) },
  { userId: 1, actionId: 8, createdAt: new Date(2018, 0, 19) },
  { userId: 1, actionId: 2, createdAt: new Date(2018, 0, 19) },
  { userId: 1, actionId: 7, createdAt: new Date(2018, 0, 17) },
  { userId: 1, actionId: 1, createdAt: new Date(2018, 0, 16) },
  { userId: 1, actionId: 1, createdAt: new Date(2018, 0, 15) },
  { userId: 1, actionId: 2, createdAt: new Date(2018, 0, 15) },
  { userId: 1, actionId: 8, createdAt: new Date(2018, 0, 15) },
  { userId: 1, actionId: 4, createdAt: new Date(2018, 0, 15) },
  { userId: 1, actionId: 7, createdAt: new Date(2018, 0, 14) },
  { userId: 1, actionId: 1, createdAt: new Date(2018, 0, 14) },
  { userId: 1, actionId: 9, createdAt: new Date(2018, 0, 13) },
  { userId: 1, actionId: 1, createdAt: new Date(2018, 0, 12) },
  { userId: 1, actionId: 2, createdAt: new Date(2018, 0, 12) },
  { userId: 1, actionId: 1, createdAt: new Date(2018, 0, 11) },
  { userId: 1, actionId: 1, createdAt: new Date(2018, 0, 10) },
  { userId: 1, actionId: 2, createdAt: new Date(2018, 0, 10) },
  { userId: 1, actionId: 9, createdAt: new Date(2018, 0, 10) },
  { userId: 1, actionId: 9, createdAt: new Date(2018, 0, 9) },
  { userId: 1, actionId: 8, createdAt: new Date(2018, 0, 9) },
  { userId: 1, actionId: 1, createdAt: new Date(2018, 0, 8) },
  { userId: 1, actionId: 8, createdAt: new Date(2018, 0, 7) },
  { userId: 1, actionId: 2, createdAt: new Date(2018, 0, 7) },
  { userId: 1, actionId: 9, createdAt: new Date(2018, 0, 7) },
  { userId: 1, actionId: 4, createdAt: new Date(2018, 0, 6) },
  { userId: 1, actionId: 1, createdAt: new Date(2018, 0, 6) },
  { userId: 1, actionId: 2, createdAt: new Date(2018, 0, 5) },
  { userId: 1, actionId: 3, createdAt: new Date(2018, 0, 3) },
  { userId: 1, actionId: 1, createdAt: new Date(2018, 0, 2) },
  { userId: 1, actionId: 9, createdAt: new Date(2018, 0, 2) },
  { userId: 1, actionId: 8, createdAt: new Date(2018, 0, 1) }
];


async function seed () {
  await db.sync({force: true})

  const creatingUsers = await Promise.all(users.map(user => User.create(user)))
  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)

  const creatingActions = await Promise.all(actions.map(action => Action.create(action)))
  console.log(`seeded ${actions.length} actions`)
  console.log(`seeded successfully`)

  const creatingEntries = await Promise.all(userentries.map(userentry => UserEntry.create(userentry)))
  console.log(`seeded ${userentries.length} user entries`)
  console.log(`seeded successfully`)
}

seed()
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
  })
  .then(() => {
    console.log('closing db connection')
    db.close()
    console.log('db connection closed')
  })
