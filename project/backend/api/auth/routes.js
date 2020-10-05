const app = require("express").Router();
const { body, validationResult } = require('express-validator');

const { loginUser,
    signupAfterValidation } = require('./controller');

app.post('/login', loginUser);

app.post('/signup', [
    body('email').isEmail(),
    body('password').isLength({ min: 5 })
], (req, res, next) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    } else {
        next()
    }
},
    signupAfterValidation);

module.exports = app;