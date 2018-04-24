const db = require('./server/db');
const app = require('./server');
const PORT = process.env.PORT || 3030;

db.sync()
  .then(() => {
    console.log('Database synced');
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`)
    })
})
