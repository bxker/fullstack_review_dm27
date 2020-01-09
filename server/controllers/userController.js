const bcrypt = require('bcryptjs')

const register = async (req, res) => {
    const db = req.app.get('db')
    const {username, password, is_Admin} = req.body

    const foundUser = await db.checkForUsername(username)

    if(foundUser[0]){
        res.status(409).json('Username taken')
    }else{
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        const newUser = await db.registerUser(username, hash, is_Admin)

        console.log(newUser)

        req.session.user = {
            user_id: newUser[0].user_id,
            username: newUser[0].username,
            is_Admin: newUser[0].is_admin
        }
        res.status(200).json(req.session.user)
    }
}
const login = async (req, res) => {
    const db = req.app.get('db')
    const {username, password} = req.body

    const foundUser = await db.checkForUsername(username)

    if(!foundUser[0]){
        res.status(403).json('Please make an account')
    }else{
        const authUser = bcrypt.compareSync(password, foundUser[0].hash)

        if(!authUser){
            res.status(403).json('Username or Password Incorrect')
        }else{
            req.session.user = {
                user_id: foundUser[0].user_id,
                username: foundUser[0].username,
                is_Admin: foundUser[0].is_admin
            }
            res.status(200).json(req.session.user)
        }
    }
}
// const logout = () => {

// }
// const getUser = () => {

// }

module.exports = {
    register,
    login,
    // logout,
    // getUser
}