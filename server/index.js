//imports
require('dotenv').config()
const express = require('express')
const app = express()
const massive = require('massive')
const session = require('express-session')

//controllers
const {register, login} = require('./controllers/userController');

//dotenv
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

//middleware
app.use(express.json())

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000*60*60*24*7
    }
}))

//massive
massive(CONNECTION_STRING)
.then((db) => {
    app.set('db', db);
    console.log('Database Connected :$')
})

//endpoints
//auth
app.post('/auth/register', register)
app.post('/auth/login', login)

//listen
app.listen(SERVER_PORT, () => console.log(`Server listening on ${SERVER_PORT}`))