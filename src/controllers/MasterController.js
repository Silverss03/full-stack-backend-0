const express = require('express')
const router = express.Router()
const connection = require('../config/database')

const getHomePage = async(req, res) => {
    try {
        const [results, fields] = await connection.query('SELECT * FROM Users')
        res.send(JSON.stringify(results))
    } catch (err) {
        console.error(err)
        res.status(500).send('Internal Server Error')
    }
}

const getNewPage = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = async (req, res) => {
    let email = req.body.email ;
    let name = req.body.name ;
    let message = req.body.message ;
    
    const [result, fields] = await connection.query(
        'INSERT INTO Users (email, name, city) VALUES (?, ?, ?)',
        [email, name, message]
    )
    res.send('Data has been inserted')
    // res.redirect('/new')
}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

const getListPage = (req, res) => {
    res.render('list.ejs')
}

module.exports = {
    getHomePage, getNewPage, postCreateUser, getCreatePage, getListPage
}