require('dotenv').config()
const express = require('express') //common js?
const path = require('path')
const view_configuration = require('./config/ViewConfigEngine')
const web_routers = require('./routes/web')
const app = express() //app
const port = process.env.PORT || 3001 //port
const hostname = process.env.HOST_NAME

//template view config
view_configuration(app)

//route declare
app.use('/', web_routers)

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})