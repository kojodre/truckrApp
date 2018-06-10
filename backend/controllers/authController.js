// Add auth methods
/**
 * signIn method for user signin
 * @param {*} req 
 * @param {*} res 
 */
const signIn = (req, res) => {
    res.status(200).send({message: 'Signin controller method called'});
}

/**
 * signUp method for user signup
 * @param {*} req 
 * @param {*} res 
 */
const signUp = (req, res) => {
    res.status(200).send({ message: 'Signup controller method called' });
}

module.exports = {
    signIn,
    signUp
};