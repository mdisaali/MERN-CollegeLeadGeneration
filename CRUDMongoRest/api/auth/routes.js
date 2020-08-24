const app = require("express").Router();

const bcrypt = require('bcrypt')
const saltRounds = 10;

const { loginUser,
    signupAfterValidation } = require('./controller');

app.post('/login', loginUser);

app.post('/signup', signupAfterValidation);

module.exports = app;