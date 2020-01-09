const bcrypt = require('bcryptjs')

const register = async () => {
    const db = req.app.get('db')
    const {username, password, is_Admin} = req.body

    const foundUser = await db.checkForUsername(username)

    if(foundUser[0]){
        res.status(409).json('Username taken')
    }else{
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        const newUser = db.registerUser(username, hash, is_Admin)
    }
}
// const login = () => {

// }
// const logout = () => {

// }
// const getUser = () => {

// }

module.exports = {
    register,
    // login,
    // logout,
    // getUser
}