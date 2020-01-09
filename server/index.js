//imports
require('dotenv').config()
const express = require('express')
const app = express()
const massive = require('massive')
const session = require('express-session')

//controllers
const {register, login, logout, getUser} = require('./controllers/userController');
const {add, edit, deleteProduct} = require('./controllers/adminController')
const {getAllProducts} = require('./controllers/productsController')

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
app.post('/auth/logout', logout)
app.get('/auth/user', getUser)

//admin
app.post('/admin/add', add)
app.put('/admin/edit/:product_id', edit)
app.delete('/admin/delete/:product_id', deleteProduct)

//products
app.get('/api/products', getAllProducts)

//listen
app.listen(SERVER_PORT, () => console.log(`Server listening on ${SERVER_PORT}`))