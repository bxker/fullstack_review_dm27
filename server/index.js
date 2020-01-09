//imports
require('dotenv').config()
const express = require('express')
const app = express()
const massive = require('massive')

//controllers

//dotenv
const {SERVER_PORT, CONNECTION_STRING} = process.env

//middleware
app.use(express.json())

//massive
massive(CONNECTION_STRING)
.then((db) => {
    app.set('db', db);
    console.log('Database Connected :$')
})

//endpoints

//listen
app.listen(SERVER_PORT, () => console.log(`Server listening on ${SERVER_PORT}`))