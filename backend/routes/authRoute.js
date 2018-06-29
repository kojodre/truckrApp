const authController = require('../controllers/authController');

const authRoute = (router) => {
    // Signin Route
    router.route('/signin')
        .post(authController.signIn);

    // Signup  Route
    router.route('/signup')
        .post(authController.signUp);

}

module.exports = authRoute;