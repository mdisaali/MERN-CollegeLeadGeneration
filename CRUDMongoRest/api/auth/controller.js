const {
    login,
    signup
} = require('./service');

const signupAfterValidation = async (req, res) => {
    console.log(req.body);
    try {
        const newUser = await signup(req.body);
        res.send(newUser);
    }
    catch (err) {
        res.status(400).send({ message: err.message })
    }
}

const loginUser = async (req, res) => {
    console.log(req.body,"reqbody");
    const { username, password } = req.body;
    try {
        const loggedInUser = await login(username, password);
        res.send(loggedInUser);
    }
    catch (err) {
        res.status(400).send({ message: err })
    }
}

module.exports = {
    signupAfterValidation,
    loginUser
}

