const userController = require('../controllers/userController');

const userRoute = (router) => {


// get user route
router.route('/user')
    .get(userController.validUser)

}

module.exports = userRoute;