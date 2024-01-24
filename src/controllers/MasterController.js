const express = require('express')
const router = express.Router()

const getHomePage = (req, res) => {
    res.send('Hello World yeah!')
}

const getNewPage = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomePage, getNewPage
}