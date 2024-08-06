require('dotenv').config()
const express = require('express') //common js
const path = require('path')
const view_configuration = require('./config/ViewConfigEngine')
const web_routers = require('./routes/web')
const app = express() //app
const port = process.env.PORT || 3001 //port
const hostname = process.env.HOST_NAME
const mysql = require('mysql2')

//template view config
view_configuration(app)

//route declare
app.use('/', web_routers)

//test connection
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port : process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

connection.query(
    'SELECT * FROM Users',
    function(err, results, fields) {
        console.log("result",results) // results contains rows returned by server
        //console.log("field",fields) // fields contains extra meta data about results, if available
    }
)
app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})