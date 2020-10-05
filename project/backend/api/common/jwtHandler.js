const jwt = require('jsonwebtoken');

const generateToken = (userName) => {
    let token = jwt.sign({ username: userName },
        'thegivenpayloadinto',
        { expiresIn: '24h' });

    return token;

}

const authenticateJwt = (req, res, next) => {
    // Gather the jwt access token from the request header
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401) // if there isn't any token

    try {
        let user = jwt.verify(token, 'thegivenpayloadinto');
        req.body.user = user
        next();
    } catch (err) {
        return res.sendStatus(402)
    }

}

module.exports = {
    generateToken,
    authenticateJwt
}