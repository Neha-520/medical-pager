const { connect } = require('getstream');
const bcrypt = require('bcrypt')
const StreamChat = require('stream-chat');
const crypto = require('crypto');

const signup = (req, res) => {
    try {
        const { fullName, userName, password, phoneNumber } = req.body;

        const userId = crypto.randomBytes(16).toString('hex');

        const serverClient = connect(api_key, api_secret, app_id);

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err })
    }
}

const login = (req, res) => {
    try {

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err })
    }
}


module.exports = { signup, login }