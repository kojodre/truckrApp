// Add user methods
/**
 * user method to get user 
 * @param {*} req 
 * @param {*} res 
 */
const validUser = (req, res) => {
    res.status(200).send({ message: 'User controller method called' });
}

module.exports = {
    validUser 
};