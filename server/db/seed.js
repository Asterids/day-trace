const db = require('./db');

const {
  User,
  Action,
  UserEntry
} = require('./models')

const users = [
  {
    username: 'ruth',
    email: 'ru@ru.com',
    password: 'string'
  }
]

const actions = [
  {
    id: 1,
    description: 'Had caffeine'
  },
  {
    id: 2,
    description: 'Had alcohol'
  },
  {
    id: 3,
    description: 'Had headache'
  },
  {
    id: 4,
    description: 'Practiced French'
  },
  {
    id: 5,
    description: 'Did a good deed'
  },
  {
    id: 6,
    description: 'Went running'
  },
  {
    id: 7,
    description: 'Did yoga'
  },
  {
    id: 8,
    description: 'Ate breakfast'
  },
  {
    id: 9,
    description: 'Read a book'
  },
  {
    id: 10,
    description: 'Wrote a letter'
  },
  {
    id: 11,
    description: 'Practiced piano'
  },
  {
    id: 12,
    description: 'Practiced guitar'
  }
]

const userentries = [
  {
    userId: 1,
    actionId: 3,
    createdAt: new Date(2018, 2, 6)
  }
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
