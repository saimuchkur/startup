const express = require('express')
const expresslayouts = require('express-ejs-layouts')
const mongoose =  require('mongoose')
const flash = require('connect-flash')
const session = require('express-session')
const passport =  require('passport')
const path = require('path')
// const routes = require('./routes')

const app = express()

// // Set the default views directory to html folder
// app.set('views', path.join(__dirname, 'views'))

//EJS
app.use(expresslayouts)
app.set('view engine', 'ejs')


//routes
app.use('/', require('./routes/index'))


const PORT = process.env.PORT || 8000


app.listen(PORT,console.log(`server running on http://localhost:${PORT}`))