const router = require('express').Router()
const { User } = require('../db/models')

router.post('/login', (req, res, next) => {
  console.log("I am inside login...")
  console.log("REQ.SESSION", req.session)
  User.findOne({where: {username: req.body.username}})
    .then(user => {
      if (!user) {
        res.status(400).send('User not found')
      } else if (!user.correctPassword(req.body.password)) {
        res.status(401).send('Invalid password')
      } else {
        req.login(user, err => (err ? next(err) : res.json(user)))
      }
    })
    .catch(next)
})

router.post('/signup', (req, res, next) => {
  User.create(req.body)
    .then(user => {
      req.login(user, err => (err ? next(err) : res.json(user)))
    })
    .catch(err => {
      if (err.name === 'SequelizeUniqueConstraintError') {
        res.status(401).send('User already exists')
      } else {
        next(err)
      }
    })
})

router.post('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

router.get('/me', (req, res) => {
  res.json(req.user)
})

module.exports = router;
