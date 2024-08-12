const express = require('express')
const router = express.Router()
const connection = require('../config/database')

const getHomePage = (req, res) => {
    connection.query(
        'SELECT * FROM Users',
        function(err, results, fields) {
            console.log("result",results) // results contains rows returned by server
            res.send(JSON.stringify(results))
        }
    )
}

const getNewPage = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = (req, res) => {
    res.send(req.body)
    //res.render()
}
module.exports = {
    getHomePage, getNewPage, postCreateUser
}