const User = require('../models/user');

//will be exported to be available in index routes
module.exports = {
    async postRegister(req, res, next) {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            image: req.body.image
        });

        await User.register(newUser, req.body.password);
        res.redirect('/');
    }
}