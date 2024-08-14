const express = require('express')
const router = express.Router()
const connection = require('../config/database')
const {getAllUsers, getUserById, updateUserById} = require('../services/CRUDService')

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


const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

const getListPage = async (req, res) => {
    let users = await getAllUsers()
    res.render('list.ejs', {listUsers : users})
}

const getUpdatePage = async (req, res) => { 
    const userID = req.params.id
    const user = await getUserById(userID)
    res.render('edit.ejs', {selectedUser : user}) // x <- y
}

const postCreateUser = async (req, res) => {
    let email = req.body.email ;
    let name = req.body.name ;
    let message = req.body.message ;
    
    const [result, fields] = await connection.query(
        'INSERT INTO Users (email, name, city) VALUES (?, ?, ?)',
        [email, name, message]
    )
    res.redirect('/list')
}

const postUpdateUser = async (req, res) => {
    let email = req.body.email ;
    let name = req.body.name ;
    let message = req.body.message ;
    let userID = req.body.id ;
    updateUserById(userID, email, name, message)

    // res.send('Data has been updated')
    res.redirect('/list')
}

const postDeleteUser = async (req, res) => {
    const userID = req.params.id
    const user = await getUserById(userID)
    res.render('delete.ejs', {deleteUser : user})
}

const handleDeleteUser = async (req, res) => {
    const userID = req.body.id
    const [result, fields] = await connection.query('DELETE FROM Users WHERE id = ?', [userID])
    res.redirect('/list')
}

module.exports = {
    getHomePage, getNewPage, postCreateUser, getCreatePage, getListPage, getUpdatePage, postUpdateUser, postDeleteUser, handleDeleteUser
}