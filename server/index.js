const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session')
const passport = require('passport')

const PORT = process.env.PORT || 3030
if (process.env.NODE_ENV !== 'production') require('../secrets')

const db = require('./db')
db.sync()

const app = express();

function isUser(req,res,next) {
  if (req.user) {
    next()
  } else {
    const err = new Error('You are not currently logged in as a user.')
    err.status = 403
    next(err)
  }
}

passport.serializeUser((user, done) => done(null, user.id))
passport.deserializeUser((id, done) =>
  db.models.user.findById(id, {include: [{all: true}]})
    .then(user => done(null, user))
    .catch(done))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
  secret: process.env.SESSION_SECRET || 'A mighty session secret',
  resave: false,
  saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(express.static(path.join(__dirname, '../public')))

app.use('/auth', require('./auth'))
app.use('/api', require('./api'))

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.get('*', function (req, res, next) {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

app.use(function(err, req, res, next) {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
});

module.exports = app;
