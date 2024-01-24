const express = require('express')
const app = express()
const path = require('path')

const require_config = (app) => {
    app.set('views', path.join('./src', 'views'))
    app.set('view engine', 'ejs')
    app.use(express.static(path.join('./src', 'public')))
}

module.exports = require_config