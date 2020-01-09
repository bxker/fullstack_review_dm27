//imports
require('dotenv').config()
const express = require('express')
const app = express()

//controllers

//dotenv
const {SERVER_PORT} = process.env

//middleware
app.use(express.json())

//massive

//endpoints

//listen
app.listen(SERVER_PORT, () => console.log(`Server listening on ${SERVER_PORT}`))