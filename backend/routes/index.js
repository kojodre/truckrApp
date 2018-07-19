const authRoute = require('./authRoute');
const userRoute = require('./userRoute');

const routes = (router) => {
    authRoute(router);
    userRoute(router);
};

module.exports = routes;
