const express = require('express')
const { getHomePage, getNewPage, postCreateUser, getCreatePage, getListPage, getUpdatePage, postUpdateUser, postDeleteUser, handleDeleteUser } = 
require('../controllers/MasterController')
const router = express.Router()

router.get('/', getHomePage)

router.get('/new', getNewPage)

router.get('/create', getCreatePage)

router.get('/list', getListPage)

router.get('/update/:id', getUpdatePage)

router.post('/create-user', postCreateUser)

router.post('/update-user', postUpdateUser)

router.post('/delete-user/:id', postDeleteUser)

router.post('/delete-user', handleDeleteUser)

module.exports = router