const authRoute = require('./authRoute');

const routes = (router) => {
    authRoute(router);
};

module.exports = routes;
