// Add user methods
/**
 * user method to get user 
 * @param {*} req 
 * @param {*} res 
 */
const validUser = (req, res) => {
    res.status(200).send({ message: 'User controller method called' });
}

/**
 * user method to create user 
 * @param {*} req 
 * @param {*} res 
 */

const createUser = (req, res) => {
    if(!req.body.firstname || !req.body.lastname || !req.body.username) {
        return res.status(400).send({message: 'Please enter firstname, lastname and username'});
    }
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const username = req.body.username;

    //@TODO: send details to database or firebase auth
    // Meanwhile return static message
    return res.status(201).send({message: 'User Created!', data: req.body});


}

module.exports = {
    validUser,
    createUser
};