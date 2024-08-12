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
    let email = req.body.email ;
    let name = req.body.name ;
    let message = req.body.message ;
    
    connection.query(
        'INSERT INTO Users (email, name, city) VALUES (?, ?, ?)',
        [email, name, message],
        function(err, results, fields) {
            if (err) {
                console.log(err)
            }
            res.send('User has been added to the database')
        }
    )
}
module.exports = {
    getHomePage, getNewPage, postCreateUser
}