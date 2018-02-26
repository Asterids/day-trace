const app = require('./server');
const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`)
})
