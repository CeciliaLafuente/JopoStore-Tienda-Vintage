const User = require('../src/models/users')

function cookieMiddleware(req, res, next) {
    res.locals.isLogged = false;


    let emailInCookie = req.cookies.userEmail;
    let userFromCookie = User.findByField('email', emailInCookie)

    if (userFromCookie) {
        req.session.userLogged = userFromCookie;
    }

    if (req.session && req.session.userLogged) {
        res.locals.isLogged = true;
        res.locals.isLogged = req.session.userLogged;
    }

    next();
}

module.exports = cookieMiddleware;