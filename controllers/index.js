const User = require('../models/user');

//will be exported to be available in index routes
module.exports = {
    postRegister(req, res, next) {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            image: req.body.image
        });
        User.register(newUser, req.body.password, (err) => {
            //error handling
            if (err) {
                console.log('error while user register!', err);
                return next(err);
            }

            console.log('user registered!');

            //redirect to home page
            res.redirect('/');
        });
    }
}