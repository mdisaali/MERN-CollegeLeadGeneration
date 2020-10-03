const app = require("express").Router();

const { loginUser,
    signupAfterValidation } = require('./controller');

app.post('/login', loginUser);

app.post('/signup', signupAfterValidation);

module.exports = app;