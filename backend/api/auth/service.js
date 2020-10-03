const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const {create} =require('../college/service')
const User = require('./model');
mongoose.model("user");

const login = async (username, password) => {
    try {
        const loggedInUser = await User.findOne({ username: username });
        if (!loggedInUser) {
            throw 'Username does not exist'
        }
        const match = await bcrypt.compare(password, loggedInUser.password);
        if (match) {
            const token = jwt.sign({username: username}, 'thegivenpayloadinto', {expiresIn:'24h'});
            loggedInUser.password = undefined;
            loggedInUser.token = token;
            return loggedInUser;
        } else {
            throw 'Invalid Password. Please Try Again.. ';
        }
    } catch (err) {
        throw err;
    }
}

const signup = async (user) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(user.password, salt);

        const userObj = new User({
            email: user.email,
            password: hashedPassword,
            phone: user.phone,
            username: user.username
        });

        const newUser = await userObj.save();
        newUser.password = undefined;
        return newUser;

    } catch (err) {
        throw err;
    }
}

module.exports = {
    login,
    signup
}